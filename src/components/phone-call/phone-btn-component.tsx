import Link from 'next/link';

export default function BTNCallPhone() {
  return (
    <Link
      href="tel:00351962812390"
      className=" flex items-center justify-center bg-scout-azul hover:bg-scout-verde hover:text-scout-azul text-scout-verde px-4 py-2 sm:px-6 text-sm font-semibold  transition duration-300 ease-in-out"
    >
      <span className="text-[11px] sm:text-[12px]">Ligue-nos!</span>
    </Link>
  );
}
