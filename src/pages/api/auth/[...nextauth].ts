import NextAuth, {AuthOptions} from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

import {loginOAuth} from '@/common/http/network/auth';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 365 * 24 * 60 * 60
  },
  callbacks: {
    signIn: async params => {
      const {user, account} = params;

      if (!account) return false;

      if (account?.provider === 'google') {
        const googleResponse = await loginOAuth('google', {token: account?.id_token});

        if (googleResponse.data.user) {
          user.id = googleResponse.data.user.id;
          user.name = googleResponse.data.user.name;
          return true;
        }
      }

      if (account?.provider === 'facebook') {
        const facebookResponse = await loginOAuth('facebook', {token: account?.access_token});

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
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
      }

      return session;
    }
  }
};
export default NextAuth(authOptions);
