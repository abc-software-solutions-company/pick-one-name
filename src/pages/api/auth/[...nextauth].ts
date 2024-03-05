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
        name: {label: 'name', type: 'string'}
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
              career: signInRes.data.user.career,
              plan: signInRes.data.user.plan,
              gender: signInRes.data.user.gender,
              dateOfBirth: String(signInRes.data.user.dateOfBirth),
              accessToken: signInRes.data.accessToken,
              refreshToken: signInRes.data.refreshToken,
              slug: signInRes.data.user.slug,
              description: signInRes.data.user.description,
              isVerified: signInRes.data.user.isVerified,
              provider: signInRes.data.user.provider
            };
          }
        } catch (error) {
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
          user.avatar = googleResponse.data.user.avatar;
          user.career = googleResponse.data.user.career;
          user.gender = googleResponse.data.user.gender;
          user.dateOfBirth = String(googleResponse.data.user.dateOfBirth);
          user.email = googleResponse.data.user.email;
          user.plan = googleResponse.data.user.plan;
          user.accessToken = googleResponse.data.accessToken;
          user.refreshToken = googleResponse.data.refreshToken;
          user.slug = googleResponse.data.user.slug;
          user.description = googleResponse.data.user.description;
          user.isVerified = googleResponse.data.user.isVerified;
          user.provider = ENUM_O_AUTH_PROVIDER.GOOGLE;
          return true;
        }
      }

      if (account?.provider.toUpperCase() === ENUM_O_AUTH_PROVIDER.FACEBOOK) {
        const facebookResponse = await AuthApi.loginOAuth('facebook', {token: account?.access_token});

        if (facebookResponse.data.user) {
          user.id = facebookResponse.data.user.id;
          user.name = facebookResponse.data.user.name;
          user.avatar = facebookResponse.data.user.avatar;
          user.career = facebookResponse.data.user.career;
          user.gender = facebookResponse.data.user.gender;
          user.dateOfBirth = String(facebookResponse.data.user.dateOfBirth);
          user.email = facebookResponse.data.user.email;
          user.plan = facebookResponse.data.user.plan;
          user.accessToken = facebookResponse.data.accessToken;
          user.refreshToken = facebookResponse.data.refreshToken;
          user.slug = facebookResponse.data.user.slug;
          user.description = facebookResponse.data.user.description;
          user.isVerified = facebookResponse.data.user.isVerified;
          user.provider = ENUM_O_AUTH_PROVIDER.FACEBOOK;
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
        token.avatar = user.avatar;
        token.career = user.career;
        token.gender = user.gender;
        token.dateOfBirth = user.dateOfBirth;
        token.plan = user.plan;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.slug = user.slug;
        token.description = user.description;
        token.isVerified = user.isVerified;
        token.provider = user.provider;
      }

      return token;
    },
    session: async params => {
      const {session, token} = params;
      if (session.user && token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.avatar; //TODO remove
        session.user.avatar = token.avatar;
        session.user.career = token.career;
        session.user.gender = token.gender;
        session.user.dateOfBirth = token.dateOfBirth;
        session.user.plan = token.plan;
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.slug = token.slug;
        session.user.description = token.description;
        session.user.isVerified = token.isVerified;
        session.user.provider = token.provider;
      }

      return session;
    }
  }
};
export default NextAuth(authOptions);
