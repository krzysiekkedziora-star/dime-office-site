'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    { q: 'q1', a: 'a1' },
    { q: 'q2', a: 'a2' },
    { q: 'q3', a: 'a3' },
    { q: 'q4', a: 'a4' },
    { q: 'q5', a: 'a5' },
  ];

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('title')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => setOpenFAQ(openFAQ === faq.q ? null : faq.q)}
                  className="w-full p-6 text-left font-semibold text-gray-900 hover:bg-gray-50 transition flex justify-between items-center"
                >
                  {t(faq.q)}
                  <span className={`text-primary transition ${openFAQ === faq.q ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFAQ === faq.q && (
                  <div className="px-6 pb-6 text-gray-700">{t(faq.a)}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
