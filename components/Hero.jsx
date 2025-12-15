'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGlobe, FiCpu, FiTrendingUp } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Innovación Tecnológica Global
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Impulsamos tu <br />
              <span className="text-gradient">Evolución Digital</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Fusionamos infraestructura <strong>Cloud & Hosting</strong>, análisis de <strong>Datos</strong> y desarrollo <strong>WEB</strong> para construir ecosistemas digitales que trascienden fronteras.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FiCpu className="text-primary" />
                <span className="text-sm font-medium">Cloud Native</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FiGlobe className="text-primary" />
                <span className="text-sm font-medium">Alcance Global</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                <FiTrendingUp className="text-primary" />
                <span className="text-sm font-medium">SEO Growth & Desarrollo Web</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="#contacto" className="btn-primary flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                Agendar Consultoría
              </Link>
              <Link href="#servicios" className="btn-secondary flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-white/5 transition-all">
                Explorar Soluciones
              </Link>
            </div>
          </motion.div>

          {/* Logo/Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Abstract Tech Visuals behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-[60px] animate-pulse-slow"></div>
            
            <div className="relative glass rounded-3xl p-8 lg:p-10 animate-float border border-white/10">
              {/* Code overlay decoration */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <Image
                src="/logo.png"
                alt="TechServices Guz PS - Soluciones Globales"
                width={600}
                height={600}
                className="relative rounded-xl drop-shadow-2xl"
                priority
              />
              
              {/* Floating Badge Overlay */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -right-6 glass px-6 py-4 rounded-xl border border-white/20 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <FiTrendingUp className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Uptime Garantizado</p>
                    <p className="text-lg font-bold text-white">99.9%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}