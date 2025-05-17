'use client';

import { Fragment } from 'react';
import { Send } from 'lucide-react';

export default function FormBTN() {
  return (
    <Fragment>
      <button
        type="submit"
        className="bg-scout-azul text-scout-verde hover:sm:bg-scout-azul hover:sm:cursor-pointer sm:bg-scout-verde py-3 px-6 sm:text-scout-azul hover:sm:text-scout-verde duration-150 transition-normal"
      >
        <span className="text-semibold">
          Enviar Pré-Inscrição
          <span>
            <Send />
          </span>
        </span>
      </button>
    </Fragment>
  );
}
