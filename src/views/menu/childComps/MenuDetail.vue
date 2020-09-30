<template>
  <div path="/detail" class="detail">
    <nav-baro class="sy-nav">
        <div slot="center" class="center1">
          <img src='../../../assets/icons/icon-chevron-left.svg' @click="back">
        </div>
      </nav-baro>
    <img v-lazy="require('../../../static/images/products/' + details.ProductImage)" class="imggg"/>
    <div>{{ details.ProductName}}</div>
    <div>猜你喜欢</div>
    <div></div>
  </div>
</template>

<script>
    import NavBaro from '@/components/common/navbar/NavBaro.vue'
export default {
    
  name:"MenuDetail",
  data () {
    return {
      
    };
  },
  computed:{
      details(){
          return this.$store.state.it
      }
  },
  components: {
    NavBaro
  },
  mounted () {
      
  },
  updated(){
    this.details()
  },
  methods: {
    back() {
        this.$router.back();
      },
  }
}
</script>
<style scoped>
    .detail{
        background-color: #ffff;
        display: table-cell;
        vertical-align: middle;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
    .imggg{
        width: 100%;

    }
    .center1 img {
    width: 22px;
    height: 22px;
    margin-left: 18px;
    vertical-align: middle;
  }
</style>