<template>
  <div>
    <div>
          <!-- 注意！注意！注意！这里循环遍历的是items，不再是data里的list数组 -->
          <div  v-for="(item,index) in items" class="items">
              <div class="items1">
                  <img src="../../../assets/icons/icon-pin-solid-grey.svg">
              </div>
              <div class="items2">
              <div>{{item.StoreName}}</div>
              <div>{{item.StreetAddress}}</div>
              </div>
              <div class="items3">
                  <img src="../../../assets/icons/icon-info-green.svg" @click="paths(index)">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"StoreId",
  props:{
      items:Array,
      default(){
          return[]
      }

  },
  data () {
    return {
      
    };
  },
  components: {},
  mounted () {},
  methods: {
      paths(index){
         
          this.$store.commit('index',index)
          this.$store.commit('items',this.items)
          this.$router.push("./stores")
      }
  }
}
</script>
<style scoped>
    .items{
        height: 150px;
        display: flex;
        background-color: #ffffff;
    }
    .items1 img{
        width: 24px;
        height: 24px;
    }
    .items3 img{
        width: 22px;
        height: 22px;
    }
    .items1,.items3{
        text-align: center;
        line-height: 150px;
        width: 50px;
       
    }
    .items2{
        flex: 1;
    }
    .items2 :nth-of-type(1){
        margin-top: 30px;
        color: #000000;
        font-size: 16px;
        font-weight: 600;
    }
    .items2 :nth-of-type(2){
        margin-top: 10px;
        color: rgba(0, 0, 0, 0.56);
    font-weight: normal;
    line-height: 30px;

    }
</style>