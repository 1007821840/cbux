import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import AMap from 'vue-amap'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

import SlideVerify from 'vue-monoplasty-slide-verify';
//验证
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';
 Vue.use(ElementUI)
 Vue.use(AMap)
 Vue.prototype.$video = Video

 AMap.initAMapApiLoader({
  key: '93f3404d1220a5e8dff34a257b590776',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geocoder','AMap.Geolocation'],
});
import VueLazyload from 'vue-lazyload'
// import $ from 'jquery'
// import './assets/bootstrap-3.3.7-dist/css/bootstrap.min.css'
// import './assets/bootstrap-3.3.7-dist/js/bootstrap.min.js'

Vue.use(SlideVerify);
Vue.use(VueLazyload);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
