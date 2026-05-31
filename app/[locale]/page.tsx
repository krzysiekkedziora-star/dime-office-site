'use client';

import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <WhyUs />
    </main>
  );
}
