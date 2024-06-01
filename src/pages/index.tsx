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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

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

export default MyApp;
