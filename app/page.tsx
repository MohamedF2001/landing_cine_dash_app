'use client';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Screenshots from '@/components/Screenshots';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Screenshots />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
