// import "@/styles/globals.css";

import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import '@css/satoshi.css';
import '@css/style.css';
// import { SessionProvider } from 'next-auth/react';
// import type { AppProps } from 'next/app';

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppProps) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }


import { SessionProvider } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Loader from '@components/Common/Loader';
import type { AppProps } from 'next/app';

export default function App({
    Component,
    pageProps: { session, ...pageProps }
}: AppProps) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>}
        </>
    );
}