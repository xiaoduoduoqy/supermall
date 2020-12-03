<template>
  <swiper>
    <swiper-item v-for="itme in banners">
      <a :href="itme.link">
        <img :src="itme.image" alt="" @load="imageLoad">
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
      // requried: true,
    }
  },
  data() {
    return {
      isload: false
    }
  },
  methods: {
    // 监听轮播图加载完成方法
    imageLoad() {
      if(!this.isload){
        this.$emit('swiperImageLoad');
        this.isload=!this.isload;
      }

    }
  }
}
</script>

<style scoped>

</style>
