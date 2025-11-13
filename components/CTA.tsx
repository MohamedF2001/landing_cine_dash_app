/* 'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />

            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/30 rounded-3xl p-12 md:p-16">
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 animate-pulse" />
                  <Sparkles className="relative w-6 h-6 text-red-500" />
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-red-400 font-medium">Disponible maintenant</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Prêt à transformer
                  <br />
                  <span className="text-red-600">votre gestion ?</span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Rejoignez les centaines de cinémas qui utilisent déjà CinéDash pour optimiser
                  leur gestion quotidienne et améliorer l'expérience de leurs clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-7 text-lg group transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-2xl hover:shadow-red-600/30"
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Télécharger l'APK
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/20 hover:border-red-600 hover:bg-red-600/10 text-white font-semibold px-10 py-7 text-lg group transition-all duration-300"
                  >
                    Accéder à la démo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Installation simple</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Support 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Mises à jour gratuites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-red-700 to-red-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />

            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/30 rounded-3xl p-12 md:p-16">
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 animate-pulse" />
                  <Sparkles className="relative w-6 h-6 text-red-500" />
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-red-400 font-medium">Disponible maintenant</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Prêt à transformer
                  <br />
                  <span className="text-red-600">votre gestion ?</span>
                </h2>

                <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Rejoignez les centaines de cinémas qui utilisent déjà CinéDash pour optimiser
                  leur gestion quotidienne et améliorer l'expérience de leurs clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {/* <Button
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-7 text-lg group transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-2xl hover:shadow-red-600/30"
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Télécharger l'APK
                  </Button> */}
 
                  <Link href="https://cine-dash.netlify.app/">
                    <Button
                      className="border-2 border-white/20 hover:border-red-600 hover:bg-red-600/10 text-white font-semibold px-10 py-7 text-lg group transition-all duration-300"
                    >
                      Accéder à la démo
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Installation simple</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Support 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    <span>Mises à jour gratuites</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
