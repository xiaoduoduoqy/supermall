<template>
  <swiper>
    <swiper-item v-for="itme in banners">
      <a :href="itme.link">
        <img :src="itme.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
    SwiperCopy
  },
  props: {
    banners: {
      type: Array,
      default() {
        return ['1','2','3','4']
      },
      // requried: true,
    }
  }
}
</script>

<style scoped>

</style>
