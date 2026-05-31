'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer');
  const contactT = useTranslations('contact');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DIME OFFICE</h3>
            <p className="text-gray-400">{t('about')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Szybkie Linki</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href={`/${locale}`} className="hover:text-white">
                  Strona Główna
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/how-to-start`} className="hover:text-white">
                  Jak Zacząć
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <p className="text-gray-400 text-sm">{contactT('phone')}</p>
            <p className="text-gray-400 text-sm">{contactT('hours')}</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
