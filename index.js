require("babel-polyfill");
require('babel-register')({
    presets: [ 'env' ],
    plugins: ["babel-plugin-transform-object-rest-spread"]
})

module.exports = require('./server.js')