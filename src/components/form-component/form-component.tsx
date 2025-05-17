'use client';

import { Fragment, FormEvent } from 'react';
import FormBTN from './button-form-component';
// import { POST } from '@/app/api/send-email/route';
import { NextRequest } from 'next/server';

export default function FormInputs() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()) as unknown as NextRequest;
    const bodyString = JSON.stringify(values);

    const response = await fetch(`/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyString,
    });
    const dataResponse = await response.json();
    console.log(dataResponse);
  }
  return (
    <Fragment>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        method="POST"
      >
        <input
          type="text"
          placeholder="Qual o teu nome? (Primeiro e Último)"
          name="nome"
          //   required
        />

        <input
          type="email"
          placeholder="Se tens email..."
          name="email"
        />
        <input
          type="tel"
          placeholder="Se tiveres... telemóvel?"
          name="celular"
        />
        <input
          type="number"
          placeholder="Quantos anos tens?"
          name="idade"
          min="6"
          max="65"
          //   required
        />
        <input
          type="text"
          placeholder="Nome Enc. Educação? (Primeiro e último)"
          name="nomeEncEduc"
          //   required
        />
        <input
          type="email"
          placeholder="Email Enc. Educação"
          name="emailEncEduc"
          //   required
        />
        <input
          type="tel"
          placeholder="Telemóvel Enc. Educação"
          name="celularEncEduc"
          //   required
        />

        <FormBTN />
      </form>
    </Fragment>
  );
}
