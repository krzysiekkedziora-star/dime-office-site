'use client';

import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    { key: 'address', icon: '📍' },
    { key: 'mail', icon: '📧' },
    { key: 'conference', icon: '👥' },
    { key: 'support', icon: '💼' },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.key} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {t(`${service.key}.name`)}
              </h3>
              <p className="text-gray-700">{t(`${service.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
