'use client';

import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');

  const packages = [
    { key: 'package1' },
    { key: 'package2' },
    { key: 'package3' },
    { key: 'package4' },
    { key: 'package5' },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">{t('title')}</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">{t('subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.key} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition border-2 border-transparent hover:border-primary">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {t(`${pkg.key}.name`)}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{t(`${pkg.key}.price`)}</span>
                <span className="text-gray-600 ml-2">{t(`${pkg.key}.period`)}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {t.raw(`${pkg.key}.features`)?.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition font-semibold">
                Wybierz Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
