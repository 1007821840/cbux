<template>
  <div id="store">
    <div class="head LocationFilterSwitch">
      <span class="did">未知地点</span>
    </div>
    <div class="text">
      <input type="text" v-model="search" ref="inp3" @focus="inp1" placeholder="输入地址查找门店">
      <img src="../../assets/icons/icon-search.svg">
      <span>筛选</span>
    </div>
    <div class="amap-wrapper">
      <el-amap
      vid="amapDemo"  
      :center="center"
      :zoom="zoom"  
      class="amap-demo"
      :events="events">
    </el-amap>
    <div class="toolbar">
      position: [{{ lng }}, {{ lat }}] address: {{ address }}
    </div>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <store-id :items="items"/>
    </scroll>
    </div>
  </div>
</template>
<script>
  import StoreId from './childComps/StoreId.vue'
  import { getStores } from '@/network/home.js'
  import Scroll from '@/components/common/scroll/Scroll'
  export default {
    name: "Store",
    components:{
      StoreId,
      Scroll

    },
    data: function() {
        let self = this;
        return {
          search:'',
          center: [121.59996, 31.197646],
          lng: 0,
          list:[],
          lat: 0,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }],
          zoom: 12,
          center: [121.59996, 31.197646],
          address: '',
          events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              self.lng = lng;
              self.lat = lat;

              // 这里通过高德 SDK 完成。
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });        
              geocoder.getAddress([lng ,lat], function(status, result) {
                self.initMap();
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {
                    self.address = result.regeocode.formattedAddress;
                    self.$nextTick();
                  }
                }
              });        
            }
          },
          lng: 0,
          lat: 0
        };
      },
      created(){
        getStores().then(res=>{
          this.list=res.result.stores;
          console.log(this.list);
          
        })

      },
      updated() {
      this.loadMore()
    },
      computed:{
        items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.list.filter(function(e) {
                    //匹配所有字段
                    return Object.keys(e).some(function(key) {
                        return e[key].match(reg);
                    })
                    //匹配某个字段
                    //  return e.name.match(reg);
                })
            };
            return this.list;
        }

      },
      methods:{
        contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
        inp1(){
        this.$refs.inp3.placeholder=""
      },
        initMap(){
          var map = new AMap.Map('container', {
        resizeEnable: true
    });
          console.log("211");
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition:'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

        });
       map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status,result){
            if(status=='complete'){
            }else{
            }
        });
          
        }
       

      }
  };
</script>
<style scoped>
  .LocationFilterSwitch:before {
    content: '';
    position: relative;
    top: 4px;
    margin-left: 20px;
    display: inline-block;
    width: 14px;
    height: 18px;
    background: url(../../assets/icons/icon-locator-green.svg) no-repeat center/contain;
}
.LocationFilterSwitch:after {
    content: '';
    position: relative;
    top: -1px;
    display: inline-block;
    width: 10px;
    height: 8px;
    background: url(../../assets/icons/icon-locator-arrow.svg) no-repeat center/contain;
}
  .did{
    display: inline-block;
    font-size: 12px;
    margin: 20px;
  }
   .head{
     height: 45px;
   }
  .amap-wrapper {
    width: 100%;
    height: 320px;
  }
  .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 407px;
    bottom: 48px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  #store{
    overflow: hidden;  
  }
  .text{
    position: relative;
    color: #999999;
    border-bottom: 1px solid #d9d9d9;
    width: 90%;
    height: 34px;
    margin:0 20px 8px;
  }
  .text input{
    outline: none;
    border: 0px ;
    height: 33px;
    position: absolute;
    top: 0;
  }
  .text span{
    position: absolute;
    color: #00A862;
    right: 5px;
    top: 8px;
    font-size: 18px;

  }
  .text img{
    position: absolute;
    top: 5px;
    right: 50px;

  }
</style>