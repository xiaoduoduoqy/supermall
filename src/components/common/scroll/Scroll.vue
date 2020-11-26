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
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      },
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    // 创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: true
    });
    // 监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // 将相关参数通过函数传给父组件
      this.$emit('scroll',position)
    })
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
