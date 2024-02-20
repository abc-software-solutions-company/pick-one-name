import {IAxiosResponse} from '../axios-types';
import * as HttpRequest from '../http-request';
import {IAuthResponse, IOAuthParams} from '../models/auth';

type OAuthProvider = 'google' | 'facebook';
type Auth = IAxiosResponse<IAuthResponse>;

const loginOAuth = (provider: OAuthProvider, data: IOAuthParams) =>
  HttpRequest.post<Auth>(`/api/v1/auth/login/${provider}`, data);

export {loginOAuth};
