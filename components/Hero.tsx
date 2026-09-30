'use client';

import { useState, useEffect } from 'react';
import { Film, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`text-left transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-2 mb-6">
              <Film className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400 font-medium">Application de Gestion Cinéma</span>
            </div> */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Gérez votre</span>
              <br />
              <span className="text-red-600">Cinéma</span>
              <br />
              <span className="text-white">en toute simplicité</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              CinéDash est la solution complète pour administrer votre salle de cinéma :
              dashboard analytique, gestion de films, organisation de séances et réservations en temps réel.
            </p>
 
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://cinedash.netlify.app/">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg group transition-all duration-300"
                >
                  Accéder à la démo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                className="border-2 border-white/20 hover:border-red-600 hover:bg-red-600/10 text-white font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                En savoir plus
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="relative">
              <div className="absolute -inset-4" />

              <Image
                  src="/screenshots/present.png"
                  alt="CinéDash Dashboard Preview"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />

              {/* <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-2xl p-8 shadow-2xl overflow-hidden">
                <Image
                  src="/screenshots/present.png"
                  alt="CinéDash Dashboard Preview"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div> */}
    </section>
  );
}
