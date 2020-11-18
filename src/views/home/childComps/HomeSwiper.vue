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
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      },
      requried: true,
    }
  }
}
</script>

<style scoped>

</style>
