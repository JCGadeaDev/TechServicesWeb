'use client';

import { motion } from 'framer-motion';
import { 
  FiCloud, 
  FiCode, 
  FiDatabase, 
  FiShield, 
  FiLayout, 
  FiServer,
  FiCheckCircle 
} from 'react-icons/fi';

export default function Technologies() {
  
  const techStacks = [
    {
      id: 'dev',
      title: 'Desarrollo & Web Moderno',
      icon: <FiCode />,
      description: 'Frameworks de alto rendimiento para experiencias digitales rápidas y escalables.',
      tools: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'WordPress Headless']
    },
    {
      id: 'cloud',
      title: 'Cloud & Infraestructura',
      icon: <FiCloud />,
      description: 'Arquitecturas híbridas y nativas en la nube para disponibilidad global.',
      tools: ['AWS Services', 'Microsoft Azure', 'Docker', 'Linux Enterprise', 'Windows Server', 'VDI Solutions']
    },
    {
      id: 'data',
      title: 'Data & Analytics',
      icon: <FiDatabase />,
      description: 'Herramientas de inteligencia de negocios para transformar datos en decisiones.',
      tools: ['Power BI', 'Python', 'SQL Server', 'Google Analytics 4', 'Looker Studio', 'ETL Processes']
    },
    {
      id: 'security',
      title: 'Ciberseguridad & Resiliencia',
      icon: <FiShield />,
      description: 'Protección multicapa y estrategias de recuperación ante desastres.',
      tools: ['Fortinet', 'Veeam Backup', 'Cove Data Protection', 'Sophos', 'Bitdefender', 'Zero Trust Arch']
    },
    {
      id: 'enterprise',
      title: 'Enterprise & Gestión',
      icon: <FiLayout />,
      description: 'Sistemas centrales para la optimización de recursos empresariales.',
      tools: ['Microsoft 365', 'Odoo ERP', 'QuickBooks', 'CRM Integrations', 'SharePoint', 'Teams Voice']
    },
    {
      id: 'seo',
      title: 'SEO & Performance',
      icon: <FiServer />, // Usamos server/performance icon
      description: 'Optimización técnica para motores de búsqueda y velocidad de carga.',
      tools: ['Google Search Console', 'SEMrush', 'Lighthouse', 'Core Web Vitals', 'Schema Markup', 'CDN Management']
    }
  ];

  return (
    <section id="tecnologias" className="py-24 px-4 bg-dark-200 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Nuestro Arsenal Tecnológico</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Dominamos un stack diversificado que combina la robustez corporativa con 
            la agilidad del desarrollo moderno para proyectos de alcance internacional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-hover rounded-2xl p-8 border border-white/5 hover:border-primary/30 group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white leading-tight">
                  {stack.title}
                </h3>
              </div>
              
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">
                {stack.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                  >
                    <FiCheckCircle className="text-primary text-[10px]" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-gray-500/50 to-transparent">
            <div className="bg-dark-100 px-6 py-2 rounded-full border border-white/5">
              <p className="text-sm text-gray-400">
                ¿No ves tu tecnología aquí? <span className="text-primary font-semibold">Nos adaptamos a tu infraestructura actual.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}