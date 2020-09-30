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

# 项目框架布局

.
├── src  
│   ├── assets                                 //字体图标文件夹 和公共的css样式 和svg图片  
|   |  
│   ├── components                             // 组件  
│   │   ├── common                             // 公共组件  
│   │   │   ├── navbar                         // 顶部的插槽  
│   │   │   ├── scroll                         // better-scroll滚动  
│   │   │   ├── swiper                         // 轮播
│   │   │   └── tabbar                         // 底部的插槽
│   │   ├── content                            // 当前项目某些组件
│   │   │   ├── sroll-PageSlide.vue
|   |   |   └── mainTabbar-MainTabBar.vue              
│   ├── network                                // aixos获取数据
│   │   ├── request.js                         // 创建axios的实例 axios的拦截器
│   │   └── home.js                            // 请求本地json数据
│   ├── router ── index.js                     // vue-router 路由配置
│   ├── utils                                  //封装js
|   |     ├──jlfd.js                           //节流 防抖的封装
|   |     └──checkTools.js                     //正则判断的封装
│   ├── static                                 //存放项目images等
|   |
│   ├── views                                  
│   │   ├── home                               //首页文件夹
│   │   │                     
│   │   ├── menu                               //菜单页文件夹
│   │   │  
│   │   ├── money                              //登录文件夹
│   │   │ 
│   │   ├── more                               //更多 点击跳转
│   │   |              
│   │   ├── store                              //vue-amap 地图的地位                     
│   │   │                    
│   ├── vuex── index.js                        //vuex数据的存取
│   ├──gitignore
│   ├──babel.config.js
│   ├──package-lock.json
│   ├──package.json                            //当前项目需要的依赖
│   ├── App.vue                                // 页面入口文件
│   ├── main.js                                // 程序入口文件，加载各种公共组件
├── vue.config.js                              //可选的配置文件

