import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: { home: 'Home', staff: 'Staff', services: 'Services' },
      home: { title: 'Welcome to Our App', description: 'Your one-stop solution for quality services.' },
      staff: { title: 'Our Team', description: 'Meet the dedicated professionals behind our work.' },
      services: { title: 'Our Services', description: 'Explore what we have to offer.' },
      footer: { rights: 'All rights reserved.' },
      langToggle: 'Español',
    },
  },
  es: {
    translation: {
      nav: { home: 'Inicio', staff: 'Personal', services: 'Servicios' },
      home: { title: 'Bienvenido a Nuestra Aplicación', description: 'Su solución integral para servicios de calidad.' },
      staff: { title: 'Nuestro Equipo', description: 'Conozca a los profesionales dedicados detrás de nuestro trabajo.' },
      services: { title: 'Nuestros Servicios', description: 'Explore lo que tenemos para ofrecer.' },
      footer: { rights: 'Todos los derechos reservados.' },
      langToggle: 'English',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },
  });

export default i18n;
