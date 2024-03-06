import {ENUM_PLAN} from '@/common/constants';

export interface IAuthResponse {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: ENUM_PLAN;
  accessToken: string;
  refreshToken: string;
}

export interface IOAuthParams {
  token?: string;
}
