import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/cinzel/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
