'use client';
import { useMenu } from '@/context/menu-context';
import { Menu, X } from 'lucide-react';

export default function HamburguerMenu() {
  const { isOpen, handleMenu } = useMenu();

  return (
    <div className="block sm:hidden text-scout-azul">
      {isOpen ? <X onClick={handleMenu} /> : <Menu onClick={handleMenu} />}
    </div>
  );
}
