'use client';

import { useState, useEffect, useRef } from 'react';
import { BarChart3, Film, Calendar, Ticket } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard Analytics',
    description: 'Suivez les performances de votre cinéma avec des graphiques interactifs et des statistiques en temps réel.',
    color: 'from-red-500 to-orange-500',
    delay: '0',
  },
  {
    icon: Film,
    title: 'Gestion des Films',
    description: 'Administrez votre catalogue complet : films populaires, à venir, mieux notés avec tous les détails.',
    color: 'from-red-600 to-red-800',
    delay: '100',
  },
  {
    icon: Calendar,
    title: 'Planning des Séances',
    description: 'Organisez vos séances avec précision : date, heure, prix, salle et types de tickets disponibles.',
    color: 'from-gray-700 to-gray-900',
    delay: '200',
  },
  {
    icon: Ticket,
    title: 'Réservations en Direct',
    description: 'Gérez les réservations en temps réel avec une interface moderne et des notifications instantanées.',
    color: 'from-red-700 to-black',
    delay: '300',
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Fonctionnalités complètes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tous les outils dont vous avez besoin pour gérer votre cinéma de manière professionnelle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-1000 delay-${feature.delay} transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm font-semibold">En savoir plus</span>
                    <div className="w-4 h-0.5 bg-red-500 group-hover:w-8 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-full px-8 py-4">
            {[
              { label: 'Temps réel', value: '100%' },
              { label: 'Utilisateurs', value: '500+' },
              { label: 'Séances/jour', value: '1000+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-1000 delay-${index * 100} transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="text-3xl font-bold text-red-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
