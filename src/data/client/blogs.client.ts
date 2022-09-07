import {useRouter} from 'next/router';
import {useInfiniteQuery, useQuery} from 'react-query';

import {API_ENDPOINTS} from '@/configs/endpoint.config';
import {ICategoriesResponse, IPagination, IPostsResponse} from '@/types';

import http from '../http';

export function useLoadMore(category?: string) {
  const {locale} = useRouter();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    hasNextPage
  } = useInfiniteQuery<IPostsResponse, Error>(
    [API_ENDPOINTS.POST, category, 'client-blog-posts'],
    ({pageParam}) => {
      const params = {
        locale,
        populate: {
          cover: '*'
        },
        pagination: {
          page: pageParam?.page ?? 1,
          pageSize: pageParam?.pageSize ?? 6
        },
        sort: ['updatedAt:desc'],
        filters: {
          categories: {
            type: {
              $eq: 'blog'
            }
          }
        }
      };

      if (category) {
        (params.filters.categories as any).type = {
          $eq: category
        };
      }

      return http.posts.all(params);
    },
    {
      getNextPageParam: res => {
        const {page, pageCount}: IPagination = res.meta.pagination || {};

        return page < pageCount ? {page: page + 1} : undefined;
      }
    }
  );

  function handleLoadMore() {
    fetchNextPage();
  }

  return {
    posts: data?.pages?.flatMap(page => page.data) ?? [],
    isLoading,
    isFetching,
    error,
    isLoadingMore: isFetchingNextPage,
    loadMore: handleLoadMore,
    hasMore: Boolean(hasNextPage)
  };
}

export function useGetCategories() {
  const {locale} = useRouter();
  const {data, isLoading, error} = useQuery<ICategoriesResponse, Error>(
    [API_ENDPOINTS.CATEGORY, 'client-blog-cates'],
    () =>
      http.categories.all({
        locale,
        sort: ['createdAt:desc'],
        filters: {
          type: {
            $eq: 'blog'
          },
          active: {
            $eq: true
          }
        }
      })
  );

  return {
    categories: data,
    isLoading,
    error
  };
}
