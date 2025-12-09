'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#tecnologias', label: 'Tecnologías' },
    { href: '#ofertas', label: 'Ofertas' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const services = [
    'Ciberseguridad',
    'Cloud Computing',
    'Outsourcing TI',
    'Desarrollo Software',
    'Consultoría TI'
  ];

  return (
    <footer className="bg-dark-400 border-t border-gray-800 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Tech<span className="text-primary">Services</span> Guz PS
            </h3>
            <p className="text-gray-400 mb-4">
              Tu socio tecnológico de confianza en Nicaragua y a nivel global.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
              >
                <FiFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-primary transition-colors"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail className="text-primary" />
                info@techservicesguzps.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                +505 XXXX-XXXX
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-primary" />
                Nicaragua
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} TechServices Guz PS. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Diseñado con <span className="text-primary">❤️</span> para la excelencia tecnológica
          </p>
        </div>
      </div>
    </footer>
  );
}
