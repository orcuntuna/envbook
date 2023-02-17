import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnglishTranslations from '@/languages/en.json'
import TurkishTranslations from '@/languages/tr.json'

const resources = {
  en: {
    translation: EnglishTranslations,
  },
  tr: {
    translation: TurkishTranslations,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  .then()

export default i18n
