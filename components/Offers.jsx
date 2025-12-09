'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiStar } from 'react-icons/fi';

export default function Offers() {
  const offers = [
    {
      title: 'Paquete Seguridad Total',
      tagline: 'Protección Completa',
      price: 'Consultar',
      featured: true,
      features: [
        'Auditoría de Seguridad Completa',
        'Implementación de Firewall de Nueva Generación',
        'Endpoint Protection para todos los dispositivos',
        'Backup Automatizado con Veeam',
        'Plan de Recuperación ante Desastres',
        'Monitoreo 24/7',
        'Soporte Técnico Prioritario'
      ]
    },
    {
      title: 'Migración a la Nube',
      tagline: 'Moderniza tu Infraestructura',
      price: 'Desde $999',
      featured: false,
      features: [
        'Evaluación de Infraestructura Actual',
        'Plan de Migración Personalizado',
        'Migración a Azure o AWS',
        'Configuración de Microsoft 365',
        'Capacitación del Personal',
        'Soporte Post-Migración (3 meses)'
      ]
    },
    {
      title: 'Outsourcing TI Empresarial',
      tagline: 'Tu Departamento de TI Dedicado',
      price: 'Mensual',
      featured: false,
      features: [
        'Soporte Técnico Remoto y On-Site',
        'Gestión de Servidores y Redes',
        'Mantenimiento Preventivo',
        'Gestión de Licencias y Software',
        'Reportes Mensuales de Performance',
        'Asesoría Tecnológica Estratégica'
      ]
    }
  ];

  return (
    <section id="ofertas" className="py-20 px-4 bg-gradient-to-b from-transparent via-dark-200/30 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Paquetes y Ofertas Especiales</h2>
          <p className="section-subtitle text-center">
            Soluciones integrales diseñadas para maximizar el valor de tu inversión
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 relative ${
                offer.featured
                  ? 'bg-gradient-to-br from-primary/20 to-blue-500/20 border-2 border-primary shadow-lg shadow-primary/30'
                  : 'glass-hover'
              }`}
            >
              {offer.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-500 px-4 py-1 rounded-full flex items-center gap-1">
                  <FiStar className="text-sm" />
                  <span className="text-sm font-bold">MÁS POPULAR</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold mb-2">{offer.title}</h3>
                <p className="text-primary text-sm mb-4">{offer.tagline}</p>
                <div className="text-4xl font-bold text-gradient">{offer.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <FiCheck className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  offer.featured
                    ? 'btn-primary'
                    : 'glass-hover'
                }`}
              >
                Solicitar Información
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center glass rounded-xl p-6"
        >
          <p className="text-lg text-gray-300">
            💡 ¿Necesitas una solución personalizada? <a href="#contacto" className="text-primary font-bold hover:underline">Contáctanos</a> para crear un paquete a medida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
