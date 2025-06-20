import BTNContact from '@/components/btn-contact/button-contact-component';
import Image from 'next/image';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      {/* HERO SECTION */}
      <section>
        <div className="relative overflow-hidden min-h-[500px]">
          <div className="pl-2 gap-8 flex flex-col items-start justify-center  max-w-screen-xl mx-auto min-h-[500px]">
            <div className="w-1/2 gap-2 flex flex-col items-start ">
              <h2 className="text-3xl  sm:text-5xl text-scout-azul font-bold">
                Faz parte da Maior
              </h2>
              <h2 className="text-3xl  sm:text-5xl text-scout-azul mb-3.5 font-bold">
                Aventura da tua VIDA!
              </h2>
              <p className="  sm:text-lg text-scout-azul mb-2.5">
                🌲 DESCOBRE, EXPLORA, CONQUISTA 🌲
              </p>
              <div>
                <p className="sm:text-lg text-scout-azul">
                  Faz amigos, aprende habilidades incríveis e
                </p>
                <p className="sm:text-lg text-scout-azul mb-2.5">
                  vive aventuras inesquecíveis na natureza!
                </p>
              </div>
            </div>
            <BTNContact />
          </div>
          <Image
            className="min-w-screen -mask-linear-30 mask-linear-from-15% mask-linear-to-65%"
            src="/escoteiros-92-porto-santo.jpg"
            alt="Escoteiros"
            fill
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: 0.75,
              zIndex: -1,
              objectPosition: 'center',
            }}
          />
        </div>
      </section>
      {/* Nova seção CTA com curiosidades */}
      <section className="py-16 bg-scout-verde/10">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl text-scout-azul font-bold text-center mb-12">
            Sabias Que...? 🌍 Curiosidades Escotistas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Personalidades */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-scout-azul mb-4">
                Escoteiros Famosos
              </h3>
              <ul className="space-y-3 text-scout-azul/90">
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    O astronauta <strong>Neil Armstrong</strong>, primeiro homem
                    a pisar na Lua, foi escoteiro!!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    O ex-jogador <strong>David Beckham</strong> orgulha-se de
                    ter sido escoteiro.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    O fundador da Microsoft, <strong>Bill Gates</strong>,
                    alcançou o posto de Eagle Scout!
                  </span>
                </li>
              </ul>
            </article>

            {/* Benefícios */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-scout-azul mb-4">
                O Que Vais Ganhar
              </h3>
              <ul className="space-y-3 text-scout-azul/90">
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    Escoteiros têm <strong>mais probabilidade</strong> de se
                    tornarem líderes nas suas carreiras!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    Aprendes mais de <strong>200 competências práticas</strong>{' '}
                    que te serão úteis a vida toda.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    Fazes amizades que podem durar <strong>toda a vida</strong>!
                  </span>
                </li>
              </ul>
            </article>

            {/* Dados interessantes */}
            <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-scout-azul mb-4">
                Factos Espetaculares
              </h3>
              <ul className="space-y-3 text-scout-azul/90">
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    Existem mais de <strong>50 milhões</strong> de escoteiros em
                    todo o mundo!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    Em Portugal, o escotismo existe há mais de{' '}
                    <strong>100 anos</strong>!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>
                    <strong>11</strong> dos 12 astronautas que pisaram na Lua
                    eram escoteiros!
                  </span>
                </li>
              </ul>
            </article>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl text-scout-azul font-semibold mb-6">
              Pronto para a maior aventura da tua vida?
            </h3>
            <p className="text-lg text-scout-azul/90 mb-8 max-w-2xl mx-auto">
              Junta-te ao Grupo 92 do Funchal, parte da <strong>AEP</strong>{' '}
              (Associação dos Escoteiros de Portugal), e descobre o mundo dos{' '}
              <strong>Escoteiros</strong>! Começa já a explorar, aprender e
              crescer num ambiente único e cheio de aventuras escotistas.
            </p>
            <BTNContact />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
