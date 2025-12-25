import React, { useEffect } from 'react';
import { ContactSection } from '../components/sections/ContactSection';

const ContactPage: React.FC = () => {
  // Scroll al inicio al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20"> {/* Padding top para que el header fijo no tape el contenido */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;