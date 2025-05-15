import { Fragment } from 'react';
import Link from 'next/link';

export default function LinksMenu() {
  return (
    <Fragment>
      <Link href={'/sobre-nos'}>
        <span className="">Sobre Nós</span>
      </Link>
      <Link href={'/missao-valores'}>
        <span className="">Missão e Valores</span>
      </Link>
      <Link href={'/ficha-de-contato'}>
        <span className="">Ficha de Contato</span>
      </Link>
    </Fragment>
  );
}
