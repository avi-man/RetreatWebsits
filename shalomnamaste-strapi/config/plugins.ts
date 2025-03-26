module.exports = ({ env }) => ({
  documentation: {
    enabled: true,
  },
  i18n: {
    enabled: true,
    config: {
      locales: ['en', 'he'],
      defaultLocale: 'en'
    }
  }
});