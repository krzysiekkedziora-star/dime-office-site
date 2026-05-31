'use client';

import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Informacje Kontaktowe</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Adres</h4>
                <p className="text-gray-700 whitespace-pre-line">{t('address')}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="text-primary hover:text-secondary">
                  {t('phone')}
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <div className="space-y-1">
                  {t('email').split(', ').map((email: string, idx: number) => (
                    <a key={idx} href={`mailto:${email}`} className="text-primary hover:text-secondary block">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Godziny Otwarcia</h4>
                <p className="text-gray-700">{t('hours')}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informacja</h4>
                <p className="text-gray-700 text-sm">{t('info')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Mapa</h3>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 mb-2">ul. Głogowska 31/33</p>
                <p className="text-gray-600 mb-2">Poznań, Polska</p>
                <a
                  href="https://maps.google.com/?q=Głogowska+31/33+Poznań"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary font-semibold"
                >
                  Otwórz mapę →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
