'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Soluciones' }, // Cambiado a "Soluciones" (más corporativo)
    { href: '#tecnologias', label: 'Tecnologías' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-dark-100/80 backdrop-blur-md border-b border-white/5 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* --- Logo Area --- */}
            <Link href="#inicio" className="flex items-center gap-3 group relative z-50">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="TechServices Guz PS"
                  width={45}
                  height={45}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay sutil para el logo si es muy brillante */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold leading-tight tracking-tight">
                  Tech<span className="text-primary">Services</span>
                </span>
                <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                  Guz PS Solutions
                </span>
              </div>
            </Link>

            {/* --- Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 group"
                >
                  {link.label}
                  {/* Animación de subrayado */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* --- Desktop CTA --- */}
            <div className="hidden lg:flex items-center">
              <Link
                href="#contacto"
                className="btn-primary text-sm px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-2 group"
              >
                Agendar Demo
              </Link>
            </div>

            {/* --- Mobile Toggle Button --- */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 text-2xl text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Full Screen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-100/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center"
          >
            {/* Background decoration */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

            <nav className="relative z-10 flex flex-col items-center gap-8 w-full px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-gray-300 hover:text-white hover:scale-110 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-lg px-8 py-3 rounded-xl flex items-center gap-2"
                >
                  Contactar Ahora
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}