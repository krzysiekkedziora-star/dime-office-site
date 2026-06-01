'use client';

import { useState } from 'react';

export default function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pl', name: '🇵🇱 PL', label: 'Polski' },
    { code: 'en', name: '🇬🇧 EN', label: 'English' },
    { code: 'uk', name: '🇺🇦 UK', label: 'Українська' },
  ];

  const switchLanguage = (locale: string) => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${currentLocale}`, `/${locale}`);
      window.location.href = newPath || `/${locale}`;
    }
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === currentLocale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition text-sm font-medium"
      >
        {currentLang?.name}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden z-50">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left text-sm transition ${
                currentLocale === lang.code
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang.name} - {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
