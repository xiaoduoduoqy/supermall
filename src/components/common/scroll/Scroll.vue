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
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
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
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        // 将相关参数通过函数传给父组件
        this.$emit('scroll', position)
      });
    }
    // 监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        // 将相关参数通过函数传给父组件
        this.$emit('pullingUp');
      });
    }
  },

  methods: {
    //better-scrollc返回定点的方法scrollTo（x,y,time）
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    //在监听到底部后调用可以再次监听底部
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    //从新加载better-scrollc滚动高度
    refresh() {
      // console.log('111');
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>
