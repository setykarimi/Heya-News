import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./src/i18next/en";
import fa from "./src/i18next/fa";

const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fa",
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;