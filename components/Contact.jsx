'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiBriefcase, FiMessageSquare, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: '✅ Mensaje enviado exitosamente. Nos contactaremos pronto!' });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || '❌ Error al enviar el mensaje. Intenta nuevamente.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: '❌ Error de conexión. Verifica tu internet e intenta nuevamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Contáctanos</h2>
          <p className="section-subtitle text-center">
            Estamos listos para transformar tu infraestructura tecnológica. ¡Hablemos!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <FiUser className="text-primary" />
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <FiMail className="text-primary" />
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="juan@empresa.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <FiBriefcase className="text-primary" />
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Mi Empresa S.A."
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <FiMessageSquare className="text-primary" />
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Cuéntanos sobre tu proyecto o necesidad tecnológica..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <FiSend />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center text-gray-400"
        >
          <p className="mb-2">📧 info@techservicesguzps.com</p>
          <p className="mb-2">📱 +505 XXXX-XXXX</p>
          <p>📍 Nicaragua | Servicio Global</p>
        </motion.div>
      </div>
    </section>
  );
}
