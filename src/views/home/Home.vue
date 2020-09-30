<template>
  <div>
    <nav-baro class="sy-nav">
      <div slot="center" class="center1" @click="cs">
        心情惬意，来杯咖啡吧 ☕
      </div>
    </nav-baro>
      <star/>
      <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper/>
      <home-grid/>
      <div class="xbk">
        <h3>星巴克精选</h3>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
      </div>
      <home-tmall/>
      <div class="xbk">
        <h2>1912 派克街 | 咖啡星讲堂</h2>
        <p>了解更多星巴克咖啡文化</p>
      </div>
      <home-coffeehouse/>
      </scroll>
  </div>
</template>

<script>
  	import Swiper from 'swiper';
  import Scroll from '@/components/common/scroll/Scroll'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeCoffeehouse from './childComps/HomeCoffeehouse'
  import HomeTmall from './childComps/HomeTmall'
  import HomeGrid from './childComps/HomeGrid'
   import NavBaro from '@/components/common/navbar/NavBaro.vue'
    import Star from './childComps/Star';
    import {getBeverages,getCoffee } from '@/network/home.js'
    
export default {
  name:"Home",
  data () {
    return {
      
    };
  },
  mounted(){
			this.swiperScrollConfig();
		},
		methods: {
			// swiperScrollConfig(){
			// 	let swiper_scroll_ad = new Swiper ('.coffeehouse .swiper-container', {
		
			// 		direction: 'horizontal', 
			// 	    loop: false, 
			// 	    slidesPerView: 'auto',
			// 	    freeMode: true,
			// 	    mousewheel: true,
			// 	    navigation: {
			// 	      nextEl: '.coffeehouse .swiper-button-next',
			// 	      prevEl: '.coffeehouse .swiper-button-prev',
			// 	    },

			// 	});
			// }
		},
  created(){
    
    getBeverages().then(res => {
         console.log(res);
        })

        // getCoffee().then(res => {
        //  console.log(res);
        // })
  },
  components: {
    Scroll,
    Star,
    NavBaro,
    HomeSwiper,
    HomeGrid,
    HomeTmall,
    HomeCoffeehouse
  },
  mounted () {},
  methods: {
    contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
    cs(){
      console.log( document.body.clientWidth);
    }
  }
}
</script>
<style scoped>
  .center1{
    margin-left: 15px;
  }
  .xbk{
    width: 100%;
    height: 50px;
    line-height: 30px;
    text-align: center;
  }
  .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 55px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
</style>