<template>
  <swiper class="sw">
    <swiper-item >
      <a >
        <img src="../../../static/images/featured/2019spring/kv-3-mobile.jpg" alt="">
      </a>
    </swiper-item>
    <swiper-item >
      <a >
        <img src="../../../static/images/featured/2019spring/kv-1-mobile.jpg" alt="">
      </a>
    </swiper-item>
    <swiper-item >
      <a >
        <img src="../../../static/images/featured/2019spring/kv-2-mobile.jpg" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper, SwiperItem } from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .sw{
    height: 410px!important;
  }

</style>