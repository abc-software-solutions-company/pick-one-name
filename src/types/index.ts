export interface IAnyObj {
  [k: string]: any;
}

export interface IUserSession {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}
