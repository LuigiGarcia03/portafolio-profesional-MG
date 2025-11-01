// frontend/src/App.tsx

import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection'; // <-- 1. Importa
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SEO } from './components/common/SEO';

function App() {
  return (
    <>
      <SEO />
      <Layout>
        <HeroSection />
        <AboutSection /> {/* <-- 2. Añade la nueva sección */}
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;