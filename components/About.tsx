'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">{t('title')}</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700 text-lg">
          <p>{t('text1')}</p>
          <p>{t('text2')}</p>
        </div>
      </div>
    </section>
  );
}
