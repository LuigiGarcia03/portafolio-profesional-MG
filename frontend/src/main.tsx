// frontend/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// ❌ ELIMINA esta importación
// import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ❌ ELIMINA el HelmetProvider */}
    <App />
  </React.StrictMode>,
);