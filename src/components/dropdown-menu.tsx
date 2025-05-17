'use client';

import { useMenu } from '@/context/menu-context';
import Link from 'next/link';
import { Fragment } from 'react';
// import LinksMenu from './links-menu';

export default function DropDownMenu() {
  const { isOpen, handleMenu } = useMenu();
  return (
    <Fragment>
      {isOpen && (
        <div className="absolute  w-screen top-[65px] bg-white flex flex-col p-4 gap-5 items-center z-1">
          <Link
            href={'/sobre-nos'}
            onClick={handleMenu}
          >
            <span className="">Sobre Nós</span>
          </Link>
          <Link
            href={'/missao-valores'}
            onClick={handleMenu}
          >
            <span className="">Missão e Valores</span>
          </Link>
          <Link
            href={'/ficha-de-inscricao'}
            onClick={handleMenu}
          >
            <span className="">Ficha de Inscrição</span>
          </Link>
        </div>
      )}
    </Fragment>
  );
}
