'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('hero');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{t('title')}</h1>
        <p className="text-2xl mb-4 opacity-90">{t('subtitle')}</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">{t('description')}</p>
        <Link
          href={`/${locale}/how-to-start`}
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          {t('cta')}
        </Link>
      </div>
    </section>
  );
}
