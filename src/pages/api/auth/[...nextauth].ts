import NextAuth, {AuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import AuthApi from '@/modules/auth/api/auth.api';

import {ENUM_O_AUTH_PROVIDER} from '@/common/constants/auth.constant';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        id: {label: 'Id', type: 'string'},
        email: {label: 'Email', type: 'email'},
        password: {label: 'Password', type: 'password'},
        name: {label: 'Name', type: 'string'}
      },
      authorize: async function (credentials) {
        if (!credentials?.email && !credentials?.password && !credentials?.id && !credentials?.name) {
          return null;
        }

        const {email, password} = credentials;

        try {
          let signInRes;
          if (credentials?.email && credentials?.password) {
            signInRes = await AuthApi.login({email, password});
          }

          if (signInRes?.data.user) {
            return {
              id: signInRes.data.user.id,
              name: signInRes.data.user.name,
              email: signInRes.data.user.email,
              image: signInRes.data.user.avatar,
              avatar: signInRes.data.user.avatar,
              accessToken: signInRes.data.accessToken,
              refreshToken: signInRes.data.refreshToken,
              isVerified: signInRes.data.user.isVerified,
              provider: signInRes.data.user.provider
            };
          }
        } catch (error: any) {
          throw new Error(JSON.stringify(error));
        }

        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 365 * 24 * 60 * 60
  },
  callbacks: {
    signIn: async params => {
      const {user, account} = params;
      if (account?.provider.toUpperCase() === ENUM_O_AUTH_PROVIDER.CREDENTIALS) return !!user;

      if (!account) return false;

      if (account?.provider.toUpperCase() === ENUM_O_AUTH_PROVIDER.GOOGLE) {
        const googleResponse = await AuthApi.loginOAuth('google', {token: account?.id_token});

        if (googleResponse.data.user) {
          user.id = googleResponse.data.user.id;
          user.name = googleResponse.data.user.name;
          return true;
        }
      }

      if (account?.provider.toUpperCase() === ENUM_O_AUTH_PROVIDER.FACEBOOK) {
        const facebookResponse = await AuthApi.loginOAuth('facebook', {token: account?.access_token});

        if (facebookResponse.data.user) {
          user.id = facebookResponse.data.user.id;
          user.name = facebookResponse.data.user.name;
          return true;
        }
      }

      return false;
    },
    jwt: ({trigger, token, user, account}) => {
      if (trigger === 'signIn' && user && account) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },
    session: async params => {
      const {session, token} = params;
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.avatar = token.picture as string;
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
      }

      return session;
    }
  }
};
export default NextAuth(authOptions);
