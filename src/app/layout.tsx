import type { Metadata } from 'next';
import { Merriweather_Sans, Open_Sans } from 'next/font/google';
import './globals.css';

const merriWeather = Merriweather_Sans({
  variable: '--font-merriWeather-sans',
  subsets: ['latin'],
});
const openSans = Open_Sans({
  variable: '--font-open_sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Grupo de Escoteiros 92 | Funchal, Madeira',
  description:
    'Junta-te ao Grupo 92 de Escoteiros do Funchal! Descobre aventuras, competências para a vida e faz amizades duradouras. Uma experiência única para todas as idades, dos 6 aos 18 anos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} antialiased`}
    >
      <body
        className={`${merriWeather.variable}  antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
