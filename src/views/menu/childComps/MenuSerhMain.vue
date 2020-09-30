<template>
  <div id="serhmain">
      <div v-for="(item,i) in items" class="main">
        <img :src="require('@/static/images/products/'+item.ProductImage)">
          <div>{{item.ProductName}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name:"MenuSerhMain",
  props:{
      items:Array
  },
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
    .main{
        margin: auto;
        display: inline-block;
        width: 50%;
        text-align: center;
    }
    .main img{
        margin: 20px 0 20px;
        border-radius: 1000px;
        width: 75%;
    }
</style>