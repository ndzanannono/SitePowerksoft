import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationEN from './components/langue/en/en.json';
import translationFR from './components/langue/fr/fr.json';

const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
