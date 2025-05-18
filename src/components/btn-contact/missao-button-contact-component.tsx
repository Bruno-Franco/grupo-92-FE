'use client';

// import styles from './style.module.css';
import { useRef } from 'react';
import { redirect } from 'next/navigation';

export default function MissionBTNContact() {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (btnRef.current) {
      // btnRef.current.classList.add(styles['btn-change']);
      redirect('/ficha-de-inscricao');
    }
  };
  return (
    <button
      ref={btnRef}
      className=" bg-scout-azul text-scout-verde  hover:sm:cursor-pointer  py-3 px-6  duration-150 transition-normal"
      onClick={handleClick}
    >
      <span className="font-semibold ">Faz já a tua Inscrição!</span>
    </button>
  );
}
