import BTNContact from '@/components/btn-contact/button-contact-component';
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <div className="relative overflow-hidden min-h-[500px]">
        <div className="pl-4 gap-8 flex flex-col items-start justify-center  max-w-screen-xl mx-auto min-h-[500px]">
          <div className="">
            <h2 className="text-3xl  sm:text-5xl text-scout-azul mb-2.5">
              Venha Fazer Parte
            </h2>
            <h2 className="text-3xl  sm:text-5xl text-scout-azul">
              Desta Jornada!
            </h2>
          </div>
          <BTNContact />
        </div>
        <Image
          className="min-w-screen mask-l-from-20%"
          src="/escoteiros.jpg"
          alt="Escoteiros"
          fill
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            opacity: 0.6,
            zIndex: -1,
            objectPosition: 'center',
          }}
        />
      </div>
      <div className="w-full max-w-screen-xl mx-auto px-1">
        <h1>Grupo 92</h1>
        <p>
          O Grupo 92 dos Escoteiros de Portugal, sediado no Funchal, Madeira, é
          uma unidade da Associação dos Escoteiros de Portugal (AEP). Este grupo
          faz parte da presença escotista na região, que remonta a 1917, quando
          foi fundado o primeiro grupo no antigo Liceu Jaime Moniz, influenciado
          pela comunidade inglesa na Madeira.
        </p>
        <p>
          Embora não haja informações detalhadas sobre a data exata de fundação
          do Grupo 92, sabe-se que, entre 1982 e 1984, houve um esforço
          significativo para expandir o escotismo na Madeira, resultando na
          formação de vários grupos, incluindo o Grupo 92.
        </p>

        <p>
          O Grupo 92 tem desempenhado um papel ativo na comunidade local,
          colaborando com a Paróquia do Socorro em diversas atividades. Por
          exemplo, em abril de 2010, o grupo participou nas celebrações do
          Espírito Santo, auxiliando nas festividades dominicais, especialmente
          num período em que a paróquia enfrentava escassez de colaboradores.
        </p>
        <p>
          A Associação dos Escoteiros de Portugal tem uma presença significativa
          na Madeira, com vários grupos distribuídos pela região. Além do Grupo
          92, existem outros grupos no Funchal, como o Grupo 101 - Santa Luzia,
          que celebrou o seu 40.º aniversário em dezembro de 2022.
        </p>
        <p>
          A AEP na Madeira tem uma história rica, marcada por momentos
          importantes, como a visita de Baden Powell, fundador do escotismo
          mundial, à ilha em 1930. Após um período de menor atividade devido à
          influência da Mocidade Portuguesa, a AEP retomou o seu dinamismo na
          região a partir de 1967, com a reativação e fundação de vários grupos.
        </p>
        <p>
          O Grupo 92 continua a ser uma parte integrante desta tradição
          escotista na Madeira, contribuindo para o desenvolvimento de crianças
          e jovens através de atividades que promovem valores como a
          responsabilidade, o companheirismo e o serviço à comunidade.
        </p>
      </div>
    </section>
  );
}
