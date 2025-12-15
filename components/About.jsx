'use client';

import { motion } from 'framer-motion';
// Actualizamos los iconos para reflejar mejor: Cloud (Cloud), Data (BarChart), y Web/Global (Globe/Layout)
import { FiGlobe, FiLayers, FiBarChart2, FiCpu, FiLayout, FiShield } from 'react-icons/fi';

export default function About() {
  const visionPoints = [
    {
      icon: <FiGlobe />,
      title: 'Presencia Digital Global',
      description: 'Conectamos negocios con mercados internacionales a través de desarrollo web de vanguardia y estrategias de posicionamiento SEO global.'
    },
    {
      icon: <FiCpu />,
      title: 'Infraestructura Cloud & Hosting',
      description: 'Arquitecturas en la nube escalables y hosting de alto rendimiento que garantizan disponibilidad 24/7 en cualquier parte del mundo.'
    },
    {
      icon: <FiBarChart2 />,
      title: 'Decisiones Basadas en Datos',
      description: 'Transformamos información en activos estratégicos mediante Análisis de Datos e inteligencia de negocios para un crecimiento medible.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="section-title text-center">Nuestra Visión</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Ser el arquitecto digital preferido por empresas visionarias, trascendiendo fronteras 
            para integrar <strong>Desarrollo, Cloud y Data</strong> en un ecosistema tecnológico 
            que compite con los más altos estándares internacionales.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-hover rounded-xl p-8 text-center group border border-white/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-5xl text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-14 border border-white/10 relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-6 text-gradient text-center md:text-left">
              🚀 Nuestra Misión
            </h2>
            <p className="text-xl text-gray-200 mb-10 text-center md:text-left max-w-4xl">
              Potenciar la evolución de las organizaciones mediante soluciones tecnológicas integrales. 
              Desde la <strong>optimización SEO</strong> y presencia web, hasta la gestión robusta de 
              <strong> Hosting y Cloud</strong>, actuamos como el motor de innovación para clientes que exigen excelencia mundial.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-10">
              <div className="border-l-4 border-primary pl-6 hover:bg-white/5 p-4 rounded-r-lg transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <FiLayout className="text-primary text-xl" />
                  <h4 className="font-bold text-white text-lg">Web & SEO</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desarrollo de experiencias digitales inmersivas optimizadas para motores de búsqueda, asegurando visibilidad y conversión global.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 hover:bg-white/5 p-4 rounded-r-lg transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <FiLayers className="text-primary text-xl" />
                  <h4 className="font-bold text-white text-lg">Cloud & Hosting</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Implementación de infraestructuras resilientes y seguras en la nube, garantizando escalabilidad para negocios en expansión.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6 hover:bg-white/5 p-4 rounded-r-lg transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <FiShield className="text-primary text-xl" />
                  <h4 className="font-bold text-white text-lg">Seguridad & Datos</h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Protección de activos digitales y análisis profundo de datos para reducir riesgos y descubrir nuevas oportunidades de mercado.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}