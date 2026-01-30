# TechServices Guz PS Website

Website moderno y profesional para **TechServices Guz PS**, desarrollado con las últimas tecnologías web para ofrecer una experiencia de usuario premium, rápida y segura.

![Logo](./public/logo.jpg)

## 🚀 Tecnologías Utilizadas

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: React Icons
- **Email**: [Resend](https://resend.com/) (API para formulario de contacto)
- **Fuentes**: Google Fonts (Inter & Outfit)

## ✨ Características

### Secciones del Sitio
1.  **Hero Section**: Diseño impactante con el logo de la empresa animado, colores de marca (#00d4ff) y propuesta de valor clara.
2.  **Nosotros (Visión y Misión)**: Presentación de los pilares estratégicos: Liderazgo Regional, Continuidad y Seguridad, Innovación.
3.  **Servicios**: 5 tarjetas detalladas con los servicios principales:
    *   🛡️ Ciberseguridad y Resiliencia Digital
    *   ☁️ Cloud Computing y Modernización
    *   🌐 Infraestructura y Servicios Gestionados
    *   📈 Desarrollo de Software
    *   🧑‍💻 Consultoría y Talento Especializado
4.  **Tecnologías**: Showcase de plataformas soportadas (Azure, AWS, M365, Veeam, etc.).
5.  **Ofertas**: Paquetes promocionales destacados con precios y características.
6.  **Contacto**: Formulario funcional integrado con Resend para envío de correos.
7.  **Footer**: Enlaces rápidos, información de contacto y redes sociales.

### Diseño Visual
- **Tema Personalizado**: Modo oscuro con acentos en Cyan (#00d4ff) y Azul.
- **Glassmorphism**: Efectos de cristal esmerilado en tarjetas y navegación.
- **Responsive**: Totalmente adaptado a móviles, tablets y escritorio.
- **Animaciones**: Transiciones suaves al hacer scroll y hover effects interactivos.

## 📂 Estructura del Proyecto

```
/app
  /api/contact   # Endpoint para envío de correos (Backend)
  globals.css    # Estilos globales y configuración de Tailwind
  layout.tsx     # Layout principal (SEO, fuentes)
  page.tsx       # Página de inicio (Landing page completa)
/components
  Header.jsx     # Navegación sticky
  Hero.jsx       # Sección principal
  About.jsx      # Visión y Misión
  Services.jsx   # Tarjetas de servicios
  Technologies.jsx # Lista de tecnologías
  Offers.jsx     # Paquetes y ofertas
  Contact.jsx    # Formulario de contacto
  Footer.jsx     # Pie de página
/public
  logo.jpg       # Logo de la empresa
```

## 🎨 Personalización

Los colores principales están definidos en `app/globals.css` dentro de la directiva `@theme`. Puedes ajustar el color primario (`--color-primary-*`) para cambiar la identidad visual de todo el sitio.

---
Desarrollado para **TechServices Guz PS**.
