// 生产环境构建代码
'use strict'
require('./check-versions')() // check-versions：调用检查版本的文件。加（）代表直接调用该函数

process.env.NODE_ENV = 'production' // 设置当前环境为生产环境

const ora = require('ora') // 加载动画 https://www.npmjs.com/package/ora
const rm = require('rimraf') // 删除文件 https://www.npmjs.com/package/rimraf
const path = require('path')
const chalk = require('chalk') // 对终端输出的文案的色彩设置 https://www.npmjs.com/package/chalk
const webpack = require('webpack')
const config = require('../config') // 默认读取文件夹中的index.js文件
const webpackConfig = require('./webpack.prod.conf')

// 调用start的方法实现加载动画，优化用户体验
const spinner = ora('building for production...')
spinner.start()

// 先删除dist文件再生成新文件，因为有时候会使用hash来命名，删除整个文件可避免冗余
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 执行webpack构建打包，完成之后在终端输出构建完成的相关信息或者输出报错信息并退出程序
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
