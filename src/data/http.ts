import qs from 'qs';

import {API_ENDPOINTS} from '@/configs/endpoint.config';
import {
  ICategoriesResponse,
  ICategoryResponse,
  IPostsResponse,
  ISectionResponse,
  ISectionsResponse
} from '@/types';
import {HttpClient} from '@/utils/http-client';

class HttpBase {
  categories = {
    all: async (params?: unknown) => {
      const query = qs.stringify(params, {
        encodeValuesOnly: true
      });
      return HttpClient.get<ICategoriesResponse>(
        `${API_ENDPOINTS.CATEGORY}?${query}`
      );
    },
    get: async (categoryId: string, populate?: any) => {
      const query = qs.stringify(populate, {
        encodeValuesOnly: true
      });
      return HttpClient.get<ICategoryResponse>(
        `${API_ENDPOINTS.CATEGORY}/${categoryId}?${query}`
      );
    }
  };

  sections = {
    all: async (params?: unknown) => {
      const query = qs.stringify(params, {
        encodeValuesOnly: true
      });
      return HttpClient.get<ISectionsResponse>(
        `${API_ENDPOINTS.SECTION}?${query}`
      );
    },
    get: async (sectionId: string, populate?: any) => {
      const query = qs.stringify(populate, {
        encodeValuesOnly: true
      });
      return HttpClient.get<ISectionResponse>(
        `${API_ENDPOINTS.SECTION}/${sectionId}?${query}`
      );
    }
  };

  posts = {
    all: async (params?: unknown) => {
      const query = qs.stringify(params, {
        encodeValuesOnly: true
      });
      return HttpClient.get<IPostsResponse>(`${API_ENDPOINTS.POST}?${query}`);
    },
    get: async (params?: unknown) => {
      const query = qs.stringify(params, {
        encodeValuesOnly: true
      });
      return HttpClient.get<IPostsResponse>(`${API_ENDPOINTS.POST}?${query}`);
    }
  };
}

export default new HttpBase();
