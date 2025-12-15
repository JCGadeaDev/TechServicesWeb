'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiBriefcase, FiMessageSquare, FiSend, FiPhone, FiMapPin, FiGlobe, FiChevronDown } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: 'Consultoría General',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulación de envío (Debes conectar esto a tu API real)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '✅ Mensaje recibido. Un especialista te contactará en breve.' });
        setFormData({ name: '', email: '', company: '', interest: 'Consultoría General', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || '❌ Algo salió mal. Por favor intenta de nuevo.' });
      }
    } catch (error) {
      // Fallback para demo si no hay API configurada aún
      setTimeout(() => {
          setStatus({ type: 'success', message: '✅ Mensaje enviado (Modo Demo). Nos pondremos en contacto.' });
          setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-6">Hablemos de tu Siguiente Nivel</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ya sea que necesites una migración crítica a la nube, una auditoría de seguridad o un desarrollo web de alcance global, estamos listos para ser tu equipo extendido.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary text-xl border border-white/5">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email Directo</h4>
                  <a href="mailto:techservicesguz@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                    techservicesguz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary text-xl border border-white/5">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-white font-bold">Línea Corporativa</h4>
                  <a href="https://wa.me/50585532190" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                    +505 8553 2190
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary text-xl border border-white/5">
                  <FiMapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold">Ubicación</h4>
                  <p className="text-gray-400">
                    Managua, Nicaragua (HQ)<br />
                    <span className="text-sm text-primary opacity-80">Soporte Remoto Global</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full border border-green-500/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponibles para nuevos proyectos
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-white/10 shadow-2xl shadow-black/50"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Nombre
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-3.5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <FiBriefcase className="absolute left-4 top-3.5 text-gray-500" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
                      placeholder="Nombre de la org."
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Correo Profesional
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-3.5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all"
                    placeholder="ejemplo@empresa.com"
                  />
                </div>
              </div>

              {/* Interest Selector */}
              <div>
                <label htmlFor="interest" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Área de Interés
                </label>
                <div className="relative">
                  <FiGlobe className="absolute left-4 top-3.5 text-gray-500" />
                  <FiChevronDown className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" />
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white appearance-none cursor-pointer transition-all"
                  >
                    <option value="Consultoría General">Consultoría General TI</option>
                    <option value="Desarrollo Web/App">Desarrollo Web & App</option>
                    <option value="Cloud & Hosting">Cloud & Hosting</option>
                    <option value="Ciberseguridad">Ciberseguridad & Backup</option>
                    <option value="Data & Analytics">Data & Analytics</option>
                    <option value="SEO & Marketing">SEO & Estrategia Digital</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Detalles del Proyecto
                </label>
                <div className="relative">
                  <FiMessageSquare className="absolute left-4 top-3.5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-white/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-gray-600 transition-all resize-none"
                    placeholder="Cuéntanos brevemente qué buscas lograr..."
                  ></textarea>
                </div>
              </div>

              {/* Status Message */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-sm text-center font-medium ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                    Procesando...
                  </>
                ) : (
                  <>
                    Enviar Solicitud
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}