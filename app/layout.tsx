import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'TechServices Guz PS | Soluciones de TI y Ciberseguridad en Nicaragua',
  description: 'Proveemos soluciones de tecnología de la información estratégicas, seguras y escalables a empresas en Nicaragua y a nivel global. Ciberseguridad, Cloud Computing, Outsourcing de TI y más.',
  keywords: 'TI Nicaragua, Ciberseguridad, Cloud Computing, Outsourcing TI, Desarrollo Software, Azure, AWS, Microsoft 365',
  authors: [{ name: 'TechServices Guz PS' }],
  openGraph: {
    title: 'TechServices Guz PS | Soluciones de TI y Ciberseguridad',
    description: 'Tu socio tecnológico de confianza en Nicaragua y Centroamérica',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
