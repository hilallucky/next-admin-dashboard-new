import { useAppState } from '@/contexts/stateContext';
import Link from 'next/link';

const Page2 = () => {
  const { state, setState, revertState } = useAppState();

  return (
    <div>
      <p>Page 2 - Current State: {state ? 'True' : 'False'}</p>
      <button onClick={() => setState(!state)}>Toggle State</button>
      <button onClick={revertState}>Revert State</button>
      <br />
      <Link href="/dashboard/supplier/test/page1">Go to Page 1</Link>
    </div>
  );
};

export default Page2;
