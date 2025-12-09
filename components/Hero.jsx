'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiZap } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Tu Socio
              <span className="text-gradient block">Tecnológico</span>
              de Confianza
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Soluciones de TI estratégicas, seguras y escalables para empresas en Nicaragua y a nivel global. 
              Transformamos la complejidad tecnológica en crecimiento de negocio.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                <FiShield className="text-primary text-xl" />
                <span className="font-semibold">Máxima Seguridad</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg">
                <FiZap className="text-primary text-xl" />
                <span className="font-semibold">Innovación Continua</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#contacto" className="btn-primary flex items-center gap-2">
                Comenzar Ahora
                <FiArrowRight />
              </Link>
              <Link href="#servicios" className="btn-secondary">
                Nuestros Servicios
              </Link>
            </div>
          </motion.div>

          {/* Logo/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative glass rounded-2xl p-8 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
              <Image
                src="/logo.png"
                alt="TechServices Guz PS"
                width={500}
                height={500}
                className="relative rounded-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
