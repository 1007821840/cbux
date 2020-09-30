<template>
  <tab-bar class="tabbar">
    <tab-bar-item path="/home">
      <div slot="item-text1" class="item"><i class="iconfont">&#xe615;</i></div>
      <div slot="item-text" class="item1">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/store">
      <div slot="item-text1" class="item"><i class="iconfont">&#xe66e;</i></div>
      <div slot="item-text" class="item1">门店</div>
    </tab-bar-item>
    <tab-bar-item path="/money">
      <div slot="item-text1" class="item"><i class="iconfont">&#xe70f;</i></div>
      <div slot="item-text" class="item1">我的账号</div>
    </tab-bar-item>
    <tab-bar-item path="/menu">
      <div slot="item-text1" class="item"><i class="iconfont">&#xe621;</i></div>
      <div slot="item-text" class="item1">菜单</div>
    </tab-bar-item>
    <tab-bar-item path="/more">
      <div slot="item-text1" class="item"><i class="iconfont">&#xe505;</i></div>
      <div slot="item-text" @click="more" class="item1">跟多</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    methods:{
      more(){
        console.log('1');
      }
    }
  }
</script>

<style scoped>
  
  @import '../../../assets/font_rk635q4fmm/iconfont.css';
  .iconfont{
    font-size: 25px!important;
  }
  .item{
    margin-top: 5px;
  }
  .item1{
    margin-top: 3px;
    font-size: 15px;
   
  }
  .tabbar{
    z-index: 99;
  }
</style>