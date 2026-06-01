import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'DIME OFFICE - Poznań | Wirtualne Biuro',
  description: 'Profesjonalne wirtualne biuro w Poznaniu od 2011 roku. Adres do rejestracji, obsługa korespondencji, sale konferencyjne.',
};

export async function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'en' }, { locale: 'uk' }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-slate-900 text-slate-100">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
