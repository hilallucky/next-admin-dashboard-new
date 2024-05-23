import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const dashboard = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>;
};

export default dashboard;
