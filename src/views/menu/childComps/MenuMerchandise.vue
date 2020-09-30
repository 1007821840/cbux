<template>
  <div path="/merchandise" class="merchandise">
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
       商品
      </div>
    </nav-baro>
    <div id="moneytab">
      <div class="ssj">
          <div class="dengl">
            <div :class="{'active-menu':curActive == 'login'}"><a href="/menu/merchandise"> 全部</a></div>
          </div>
          <div class="zhuc" @click="pageRedir(1, 'beverages')">
            <div :class="{'active-menu':curActive == 'beverages'}">
             常规商品
            </div>
          </div>
          <div class="guany" @click="pageRedir(2, 'food')">
            <div :class="{'active-menu':curActive == 'food'}">
             臻选商品
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
  import { getMerchangdise } from '@/network/home.js'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
  export default {
    name: "MenuMerchangdise",
    data() {
      return {
        curActive: 'menu',
        pand: true,
        merchangdises:[],
        list: [],
        list1:[],
        newlist:[],
        head:{

        }

      };
    },
    components: {
      NavBaro,
      Scroll
    },
    updated(){
      this.loadMore()
    },
    created(){
    
        getMerchangdise().then(res=>{
          this.merchangdises=res.result.merchand;
        this.merchangdises.filter(item => {
          if (item.SubTypes !="ordinary") {
            return item
          }
          this.list.push(item)
        })
        this.merchangdises.filter(item => {
          if (item.SubTypes !="premium") {
            return item
          }
          this.list1.push(item)
        })
        this.newlist.push(this.list,this.list1)
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
      pageRedir(i, curName) {
        for(let i=0;i<this.newlist.length;i++){
          this.$refs[`list${i}`][0].style.display='none';
        }
        console.log(i);
        this.$refs[`list${i-1}`][0].style.display='block';
        console.log();
        if (curName) {
          this.curActive = curName;
        }
      },


    }
  }
</script>
<style scoped>
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
  .merchandise{
    z-index: 99;
    background-color: #ffffff;
  }
  .prod{
        margin: auto;
        display: inline-block;
        width: 50%;
        text-align: center;
    }
    .prod img{
        border-radius: 500px;
        margin: 20px 0 20px;
        width: 75%!important;
    }
    
  .sub {
    height: 40px;
    line-height: 40px;
  }
  .submore {
    margin-bottom: 35px;

  }
  .newlist {
    border-bottom: 1px solid #cccc;
  }
  .sub span {
    margin-left: 20px;
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