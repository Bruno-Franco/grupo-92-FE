import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import HamburguerMenu from './hamburguer-component';
import DropDownMenu from './dropdown-menu';
import LinksMenu from './links-menu';
import LogoMenu from './logo-menu';

export default function NavBar() {
  return (
    <header className="border-b-scout-verde border-b-[3.5px]">
      <nav className="max-w-[1300px] mx-auto my-1 px-1">
        <div className="flex justify-between items-center">
          <LogoMenu />

          <div className="flex flex-col justify-between items-end relative">
            <div className="flex gap-4 mb-1">
              <Link
                href="https://www.instagram.com/escoteiros92/"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
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
