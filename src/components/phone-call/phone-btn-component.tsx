import Link from 'next/link';

export default function BTNCallPhone() {
  return (
    <Link
      href="tel:00351962812390"
      className=" flex items-center justify-center bg-scout-azul hover:bg-scout-verde hover:text-scout-azul text-scout-verde py-2 px-6 text-sm font-semibold  transition duration-300 ease-in-out"
    >
      <span>Ligue-nos!</span>
    </Link>
  );
}
