import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {dehydrate, QueryClient} from 'react-query';

import {API_ENDPOINTS} from '@/configs/endpoint.config';
import {ICategoriesResponse, IPostsResponse} from '@/types';

import http from '../http';

type ParsedQueryParams = {
  slug: string;
};

type PageProps = {
  posts?: IPostsResponse;
  categories: ICategoriesResponse;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({locale, params}) => {
  const slug = params!.slug;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.POST, slug, {page: 1, pageSize: 30}],
    () =>
      http.posts.all({
        locale,
        populate: {
          cover: '*'
        },
        sort: ['updatedAt:desc'],
        pagination: {
          page: 1,
          pageSize: 30
        },
        filters: {
          categories: {
            slug: {
              $eq: slug
            }
          }
        }
      })
  );

  await queryClient.prefetchQuery([API_ENDPOINTS.CATEGORY, slug], () =>
    http.categories.all({
      locale,
      sort: ['updatedAt:desc'],
      filters: {
        slug: {
          $eq: slug
        }
      }
    })
  );

  try {
    const categories = await http.categories.all({
      locale,
      sort: ['updatedAt:desc'],
      filters: {
        slug: {
          $eq: slug
        }
      }
    });

    return {
      props: {
        categories,
        ...(await serverSideTranslations(locale!, ['common'])),
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
      },
      revalidate: 10
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async () => {
  const categories = await http.categories.all({
    sort: ['updatedAt:desc']
  });

  const paths = categories.data.flatMap(category => ({
    params: {slug: category.attributes.slug}
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};
