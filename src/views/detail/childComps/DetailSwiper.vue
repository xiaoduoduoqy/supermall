<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="itme in topImages">
      <img :src="itme" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      },
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
