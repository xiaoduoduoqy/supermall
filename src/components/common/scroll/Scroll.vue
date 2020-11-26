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
    },
    pullUpLoad:{
      type:Boolean,
      default() {
        return false;
      }
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
      pullUpLoad: this.pullUpLoad
    });
    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      // 将相关参数通过函数传给父组件
      this.$emit('scroll', position)
    });
    // 监听加载更多
    this.scroll.on('pullingUp', () => {
      // 将相关参数通过函数传给父组件
      this.$emit('pullingUp');
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //better-scrollc返回定点的方法scrollTo（x,y,time）
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  }
}
</script>

<style scoped>

</style>
