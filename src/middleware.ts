export { default } from 'next-auth/middleware';

// export async function middleware(request: NextRequest) {
//   // Call our authentication function to check the request
//   //   if (!authOptions.session(request)) {
//   //     // Respond with JSON indicating an error message
//   //     return Response.json(
//   //       { success: false, message: 'authentication failed' },
//   //       { status: 401 },
//   //     );
//   //   }

//   //   const session = await getSession({ req: request });
//   //   if (!session) {
//   //     // return NextResponse.redirect(
//   //     //   `http://localhost:3000${nextConfig.basePath}/login`,
//   //     // );
//   //     return Response.json(
//   //       { success: false, message: 'authentication failed' },
//   //       { status: 401 },
//   //     );
//   //   }

//   //   console.log({ username: request.nextUrl.username });

//   //   const isAuthenticated = authenticate(request);

//   //   // If the user is authenticated, continue as normal
//   //   if (isAuthenticated) {
//   return NextResponse.next();
//   //   }

//   //   // Redirect to login page if not authenticated
//   //   return NextResponse.redirect(new URL('/login', request.url));
// }

// export function middleware(request: NextRequest) {
//   const password = request.nextUrl.searchParams.get(
//     process.env.SEARCH_QUERY_NAME!,
//   );
//   const hasCookie = request.cookies.has(process.env.PASSWORD_COOKIE_NAME!);
//   const url = request.nextUrl.clone();
//   const response = NextResponse.redirect(url);

//   if (password === process.env.PAGE_PASSWORD && !hasCookie) {
//     response.cookies.set(`${process.env.PASSWORD_COOKIE_NAME}`, 'true');
//     return response;
//   }
// }

export const config = {
  matcher: ['/users/:path*'],
  // redirect:
};
