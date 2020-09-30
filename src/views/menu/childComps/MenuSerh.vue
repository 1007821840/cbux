<template>
  <div id="menuserh" v-if="menushow">
    <div class="menuserh">
      <div class="more">
        <div @click="back">X</div>
      </div>
      <div class="text">
        <input type="text" v-model="search" ref="inp4" @focus="inp1" placeholder="查找菜单">
        <img src="../../../assets/icons/icon-search.svg">
      </div>
      <div class="header">
        <div>大家都在搜</div>
      </div>
      <scroll ref="scroll" @scroll="contentScroll" :probe-type="3" :pull-up-load="true" @pullingUp="loadMore">
      <div class="main">
        <menu-serh-main :items="items"/>
      </div>
      </scroll>
    </div>
  </div>
</template>

<script>
 import {Debounce} from "@/utils/jlfd.js";
  import Scroll from '@/components/common/scroll/Scroll'
  // import MenuSerhMain from './MenuSerhMain.vue'
  import { getBeverages } from '@/network/home.js'
  export default {
    name: "MenuSerh",
    props: {
      shows: Boolean
    },
    data() {
      return {
        search: '',
        list:[],
        menushow: true

      };
    },
    // computed:{
    //     items: function() {
    //         var _search = this.search;
    //         if (_search) {
    //             var reg = new RegExp(_search, 'ig')
    //             return this.list.filter(function(e) {
    //                 return Object.keys(e).some(function(key) {
    //                     return e[key].match(reg);
    //                 })
    //                 //  return e.name.match(reg);
    //             })
    //         };
    //         return this.list;
    //     }

    //   },
    
    //到时候用节流
      computed: {
            items: function() {
                var search = this.search;
                if (search) {
                    return this.list.filter(function(product) {
                        return Object.keys(product).some(function(key) {
                            return String(product[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.list;
            }
        },

    components: {
      Scroll,
      MenuSerhMain: resolve => require(["./MenuSerhMain.vue"],resolve)
    },
    created(){
      
      getBeverages().then(res=>{
          this.list=res.result.beverages;
          console.log(this.list);
          
        })

      },
    mounted() {
      
      
    },
    updated(){
      this.loadMore()
    },
    methods: {
      loadMore:Debounce(function(row){
         
        this.$refs.scroll.scroll.refresh()
   },100),

      contentScroll(position) {
        // console.log( this.currentIndex);
      },

      inp1() {
        this.$refs.inp4.placeholder = ""
      },
      back() {
        this.menushow = false

      }
    }
  }
</script>
<style scoped>
  .more div {
    width: 72px;
    height: 72px;
    text-align: center;
    line-height: 72px;
    justify-content: space-between;
  }

  .more {
    height: 72px;
    display: flex;
    justify-content: space-between;

  }
  .wrapper {
    background-color: #F3F5F7;
    position: absolute;
    width: 100%;
    top: 172px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .text {
    position: relative;
    color: #999999;
    border-bottom: 1px solid #d9d9d9;
    width: 90%;
    height: 34px;
    margin: 15px 20px 8px;
  }

  .text input {
    outline: none;
    border: 0px;
    height: 33px;
    position: absolute;
    top: 0;
  }

  .text img {
    position: absolute;
    top: 5px;
    right: 0px;

  }
  .header{
    height: 29px;
  }
  .header div{
    margin: 20px;
    text-align: center;
    line-height: 29px;
    height: 29px;
    width: 96px;
    background: #00A862;
    font-size: 14px;
    color: #FFF;
  }

  .menuserh {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    background-color: #ffffff;
  }
</style>