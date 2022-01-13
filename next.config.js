const path = require('path')

module.exports = {
  reactStrictMode: true,
}


module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
          includePaths: [path.join(__dirname, 'styles')],
          prependData: `@import "vars.scss";`,
      }
  }
  return defaultConfig;
}