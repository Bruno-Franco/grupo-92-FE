import MenuProvider from '@/context/menu-context';
import NavBar from '@/components/nav-component';
import { Fragment, ReactNode } from 'react';
import Footer from '@/components/footer-component';

export default function ScoutLayout({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <Fragment>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </Fragment>
    </MenuProvider>
  );
}
