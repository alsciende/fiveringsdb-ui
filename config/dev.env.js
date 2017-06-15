var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"http://fiveringsdb.local:8080/app_dev.php"',
  IMG_URL: '"http://fiveringsdb.local:8080/bundles/card_images/"',
})
