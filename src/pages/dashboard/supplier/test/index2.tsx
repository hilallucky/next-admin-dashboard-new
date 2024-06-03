import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import { StateProvider } from '@/contexts/stateContext';
import Page1 from './page1';

const index = () => {
  return (
    <div>
      <StateProvider>
        <DefaultLayout>
          <Page1 />
        </DefaultLayout>
      </StateProvider>
    </div>
  );
};

export default index;
