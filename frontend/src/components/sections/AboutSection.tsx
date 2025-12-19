import React from 'react';
import { useNavigate } from 'react-router-dom';
// Asegúrate de tener instalada la librería lucide-react o usa iconos de react-icons
// npm install lucide-react
import { ArrowRight, Code2, Users, Rocket } from 'lucide-react'; 
import profileImg from '../../assets/Dad-img.png'; // Verifica que la ruta a la imagen sea correcta

export const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F5F5EC] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* 1. Imagen con marco creativo */}
          <div className="w-full md:w-1/2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-[#EADD67] rounded-2xl translate-x-4 translate-y-4" />
              <img 
                src={profileImg} 
                alt="Marcos García Cruz" 
                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              />
              
              {/* Tarjeta flotante "Experiencia" */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border-l-4 border-[#1E837B] hidden sm:block">
                <p className="text-sm text-gray-500 font-medium">Trayectoria</p>
                <p className="text-xl font-bold text-gray-900">+20 Años</p>
              </div>
            </div>
          </div>

          {/* 2. Contenido "Gancho" */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-[#9A9144] uppercase mb-2">
                Sobre Mí
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Más que código, creo <span className="text-[#1E837B]">soluciones de negocio</span>.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Soy Marcos García, Ingeniero en Sistemas y Desarrollador Full Stack. 
                Mi enfoque combina la solidez de la ingeniería de software con la agilidad 
                de las tecnologías web modernas para ayudar a emprendedores a digitalizar sus negocios.
              </p>
            </div>

            {/* Puntos clave rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#F5F5EC] rounded-lg text-[#1E837B]">
                  <Code2 size={20} />
                </div>
                <span className="font-medium text-gray-700">Código Limpio</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#F5F5EC] rounded-lg text-[#1E837B]">
                  <Users size={20} />
                </div>
                <span className="font-medium text-gray-700">Enfoque al Cliente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#F5F5EC] rounded-lg text-[#1E837B]">
                  <Rocket size={20} />
                </div>
                <span className="font-medium text-gray-700">Alto Rendimiento</span>
              </div>
            </div>

            {/* Botón de Acción */}
            <button 
              onClick={() => navigate('/sobre-mi')}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1E837B] text-white rounded-lg font-semibold hover:bg-[#16605a] transition-all shadow-md hover:shadow-lg"
            >
              Conoce mi historia completa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};