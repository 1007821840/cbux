<template>
  <div>
    <div class="grid">
        <a href="javascript:;" class="home-left-campaign transition">
            <img src="../../..//static/images/pages/tmall-0325-cn.jpg">
        </a>
        <a href="javascript:;" class="home-middle-campaign transition">
            <img src="../../../static/images/pages/starbucks-design-studio-web-china.jpg">
        </a>
        <a href="javascript:;" class="home-right-campaign transition">
            <img src="../../../static/images/pages/homepage-career-cn.jpg">
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"HomeGrid",
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
    .grid img{
        width: 88%;
        margin: 20px 0 0px;
        
    }
    .grid{
       
        width: 100%;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
</style>