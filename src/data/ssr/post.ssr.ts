import {GetStaticPaths, GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {IPostsResponse} from '@/types';

import http from '../http';

type ParsedQueryParams = {
  slug: string;
};
type PageProps = {
  post: IPostsResponse;
};

export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({locale, params}) => {
  const {slug} = params!;

  try {
    const post = await http.posts.get({
      locale,
      filters: {
        slug: {
          $eq: slug
        }
      },
      populate: {
        categories: '*',
        cover: '*',
        author: {
          populate: ['avatar']
        },
        relatedPosts: {
          populate: {
            categories: '*',
            cover: '*'
          }
        }
      }
    });

    return {
      props: {
        post,
        ...(await serverSideTranslations(locale!, ['common']))
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
  const posts = await http.posts.all();
  const paths = posts.data.flatMap(post => ({
    params: {slug: post.attributes.slug}
  }));
  return {
    paths,
    fallback: 'blocking'
  };
};
