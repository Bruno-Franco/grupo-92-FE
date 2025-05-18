import Image from 'next/image';
import { Metadata } from 'next';
import MissionBTNContact from '@/components/btn-contact/missao-button-contact-component';

export const metadata: Metadata = {
  title: 'Missão e Valores | Grupo 92 dos Escoteiros - Funchal, Madeira',
  description:
    'Conheça a missão, visão e valores que guiam o Grupo 92 dos Escoteiros de Portugal no Funchal. Descubra como os princípios do escotismo moldam o caráter e a cidadania dos nossos jovens.',
  keywords:
    'valores escoteiros, lei do escoteiro, compromisso de honra, escotismo madeira, missão escoteiros, promessa escotista, grupo 92 princípios',
};

export default function MissaoValores() {
  return (
    <div className="bg-scout-verde/5">
      {/* Hero section */}
      <section className="relative w-full h-64 md:h-150 overflow-hidden">
        <Image
          src="/missao-valores-hero.jpg" // Substitua pelo caminho da sua imagem
          alt="Escoteiros em atividade representando nossos valores"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-scout-azul/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Missão e Valores
          </h1>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          {/* Introdução */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-scout-azul mb-4">
              Os Princípios que Nos Guiam
            </h2>
            <p>
              Há mais de um século, os princípios do escotismo têm formado
              jovens líderes em todo o mundo. No Grupo 92, estes valores não são
              apenas palavras - são o alicerce de cada atividade, cada
              acampamento e cada momento de aprendizagem. Descubra abaixo o que
              nos move e inspira há mais de 40 anos.
            </p>
          </div>

          {/* Seção Missão */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-scout-azul h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-scout-azul">
                Nossa Missão
              </h2>
            </div>

            <div className="bg-scout-verde/10 p-6 rounded-lg border-l-4 border-scout-azul mb-4">
              <p className="italic text-lg">
                &quot;Transformar jovens em cidadãos ativos através de
                experiências inesquecíveis&quot;
              </p>
            </div>

            <p className="mb-6">
              Os Escoteiros de Portugal têm como missão educar os jovens para
              desempenharem um papel ativo na sociedade. Essa ação educativa é
              realizada através de um método único de educação não formal,
              assente num sistema de valores, que visa ajudar a construir um
              mundo melhor onde as pessoas se sintam realizadas como indivíduos
              e desempenhem um papel construtivo na sociedade, assente numa
              cidadania participativa, responsável e tolerante e no respeito
              pelo ambiente.
            </p>
          </section>

          {/* Seção Visão */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-scout-verde h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-scout-verde">
                Nossa Visão
              </h2>
            </div>

            <div className="flex flex-col  gap-6 mb-6">
              <div className=" bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg">
                  Como agentes de desenvolvimento e força social, os Escoteiros
                  de Portugal pretendem ajudar a criar um mundo melhor.
                </p>
              </div>

              <div className="">
                <Image
                  src="/cropped-escoteiros-atividades.jpg" // Substitua pelo caminho da sua imagem
                  alt="Jovens escoteiros construindo um mundo melhor"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Seção Valores */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <div className="bg-scout-azul h-8 w-8 rounded-full flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-scout-azul">
                Nossos Valores
              </h2>
            </div>

            <p className="mb-6">
              Os Escoteiros de Portugal existem para educar, transmitindo
              valores. Os nossos valores são os pilares da construção do modelo
              escotista e estão presentes no Programa Educativo oferecido aos
              jovens. São valores dos Escoteiros de Portugal, os contidos na Lei
              do Escoteiro e no Compromisso de Honra, assim como a igualdade e
              tolerância, a responsabilidade e liberdade, a participação e
              cidadania ativa, a construção da Paz e o desenvolvimento
              sustentável.
            </p>

            <div className="bg-scout-verde/10 p-6 rounded-lg mb-6">
              <p>
                A adesão ao Escotismo é livre e deve ser feita sem barreiras. A
                única condição é a vontade pessoal de assumir voluntariamente os
                valores contidos no Compromisso de Honra e na Lei do Escoteiro.
              </p>
            </div>
          </section>

          {/* Seção Lei do Escoteiro */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-scout-verde mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              Lei do Escoteiro
            </h2>

            <p className="mb-4">
              A Lei do Escoteiro não é um conjunto de regras - é um guia para a
              vida. Estes princípios formam o caráter dos nossos jovens e estão
              presentes em tudo o que fazemos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    1
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é verdadeiro e a sua palavra é sagrada
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    2
                  </span>
                  <p className="font-semibold">O Escoteiro é leal</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    3
                  </span>
                  <p className="font-semibold">O Escoteiro é prestável</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    4
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é amigo de todos e irmão dos demais Escoteiros
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    5
                  </span>
                  <p className="font-semibold">O Escoteiro é cortês</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    6
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é respeitador e protetor da Natureza
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    7
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é responsável e disciplinado
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    8
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é alegre e sorri perante as dificuldades
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    9
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é económico, sóbrio e respeitador dos bens dos
                    outros
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <span className="bg-scout-azul text-white w-7 h-7 rounded-full flex items-center justify-center font-bold mr-2">
                    10
                  </span>
                  <p className="font-semibold">
                    O Escoteiro é íntegro nos pensamentos, palavras e ações
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Compromisso de Honra */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-scout-azul mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
              Compromisso de Honra
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/2">
                <Image
                  src="/compromisso-honra.jpg" // Substitua pelo caminho da sua imagem
                  alt="Cerimônia de Compromisso de Honra dos Escoteiros"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-md w-full h-auto"
                  loading="lazy"
                />
              </div>

              <div className="md:w-1/2 bg-scout-azul/10 p-6 rounded-lg flex flex-col justify-center">
                <h3 className="text-xl font-bold text-scout-azul mb-4">
                  Prometo por minha Honra fazer o meu melhor por:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-scout-verde mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Cumprir os meus deveres para com a minha Fé (ou outra
                      alusão de natureza religiosa)* e a Pátria
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-scout-verde mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Auxiliar o próximo em todas as circunstâncias</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-scout-verde mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Viver segundo a Lei do Escoteiro</span>
                  </li>
                </ul>
                <p className="text-sm mt-4 italic">
                  * Por questões de convicção, a alusão religiosa pode ser
                  omitida.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-scout-verde p-8 rounded-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Preparado para Viver Estes Valores?
            </h2>
            <p className="mb-6">
              Junta-te a nós e descobre como o escotismo pode transformar a tua
              vida enquanto ajudamos a construir um mundo melhor.
            </p>
            <MissionBTNContact />
          </div>
        </article>
      </div>

      {/* Schema.org para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Missão e Valores do Grupo 92 dos Escoteiros de Portugal',
            description:
              'Conheça a missão, visão e valores que guiam o Grupo 92 dos Escoteiros de Portugal no Funchal, Madeira.',
            mainEntity: {
              '@type': 'Organization',
              name: 'Grupo 92 da Associação dos Escoteiros de Portugal - Funchal',
              ethicsPolicy: {
                '@type': 'CreativeWork',
                name: 'Lei do Escoteiro e Compromisso de Honra',
                text: 'O Escoteiro é verdadeiro e a sua palavra é sagrada, O Escoteiro é leal, O Escoteiro é prestável...',
              },
            },
          }),
        }}
      />
    </div>
  );
}
