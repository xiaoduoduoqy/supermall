<template>
  <div class="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator">
    </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
<!--        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}"-->
<!--             :key="index"></div>-->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper"
}
</script>

<style scoped>

</style>
