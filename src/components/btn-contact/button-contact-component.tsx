'use client';

// import styles from './style.module.css';
import { useRef } from 'react';
import { redirect } from 'next/navigation';

export default function BTNContact() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (btnRef.current) {
      // btnRef.current.classList.add(styles['btn-change']);
      redirect('/ficha-de-contato');
    }
  };
  return (
    <button
      ref={btnRef}
      className="bg-scout-azul text-scout-verde hover:sm:bg-scout-azul hover:sm:cursor-pointer sm:bg-scout-verde py-3 px-6 sm:text-scout-azul hover:sm:text-scout-verde duration-150 transition-normal"
      onClick={handleClick}
    >
      <span className="font-semibold ">Contacte-nos!</span>
    </button>
  );
}
