<template>
    <swiper>
            <div v-for="it in list" class="main">
                <swiper-item >
                <img :src="require('../../../static/images/homepage/'+it.image)">
                <p>{{it.name}}</p>
                <p>{{it.p}}</p>
                </swiper-item>
            </div>
        <!-- <swiper-item >
          <a >
          </a>
        </swiper-item>
        <swiper-item >
          <a >
          </a>
        </swiper-item> -->
      </swiper>
  <!-- <div id="coff">
      <div class="coffee">
    <div v-for="it in list" class="main">
        <img :src="require('../../../static/images/homepage/'+it.image)">
        <p>{{it.name}}</p>
        <p>{{it.p}}</p>
    </div>
</div>
  </div> -->
</template>

<script>
     import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
  name:"HomeCoffeehouse",
  data () {
    return {
        list:[
            {
                image:'coffeehouse-coffee-cultivation-kv.jpg',
                name:'咖啡知识',
                p:'咖啡的起源与培植'
                
            },
            {
                image:'coffeehouse-4-fundamentals-kv.jpg',
                name:'咖啡评鉴',
                p:'咖啡调制',
            },
            {
                image:'coffeehouse-roast-story-kv.jpg',
                name:'咖啡知识',
                p:'咖啡烘焙',
            },
            {
                image:'coffeehouse-pour-over-kv.jpg',
                name:'咖啡评鉴',
                p:'咖啡烘焙',
            },
        ]
    };
  },
  components: {
       Swiper,
      SwiperItem
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
    .coffee{
        height: 46px;
    scrollbar-width: none;
    display: flex;
    }
    .coffee>div{
        display: inline-block;
    margin: 15px 15px 0;
    text-align: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
    }
    #coff{
        overflow-x: auto;
    white-space: nowrap;
    height: 43px;
    overflow-y: hidden;
    }
</style>