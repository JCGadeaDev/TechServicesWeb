'use client';

import { motion } from 'framer-motion';
import { FiShield, FiCloud, FiServer, FiCode, FiUsers } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiShield />,
      title: 'Ciberseguridad y Resiliencia Digital',
      emoji: '🛡️',
      description: 'Protección proactiva y recuperación rápida para la continuidad de tu negocio.',
      features: [
        'Seguridad Perimetral y Endpoint Protection',
        'Pruebas de Penetración y Gestión de Vulnerabilidades',
        'Planes de Continuidad del Negocio (BC/DR)',
        'Backup con Veeam, Cove Data Protection, UrBackup'
      ]
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Computing y Modernización',
      emoji: '☁️',
      description: 'Eficiencia, escalabilidad global y reducción de costos en la nube.',
      features: [
        'Migraciones y gestión de Microsoft 365, Azure, AWS',
        'Infraestructura como Servicio (IaaS)',
        'Escritorios Virtuales (VDI)',
        'Optimización de plataformas cloud'
      ]
    },
    {
      icon: <FiServer />,
      title: 'Infraestructura y Servicios Gestionados',
      emoji: '🌐',
      description: 'Tu departamento de TI dedicado para operaciones óptimas 24/7.',
      features: [
        'Outsourcing de TI y Managed Services',
        'Diseño de Redes LAN/WAN y VPNs',
        'Virtualización y VoIP empresarial',
        'Mantenimiento de Hardware y Software'
      ]
    },
    {
      icon: <FiCode />,
      title: 'Desarrollo de Software y Estrategia Digital',
      emoji: '📈',
      description: 'Herramientas digitales que automatizan y posicionan tu marca.',
      features: [
        'Desarrollo Web y Aplicaciones a Medida',
        'Gestión de CRMs, ERP (Odoo, QuickBooks)',
        'Marketing Digital y Diseño Web',
        'Automatización de procesos empresariales'
      ]
    },
    {
      icon: <FiUsers />,
      title: 'Consultoría y Talento Especializado',
      emoji: '🧑‍💻',
      description: 'Experiencia y talento para guiar tus decisiones tecnológicas.',
      features: [
        'Consultoría en Transformación Digital',
        'Capacitación en nuevas tecnologías',
        'Headhunting de talento TI de alto nivel',
        'Evaluaciones de madurez tecnológica'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-transparent via-dark-200/50 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Nuestros Servicios</h2>
          <p className="section-subtitle text-center">
            Portafolio integral de soluciones diseñado para proteger, optimizar y hacer crecer tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-hover rounded-xl p-6 group"
            >
              <div className="text-5xl mb-4">{service.emoji}</div>
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
