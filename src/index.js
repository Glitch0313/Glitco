import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './lang/en.json';
import arTranslations from './lang/ar.json';

// Define the languages you want to support
const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // set the initial language
  keySeparator: false, // disable key separator to use nested keys like 'parent.child'
  interpolation: {
    escapeValue: false // React already escapes by default
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);