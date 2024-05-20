// // import Image from "next/image";
// // import { Inter } from "next/font/google";

// import LoginForm from '@/ui/LoginForm/LoginForm';

// export default function Home() {
//   return (
//     <main>
//       <LoginForm />;
//     </main>
//   );
// }

import LoginForm from '@/ui/LoginForm/LoginForm';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

// import { useOktaAuth } from '@okta/okta-react';

// import { Auth } from '../components/global/Auth';
// import { Layout } from '../components/global/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  //   const { oktaAuth, authState } = useOktaAuth();
  const router = useRouter();
  //   if (authState && !authState.isAuthenticated) {
  //     oktaAuth.signInWithRedirect();
  //     return null;
  //   }

  return (
    <>
      <Head>
        <title>Dashboard Application</title>
        <link rel="shortcut icon" href={router.basePath + '/favicon.ico'} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LoginForm {...pageProps} />
    </>
  );
}

function ProtectedApp(appProps: AppProps) {
  return (
    // <Auth>
    <MyApp {...appProps} />
    // </Auth>
  );
}

export default ProtectedApp;
