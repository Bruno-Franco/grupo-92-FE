'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMenu } from '@/context/menu-context';

export default function LogoMenu() {
  const { setIsOpen } = useMenu();
  return (
    <Link
      href={'/'}
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <Image
        src="/logo-azul.png"
        alt="Logo Escoteiro de Portugal"
        width={200}
        height={66}
        className="rounded-br-2xl"
      />
    </Link>
  );
}
