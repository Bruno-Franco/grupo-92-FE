//
'use client';

import { Fragment, FormEvent, useState } from 'react';
import FormBTN from './button-form-component';
import { NextRequest } from 'next/server';
import { getCaptchaToken } from '@/app/utils/captcha';
import { preInscForm } from '@/app/api/actions';

export default function FormInputs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(event.currentTarget);
      const values = Object.fromEntries(
        data.entries()
      ) as unknown as NextRequest;
      const bodyString = JSON.stringify(values);

      // getting the token
      const token = await getCaptchaToken();

      const res = await preInscForm(token);

      if (res.success) {
        // console.log('bodyString', bodyString);
        const response = await fetch(`/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: bodyString,
        });
        // console.log('OK', response.ok);

        // const dataResponse = await response.json();
        // console.log(dataResponse);

        if (response.ok) {
          setSubmitStatus('success');
          // Opcional: Limpar o formulário após envio bem-sucedido
          form.reset();
        } else {
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Fragment>
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
          <p className="font-medium">Formulário enviado com sucesso!</p>
          <p>Entraremos em contacto em breve para os próximos passos.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
          <p className="font-medium">Ocorreu um erro ao enviar o formulário.</p>
          <p>Por favor, tente novamente ou contacte-nos diretamente.</p>
        </div>
      )}

      <form
        className="flex flex-col space-y-5"
        onSubmit={handleSubmit}
        method="POST"
      >
        <h3 className="text-lg font-bold text-scout-azul mb-2">
          Informações do Futuro Escoteiro
        </h3>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="nome"
            className="text-sm font-medium text-gray-700"
          >
            Nome Completo *
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Primeiro e último nome"
            name="nome"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="O teu email (se tiveres)"
              name="email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="celular"
              className="text-sm font-medium text-gray-700"
            >
              Telemóvel
            </label>
            <input
              id="celular"
              type="tel"
              placeholder="O teu telemóvel (se tiveres)"
              name="celular"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="idade"
            className="text-sm font-medium text-gray-700"
          >
            Idade *
          </label>
          <input
            id="idade"
            type="number"
            placeholder="Quantos anos tens?"
            name="idade"
            min="6"
            max="65"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
            required
          />
          <span className="text-xs text-gray-500">
            Aceitamos jovens a partir dos 6 anos.
          </span>
        </div>

        <div className="h-px bg-gray-200 my-2"></div>

        <h3 className="text-lg font-bold text-scout-azul mb-2">
          Informações do Encarregado de Educação
        </h3>

        <div className="flex flex-col space-y-1">
          <label
            htmlFor="nomeEncEduc"
            className="text-sm font-medium text-gray-700"
          >
            Nome Completo *
          </label>
          <input
            id="nomeEncEduc"
            type="text"
            placeholder="Nome do Encarregado de Educação"
            name="nomeEncEduc"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-1">
            <label
              htmlFor="emailEncEduc"
              className="text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              id="emailEncEduc"
              type="email"
              placeholder="Email do Encarregado de Educação"
              name="emailEncEduc"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label
              htmlFor="celularEncEduc"
              className="text-sm font-medium text-gray-700"
            >
              Telemóvel *
            </label>
            <input
              id="celularEncEduc"
              type="tel"
              placeholder="Telemóvel do Encarregado de Educação"
              name="celularEncEduc"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-scout-azul transition"
              required
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <input
            id="termos"
            type="checkbox"
            name="termos"
            className="w-4 h-4 text-scout-azul border-gray-300 rounded focus:ring-scout-azul"
            required
          />
          <label
            htmlFor="termos"
            className="text-sm text-gray-700"
          >
            Concordo com o tratamento dos dados pessoais para fins de inscrição.
          </label>
        </div>

        <div className="mt-6">
          <FormBTN isSubmitting={isSubmitting} />
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p className="mb-1">* Campos obrigatórios</p>
        <p>
          Os dados recolhidos serão utilizados apenas para finalidades
          relacionadas com o processo de inscrição.
        </p>
      </div>
    </Fragment>
  );
}
