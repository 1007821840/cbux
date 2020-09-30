<template>
  <div>
    <router-view class="view"/>
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        菜单
      </div>
    </nav-baro>
    <div @click="serh" class="serh">搜索菜单</div>
    <menu-tab/>
    <menu-serh v-if="shows"/>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
    <div class="main">
      <section class="content" v-if="lgMedia || !show_menu_bol">
      <div class="tag-ad">广告</div>
      <section class="hero">
        <div class="description images">
          <a href="">
            <img src="../../static/images/featured/2019spring/banner-1-mobile.jpg" class="tablet-hidden mobile-show">
          </a>
        </div>
        <div class="description text">
          <h2>星巴克玩味冰调™，开启轻盈一夏</h2>
          <p>这一季，我们带着探索与发现的好奇心，来一场视觉与味觉的双重碰撞。</p>
          <p>玩味冰调作为今夏全新的产品品类登场，</p>
          <p>以鸡尾酒为灵感，突破茶与咖啡的传统定义，精心调制出富于层次感的全新饮品。零脂、真材实料、不添加化学合成色素和甜味剂，满足身为潮人的你,对“美味”和“零负担”的双重标准。</p>
        </div>
      </section>
      <section class="featured-items">
        <ul>
          <li class="items" v-for="item in adItems">
            <div class="description images">
              <a href="">
                <img :src="require('../../static/images/featured/2019spring/'+item.adImageMobile)" class="tablet-hidden mobile-show">
              </a>
            </div>
            <div class="description text">
              <h2>{{item.adTitle}}</h2>
              <p v-for="text in item.adText.split('|')">
                {{text}}
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section id="lto-items" class="lto-items">
        <div class="wrapper1 clearfix">
          <h2>所有新品</h2>
          <ul>
            <li v-for="(item, index) in productItems" class="prod">
              <img v-lazy="require('../../static/images/featured/2019spring/' + item.ProductImage)"/>
              <p> {{item.ProductName}} </p>
            </li>
          </ul>
        </div>
        <!-- <div class="loading-svg mbMedia-loadmore">
          <img src="../../assets/loading-svg/loading-bubbles.svg" :class="{'hidden': hidden}" />
        </div> -->
      </section>
    </section>
  </div>
    </scroll>
  </div>
</template>

<script>
  import { getSelection } from '@/network/home.js'
  import Scroll from '@/components/common/scroll/Scroll'
  import MenuSerh from './childComps/MenuSerh.vue'
  import MenuTab from './childComps/MenuTab.vue'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
export default {
  name:"Menu",
  data () {
    return {
      shows:false,
      show_menu_bol: false,
				lgMedia: window.matchMedia('(min-width: 1025px)').matches,
				adItems: [
					{
						adImage: 'featured-2.jpg',
						adImageMobile: 'featured-2-mobile.jpg',
						adTitle: '一口轻盈 一口夏天',
						adText: '全新星轻盈系列，蛋糕也可以清爽一夏无负担。 | 采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思 | 新口味“茶瓦纳桃桃千层蛋糕”轻甜的奶油融入白桃果肉，不但丰富了口感，更让桃子风味在口中久久留香，满满的初夏味道。'
					},
					{
						adImage: 'banner-3.jpg',
						adImageMobile: 'banner-3-mobile.jpg',
						adTitle: '冰沁一夏好时光',
						adText: '延续星巴克冰杯的外形，不同的水果亮片漂浮在卡片内部，动静之间炫彩缤纷，宛如一杯新鲜果味冰饮一般。内置芯片，可以直接刷卡消费。 | 人鱼系列作为纪念款，延续该系列的设计，| 配合夏季的主题采用以海蓝色为主基调，辅以海底的美妙景色带来阵阵夏日凉意。随机赠送美型胶带印章挂件，共三款可选。'
					},
					{
						adImage: 'banner-6.jpg',
						adImageMobile: 'banner-6-mobile.jpg',
						adTitle: '邂逅夏威夷',
						adText: '夏季限定系列，拼配了稀有而珍贵的夏威夷产区咖啡豆，浓郁的夏威夷热带风情设计，一口仿佛置身海洋，清凉而舒爽。独特焦糖般甘甜和果仁般风味的咖啡豆与非洲及拉美地区的咖啡豆拼配，形成了这款口感顺滑而又优雅的深度烘焙咖啡。'
					},
					{
						adImage: 'featured-5.jpg',
						adImageMobile: 'featured-5-mobile.jpg',
						adTitle: '温暖你的午餐时光',
						adText: '经典烟熏鸡胸肉沙拉及法式秘制烤鸭腿沙拉，保持营养均衡的同时还能满足大口吃肉的双重享受。可加热的主食部分，既能温暖你的胃又不失美味。'
					},
					{
						adImage: 'featured-6.jpg',
						adImageMobile: 'featured-6-mobile.jpg',
						adTitle: '唤醒春意',
						adText: '潜底逐光会员星礼包，卡面设计将海水的湛蓝与春天的新绿结合，带来春天的清新感受。唤醒春意会员星礼包，让一杯咖啡叩开春天的大门，把所有温暖的节奏带到你的生活中。'
					},
					{
						adImage: 'kv-reserve.jpg',
						adImageMobile: 'kv-reserve.jpg',
						adTitle: '全新单一产地咖啡豆',
						adText: '首款来自萨尔瓦多产区的核心单一产区咖啡，在这片神奇的土地上，咖啡农用他们娴熟的手艺孕育出令人难忘的、散发出馥郁果香的咖啡。香甜柑橘般的风味伴随着淡淡牛奶巧克力的风味，在春日的午后为自己煮上一杯，享受来自春日的美好礼赞。'
					}
				],
				productItems: [],
				storage: null,
				page: 1,
				pageSize: 12,
				busy: true,
				hidden: false
			}
  },
  components: {
    MenuSerh,
    NavBaro,
    MenuTab,
    Scroll
  },
  computed: {
    },
    created(){
      getSelection().then(res=>{
          this.productItems=res.result.selection;
          console.log(res);
          
        })

      },

  mounted () {},
  methods: {
    contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
    serh(){
      this.shows=!this.shows
    }
  }
}
</script>
<style scoped>
   .prod{
        margin: auto;
        display: inline-block;
        width: 50%;
        text-align: center;
    }
    .prod img{
        margin: 20px 0 20px;
        width: 75%!important;
    }
  .main img{
    width: 100%;
  }
   .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 103px;
    bottom: 55px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .view{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:#ffffff;
  }
  .serh{
    z-index: 999;
    border: 1px solid #00A862;
    text-align: center;
    line-height: 51px;
    border-radius: 48px;
    position: absolute;
    bottom: 78px;
    right:25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
    font-weight: 700;
    width:114px ;
    height: 51px;
    background: #00A862;
    color: #ffff;
  }
  .tag-ad{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .center1{
    margin-left: 15px;
  }
</style>