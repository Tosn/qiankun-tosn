const { name } = require('../package.json')
module.exports = {
  lintOnSave: false,
  // transpileDependencies: ['common'],
  // chainWebpack: config => config.resolve.symlinks(false),
  publicPath: '/micro/subapp/sub-vue2',
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
