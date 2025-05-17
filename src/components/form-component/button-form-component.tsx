'use client';

import { Fragment } from 'react';
import { Send } from 'lucide-react';

export default function FormBTN() {
  return (
    <Fragment>
      <button type="submit">
        <span>
          Enviar Pré-Inscrição
          <span>
            <Send />
          </span>
        </span>
      </button>
    </Fragment>
  );
}
