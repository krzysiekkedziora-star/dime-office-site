'use client';

import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('faq.why');

  const reasons = [
    'reason1',
    'reason2',
    'reason3',
    'reason4',
    'reason5',
    'reason6',
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-start gap-4">
              <div className="text-3xl text-primary mt-1">⭐</div>
              <p className="text-gray-700 text-lg">{t(reason)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
