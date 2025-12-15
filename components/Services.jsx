'use client';

import { motion } from 'framer-motion';
// Importamos iconos más específicos para Data, Cloud y Web
import { FiShield, FiCloud, FiDatabase, FiCode, FiGlobe, FiMonitor, FiArrowRight } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiMonitor />,
      title: 'Desarrollo Web & Experiencias Digitales',
      description: 'Creación de plataformas web de alto impacto, diseñadas para la conversión y optimizadas para velocidad.',
      features: [
        'Sitios Web Corporativos y E-commerce (Next.js)',
        'Diseño UI/UX centrado en el usuario global',
        'Webs Progresivas (PWA) y Mobile-First',
        'Integración de pasarelas de pago internacionales'
      ]
    },
    {
      icon: <FiGlobe />,
      title: 'Posicionamiento SEO & Estrategia Global',
      description: 'Hacemos que tu marca sea visible en los mercados internacionales mediante estrategias de búsqueda orgánica técnica.',
      features: [
        'Auditoría SEO Técnica y Semántica',
        'SEO Internacional (Multi-idioma/Multi-región)',
        'Optimización de Core Web Vitals',
        'Estrategias de Contenido y Linkbuilding'
      ]
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Solutions & Hosting Gestionado',
      description: 'Infraestructura en la nube robusta que garantiza que tu negocio opere 24/7 con latencia mínima a nivel mundial.',
      features: [
        'Arquitectura Cloud (AWS, Azure, Google Cloud)',
        'Hosting de Alto Rendimiento y Servidores VPS',
        'Gestión de Dominios y DNS Globales',
        'Migración de sistemas Legacy a la Nube'
      ]
    },
    {
      icon: <FiDatabase />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transformamos datos brutos en ventajas competitivas. Toma decisiones informadas con análisis en tiempo real.',
      features: [
        'Dashboards interactivos (Power BI, Tableau)',
        'Ingeniería de Datos y Procesos ETL',
        'Análisis predictivo para tendencias de mercado',
        'Auditoría y limpieza de bases de datos'
      ]
    },
    {
      icon: <FiCode />,
      title: 'Ingeniería de Software & Integraciones',
      description: 'Desarrollo de software a medida y APIs que automatizan flujos de trabajo complejos y conectan tus herramientas.',
      features: [
        'Desarrollo de SaaS y Microservicios',
        'Integración de ERPs y CRMs (Odoo, Salesforce)',
        'Automatización de procesos (RPA)',
        'Refactorización y modernización de código'
      ]
    },
    {
      icon: <FiShield />,
      title: 'Ciberseguridad & Compliance',
      description: 'Protección de grado empresarial para tus activos digitales, cumpliendo con estándares internacionales de seguridad.',
      features: [
        'Hacking Ético y Análisis de Vulnerabilidades',
        'Gestión de Identidades y Accesos (IAM)',
        'Planes de Recuperación ante Desastres (DRP)',
        'Seguridad para trabajo remoto y Endpoints'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block">Ecosistema de Soluciones</h2>
          <p className="section-subtitle mt-4 max-w-2xl mx-auto">
            Un portafolio integral diseñado para empresas que buscan escalar globalmente. 
            Fusionamos <strong>Infraestructura, Datos y Desarrollo</strong> para impulsar tu transformación digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-hover rounded-2xl p-8 group border border-white/5 hover:border-primary/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl text-primary rotate-12 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
              </div>

              <div className="text-4xl text-primary mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 border-t border-white/10 pt-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1 text-xs group-hover/item:text-white transition-colors">
                      <FiArrowRight />
                    </span>
                    <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}