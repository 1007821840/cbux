<template>
  <div>
     <div v-for="it in list" class="main">
         <img :src="require('../../../static/images/homepage/'+it.image)">
         <p>{{it.name}}</p>
         <p>{{it.p}}</p>
         <p>{{it.p2}}</p>
         <p><a href="">了解更多</a></p>
     </div>
  </div>
</template>

<script>
export default {
  name:"HomeTmall",
  data () {
    return {
        list:[
            {
                image:'tmall-card-01.png',
                name:'会员星礼包',
                p:'星享卡新升级',
                p2:'更多心意好礼',
            },
            {
                image:'tmall-card-02.png',
                name:'星礼卡',
                p:'用一份心礼',
                p2:'让心意相随',
            },
            {
                image:'tmall-eticket.png',
                name:'电子产品卷',
                p:'心意',
                p2:'从这一杯开始',
            },
            {
                image:'tmall-reserve.png',
                name:'咖啡生活',
                p:'星巴克',
                p2:'用心制作',
            },
        ]
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