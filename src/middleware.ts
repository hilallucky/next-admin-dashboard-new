import { NextResponse, type NextRequest } from 'next/server';
import { isAuthenticated } from '@lib/auth';
import { getSession, useSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { IncomingMessage } from 'http';

export async function middleware(request: NextRequest) {
  const requestForNextAuth: Partial<IncomingMessage> & { body?: any } = {
    headers: {
      cookie: request.headers.get('cookie') || undefined,
    },
  };

  const session = await getSession({ req: requestForNextAuth });

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/dashboard/:path*',
};
