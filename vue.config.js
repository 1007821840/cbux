module.exports = {
    publicPath: '/',
    //在根目录下创建vue.config.js,如下配置：
      devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8081', //路径指向本地主机地址及端口号
            ws: true,
            changeOrigin: true,
            pathRewrite:{
              '^/api': '/data' //路径转发代理
            }
          }
        }
    },
}

// const webpack = require('webpack')
 
// module.exports = {
//   configureWebpack: {
//     plugins: [
//        new webpack.ProvidePlugin({
//          $:"jquery",
//          jQuery:"jquery",
//          "windows.jQuery":"jquery"
//        })
//      ]
//  }
// }
  