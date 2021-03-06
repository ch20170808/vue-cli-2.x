// https://github.com/michael-ciniawsky/postcss-load-config
// .postcssrc.js文件其实是postcss-loader包的一个配置，在webpack的旧版本可以直接在webpack.config.js中配置
// 现版本中postcss的文档示例独立出.postcssrc.js，里面写进去需要使用到的插件

module.exports = {
  "plugins": {
    "postcss-import": {}, // https://www.npmjs.com/package/postcss-import
    "postcss-url": {}, // https://www.npmjs.com/package/postcss-url
    "autoprefixer": {} // https://www.npmjs.com/package/autoprefixer
  }
}
