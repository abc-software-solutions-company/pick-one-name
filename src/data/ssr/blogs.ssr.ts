import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {dehydrate, QueryClient} from 'react-query';

import {API_ENDPOINTS} from '@/configs/endpoint.config';

import http from '../http';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const queryClient = new QueryClient();
  const pagingParams = {page: 1, pageSize: 30};

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.POST, 'pre-blog-posts', pagingParams],
    () =>
      http.posts.all({
        locale,
        populate: {
          cover: '*',
          user: {
            populate: ['avatar']
          }
        },
        sort: ['updatedAt:desc'],
        pagination: pagingParams,
        filters: {
          categories: {
            type: {
              $eq: 'blog'
            }
          }
        }
      })
  );

  await queryClient.prefetchQuery(
    [API_ENDPOINTS.CATEGORY, 'pre-blog-cates'],
    () =>
      http.categories.all({
        locale,
        sort: ['updatedAt:desc'],
        filters: {
          type: {
            $eq: 'blog'
          }
        }
      })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
    },
    revalidate: 10
  };
};
