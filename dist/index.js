
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./open-meteo-wmo-to-emoji.cjs.production.min.js')
} else {
  module.exports = require('./open-meteo-wmo-to-emoji.cjs.development.js')
}
