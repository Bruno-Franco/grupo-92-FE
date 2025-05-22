import type { Metadata } from 'next';
import { Merriweather_Sans, Open_Sans } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

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
      <GoogleTagManager gtmId="G-DDR6S5WY04" />
      <body
        className={`${merriWeather.variable}  antialiased min-h-screen flex flex-col`}
      >
        <Script
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
        />
        {children}
      </body>
    </html>
  );
}
