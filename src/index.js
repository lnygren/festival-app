import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationNO from './locales/no/translation.json';



i18n.init({
  resources: {
    en: { translation: translationEN },
    no: { translation: translationNO },
  },
  lng: 'no', // Standard språk
  interpolation: {
    escapeValue: false, // React håndterer allerede escaping
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
        <App />
     </I18nextProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
