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
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click:true,
      pullUpLoad: true
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //better-scrollc返回定点的方法scrollTo（x,y,time）
      this.scroll.scrollTo(x, y, time);
    }
  }
}
</script>

<style scoped>

</style>
