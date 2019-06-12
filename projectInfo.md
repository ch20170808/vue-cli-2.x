# 项目采用vue-cli 2.x 搭建的，以下对项目的目录作下说明：
``` 
# build：项目构建（webpack）相关代码

# config：项目开发、生产环境配置，包括端口号等

# node_modules：依赖的node工具包目录

# src：源码目录，基本要做的业务都在这个目录里处理
    --assets：资源目录
    --components：组件目录
    --router：路由
    --views：编写页面的地方（页面也是vue文件）
    --App.vue：页面入口文件
    --main.js：程序入口文件，加载各种公共组件（核心文件）

# static：静态文件目录（图片、json数据之类）

# babelrc：ES6语法编译配置，用来将ES6代码转换成浏览器可以识别的js代码

# editorconfig：编辑器的配置文件

# eslintignore：eslint检测代码忽略的文件（夹）

# eslintrc：定义eslint的plugins,extends,rules

# gitignore：git上传需要忽略的文件格式

# postcssrc：postcss配置文件

# index.html：首页入口页面（可以加上合适的meta头或者统计代码之类的），经过编译之后的代码将插入到这来

# package-lock.json：锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致

# package.json：项目配置文件

```

