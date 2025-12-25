// src/pages/StoryPage.tsx
import React, { useEffect } from 'react';
// ELIMINAR ESTA LÍNEA: import { Layout } from '../components/layout/Layout'; 
import { StoryTimeline } from '../components/sections/StoryTimeline';
import { FaCode, FaCheckCircle } from 'react-icons/fa'; // O lucide-react si prefieres
import { useNavigate } from 'react-router-dom';

// Importa tu imagen
import profileImg from '../assets/Dad-img.png'; 

const StoryPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // CAMBIO: Usamos un fragmento <> o un div en lugar de <Layout>
    <div className="animate-fade-in"> 
      
      {/* 1. HERO SECTION PERSONAL */}
      <section className="bg-white pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* ... (El contenido del Hero sigue igual) ... */}
         <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5EC] text-[#1E837B] rounded-full text-sm font-semibold">
                <FaCode /> Historia Profesional
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ingeniero de Corazón, <br />
                <span className="text-[#1E837B]">Desarrollador por Pasión.</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Combinando la disciplina de la Ingeniería en Sistemas con la creatividad del Desarrollo Web Moderno.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#EADD67]" />
                    <span className="text-sm text-gray-700 font-medium">Ingeniero UAM</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#EADD67]" />
                    <span className="text-sm text-gray-700 font-medium">+20 Años Exp.</span>
                 </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-[#EADD67] rounded-2xl z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#F5F5EC] rounded-full z-0"></div>
                
                <img 
                  src={profileImg} 
                  alt="Marcos García Cruz" 
                  className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <StoryTimeline />

      {/* 3. FILOSOFÍA TÉCNICA */}
      <section className="py-20 bg-[#1E837B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Por qué elijo este Stack Tecnológico?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-[#EADD67] mb-3">Rendimiento</h3>
              <p className="text-gray-100">No uso plantillas pesadas de WordPress. Código limpio significa sitios que cargan en milisegundos.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-[#EADD67] mb-3">Seguridad</h3>
              <p className="text-gray-100">Separación de Frontend y Backend para máxima protección.</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold text-[#EADD67] mb-3">Escalabilidad</h3>
              <p className="text-gray-100">Sitios preparados para crecer contigo sin tener que rehacerlos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Buscas a alguien que entienda el código y el negocio?
          </h2>
          <button 
            onClick={() => navigate('/contacto')}
            className="px-8 py-4 bg-[#EADD67] text-[#6B643A] font-bold rounded-lg hover:bg-[#d4c75b] transition-colors shadow-lg text-lg"
          >
            Hablemos de tu Proyecto
          </button>
        </div>
      </section>

    </div>
  );
};

export default StoryPage;