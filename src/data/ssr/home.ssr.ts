import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {dehydrate, QueryClient} from 'react-query';

import {API_ENDPOINTS} from '@/configs/endpoint.config';
import {SECTION_CONFIGS} from '@/configs/sections';
import {ISectionsResponse} from '@/types';

import http from '../http';

type PageProps = {
  introduction: ISectionsResponse;
};

export const getStaticProps: GetStaticProps<PageProps> = async ({locale}) => {
  const queryClient = new QueryClient();

  // Section Introduction
  await queryClient.prefetchQuery(
    [
      API_ENDPOINTS.SECTION,
      SECTION_CONFIGS.INTRODUCTION,
      'section-introduction'
    ],
    () =>
      http.sections.all({
        locale,
        filters: {
          slug: {
            $eq: SECTION_CONFIGS.INTRODUCTION
          }
        }
      })
  );

  try {
    const introduction = await http.sections.all({
      locale,
      filters: {
        slug: {
          $eq: SECTION_CONFIGS.INTRODUCTION
        }
      }
    });

    return {
      props: {
        introduction,
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
