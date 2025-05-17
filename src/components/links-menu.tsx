import { Fragment } from 'react';
import Link from 'next/link';

export default function LinksMenu() {
  return (
    <Fragment>
      <Link href={'/sobre-nos'}>
        <span className="text-scout-azul">Sobre Nós</span>
      </Link>
      <Link href={'/missao-valores'}>
        <span className="text-scout-azul">Missão e Valores</span>
      </Link>
      <Link href={'/ficha-de-inscricao'}>
        <span className="text-scout-azul">Ficha de Inscrição</span>
      </Link>
    </Fragment>
  );
}
