# TechServices Guz PS Website

Website moderno y profesional para **TechServices Guz PS**, desarrollado con las últimas tecnologías web para ofrecer una experiencia de usuario premium, rápida y segura.

![Logo](./public/logo.jpg)

## 🚀 Tecnologías Utilizadas

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) (App Router)
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

## 🛠️ Instalación y Configuración

### 1. Clonar e Instalar Dependencias

```bash
git clone <url-del-repo>
cd iridescent-sagan
npm install
```

### 2. Configuración de Variables de Entorno

Para que el formulario de contacto funcione, necesitas configurar **Resend**.

1.  Crea una cuenta en [Resend.com](https://resend.com).
2.  Obtén tu API Key.
3.  Crea un archivo `.env.local` en la raíz del proyecto y agrega:

```env
# .env.local
RESEND_API_KEY=re_tu_api_key_aqui
EMAIL_FROM=contacto@techservicesguzps.com
EMAIL_TO=info@techservicesguzps.com
```

> **Nota**: Si estás en el plan gratuito de Resend, solo puedes enviar correos a la dirección de correo con la que te registraste (a menos que verifiques un dominio).

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

### 4. Construir para Producción

```bash
npm run build
npm start
```

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
