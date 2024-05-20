import nextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { useSession } from 'next-auth/react';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;

        const decodedPassword = await bcrypt.compareSync(
          credentials.password,
          user.password,
        );

        if (!decodedPassword) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (!user) return token;

      return {
        ...token,
        id: user.id,
      };
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          name: token.name,
          email: token.email,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: '/login',
  },
};

// export function isAuthenticated(request: NextRequest) {
//   const { data: session, status } = useSession();

//   console.log({ status });

//   if (status === 'authenticated') {
//     return NextResponse.next();
//   }

//   return NextResponse.redirect('/login');
// }
