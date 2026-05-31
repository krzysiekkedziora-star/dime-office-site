'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const locales = ['pl', 'en', 'uk'];

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('header');
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const isActive = (path: string) => pathname.includes(path);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold text-primary">
          DIME OFFICE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href={`/${locale}`}
            className={`${isActive('') && !isActive('how') ? 'text-primary font-semibold' : 'text-gray-600'} hover:text-primary transition`}
          >
            {t('home')}
          </Link>
          <a
            href={`#services`}
            className="text-gray-600 hover:text-primary transition"
          >
            {t('services')}
          </a>
          <a
            href={`#pricing`}
            className="text-gray-600 hover:text-primary transition"
          >
            {t('pricing')}
          </a>
          <Link
            href={`/${locale}/how-to-start`}
            className={`${isActive('how') ? 'text-primary font-semibold' : 'text-gray-600'} hover:text-primary transition`}
          >
            {t('howToStart')}
          </Link>
          <Link
            href={`/${locale}/faq`}
            className={`${isActive('faq') ? 'text-primary font-semibold' : 'text-gray-600'} hover:text-primary transition`}
          >
            {t('faq')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className={`${isActive('contact') ? 'text-primary font-semibold' : 'text-gray-600'} hover:text-primary transition`}
          >
            {t('contact')}
          </Link>
        </div>

        {/* Language Switcher */}
        <div className="flex gap-2 items-center">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                locale === lang
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-6 h-0.5 bg-primary"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-4 py-4 space-y-3 flex flex-col">
            <Link href={`/${locale}`} className="text-gray-600 hover:text-primary">
              {t('home')}
            </Link>
            <a href="#services" className="text-gray-600 hover:text-primary">
              {t('services')}
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">
              {t('pricing')}
            </a>
            <Link href={`/${locale}/how-to-start`} className="text-gray-600 hover:text-primary">
              {t('howToStart')}
            </Link>
            <Link href={`/${locale}/faq`} className="text-gray-600 hover:text-primary">
              {t('faq')}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-primary">
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
