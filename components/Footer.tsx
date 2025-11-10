'use client';

import { Film, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CinéDash</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              La solution professionnelle pour gérer votre salle de cinéma avec efficacité
              et modernité. Dashboard, films, séances et réservations en un seul endroit.
            </p>
            <div className="flex gap-4">
              {['github', 'twitter', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-gray-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social}
                >
                  <div className="w-5 h-5 bg-white/20 rounded" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {['Fonctionnalités', 'Documentation', 'Support', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:frdmoussiliou@gmail.com"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  frdmoussiliou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2290160720383"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  +229 01 60 72 03 83
                </a>
              </li>
              <li className="text-gray-400 flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Cotonou, Benin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} CinéDash. Tous droits réservés.
            </p>

            <div className="flex gap-6 text-sm">
              {['Mentions légales', 'Confidentialité', 'CGU'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
    </footer>
  );
}
