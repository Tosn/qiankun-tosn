const { name } = require('../package.json')
module.exports = {
  lintOnSave: false,
  // transpileDependencies: ['common'],
  publicPath: '/micro/subapp/sub-vue3',
  devServer: {
    port: 8888,
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
