const Timestamp = new Date().getTime();
const BASE_URL = process.env.NODE_ENV === 'production' ? '/yyyzq001/' : '/';
module.exports = {
  outputDir: 'docs',
  publicPath: './',
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    },
  },
  css: {
    extract: {
      filename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`,
      chunkFilename: `css/[name].${process.env.VUE_APP_Version}.${Timestamp}.css`
    }
  },

};