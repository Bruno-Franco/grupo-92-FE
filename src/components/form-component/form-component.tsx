'use client';

import { Fragment, FormEvent } from 'react';
import FormBTN from './button-form-component';
import { POST } from '@/app/api/send-email/route';
import { NextRequest } from 'next/server';

export default function FormInputs() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()) as unknown as NextRequest;
    POST(values);
  }
  return (
    <Fragment>
      <form
        onSubmit={handleSubmit}
        method="POST"
      >
        <input
          type="text"
          placeholder="Nome"
          name="nome"
          required
        />
        <input
          type="text"
          placeholder="Último Nome"
          name="sobrenome"
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          type="tel"
          placeholder="Telemóvel"
          name="celular"
          required
        />
        <input
          type="date"
          placeholder="Data de Nascimento"
          name="dNascimento"
          required
        />
        <FormBTN />
      </form>
    </Fragment>
  );
}
