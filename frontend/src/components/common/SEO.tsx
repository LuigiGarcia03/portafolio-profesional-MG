// frontend/src/components/common/SEO.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

// --- Datos Constantes ---
// TODO: Reemplaza esto cuando tengas el dominio
const SITE_URL = 'https://beluma.info'; 

// Datos extraídos de DATOS CV
const SITE_TITLE = 'Marcos García Cruz - Desarrollador Full Stack E-commerce';
const SITE_DESCRIPTION = 'Desarrollador Full Stack (React, Node.js, TypeScript) especializado en la creación de tiendas online (E-commerce) y páginas web profesionales a la medida.';
const SITE_AUTHOR = 'Marcos García Cruz';
const LINKEDIN_URL = 'https://www.linkedin.com/in/marcos-garc%C3%ADa-cruz-8199041a/';
const CONTACT_EMAIL = 'marcos.garcia.web.dev@gmail.com';
const LOCATION = 'Ciudad de México';

// TODO: Crea una imagen de 1200x630, ponla en /frontend/public/ y nómbrala 'og-image.png'
const OG_IMAGE_URL = `${SITE_URL}/MG.ico`; 

// --- Schema JSON-LD ---
// Esto es ORO para el SEO. Le dice a Google quién eres.
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marcos García Cruz',
  alternateName: 'Marcos García',
  url: SITE_URL,
  jobTitle: 'Desarrollador Full Stack',
  worksFor: {
    '@type': 'Organization',
    name: 'Marcos García Desarrollo Web',
  },
  sameAs: [
    LINKEDIN_URL,
    // Añade el GitHub aquí cuando lo tengas
  ],
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: LOCATION,
    addressCountry: 'MX',
  },
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'E-commerce',
    'Desarrollo Web',
    'MongoDB',
    'Angular',
  ],
};

interface SEOProps {
  // En el futuro, podrías pasar props si tuvieras un Blog
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const currentTitle = title || SITE_TITLE;
  const currentDescription = description || SITE_DESCRIPTION;

  return (
    <Helmet>
      {/* 1. Meta Tags Esenciales */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="author" content={SITE_AUTHOR} />

      {/* 2. Open Graph (para Redes Sociales - Facebook, LinkedIn) */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:site_name" content={SITE_TITLE} />

      {/* 3. Twitter Cards (para Twitter) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />

      {/* 4. JSON-LD Schema (para Google Rich Snippets) */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};