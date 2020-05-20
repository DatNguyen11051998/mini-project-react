import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonDe from './translations/de.json';
import commonEn from './translations/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: commonEn,
      },
      de: {
        translation: commonDe,
      },
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
