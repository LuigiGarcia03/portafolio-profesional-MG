import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Global
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BackgroundDecor } from './components/layout/BackgroundDecor';

// Páginas
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    // 1. Router envuelve TODO para que Header/Footer puedan usar links de navegación
    <Router>
      <div className="relative flex min-h-screen flex-col">
        
        {/* Decoración de fondo fija */}
        <BackgroundDecor />

        <div className="flex-grow isolate">
          {/* Header visible en todas las páginas */}
          <Header activeSection={''} />

          {/* Área dinámica: El contenido cambia según la URL */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre-mi" element={<StoryPage />} />
              <Route path="/contacto" element={<ContactPage />} /> 
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>

        {/* Footer visible en todas las páginas */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;