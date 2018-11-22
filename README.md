# mini-program-webpack-loader-boilerplate

使用 `webpack4`, `babel`, `eslint`, `less`, `dotenv` 开发的微信小程序项目脚手架

## 功能

* 通过 `babel` 支持更丰富的 `ES6` 兼容
* 通过 `eslint` 检查代码规范，使用 `standard` 规范
* 通过 `less` 语法编写 `wxss` , 并用 `autoprefixer` 添加浏览器兼容
* 支持通过配置 `alias` 来避免 `../../../` 之类的模块引用
* 提供 `production` 和 `development` 两个环境变量
* 在 `production` 环境下压缩代码


## 开始使用

确保安装了 [Node.js](https://nodejs.org/) (>= `v4.2`) 和 [yarn](https://yarnpkg.com) 或 [npm](https://www.npmjs.com/package/npm)

1. `git clone` 本项目
2. 通过命令行工具 `cd` 到这个目录，执行 `yarn` 安装依赖模块
3. 执行 `yarn dev` 开始开发测试
4. 执行 `yarn build` 进行提交前打包
5. 通过微信开发者工具，添加 `项目目录` 到项目上


## 内置命令

* `yarn dev` 启动 `webpack` 开发微信小程序项目, 编译生成 `development` 环境的代码到，能监听文件变化自动重新编译
* `yarn build` 编译生成 `production` 环境的代码到 `dist`
* `yarn lint` 执行 `eslint` 来格式化 src 目录下的代码


## 感谢

* [realywithoutname/mini-program-webpack-loader](https://github.com/realywithoutname/mini-program-webpack-loader)


## 说明

* 本项目纯在练手，跑起来是能打包了，但是没经过实际的测试
* less的支持，现在是在wxss里面写less的语法，然后用less-loader进行了编译，比较不正规

## License

MIT
