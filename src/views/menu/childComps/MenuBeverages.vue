<template>
  <div path="/beverages" class="beverages">
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
        饮料
      </div>
    </nav-baro>
    <div id="moneytab">
      <div class="ssj">
        <div class="dengl">
          <div :class="{'active-menu':curActive == 'login'}"><a href="/menu/beverages"> 全部</a></div>
        </div>
        <div class="zhuc" @click="pageRedir(1, 'beverages')">
          <div :class="{'active-menu':curActive == 'beverages'}">
            星巴克玩味冰调™
          </div>
        </div>
        <div class="guany" @click="pageRedir(2, 'food')">
          <div :class="{'active-menu':curActive == 'food'}">
            手工调制浓缩咖啡
          </div>
        </div>
        <div class="guany" @click="pageRedir(3, 'coffee')">
          <div :class="{'active-menu':curActive == 'coffee'}">
            星冰乐®
          </div>
        </div>
        <div class="guany" @click="pageRedir(4, 'merchandi')">
          <div :class="{'active-menu':curActive == 'merchandi'}">
            茶瓦纳™
          </div>
        </div>
        <div class="guany" @click="pageRedir(5, 'merchand')">
          <div :class="{'active-menu':curActive == 'merchand'}">
            经典巧克力饮品
          </div>
        </div>
        <div class="guany" @click="pageRedir(6, 'merchan')">
          <div :class="{'active-menu':curActive == 'merchan'}">
            咖啡融合冰淇淋
          </div>
        </div>
        <div class="guany" @click="pageRedir(7, 'mercha')">
          <div :class="{'active-menu':curActive == 'mercha'}">
            星巴克冷萃咖啡系列
          </div>
        </div>
        <div class="guany" @click="pageRedir(8, 'merchandise')">
          <div :class="{'active-menu':curActive == 'merchandise'}">
            气致™冷萃咖啡
          </div>
        </div>
      </div>
    </div>
    <!-- 组件 -->
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
    </scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  import { getBeverages } from '@/network/home.js'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
  export default {
    name: "MenuBeverages",
    data() {
      return {
        curActive: 'menu',
        pand: true,
        beverage: [],
        list: [],
        list1: [],
        list2: [],
        list4: [],
        list7: [],
        list5: [],
        list6: [],
        list3: [],
        newlist: [],
        head: {

        }


      };
    },
    updated() {
      this.loadMore()
    },
    computed: {

    },
    created() {
      console.log(2);
      getBeverages().then(res => {
        this.beverage = res.result.beverages;
        this.beverage.filter(item => {
          if (item.SubTypes != "mixology") {
            return item
          }
          this.list.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "espresso") {
            return item
          }
          this.list1.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "frappu") {
            return item
          }
          this.list2.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "chawana") {
            return item
          }
          this.list3.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "chocolate") {
            return item
          }
          this.list4.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "icecream") {
            return item
          }
          this.list5.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "coldextra") {
            return item
          }
          this.list6.push(item)
        })
        this.beverage.filter(item => {
          if (item.SubTypes != "gas-coldextra") {
            return item
          }
          this.list7.push(item)
        })
        this.newlist.push(this.list, this.list1, this.list2, this.list3, this.list4, this.list5, this.list6, this.list7)
        console.log(this.newlist);
        console.log(this.list);
        console.log(res);
      })
    },
    components: {
      NavBaro,
      Scroll
    },
    mounted() {
      console.log(1);
      console.log(this.items);

    },
    methods: {
      detail(it){
        this.$store.commit('detail',it)
        this.$router.push('./detail')
       

      },
      contentScroll(position) {
        // console.log( this.currentIndex);
      },

      loadMore() {
        this.$refs.scroll.scroll.refresh()
      },
      back() {
        this.$router.back();
      },
      pageRedir(i, curName) {
        for (let i = 0; i < this.newlist.length; i++) {
          this.$refs[`list${i}`][0].style.display = 'none';
        }
        console.log(i);
        this.$refs[`list${i - 1}`][0].style.display = 'block';
        console.log();
        if (curName) {
          this.curActive = curName;
        }
      },


    }
  }
</script>
<style scoped>
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

  .ssj {
    height: 46px;
    scrollbar-width: none;
    display: flex;
  }

  .newlist {
    border-bottom: 1px solid #cccc;
  }

  .ssj::-webkit-scrollbar {
    display: none;
  }

  .ssj>div {
    display: inline-block;
    margin: 15px 15px 0;
    text-align: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.56);
  }

  .sub {
    height: 40px;
    line-height: 40px;
  }
  .submore {
    margin-bottom: 35px;

  }
  .sub span {
    margin-left: 20px;
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

  .sy {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;

  }

  .beverages {
    z-index: 99;
    background-color: #ffffff;
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

  .active-menu {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;
  }
</style>