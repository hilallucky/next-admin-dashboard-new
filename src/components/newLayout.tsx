// components/Layout.tsx
import { ReactNode } from 'react';
import { StateProvider } from '@/contexts/stateContext';

interface NewLayoutProps {
  children: ReactNode;
}

const NewLayout = ({ children }: NewLayoutProps) => {
  return <StateProvider>{children}</StateProvider>;
};

export default NewLayout;
