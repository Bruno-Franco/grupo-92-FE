import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import HamburguerMenu from './hamburguer-component';
import DropDownMenu from './dropdown-menu';
import LinksMenu from './links-menu';
import LogoMenu92 from './logo-menu-92';
import BTNCallPhone from './phone-call/phone-btn-component';

export default function NavBar() {
  return (
    <header className="w-screen border-b-scout-verde border-b-[3.5px] h-[75px]">
      <nav className="w-full max-w-screen-xl mx-auto mt-0.5 px-1">
        <div className="flex justify-between items-center">
          <LogoMenu92 />

          <div className="flex flex-col justify-between items-end relative">
            <div className="flex gap-4 mb-1 items-center">
              <BTNCallPhone />
              <Link
                className="text-scout-azul"
                href="https://www.instagram.com/escoteiros92/"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                className="text-scout-azul"
                href="https://www.facebook.com/Grupo92aep/?locale=pt_PT"
                target="_blank"
              >
                <Facebook />
              </Link>
            </div>
            <HamburguerMenu />

            <DropDownMenu />

            <div className="hidden sm:flex gap-4">
              <LinksMenu />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
