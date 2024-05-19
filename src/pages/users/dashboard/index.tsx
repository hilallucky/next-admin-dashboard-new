import ECommerce from '@/ui/ECommerce/E-commerce';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import { Metadata } from 'next';
import { SessionProvider, useSession } from 'next-auth/react';

export const metadata: Metadata = {
  title:
    'Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template',
  description: 'This is Next.js Home for TailAdmin Dashboard Template',
};

export default function Home() {
  const session = {};

  return (
    <>
      <SessionProvider session={session}>
        <HomeComponent />
      </SessionProvider>
    </>
  );
}

function HomeComponent() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated' && session.user) {
    return (
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    );
  }

  return <p>Not authenticated</p>;
}
