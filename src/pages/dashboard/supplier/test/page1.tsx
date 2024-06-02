import { useAppState } from '@/contexts/stateContext';
import Link from 'next/link';
import { ChangeEvent } from 'react';

const Page1 = () => {
  const { state, setState, revertState } = useAppState();

  // Handler for select change
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value === 'true');
  };

  return (
    <div>
      <p>Page 1 - Current State: {state ? 'True' : 'False'}</p>
      <button onClick={() => setState(!state)}>Toggle State</button>
      <button onClick={revertState}>Revert State</button>

      <div>
        <label htmlFor="stateSelect">Select State:</label>
        <select
          id="stateSelect"
          value={state.toString()}
          onChange={handleSelectChange}
        >
          <option value="aaa">aaa</option>
          <option value="bbb">bbb</option>
          <option value="ccc">ccc</option>
          <option value="ddd">ddd</option>
          <option value="eee">eee</option>
          <option value="fff">fff</option>
        </select>
      </div>
      <br />
      <Link href="/dashboard/supplier/test/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
