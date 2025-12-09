'use client';

import { motion } from 'framer-motion';
import { FiGlobe, FiTarget, FiTrendingUp } from 'react-icons/fi';

export default function About() {
  const visionPoints = [
    {
      icon: <FiGlobe />,
      title: 'Liderazgo Regional y Global',
      description: 'Referente de excelencia en servicios de TI y Outsourcing en Nicaragua y Centroamérica, con alcance global.'
    },
    {
      icon: <FiTarget />,
      title: 'Garantía de Continuidad',
      description: 'Infraestructura resiliente, eficiente y proactiva con las mejores prácticas de seguridad.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Innovación y Escalabilidad',
      description: 'Soluciones que posicionan a nuestros clientes para el crecimiento futuro sostenido.'
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="section-title text-center">Nuestra Visión</h2>
          <p className="section-subtitle text-center">
            Trascender las fronteras geográficas para convertirnos en el socio tecnológico estratégico 
            y consultor de TI líder en Centroamérica, con reconocida capacidad de servicio a nivel global.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-hover rounded-xl p-6 text-center"
              >
                <div className="text-5xl text-primary mb-4 flex justify-center">
                  {point.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
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
          className="glass rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-4xl font-display font-bold mb-6 text-gradient text-center">
            🚀 Nuestra Misión
          </h2>
          <p className="text-xl text-gray-200 mb-8 text-center max-w-4xl mx-auto">
            Proveer soluciones de tecnología de la información estratégicas, seguras y escalables 
            a empresas en Nicaragua y a nivel global, actuando como su socio tecnológico de confianza.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-bold text-primary mb-2">Garantizar la Continuidad</h4>
              <p className="text-gray-300 text-sm">
                Servicios gestionados, ciberseguridad y soluciones de Backup y Recuperación de primer nivel.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-bold text-primary mb-2">Impulsar la Innovación</h4>
              <p className="text-gray-300 text-sm">
                Proyectos de transformación digital y desarrollo de software que optimizan la eficiencia operativa.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-bold text-primary mb-2">Actuar con Profesionalismo</h4>
              <p className="text-gray-300 text-sm">
                Máximos estándares de integridad y servicio en cada interacción, sin importar la ubicación.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
