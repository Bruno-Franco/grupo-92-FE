// import { Fragment } from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Nossa História | Grupo 92 dos Escoteiros de Portugal - Funchal, Madeira',
  description:
    'Descobre a incrível jornada do Grupo 92 dos Escoteiros de Portugal no Funchal, desde a sua fundação até hoje. Uma aventura de amizade, descoberta e serviço à comunidade.',
  keywords:
    'escoteiros madeira, grupo 92 funchal, história escoteiros, baden powell madeira, atividades escoteiros, jovens escoteiros',
};

export default function SobreNos() {
  return (
    <div className="bg-scout-verde/5 ">
      {/* Hero da página */}
      <section>
        <div className="relative overflow-hidden min-h-[600px]">
          <div className=" pl-2 gap-8 flex flex-col  justify-start  max-w-screen-xl mx-auto min-h-[500px]">
            <h1 className="text-4xl md:text-5xl font-bold text-scout-azul text-center px-4 mt-10">
              A Nossa História
            </h1>
          </div>
          <Image
            className="min-w-screen"
            src="/sobre-nos-hero.jpg"
            alt="Aventuras do Grupo 92 na Natureza da Madeira"
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

      {/* Conteúdo principal */}
      <div className="w-full max-w-screen-xl mx-auto px-2 md:px-6 py-10">
        <article className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-scout-azul mb-6">
            De 1917 até Hoje: Uma Aventura que Continua!
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold text-scout-verde mb-4">
                As Nossas Origens
              </h3>

              <p className="mb-4">
                <strong>Sabias que</strong> o primeiro grupo de escoteiros na
                Madeira foi criado em <mark>1917</mark>, influenciado pelos
                ingleses que viviam na ilha? 🌍 É verdade! E o Grupo 92, do qual
                tu podes fazer parte, nasceu durante uma época emocionante entre
                1982 e 1984, quando o movimento escotista estava a crescer e a
                ganhar força na nossa bela ilha!
              </p>

              <p className="mb-4">
                Imagina só: há mais de 40 anos, jovens como tu começaram a
                reunir-se para explorar a natureza incrível da Madeira, aprender
                competências que nenhuma escola ensina e formar amizades que
                duram para a vida inteira. Esta é a história que continua
                connosco até hoje!
              </p>

              <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
                Momentos Épicos da Nossa História
              </h3>

              <p className="mb-4">
                <strong>Já ouviste falar do Baden Powell?</strong> Ele é o
                fundador do movimento escotista mundial e — prepare-te para esta
                surpresa — visitou a nossa ilha em 1930! 🤯 Sim, o próprio
                criador dos escoteiros esteve mesmo aqui na Madeira, deixando um
                legado que inspirou gerações!
              </p>

              <p className="mb-4">
                Durante alguns anos, com a chegada da Mocidade Portuguesa, os
                escoteiros ficaram um pouco mais quietinhos. Mas não por muito
                tempo! A partir de 1967, voltámos com tudo, reativando grupos
                antigos e criando novos. É como dizemos no escotismo: &quot;
                <em>Estamos sempre preparados</em>&quot; para superar qualquer
                desafio!
              </p>
            </div>

            <div className="md:w-1/3 w-full">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-bold text-scout-azul mb-3">
                  🧭 Factos Incríveis
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>
                      Existem <strong>5 grupos</strong> de escoteiros na
                      Madeira!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>Baden Powell visitou a Madeira em 1930</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-scout-verde font-bold mr-2">→</span>
                    <span>O escotismo madeirense tem mais de 100 anos!</span>
                  </li>
                </ul>
              </div>

              <Image
                src="/escoteiros-atividades.jpg"
                alt="Jovens escoteiros do Grupo 92 em atividade na natureza"
                width={400}
                height={300}
                className="rounded-lg shadow-md md:w-full w-full"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            Saul Silva: O Visionário que Nos Inspirou
          </h3>
          <p className="mb-4">
            <strong>Conheces o Saul Silva?</strong> Foi ele quem, em 1982, deu
            os primeiros passos para fundar o nosso Grupo 92! 👨‍🏫 Com uma visão
            de formar jovens madeirenses autónomos, responsáveis e comprometidos
            com a comunidade, Saul reuniu os primeiros escoteiros do nosso grupo
            numa altura em que a Madeira precisava de novos heróis.
          </p>
          <p className="mb-4">
            Através da sua liderança e dedicação, o Saul transformou uma pequena
            ideia num dos grupos de escoteiros mais ativos da ilha, criando um
            legado que já tocou a vida de centenas de jovens funchalenses. O seu
            lema, &quot;<em>Aprender fazendo</em>&quot;, continua a ser o
            coração da nossa filosofia até hoje!
          </p>
          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            O Nosso Impacto na Madeira: Mais que Apenas Escoteiros
          </h3>
          <p className="mb-4">
            <strong>
              Já paraste para pensar no impacto que os escoteiros tiveram na
              Madeira?
            </strong>{' '}
            Somos muito mais do que acampamentos e nós de corda! 💪 Ao longo das
            décadas, o Grupo 92 tem sido uma verdadeira{' '}
            <mark>escola de cidadania</mark> para a juventude madeirense!
          </p>
          <div className="bg-scout-azul/10 p-5 rounded-lg mb-6">
            <h4 className="text-xl font-bold text-scout-azul mb-3">
              Como Transformamos a Sociedade Madeirense:
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">✓</span>
                <span>
                  Durante os <strong>incêndios de 2016</strong>, fomos dos
                  primeiros voluntários a organizar recolhas de bens essenciais,
                  mostrando o verdadeiro espírito de solidariedade escotista.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">✓</span>
                <span>
                  O nosso programa de <strong>limpeza das levadas</strong>{' '}
                  contribui para preservar estes canais históricos, fundamentais
                  para a água da ilha.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">✓</span>
                <span>
                  Dezenas de líderes comunitários e empresariais da Madeira
                  começaram a sua jornada connosco, aplicando os valores
                  escotistas no dia-a-dia.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-scout-verde font-bold mr-2">✓</span>
                <span>
                  A nossa{' '}
                  <strong>campanha anual de recolha de alimentos</strong> já
                  ajudou mais de 200 famílias madeirenses em dificuldade.
                </span>
              </li>
            </ul>
          </div>
          <p className="mb-4">
            Hoje, quando um escoteiro do Grupo 92 caminha pelas ruas do Funchal
            com o seu uniforme, é reconhecido e respeitado! Ao longo dos anos,
            construímos uma reputação sólida de serviço, responsabilidade e boa
            cidadania que nos enche de orgulho.
          </p>
          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            O Movimento Escotista: Uma Revolução Silenciosa
          </h3>
          <p className="mb-4">
            Se achas que ser escoteiro é só uma atividade de fim-de-semana,
            temos novidades para ti! 🌟 O escotismo é um{' '}
            <strong>movimento global</strong> que transforma jovens em líderes e
            cidadãos exemplares. Na Madeira, o impacto é ainda mais visível!
          </p>
          <p className="mb-4">
            Estudos globais mostram que jovens escoteiros têm{' '}
            <mark>maior probabilidade de assumir posições de liderança</mark>{' '}
            nas suas comunidades e escolas.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-scout-azul mb-2">
                Benefícios Comprovados:
              </h4>
              <p className="mb-2">
                Estudos da Organização Mundial do Movimento Escoteiro (OMME)
                demonstram que o escotismo desenvolve:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>Capacidade de trabalhar em equipa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>Habilidades de liderança</span>
                </li>
                <li className="flex items-start">
                  <span className="text-scout-verde font-bold mr-2">→</span>
                  <span>Resiliência e adaptabilidade</span>
                </li>
              </ul>
              <p className="text-xs mt-4 text-gray-600">
                <em>
                  Fonte: Organização Mundial do Movimento Escoteiro,{' '}
                  <a
                    href="https://www.scout.org/impact"
                    className="text-scout-azul hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Impact of Scouting
                  </a>
                  .
                </em>
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-scout-azul mb-2">
                Impacto Psicológico:
              </h4>
              <p>
                Jovens escoteiros do Grupo 92 apresentam níveis mais altos de:
              </p>
              <ul className="mt-2">
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Autoconfiança
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Capacidade de
                  resolução de problemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Consciência
                  ambiental
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-scout-verde">▲</span> Sentido de
                  propósito
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            O Nosso Futuro: A Próxima Geração de Líderes
          </h3>
          <p className="mb-4">
            Com mais de 40 anos de história, o Grupo 92 continua a evoluir e a
            adaptar-se aos novos tempos, incorporando competências tecnológicas
            aliadas aos valores escotistas tradicionais.
          </p>
          <p className="mb-4">
            Estamos comprometidos em preparar a próxima geração de madeirenses
            para os desafios do futuro: sustentabilidade ambiental, cidadania
            global, e transformação digital — tudo isto enquanto mantemos as
            nossas raízes firmes na natureza e nos valores que o Saul Silva nos
            ensinou.
          </p>
          <div className="bg-scout-verde/10 p-6 rounded-lg border-l-4 border-scout-azul mt-8 mb-6">
            <h4 className="text-xl font-bold text-scout-azul mb-2">
              Qual Será o Teu Papel Nesta História? 🚩
            </h4>
            <p>
              Cada escoteiro do Grupo 92 escreve um novo capítulo na nossa
              história. Quando te juntas a nós, não estás apenas a participar em
              atividades divertidas — estás a fazer parte de um legado com
              quatro décadas que transformou a Madeira e continua a formar os
              líderes do amanhã. És tu quem vai escrever o próximo capítulo
              desta incrível história!
            </p>
          </div>
          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            O Grupo 92 na Comunidade
          </h3>
          <p className="mb-4">
            O nosso grupo não é apenas sobre acampar e fazer nós (embora sejamos
            craques nisso também! 😉). Somos uma verdadeira força na comunidade
            do Funchal! Em 2010, quando a Paróquia do Socorro precisou de ajuda
            para as celebrações do Espírito Santo, quem é que apareceu? Sim, os
            escoteiros do Grupo 92! Estivemos lá todos os domingos, ajudando
            quando mais precisavam.
          </p>
          <p className="mb-4">
            Além do nosso grupo, existem outros escoteiros incríveis na ilha,
            como o Grupo 101 de Santa Luzia, que celebrou 40 anos em 2022. Somos
            todos parte de uma grande família que se estende por toda a Madeira!
          </p>
          <h3 className="text-2xl font-semibold text-scout-verde mb-4 mt-8">
            O Que Fazemos Hoje?
          </h3>
          <p className="mb-4">
            Hoje, o Grupo 92 continua mais forte e mais fixe do que nunca!
            Organizamos:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Aventuras na natureza</strong> - Explorar as levadas e
              montanhas da nossa incrível ilha
            </li>
            <li>
              <strong>Acampamentos</strong> - Dormir sob as estrelas e aprender
              a ser independente
            </li>
            <li>
              <strong>Projetos comunitários</strong> - Ajudar quem precisa e
              fazer a diferença no Funchal
            </li>
            <li>
              <strong>Jogos e desafios</strong> - Porque aprender deve ser
              divertido!
            </li>
            <li>
              <strong>Amizades para a vida</strong> - O melhor de tudo: conheces
              pessoas incríveis que serão teus amigos para sempre
            </li>
          </ul>
          <div className="bg-scout-azul/10 p-6 rounded-lg border-l-4 border-scout-verde mt-8">
            <h4 className="text-xl font-bold text-scout-azul mb-2">
              Pronto para Fazer Parte da Nossa História? 🚀
            </h4>
            <p className="mb-0">
              O Grupo 92 é mais do que um clube ou uma atividade extracurricular
              — somos uma família que cresce junta, aprende junta e se diverte
              junta! Estamos à tua espera para continuares esta incrível
              história connosco!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
