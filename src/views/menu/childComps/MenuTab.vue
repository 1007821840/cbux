<template>
    <div>
  <div id="moneytab">
     <div class="dengl"  >
         <div :class="{'active-menu':curActive == 'login'}"><a href="/menu"> 季度精选</a></div>
     </div>
     <div class="zhuc"  @click="pageRedir(9, 'beverages')" >
        <div :class="{'active-menu':curActive == 'beverages'}">饮料</div>
    </div>
    <div class="guany" @click="pageRedir(10, 'food')" >
        <div :class="{'active-menu':curActive == 'food'}">美食</div>
    </div>
    <div class="guany" @click="pageRedir(11, 'coffee')" >
        <div :class="{'active-menu':curActive == 'coffee'}">咖啡产品</div>
    </div>
    <div class="guany" @click="pageRedir(12, 'merchandise')" >
        <div :class="{'active-menu':curActive == 'merchandise'}">商品</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name:"MenuTab",
  data () {
    return {
        curActive: 'menu',
        pand:true
      
    };
  },
  components: {},
  mounted () {},
  methods: {
    pageRedir(item, curName){
				if(curName){
					this.curActive = curName;
                }
				this.$store.commit('pageRedir', item);
            },
            
            
  }
}
</script>
<style scoped>
    #moneytab{
        display: flex;
        height: 43px;
    }
    #moneytab>div{
        margin: 15px;
        color: rgba(0, 0, 0, 0.56);
    }
    .sy{
        border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;
        
    }
    .active-menu{
        border-bottom: 3px solid #00A862;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 700;
    padding-bottom: 3px;
    }
</style>