import { createI18n } from 'vue-i18n'

import { defaultLocale, messages } from '@/i18n/'

const i18n = createI18n({
  messages,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  silentTranslationWarn: true,
  globalInjection: true,
  legacy: false,
})

export default i18n
