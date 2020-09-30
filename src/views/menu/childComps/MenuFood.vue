<template>
  <div path="/food" class="food">
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
        美食
      </div>
    </nav-baro>
    <div id="moneytab">
      <div class="ssj">
        <div class="dengl">
          <div :class="{'active-menu':curActive == 'login'}"><a href="/menu/food"> 全部</a></div>
        </div>
        <div class="zhuc" @click="pageRedirs('beverages')">
          <div :class="{'active-menu':curActive == 'beverages'}">

            星巴克®月饼

          </div>
        </div>
        <div class="guany" @click="pageRedir(1, 'food')">
          <div :class="{'active-menu':curActive == 'food'}">

            烘焙

          </div>
        </div>
        <div class="guany" @click="pageRedir(2, 'coffee')">
          <div :class="{'active-menu':curActive == 'coffee'}">

            蛋糕&甜品

          </div>
        </div>
        <div class="guany" @click="pageRedir(5, 'merchandis')">
          <div :class="{'active-menu':curActive == 'merchandis'}">

            三明治、帕尼尼、卷

          </div>
        </div>
        <div class="guany" @click="pageRedir(4, 'merchandi')">
          <div :class="{'active-menu':curActive == 'merchandi'}">

            酸奶

          </div>
        </div>
        <div class="guany" @click="pageRedir(3, 'merchand')">
          <div :class="{'active-menu':curActive == 'merchand'}">

            其他美食

          </div>
        </div>
        <div class="guany" @click="pageRedires('merchandise')">
          <div :class="{'active-menu':curActive == 'merchandise'}">

            早安新一天

          </div>
        </div>
      </div>
    </div>
    <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div>
        <div v-for="(item,i) in newlist" :ref="`list${i}`" class="newlist">
          <div class="submore">
            <div class="sub">
              <span>
                {{item[0].SubTypes}}
              </span>
            </div>
            <div v-for="it in item" class="prod" @click="detail(it)">
              <img v-lazy="require('../../../static/images/products/' + it.ProductImage)" />
              <p> {{it.ProductName}} </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isshow">
        <div class="video">
          <video controls poster="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/delivery/update/videos/mooncake-page-video-poster-20200727.jpg">
            <source src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/delivery/update/videos/mooncake-page-video-20200728.mp4" type="video/mp4">
          </video>
        </div>
        <div class="img">
          <img src="../../../static/images/page-mobile.jpg">
        </div>
      </div>
      <div v-if="isshows">
        <div class="new">
          <img src="../../../static/images/foodgood/fp-yoghurt.jpg">
          <h3>
            谷物组合希腊式风味酸奶<br>（混合莓果/黄桃）<br>Granola &amp; Greek Flavored Yoghurt<br>(Mixed Berry/ Yellow Peach)
          </h3>
          <p>甄选优质奶源生牛乳，使用欧洲进口菌种发酵而成，并采用希腊式物理脱乳清工艺，奶香浓郁质地醇厚。添加含真实果肉的果酱并搭配丰富谷物，不管是早餐或午后食用，都能开启轻盈无负担的美味之旅。</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/fp-yoghurt.jpg">
          <h3></h3>
          <p></p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/yoghurt_01-20170828140920-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>希腊式风味酸奶，甄选优质生牛乳，使用欧洲菌种发酵而成</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/yoghurt_02-20170828140925-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>口感醇厚的希腊式风味酸奶</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/yoghurt_03-20170828140931-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>果肉果酱和谷物组合</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/fp-bagel-20170831170546.jpg">
          <h3> 牛油果鸡肉/双重芝士火腿焙果<br>Avocado &amp; Chicken/ Ham &amp; Double Cheese Bagel</h3>
          <p>焙果是风靡北美的美味面包的代表，精选多种优质谷物，搭配健康美味内馅，手工制作带来醇正的韧劲口感。</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/bagel_01-20170828151804-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>精选优质谷物</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/bagel_02-20170828151808-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>芝香浓郁</p>
        </div>
        <div class="new">
          <img src="../../../static/images/foodgood/bagel_03-20170828151810-s-w360-h200-q100-m111111.gif">
          <h3></h3>
          <p>韧劲的口感</p>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  import { getFood } from '@/network/home.js'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
  export default {
    name: "MenuFood",
    data() {
      return {
        curActive: 'menu',
        pand: true,
        isshow:false,
        isshows:false,
        foods: [],
        list: [],
        list1: [],
        list2: [],
        list4: [],
        list3: [],
        newlist: [],
        head: {

        }

      };
    },
    components: {
      NavBaro,
      Scroll
    },
    updated() {
      this.loadMore()
    },
    created() {

      getFood().then(res => {
        this.foods = res.result.food;
        this.foods.filter(item => {
          if (item.SubTypes != "baking") {
            return item
          }
          this.list.push(item)
        })
        this.foods.filter(item => {
          if (item.SubTypes != "dessert") {
            return item
          }
          this.list1.push(item)
        })
        this.foods.filter(item => {
          if (item.SubTypes != "other") {
            return item
          }
          this.list2.push(item)
        })
        this.foods.filter(item => {
          if (item.SubTypes != "yogurt") {
            return item
          }
          this.list3.push(item)
        })
        this.foods.filter(item => {
          if (item.SubTypes != "sandwich") {
            return item
          }
          this.list4.push(item)
        })
        this.newlist.push(this.list, this.list1, this.list2, this.list3, this.list4)
        console.log(this.newlist);
        console.log(this.list);
        console.log(res);
      })

    },
    mounted() { },
    methods: {
      contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
      back() {
        this.$router.back();
      },
      detail(it){
        this.$store.commit('detail',it)
        this.$router.push('./detail')
       

      },
      pageRedirs(curName){
        for (let i = 0; i < this.newlist.length; i++) {
          this.$refs[`list${i}`][0].style.display = 'none';
        }
        this.isshow=!this.isshow
        if (curName) {
          this.curActive = curName;
        }


      },
      pageRedires(curName){
        for (let i = 0; i < this.newlist.length; i++) {
          this.$refs[`list${i}`][0].style.display = 'none';
        }
        this.isshows=!this.isshows
        if (curName) {
          this.curActive = curName;
        }
      },
      pageRedir(i, curName) {
        for (let i = 0; i < this.newlist.length; i++) {
          this.$refs[`list${i}`][0].style.display = 'none';
        }
        console.log(i);
        this.$refs[`list${i - 1}`][0].style.display = 'block';
        this.isshow=false;
        this.isshows=false;
        console.log();
        if (curName) {
          this.curActive = curName;
        }
      },


    }
  }
