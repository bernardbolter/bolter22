const path = require('path')

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: [path.join(__dirname, 'styles')],
          prependData: `@import "vars.scss";`,
      }
  }
  return defaultConfig;
}

module.exports = {
  images: {
    domains: ['madinberlin.net'],
  },
}