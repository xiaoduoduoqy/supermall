<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'//引入相关的better-scroll

export default {
  name: "Scroll",
  data() {
    return {
      scroll: '',
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true
    });

  }
}
</script>

<style scoped>

</style>
