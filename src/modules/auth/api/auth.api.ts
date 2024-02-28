import {TLoginCredential} from '@/modules/users/entities/user.entity';

import {API_ENDPOINTS} from '@/common/constants/api-endpoint.constant';

import {IAxiosResponse} from '../../../common/http/axios-types';
import * as HttpRequest from '../../../common/http/http-request';
import {IAuthResponse, IOAuthParams} from '../../../common/http/models/auth';

type OAuthProvider = 'google' | 'facebook';

const loginOAuth = (provider: OAuthProvider, data: IOAuthParams) =>
  HttpRequest.post<IAxiosResponse<IAuthResponse>>(`${API_ENDPOINTS.SIGN_IN}/${provider}`, data);

const login = (credential: TLoginCredential) => {
  return HttpRequest.post<IAuthResponse>(API_ENDPOINTS.SIGN_IN, credential);
};

const signup = (credential: TLoginCredential) => {
  return HttpRequest.post<IAuthResponse>(API_ENDPOINTS.SIGN_UP, credential);
};
export const AuthApi = {loginOAuth, login, signup};

export default AuthApi;
