// frontend/src/components/sections/ContactSection.tsx

import React, { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FormInput, FormTextarea } from '../common/FormControls';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// 1. Definir el Esquema de Validación (las reglas)
const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Debes ingresar un email válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

// 2. Extraer el tipo de TS directamente del esquema
type ContactFormInputs = z.infer<typeof contactSchema>;

// Datos de contacto del documento DATOS CV
const contactEmail = 'marcos.garcia.web.dev@gmail.com';
const contactLocation = 'Ciudad de México';

export const ContactSection: React.FC = () => {
  // Estados para feedback visual al usuario
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, // Función para limpiar el formulario
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema), // 3. Conectar Zod con el formulario
  });

  // 4. Esta función maneja el envío real a Formspree
  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setServerError(null);
    setSuccessMsg(null);

    try {
      const response = await fetch('https://formspree.io/f/xzdpzzwl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMsg('¡Gracias! Tu mensaje ha sido enviado correctamente. Te responderé a la brevedad.');
        reset(); // Limpia el formulario después del envío exitoso
      } else {
        const errorData = await response.json();
        // Formspree suele devolver errores detallados, pero usamos un mensaje genérico por seguridad
        setServerError(errorData.error || 'Hubo un problema al enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (error) {
      setServerError('Error de conexión. Por favor verifica tu internet e intenta de nuevo.');
    }
  };

  return (
    <section id="contacto" className="bg-background-light py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Título de la Sección */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-text-dark md:text-5xl">
            Hablemos de tu Proyecto
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-dark/80">
            ¿Tienes una idea? Envíame un mensaje y la convertiremos en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Columna de Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6">
            
            {/* Mensajes de Feedback (Éxito o Error) */}
            {successMsg && (
              <div className="rounded-lg bg-green-100 p-4 text-center text-green-700 border border-green-200">
                <p className="font-medium">{successMsg}</p>
              </div>
            )}
            
            {serverError && (
              <div className="rounded-lg bg-red-100 p-4 text-center text-red-700 border border-red-200">
                <p className="font-medium">{serverError}</p>
              </div>
            )}

            <FormInput
              label="Tu Nombre"
              type="text"
              placeholder="Juan Pérez"
              {...register('name')} // 5. Conecta el input al formulario
              error={errors.name}  // 6. Pasa el error (si existe)
            />

            <FormInput
              label="Tu Email"
              type="email"
              placeholder="juan.perez@ejemplo.com"
              {...register('email')}
              error={errors.email}
            />

            <FormTextarea
              label="Tu Mensaje"
              placeholder="Hola, me gustaría cotizar una tienda e-commerce..."
              {...register('message')}
              error={errors.message}
            />

            <button
              type="submit"
              disabled={isSubmitting} // Deshabilita el botón mientras se "envía"
              className="rounded-lg bg-primary-teal px-8 py-3 font-sans text-lg font-bold text-text-light shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent-teal-dark disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>

          {/* Columna de Información de Contacto */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start">
              <FaEnvelope className="mt-1 h-6 w-6 shrink-0 text-primary-teal" />
              <div className="ml-4">
                <h3 className="font-display text-2xl font-bold text-text-dark">Email</h3>
                <p className="text-text-dark/80">Contacto directo para consultas.</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all font-sans font-bold text-primary-teal transition-colors hover:text-accent-teal-dark"
                >
                  {contactEmail}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 h-6 w-6 shrink-0 text-primary-teal" />
              <div className="ml-4">
                <h3 className="font-display text-2xl font-bold text-text-dark">Ubicación</h3>
                <p className="text-text-dark/80">Disponible para proyectos remotos.</p>
                <span className="font-sans font-bold text-text-dark">
                  {contactLocation}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};