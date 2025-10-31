// frontend/src/App.tsx

import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      {/* Aquí es donde vivirá el contenido de cada "página".
        Por ahora, usamos divs con IDs para que los links del header funcionen.
        Más adelante, esto será manejado por React Router.
      */}

      <section
        id="inicio"
        className="flex h-screen items-center justify-center bg-gray-200"
      >
        <h1 className="font-display text-5xl font-bold text-text-dark">
          Hero Section (Próximamente)
        </h1>
      </section>

      <section
        id="servicios"
        className="flex h-screen items-center justify-center"
      >
        <h2 className="font-display text-4xl font-bold text-text-dark">
          Servicios (Próximamente)
        </h2>
      </section>

      <section
        id="portfolio"
        className="flex h-screen items-center justify-center bg-gray-200"
      >
        <h2 className="font-display text-4xl font-bold text-text-dark">
          Portfolio (Próximamente)
        </h2>
      </section>

      <section
        id="contacto"
        className="flex h-screen items-center justify-center"
      >
        <h2 className="font-display text-4xl font-bold text-text-dark">
          Contacto (Próximamente)
        </h2>
      </section>
    </Layout>
  );
}

export default App;