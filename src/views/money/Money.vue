<template>
  <div>
    <nav-baro class="sy-nav">
      <div slot="center" class="center1">
        登录或创建一个新帐户 🌟
      </div>
    </nav-baro>
    <money-tab/>
    
  </div>
</template>

<script>
  import MoneyTab from './childComps/MoneyTab.vue'
  import NavBaro from '@/components/common/navbar/NavBaro.vue'
export default {
  name:"Money",
  data () {
    return {
      
    };
  },
  components: {
    NavBaro,
    MoneyTab
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
  .center1{
    margin-left: 15px;
  }
</style>