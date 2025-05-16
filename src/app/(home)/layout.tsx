import Footer from '@/components/footer-component';
import NavBar from '@/components/nav-component';
import MenuProvider from '@/context/menu-context';
import { Fragment, ReactNode } from 'react';

export default function ScoutLayout({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <Fragment>
        <NavBar />
        <main className="flex-grow w-screen">{children}</main>
        <Footer />
      </Fragment>
    </MenuProvider>
  );
}
