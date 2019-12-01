const NextI18Next = require('next-i18next').default;

const NextI18NextInstance = new NextI18Next({
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    en: 'en',
    de: 'de',
  },
});

module.exports = NextI18NextInstance;
