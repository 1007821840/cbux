<template>
    <div>
  <div id="moneytab">
     <div class="dengl" @click="pageRedir(2, 'login')" >
         <div :class="{'active-menu':curActive == 'login','sy':pand}">登陆</div>
     </div>
     <div class="zhuc"  @click="pageRedir(4, 'register')" >
        <div :class="{'active-menu':curActive == 'register'}">注册</div>
    </div>
    <div class="guany" @click="pageRedir(5, 'starbucks-rewards')" >
        <div :class="{'active-menu':curActive == 'starbucks-rewards'}">关于</div>
    </div>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {
  name:"MoneyTab",
  data () {
    return {
        curActive: 'money',
        pand:true
      
    };
  },
  components: {},
  mounted () {},
  methods: {
    pageRedir(item, curName){
        console.log(item);
        if(item==4||item==5){
            this.pand=false
        }
        console.log(this.pand);
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