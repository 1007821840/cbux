<template>
  <div path="/coffee" class="coffee">
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
        咖啡产品
      </div>
    </nav-baro>
    <div id="moneytab">
      <div class="ssj">
        <div class="dengl">
          <div :class="{'active-menu':curActive == 'login'}"><a href="/menu/coffee"> 全部</a></div>
        </div>
        <div class="zhuc" @click="pageRedir(1, 'beverages')">
          <div :class="{'active-menu':curActive == 'beverages'}">

            咖啡豆

          </div>
        </div>
        <div class="guany" @click="pageRedir(2, 'food')">
          <div :class="{'active-menu':curActive == 'food'}">

            星巴克VIA® 免煮咖啡

          </div>
        </div>
        <div class="guany" @click="pageRedir(3, 'coffee')">
          <div :class="{'active-menu':curActive == 'coffee'}">

            星巴克臻选™咖啡

          </div>
        </div>
        <div class="guany" @click="pageRedir(4, 'merchandise')">
          <div :class="{'active-menu':curActive == 'merchandise'}">

            Origami™

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
    </scroll>
  </div>
</template>

<script>
  import Scroll from '@/components/common/scroll/Scroll'
  import { getCoffee } from '@/network/home.js'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
  export default {
    name: "MenuCoffee",
    data() {
      return {
        curActive: 'menu',
        pand: true,
        coffees: [],
        list: [],
        list1: [],
        list2: [],
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
    created() {

      getCoffee().then(res => {
        this.coffees = res.result.coffee;
        this.coffees.filter(item => {
          if (item.SubTypes != "baking-M") {
            return item
          }
          this.list.push(item)
        })
        this.coffees.filter(item => {
          if (item.SubTypes != "via-dairy") {
            return item
          }
          this.list1.push(item)
        })
        this.coffees.filter(item => {
          if (item.SubTypes != "selection") {
            return item
          }
          this.list2.push(item)
        })
        this.coffees.filter(item => {
          if (item.SubTypes != "origami-M") {
            return item
          }
          this.list3.push(item)
        })
        this.newlist.push(this.list, this.list1, this.list2, this.list3)
        console.log(this.newlist);
        console.log(this.list);
        console.log(res);
      })

    },
    updated() {
      this.loadMore()
    },
    mounted() { },
    methods: {
      contentScroll(position) {
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
      detail(it){
        this.$store.commit('detail',it)
        this.$router.push('./detail')
       

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

  .sy {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;

  }

  .coffee {
    z-index: 99;
    background-color: #ffffff;
  }
  .newlist {
    border-bottom: 1px solid #cccc;
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

  .active-menu {
    border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;
  }
</style>