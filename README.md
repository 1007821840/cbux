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
```
import axios from 'axios'
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}
```  
 同时在根目录下创建vue.config.js,如下配置：
```
module.exports = {
    publicPath: '/',
   
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
# 项目功能
登录 注册  
模糊搜索  
地图定位  
商品页  
商品详情页  
滑动验证  


