import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaServer, FaReact, FaRocket } from 'react-icons/fa';

// Definimos la interfaz para nuestros hitos
interface Milestone {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Formación Fundamental",
    role: "Ingeniero en Sistemas (UAM)",
    date: "2010 - 2015", // Ajusta fechas reales si las tienes
    description: "Graduación en la UAM. Aquí forjé mi lógica algorítmica y las bases sólidas de la ingeniería de software.",
    icon: <FaGraduationCap className="text-white text-xl" />,
  },
  {
    id: 2,
    title: "Experiencia Corporativa",
    role: "Desarrollador Backend .NET",
    date: "2015 - 2020",
    description: "Desarrollo de sistemas robustos y seguros utilizando C# y .NET Core. Aprendí la importancia de la arquitectura escalable.",
    icon: <FaServer className="text-white text-xl" />,
  },
  {
    id: 3,
    title: "El Salto al Frontend",
    role: "Especialización React",
    date: "2020 - 2023",
    description: "Impulsado por mi curiosidad, transicioné al ecosistema JavaScript moderno para crear experiencias de usuario dinámicas.",
    icon: <FaReact className="text-white text-xl" />,
  },
  {
    id: 4,
    title: "Presente & Futuro",
    role: "Full Stack & E-commerce",
    date: "Actualidad",
    description: "Hoy combino la ingeniería clásica con tecnología moderna (Next.js, TS) para crear tiendas online que realmente venden.",
    icon: <FaRocket className="text-white text-xl" />,
  }
];

export const StoryTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F5EC] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E837B] mb-4">
            Mi Trayectoria Profesional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De la ingeniería de sistemas tradicional al desarrollo web moderno.
          </p>
        </div>

        <div className="relative">
          {/* LÍNEA CENTRAL (Solo Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-transparent border-l-2 border-dashed border-[#EADD67]" />
          
          {/* LÍNEA LATERAL (Solo Móvil) */}
          <div className="md:hidden absolute left-8 h-full w-1 bg-transparent border-l-2 border-dashed border-[#EADD67]" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* 1. Espacio vacío para mantener el grid (Desktop) */}
                <div className="hidden md:block w-1/2" />

                {/* 2. El Nodo/Icono Central */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#1E837B] border-4 border-[#F5F5EC] shadow-lg z-20">
                  {item.icon}
                </div>

                {/* 3. La Tarjeta de Contenido */}
                <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#EADD67]"
                  >
                    <span className="inline-block px-3 py-1 bg-[#F5F5EC] text-[#9A9144] text-sm font-semibold rounded-full mb-3">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#1E837B] mb-1">{item.title}</h3>
                    <h4 className="text-md font-medium text-gray-500 mb-3">{item.role}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};