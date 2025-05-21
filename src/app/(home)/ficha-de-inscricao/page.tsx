import FormInputs from '@/components/form-component/form-component';
import Image from 'next/image';
import { Metadata } from 'next';
import GrupoMaps from '@/components/map-component';

export const metadata: Metadata = {
  title: 'Inscrição | Grupo 92 dos Escoteiros - Funchal, Madeira',
  description:
    'Inscreva-se no Grupo 92 dos Escoteiros de Portugal no Funchal. Comece uma jornada de aventuras, amizades e desenvolvimento pessoal para toda a vida!',
  keywords:
    'inscrição escoteiros, junta-te ao grupo 92, escoteiros funchal inscrição, atividades escotismo madeira, como ser escoteiro',
};

export default function FichaDeInscricao() {
  return (
    <div className="bg-scout-verde/5 min-h-screen">
      {/* Hero section */}
      <section className="hidden sm:block relative w-full h-64 md:h-150 overflow-hidden">
        <Image
          src="/escoteiros-92-porto-santo.jpg" // Substitua pelo caminho para uma imagem de escoteiros em atividade
          alt="Junta-te ao Grupo 92 dos Escoteiros de Portugal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-scout-azul/70 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Junta-te à Nossa Aventura!
          </h1>
        </div>
      </section>

      {/* Conteúdo principal */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Cabeçalho do formulário */}
          <div className="bg-scout-azul text-white p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ficha de Pré-Inscrição
            </h2>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <div className="p-3 bg-white/20 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg">
                  Estás a um passo de iniciar uma jornada incrível! Preenche
                  este formulário e em breve entraremos em contacto.
                </p>
              </div>
            </div>
          </div>

          {/* Mensagem motivacional */}
          <div className="p-6 bg-scout-verde/10 border-l-4 border-scout-verde">
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-scout-verde flex-shrink-0 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-scout-verde text-lg mb-1">
                  O que acontece depois?
                </h3>
                <p className="text-gray-700">
                  Assim que recebermos o teu formulário, a nossa equipa entrará
                  em contacto para marcar uma visita! Podes trazer os teus
                  amigos e família para conhecerem as nossas instalações e
                  atividades.
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="p-6 md:p-10">
            <FormInputs />
          </div>
        </div>

        {/* Benefícios e informações adicionais */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-scout-azul mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
              O Que Oferecemos
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>Atividades semanais diversificadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>Acampamentos e excursões na natureza</span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>Desenvolvimento de competências para a vida</span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>Amizades que duram para sempre</span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">→</span>
                <span>Oportunidade de contribuir para a comunidade</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-scout-azul mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Perguntas Frequentes
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-scout-verde">
                  Que idades podem inscrever-se?
                </h4>
                <p className="text-gray-700">
                  Aceitamos jovens dos 6 aos 18 anos, divididos em secções por
                  faixa etária.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-scout-verde">
                  Quanto custa ser escoteiro?
                </h4>
                <p className="text-gray-700">
                  Informaremos sobre as quotas anuais durante a visita inicial.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-scout-verde">
                  É necessário equipamento?
                </h4>
                <p className="text-gray-700">
                  Inicialmente não é preciso adquirir nada - explicaremos tudo
                  no contacto inicial!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GrupoMaps />
      {/* Schema.org para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Ficha de Inscrição - Grupo 92 dos Escoteiros de Portugal',
            description:
              'Formulário de pré-inscrição para o Grupo 92 dos Escoteiros de Portugal no Funchal, Madeira',
            mainEntity: {
              '@type': 'Organization',
              name: 'Grupo 92 da Associação dos Escoteiros de Portugal - Funchal',
              memberOf: {
                '@type': 'Organization',
                name: 'Associação dos Escoteiros de Portugal',
              },
            },
          }),
        }}
      />
    </div>
  );
}
