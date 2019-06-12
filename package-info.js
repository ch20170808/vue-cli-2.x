//vue-cli脚手架中webpack配置基础文件详解,原文地址：https://segmentfault.com/a/1190000014804826#articleHeader18
//https://blog.csdn.net/xiaoyangerbani/article/details/80735310

//对package.json的详细说明
description = {
  //从name到private都是package的配置信息，也就是我们在脚手架搭建中输入的项目描述
  "name": "shop", //项目名称：不能以.(点)或者_（下划线）开头，不能包含大写字母，具有明确的的含义与现有项目名字不重复
  "version": "1.0.0", //项目版本号：遵循“大版本.次要版本.小版本”
  "description": "A Vue.js project", //项目描述
  "author": "xxx", //作者名字
  "private": true, //是否私有
  //scripts中的子项即是我们在控制台运行的脚本的缩写
  "scripts": {
    //webpack-dev-server:启动了http服务器，实现实时编译;
    //inline模式会在webpack.config.js入口配置中新增webpack-dev-server/client?http://localhost:8080/的入口,使得我们访问路径为localhost:8080/index.html（相应的还有另外一种模式Iframe）;
    //progress:显示打包的进度
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev", //与npm run dev相同，直接运行开发环境
    "build": "node build/build.js" //使用node运行build文件
  },
  //dependencies(项目依赖库):在安装时使用--save则写入到dependencies
  "dependencies": {
    "vue": "^2.5.2", //vue.js
    "vue-router": "^3.0.1" //vue的路由插件
  },
  //和devDependencies（开发依赖库）：在安装时使用--save-dev将写入到devDependencies
  "devDependencies": {
    "autoprefixer": "^7.1.2", //autoprefixer作为postcss插件用来解析CSS补充前缀，例如 display: flex会补充为display:-webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex。
    //babel:以下几个babel开头的都是针对es6解析的插件。用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本
    "babel-core": "^6.22.1", //babel的核心，把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。
    "babel-helper-vue-jsx-merge-props": "^2.0.3", //预制babel-template函数，提供给vue,jsx等使用
    "babel-loader": "^7.1.1", //使项目运行使用Babel和webpack来传输js文件，使用babel-core提供的api进行转译
    "babel-plugin-syntax-jsx": "^6.18.0", //支持jsx
    "babel-plugin-transform-runtime": "^6.22.0", //避免编译输出中的重复，直接编译到build环境中
    "babel-plugin-transform-vue-jsx": "^3.5.0", //babel转译过程中使用到的插件，避免重复
    "babel-preset-env": "^1.3.2", //转为es5，transform阶段使用到的插件之一
    "babel-preset-stage-2": "^6.22.0", //ECMAScript第二阶段的规范
    "chalk": "^2.0.1", //用来在命令行输出不同颜色文字
    "copy-webpack-plugin": "^4.0.1", //拷贝资源和文件
    "css-loader": "^0.28.0", //webpack先用css-loader加载器去解析后缀为css的文件，再使用style-loader生成一个内容为最终解析完的css代码的style标签，放到head标签里
    "extract-text-webpack-plugin": "^3.0.0", //将一个以上的包里面的文本提取到单独文件中
    "file-loader": "^1.1.4", //打包压缩文件，与url-loader用法类似
    "friendly-errors-webpack-plugin": "^1.6.1", //识别某些类别的WebPACK错误和清理，聚合和优先排序，以提供更好的开发经验
    "html-webpack-plugin": "^2.30.1", //简化了HTML文件的创建，引入了外部资源，创建html的入口文件，可通过此项进行多页面的配置
    "node-notifier": "^5.1.2", //支持使用node发送跨平台的本地通知
    "optimize-css-assets-webpack-plugin": "^3.2.0", //压缩提取出的css，并解决ExtractTextPlugin分离出的js重复问题(多个文件引入同一css文件)
    "ora": "^1.2.0", //加载（loading）的插件
    "portfinder": "^1.0.13", //查看进程端口
    "postcss-import": "^11.0.0", //可以消耗本地文件、节点模块或web_modules
    "postcss-loader": "^2.0.8", //用来兼容css的插件
    "postcss-url": "^7.2.1", //URL上重新定位、内联或复制
    "rimraf": "^2.6.0", //节点的UNIX命令RM—RF,强制删除文件或者目录的命令
    "semver": "^5.3.0", //用来对特定的版本号做判断的
    "shelljs": "^0.7.6", //使用它来消除shell脚本在UNIX上的依赖性，同时仍然保留其熟悉和强大的命令，即可执行Unix系统命令
    "uglifyjs-webpack-plugin": "^1.1.1", //压缩js文件
    "url-loader": "^0.5.8", //压缩文件，可将图片转化为base64
    "vue-loader": "^13.3.0", //VUE单文件组件的WebPACK加载器
    "vue-style-loader": "^3.0.1", //类似于样式加载程序，您可以在CSS加载器之后将其链接，以将CSS动态地注入到文档中作为样式标签
    "vue-template-compiler": "^2.5.2", //这个包可以用来预编译VUE模板到渲染函数，以避免运行时编译开销和CSP限制
    "webpack": "^3.6.0", //打包工具
    "webpack-bundle-analyzer": "^2.9.0", //可视化webpack输出文件的大小
    "webpack-dev-server": "^2.9.1", //提供一个提供实时重载的开发服务器
    "webpack-merge": "^4.1.0" //它将数组和合并对象创建一个新对象。如果遇到函数，它将执行它们，通过算法运行结果，然后再次将返回的值封装在函数中
  },
  //engines是引擎，指定node和npm版本
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  //限制了浏览器或者客户端需要什么版本才可运行
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

/**
 * devDependencies和dependencies的区别：devDependencies里面的插件只用于开发环境，不用于生产环境，即辅助作用，打包的时候需要，打包完成就不需要了
 * 而dependencies是需要发布到生产环境的，自始至终都在
 * 比如wepack等只是在开发中使用的包就写入到devDependencies
 * 而像vue这种项目全程依赖的包要写入到dependencies
 */


 /**
  * file-loader和url-loader的区别：以图片为例，file-loader可对图片进行压缩，但是还是通过文件路径进行引入，当http请求增多时会降低页面性能
  * 而url-loader通过设定limit参数，小于limit字节的图片会被转成base64的文件，大于limit字节的将进行图片压缩的操作
  * 总而言之，url-loader是file-loader的上层封装
  * https://www.npmjs.com/package/file-loader
  * https://www.npmjs.com/package/url-loader
  * https://blog.csdn.net/qq_38652603/article/details/73835153 二者的区别详解
  */