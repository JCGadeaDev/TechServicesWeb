'use client';

import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram, FiFacebook, FiGithub, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { name: 'Cloud & Hosting', href: '#servicios' },
    { name: 'Desarrollo Web & Apps', href: '#servicios' },
    { name: 'Ciberseguridad', href: '#servicios' },
    { name: 'Data Analytics', href: '#servicios' },
    { name: 'SEO & Growth', href: '#servicios' }
  ];

  const company = [
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Casos de Éxito', href: '#inicio' }, // Placeholder para futuro
    { name: 'Tecnologías', href: '#tecnologias' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const legal = [
    { name: 'Política de Privacidad', href: '#' },
    { name: 'Términos de Servicio', href: '#' },
    { name: 'SLA (Nivel de Servicio)', href: '#' }
  ];

  return (
    <footer className="bg-dark-100 border-t border-white/10 pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Decorative gradient glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="#inicio" className="block">
              <h3 className="text-2xl font-display font-bold text-white">
                Tech<span className="text-primary">Services</span>
                <span className="block text-xs font-normal text-gray-400 tracking-widest mt-1">GUZ PS SOLUTIONS</span>
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformamos negocios mediante infraestructura cloud, desarrollo de software y estrategias de datos. Tu socio para la escalabilidad global.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <FiLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <FiInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <FiFacebook />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Soluciones</h4>
            <ul className="space-y-4">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="text-primary mt-1 text-lg flex-shrink-0" />
                <span>
                  Managua, Nicaragua.<br />
                  <span className="text-xs opacity-70">Cobertura Remota Global</span>
                </span>
              </li>
              <li>
                <a href="mailto:techservicesguz@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <FiMail className="text-primary text-lg group-hover:scale-110 transition-transform" />
                  techservicesguz@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50585532190" target="_blank" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                  <FiPhone className="text-primary text-lg group-hover:scale-110 transition-transform" />
                  +505 8553 2190
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} TechServices Guz PS. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}