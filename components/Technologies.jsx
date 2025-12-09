'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Technologies() {
  const technologies = [
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Microsoft 365', category: 'Productivity' },
    { name: 'Veeam Backup', category: 'Backup' },
    { name: 'Cove Data Protection', category: 'Backup' },
    { name: 'Odoo ERP', category: 'Business' },
    { name: 'QuickBooks', category: 'Business' },
    { name: 'VMware', category: 'Virtualization' },
    { name: 'Fortinet', category: 'Security' },
    { name: 'Cisco', category: 'Network' },
    { name: 'VoIP Systems', category: 'Communication' },
    { name: 'Linux/Windows Server', category: 'Infrastructure' }
  ];

  const categories = [...new Set(technologies.map(t => t.category))];

  return (
    <section id="tecnologias" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Tecnologías con las que Trabajamos</h2>
          <p className="section-subtitle text-center">
            Utilizamos las plataformas y herramientas líderes de la industria
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-hover rounded-xl p-6 text-center group"
            >
              <div className="text-4xl mb-3">
                {tech.category === 'Cloud' && '☁️'}
                {tech.category === 'Security' && '🔒'}
                {tech.category === 'Backup' && '💾'}
                {tech.category === 'Business' && '💼'}
                {tech.category === 'Virtualization' && '🖥️'}
                {tech.category === 'Network' && '🌐'}
                {tech.category === 'Communication' && '📞'}
                {tech.category === 'Infrastructure' && '⚙️'}
                {tech.category === 'Productivity' && '📊'}
              </div>
              <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300">
            Y muchas más tecnologías adaptadas a las necesidades específicas de tu empresa
          </p>
        </motion.div>
      </div>
    </section>
  );
}
