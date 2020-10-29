const { name } = require('../package.json')
module.exports = {
  lintOnSave: false,
  publicPath: '/subapp/sub-vue2',
  devServer: {
    port: 8887,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
