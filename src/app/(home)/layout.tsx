import NavBar from '@/components/nav-component';
import MenuProvider from '@/context/menu-context';
import { Fragment, ReactNode } from 'react';

export default function ScoutLayout({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <Fragment>
        <NavBar />
        {children}
      </Fragment>
    </MenuProvider>
  );
}
