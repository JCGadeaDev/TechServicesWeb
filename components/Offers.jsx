'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiBriefcase, FiActivity, FiGlobe } from 'react-icons/fi';

export default function Offers() {
  const engagementModels = [
    {
      icon: <FiBriefcase />,
      title: 'Proyectos Estratégicos',
      subtitle: 'Implementación Puntual',
      type: 'Pago Único / Hitos',
      highlight: false,
      description: 'Ideal para empresas que necesitan modernizar áreas específicas sin compromisos a largo plazo.',
      features: [
        'Diseño y Desarrollo Web / App',
        'Auditorías de Ciberseguridad & SEO',
        'Migraciones a Cloud (AWS/Azure)',
        'Implementación de ERP (Odoo/QuickBooks)',
        'Entrega llave en mano con garantía'
      ]
    },
    {
      icon: <FiActivity />,
      title: 'Servicios Gestionados',
      subtitle: 'Soporte Continuo & Mantenimiento',
      type: 'Cuota Mensual (Retainer)',
      highlight: true,
      description: 'Tu departamento de TI externalizado. Garantizamos la continuidad operativa de tu negocio.',
      features: [
        'Mantenimiento Preventivo 24/7',
        'Gestión de Backups y Recuperación',
        'Soporte a Usuarios y Helpdesk',
        'Monitoreo de Infraestructura y Redes',
        'Informes Mensuales de KPI y Estado'
      ]
    },
    {
      icon: <FiGlobe />,
      title: 'Consultoría Enterprise',
      subtitle: 'Transformación Global',
      type: 'A Medida / Híbrido',
      highlight: false,
      description: 'Para organizaciones que buscan escalar operaciones globalmente con tecnología de punta.',
      features: [
        'Staff Augmentation (Talento TI Dedicado)',
        'Arquitectura de Datos y BI Avanzado',
        'Estrategia de Expansión Internacional',
        'Consultoría C-Level (CTO fraccional)',
        'SLA (Acuerdos de Nivel de Servicio) Personalizados'
      ]
    }
  ];

  return (
    <section id="ofertas" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Modelos de Colaboración</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Entendemos que cada empresa es única. Ofrecemos flexibilidad contractual 
            para adaptarnos a tus necesidades de flujo de caja y objetivos operativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 ${
                model.highlight
                  ? 'bg-gradient-to-b from-white/10 to-transparent border border-primary/50 shadow-2xl shadow-primary/10'
                  : 'bg-dark-100 border border-white/5 hover:border-white/20'
              }`}
            >
              {model.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Más Solicitado
                </div>
              )}

              {/* Header Card */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                  model.highlight ? 'bg-primary text-white' : 'bg-white/5 text-gray-300'
                }`}>
                  {model.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">{model.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{model.subtitle}</p>
                
                {/* Badge de tipo de pago */}
                <div className="inline-block bg-white/5 rounded-lg px-3 py-1 text-xs text-gray-400 border border-white/5">
                  {model.type}
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
                {model.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm group/item">
                    <FiCheck className={`mt-0.5 flex-shrink-0 ${
                      model.highlight ? 'text-primary' : 'text-gray-500 group-hover/item:text-primary transition-colors'
                    }`} />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contacto"
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  model.highlight
                    ? 'btn-primary shadow-lg shadow-primary/25 hover:shadow-primary/40'
                    : 'bg-white/5 text-white hover:bg-white/10 hover:scale-[1.02]'
                }`}
              >
                Solicitar Cotización
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left opacity-70"
        >
          <div className="flex -space-x-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-dark-200" /> 
            ))}
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            Únete a las empresas que han optimizado sus costos TI y mejorado su eficiencia operativa con nosotros.
          </p>
        </motion.div>
      </div>
    </section>
  );
}