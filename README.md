# cbuxE
# 1 简介
我这个项目市基于vue.js + Node.js U
# 2 技术栈
Vue + VueX + Vue-Router + Element-Ui + Axios + Webpack + ES6/7 + Flex + Vue-Amap
# 3 项目运行
注意：由于涉及到 ES6/7 等新属性，node 需要 6.0 以上版本  
运行改项目需提前安装 Node、npm   
```
# git clone https://github.com/1007821840/cbux.git      
# cd vue2-elm cd到当前目录  
# npm install 安装依赖   
# npm run serve  
```  
# 关于接口数据

此项目的所有接口数据都来源于json
先通过获取后台的数据来搭建json本地服务器
通过aixos get来获取本地服务器的接口
vue.config.js:
```
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
```