</script>
<style scoped>
  
  .sub {
    height: 40px;
    line-height: 40px;
  }
  .submore {
    margin-bottom: 35px;

  }
  .img img{
    width: 100%;
  }
  .sub span {
    margin-left: 20px;
  }
  .newlist {
    border-bottom: 1px solid #cccc;
  }
  .new{
    width: 100%;
    vertical-align: middle;
    text-align: center;
  }
  .new img{
    margin: 20px 0 20px;
    width: 88%;
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

  .food {
    z-index: 99;
    background-color: #ffffff;
  }

  .center1 img {
    width: 22px;
    height: 22px;
    margin-left: 18px;
    vertical-align: middle;
  }

  /* 隐藏滚动条 */
  #moneytab::-webkit-scrollbar {
    display: none;
  }

  #moneytab {
    overflow-x: auto;
    white-space: nowrap;
    height: 43px;
    overflow-y: hidden;
  }
  .img{
    margin-top: -4px;
  }

  .prod {
    margin: auto;
    display: inline-block;
    width: 50%;
    text-align: center;
  }

  .prod img {
    border-radius: 500px;
    margin: 20px 0 20px;
    width: 75% !important;
  }

  .ssj {
    height: 46px;
    scrollbar-width: none;
    display: flex;
  }

  .ssj::-webkit-scrollbar {
    display: none;
  }

.video video{
  width: 100%;
  
}
  .ssj>div {
    display: inline-block;
    margin: 15px 15px 0;
    text-align: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
  }

  .sy {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;

  }

  .active-menu {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;
  }
</style>