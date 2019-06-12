// 开发环境变量
'use strict'
// https://www.npmjs.com/package/webpack-merge
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
