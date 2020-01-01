const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  defaultLanguage: 'en',
  otherLanguages: ['de', 'es'],
  localeSubpaths: {
    en: 'en',
    de: 'de',
    es: 'es',
  },
});

module.exports = NextI18NextInstance;
