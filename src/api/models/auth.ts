export interface IAuthResponse {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

export interface IOAuthParams {
  token?: string;
}
