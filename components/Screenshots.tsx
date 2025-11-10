/* 'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Vue d\'ensemble des performances',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Gestion des Films',
    description: 'Catalogue complet de films',
    gradient: 'from-red-600 to-red-800',
  },
  {
    id: 3,
    title: 'Planning des Séances',
    description: 'Organisation temporelle',
    gradient: 'from-gray-700 to-gray-900',
  },
  {
    id: 4,
    title: 'Réservations en Direct',
    description: 'Gestion en temps réel',
    gradient: 'from-red-700 to-black',
  },
  {
    id: 5,
    title: 'Statistiques Détaillées',
    description: 'Analyses approfondies',
    gradient: 'from-orange-600 to-red-700',
  },
];

export default function Screenshots() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Découvrez l'interface
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une expérience utilisateur moderne et intuitive pour gérer tous les aspects de votre cinéma
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 hover:translate-x-0"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 hover:translate-x-0"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`flex-shrink-0 w-[90%] sm:w-[450px] transition-all duration-700 delay-${index * 100} transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group/card relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur" />

                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden transform group-hover/card:scale-[1.02] transition-transform duration-500">
                    <div className={`aspect-video bg-gradient-to-br ${screenshot.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20" />

                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/20 rounded-full" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-white/20 rounded w-3/4 mx-auto" />
                            <div className="h-3 bg-white/10 rounded w-1/2 mx-auto" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-b from-gray-900/50 to-black">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-gray-400">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-700 hover:bg-red-600 transition-colors duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const screenshots: { id: number; title: string; description: string; gradient: string; src?: string }[] = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Vue d\'ensemble des performances',
    gradient: 'from-red-500 to-orange-500',
    // Exemple : placez vos images dans `public/screenshots/` puis mettez le chemin ci-dessous
    // ex: src: '/screenshots/dashboard.png'
    // Laissez `src` undefined pour utiliser le visuel actuel (dégradé + placeholder)
    src: '/screenshots/dashc.png',
  },
  {
    id: 2,
    title: 'Gestion des Films',
    description: 'Catalogue complet de films',
    gradient: 'from-red-600 to-red-800',
    src: '/screenshots/gest.png',
  },
  {
    id: 3,
    title: 'Planning des Séances',
    description: 'Organisation temporelle',
    gradient: 'from-gray-700 to-gray-900',
    src: '/screenshots/seances.png',
  },
  {
    id: 4,
    title: 'Réservations en Direct',
    description: 'Gestion en temps réel',
    gradient: 'from-red-700 to-black',
    src: '/screenshots/reserver.png',
  },
  // {
  //   id: 5,
  //   title: 'Statistiques Détaillées',
  //   description: 'Analyses approfondies',
  //   gradient: 'from-orange-600 to-red-700',
  //   // src: '/screenshots/stats.png',
  // },
];

export default function Screenshots() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Découvrez l'interface
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une expérience utilisateur moderne et intuitive pour gérer tous les aspects de votre cinéma
          </p>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 hover:translate-x-0"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-red-600 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 hover:translate-x-0"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={`flex-shrink-0 w-[90%] sm:w-[450px] transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="group/card relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 blur" />

                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden transform group-hover/card:scale-[1.02] transition-transform duration-500">
                    <div className={`aspect-video relative bg-gradient-to-br ${screenshot.gradient}`}>
                      {/* Si `src` est fourni, afficher l'image (depuis `public/`) sinon garder le fallback */}
                      {screenshot.src ? (
                        <div
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => {
                            setActiveSrc(screenshot.src ?? null);
                            setLightboxOpen(true);
                          }}
                        >
                          <Image
                            src={screenshot.src}
                            alt={screenshot.title}
                            fill
                            className="object-contain object-center"
                            sizes="(max-width: 640px) 90vw, 450px"
                          />
                          <div className="absolute inset-0 bg-black/20" />
                        </div>
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-black/20" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover/card:scale-110 transition-transform duration-500">
                                <div className="w-12 h-12 bg-white/20 rounded-full" />
                              </div>
                              <div className="space-y-2">
                                <div className="h-4 bg-white/20 rounded w-3/4 mx-auto" />
                                <div className="h-3 bg-white/10 rounded w-1/2 mx-auto" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6 bg-gradient-to-b from-gray-900/50 to-black">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-gray-400">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox overlay */}
        {lightboxOpen && activeSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 z-50 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                onClick={() => setLightboxOpen(false)}
                aria-label="Fermer"
              >
                ✕
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={activeSrc}
                  alt="Screenshot"
                  width={1600}
                  height={900}
                  className="object-contain object-center max-h-[90vh]"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-gray-700 hover:bg-red-600 transition-colors duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
