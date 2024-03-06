import {DefaultSession} from 'next-auth';

import {ENUM_O_AUTH_PROVIDER, ENUM_O_PLAN} from '@/common/constants';

declare module 'next-auth' {
  interface User {
    id: string;
    name: string;
    email: string;
    slug: string;
    image: string; //TODO ?
    avatar: string;
    career: string;
    gender: string;
    dateOfBirth: string;
    plan: ENUM_PLAN;
    description?: string;
    accessToken: string;
    refreshToken: string;
    isVerified?: boolean;
    provider?: ENUM_O_AUTH_PROVIDER;
  }

  interface Account {
    id_token: string;
    access_token: string;
  }

  interface Profile {
    iss: string;
    azp: string;
    aud: string;
    sub: string;
    email: string;
    email_verified: string;
    at_hash: string;
    name: string;
    picture: string;
    given_name: string;
    family_name: string;
    locale: string;
    iat: string;
    exp: string;
    alg: string;
    kid: string;
    typ: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    email: string;
    image: string; //TODO ?
    avatar: string;
    career: string;
    plan: ENUM_O_PLAN;
    gender: string;
    dateOfBirth: string;
    accessToken: string;
    refreshToken: string;
    slug: string;
    description?: string;
    isVerified?: boolean;
    provider?: ENUM_O_AUTH_PROVIDER;
  }
}
