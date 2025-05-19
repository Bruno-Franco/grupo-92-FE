// import { Fragment } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Nossa História | Grupo 92 dos Escoteiros - Funchal, Madeira',
  description:
    'Descobre a história do Grupo 92 da Associação dos Escoteiros de Portugal no Funchal: mais de 43 anos de aventuras, amizades e serviço à comunidade madeirense desde 1982. Junta-te a nós!',
  keywords:
    'grupo 92 escoteiros, escoteiros funchal, história escoteiros madeira, AEP madeira, Saúl Sousa escoteiros, lenço escoteiro, paróquia socorro funchal',
};

export default function SobreNos() {
  return (
    <div className="bg-scout-verde/5 ">
      {/* Hero da página */}
      <section>
        <div className="relative overflow-hidden md:min-h-[480px]">
          {/* <div className=" pl-2 gap-8 flex flex-col  justify-start  max-w-screen-xl mx-auto min-h-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold text-scout-azul text-center px-4 mt-10">
              A Nossa História
            </h1>
          </div> */}
          <Image
            className="min-w-screen"
            src="/cropped-grupo-92.png"
            alt="Grupo 92. Fim da década de 1990."
            fill
            quality={100}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              opacity: 0.75,
              zIndex: -1,
              objectPosition: 'top',
            }}
          />
        </div>
      </section>

      {/* Conteúdo principal */}
      <section className="w-full max-w-screen-xl mx-auto px-2 md:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-scout-azul mb-6">
            Mais de 40 Anos de História: Uma Aventura Que Continua!
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className="lg:w-5xl">
              <h3 className="text-2xl font-semibold text-scout-azul mb-4">
                As Nossas Origens
              </h3>
              <div className="float-right ml-4 mb-2 md:ml-6 w-1/2 max-w-[180px]">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <Image
                    src="/fundador-saul-sousa.png" // Caminho para a foto do fundador
                    alt="Saúl Tomás Ribeiro de Sousa - Fundador do Grupo 92"
                    width={160}
                    height={200}
                    className="rounded mx-auto mb-2"
                    loading="eager"
                  />
                  <p className="text-center text-sm font-medium text-scout-azul">
                    Saúl T. R. Sousa
                    <br />
                    Fundador
                  </p>
                </div>
              </div>
              <p className="mb-4">
                <strong>Sabias que</strong> o Grupo 92 da Associação dos
                Escoteiros de Portugal foi fundado oficialmente a{' '}
                <strong>22 de fevereiro de 1982</strong>? 🎉 Mas a nossa
                história começou um pouco antes! A primeira reunião aconteceu a
                13 de fevereiro, na casa do nosso primeiro chefe de grupo,{' '}
                <strong>Saúl Tomás Ribeiro de Sousa</strong>, que junto com
                dirigentes como Jacinta Sousa e Maria José Sousa, deu início a
                esta incrível aventura!
              </p>

              <p className="mb-4">
                Imagina só: começámos com um grupo maioritariamente de lobitos
                (os mais novos), mas também com alguns elementos da tribo júnior
                que formaram as nossas quatro primeiras patrulhas:{' '}
                <strong>Moby-Dick, Foca, Tubarão e Espadarte</strong> - nomes
                que refletem a nossa génese como Grupo Marítimo, que durante
                muitos anos usou uniforme azul! 🌊
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-scout-azul mb-4">
            O Nosso Lenço
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-xl font-bold text-scout-azul mb-3">
              🧭 Lenço do Grupo 92 do Funchal
            </h4>
            <p>
              O lenço é a nossa identidade! O do Grupo 92 é{' '}
              <strong>branco e azul</strong>:
            </p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>
                  <strong>Branco</strong>: Simboliza a honra e a pureza de
                  espírito que desenvolvemos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>
                  <strong>Azul</strong>: Representa o mar que rodeia a Madeira e
                  o céu que nos ilumina
                </span>
              </li>
            </ul>
            <Image
              src="/lenco-grupo-92.png"
              alt="Lenço do Grupo 92 nas cores branca e azul"
              width={500}
              height={400}
              className="rounded-lg mt-4 mx-auto"
              loading="lazy"
            />
          </div>

          <h3 className="text-2xl font-semibold text-scout-azul mb-4">
            A Nossa Jornada Pelo Funchal
          </h3>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-xl font-bold text-scout-azul mb-4">
              As Nossas Sedes Ao Longo do Tempo:
            </h4>

            <div className="relative pl-8 pb-5 border-l-2 border-scout-verde mb-4">
              <div className="absolute w-4 h-4 bg-scout-verde rounded-full -left-[9px]"></div>
              <h5 className="text-lg font-bold">1982-1985</h5>
              <p>
                Instalações da antiga FAOJ - Os primeiros passos como grupo!
              </p>
            </div>

            <div className="relative pl-8 pb-5 border-l-2 border-scout-verde mb-4">
              <div className="absolute w-4 h-4 bg-scout-verde rounded-full -left-[9px]"></div>
              <h5 className="text-lg font-bold">1985-1988</h5>
              <p>
                Ateneu Comercial do Funchal - Participámos em atividades como a
                Festa da Flor, a Mostra do Sapatinho e a Mostra do Antúrio!
              </p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-scout-verde rounded-full -left-[9px]"></div>
              <h5 className="text-lg font-bold">1988-Presente</h5>
              <p>
                Largo do Socorro nº1 - A nossa casa atual, onde continuamos a
                crescer e a servir a comunidade!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-scout-azul mb-4">
                O Nosso Impacto na Comunidade
              </h3>

              <p className="mb-4">
                Desde que nos mudámos para o Socorro em 1988, temos tido um{' '}
                <strong>papel ativo na comunidade madeirense</strong>! 🌟 Não
                somos apenas um grupo de jovens que se diverte - somos uma força
                positiva que faz a diferença!
              </p>

              <div className="bg-scout-azul/10 p-5 rounded-lg mb-6 border-l-scout-verde border-l-4">
                <h4 className="text-xl font-bold text-scout-azul mb-3">
                  Como Temos Ajudado:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">✓</span>
                    <span>
                      Participamos ativamente em atividades da{' '}
                      <strong>Paróquia do Socorro</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">✓</span>
                    <span>
                      Colaboramos com o{' '}
                      <strong>Patronato de Nossa Senhora das Dores</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">✓</span>
                    <span>
                      Apoiamos a <strong>Cruz Vermelha</strong> e a{' '}
                      <strong>Liga Portuguesa Contra o Cancro</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">✓</span>
                    <span>
                      Trabalhamos com a{' '}
                      <strong>Fundação Portuguesa de Cardiologia</strong>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">✓</span>
                    <span>
                      Recebemos a{' '}
                      <strong>Ordem de Benemérito da Cáritas</strong> em 2009!
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mb-4">
                Na década de 90, chegámos a ser um dos{' '}
                <strong>maiores grupos de escoteiros do país</strong>, com quase
                200 elementos! E tudo isto a funcionar numa pequena sala cedida
                pela Paróquia do Socorro. 💪 Hoje, com 54 elementos, o nosso
                espírito mantém-se forte e continuamos a seguir o caminho que
                Baden Powell nos mostrou!
              </p>
            </div>

            <div className=" w-full md:w-1/3 md:mt-18">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-scout-azul mb-4">
                  Chefes do Grupo 92
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Saúl Sousa</strong>: 1982 a 1992
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Miguel Ângelo Rodrigues</strong>: 1992 a 2002
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Ricardo Silva</strong>: 2002 a 2011
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Luís Cláudio Gonçalves</strong>: 2011 a 2017
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Tiago Vieira</strong>: 2017 a 2023
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      <strong>Marta Luís</strong>: 2023 a 2026
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-scout-azul mb-4">
            Mas Afinal... O Que É Ser Escoteiro no Grupo 92?
          </h3>

          <p className="mb-4">
            Ao longo destes <strong>43 anos</strong>, temos participado em
            diversas atividades nacionais e regionais da AEP, regionais do CNE e
            em intercâmbios com grupos do continente. Mas ser escoteiro é muito
            mais do que isso...
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-scout-azul mb-2">
                Ser Escoteiro no Grupo 92 é:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Aprender fazendo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Fazer amigos para
                  a vida
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Desenvolver
                  competências que nenhuma escola ensina
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Ajudar os outros e
                  a comunidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Divertir-se em
                  contacto com a natureza
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-scout-azul mb-2">
                O Que Aprendemos:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Trabalho em equipa
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Capacidade de
                  liderança
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Respeito pela
                  natureza
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Responsabilidade
                  cívica
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Valores para toda
                  a vida
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-scout-verde/10 p-6 rounded-lg border-l-4 border-scout-azul mt-8 mb-6">
            <h4 className="text-xl font-bold text-scout-azul mb-2">
              Acima de Tudo, Somos ESCOTEIROS! 🚩
            </h4>
            <p>
              Com 43 anos de história, continuamos com a ambição de trilhar o
              caminho que Baden Powell nos mostrou: divulgar o Escotismo e
              promover o convívio entre jovens. Queres fazer parte desta
              história? Vem conhecer-nos e escreve tu também o próximo capítulo
              do Grupo 92!
            </p>
          </div>
        </article>
      </section>

      {/* Schema.org para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Grupo 92 da Associação dos Escoteiros de Portugal - Funchal',
            description:
              'Grupo de escoteiros localizado no Funchal, Madeira, fundado em 1982, com 43 anos de história',
            // url: 'https://www.grupo92escoteiros.pt',
            foundingDate: '1982-02-22',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Funchal',
              addressRegion: 'Madeira',
              addressCountry: 'PT',
              streetAddress: 'Largo do Socorro nº1',
            },
            founder: {
              '@type': 'Person',
              name: 'Saúl Tomás Ribeiro de Sousa',
            },
          }),
        }}
      />
    </div>
  );
}
