<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index" :src="item" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    data() {
      return {
        count: 0,
        imageLenght: 0
      }
    }
  },
  methods: {
    /*图片加载完成从新需要刷新scroll组件防止划不动*/
    imageLoad() {
      // if (++this.count === this.imageLenght) {
      //   this.$emit('imageLoad')
      // } 相关性能只发送一次
      this.$emit('imageLoad')
    },
  },
  watch: {
    detailInfo() {
      this.imageLenght = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.info-desc, .clear-fix {
  position: relative;
}

.start {
  width: 60px;
  height: 1px;
  background-color: #333;
  margin-left: 4px;
}

.start:before {
  position: absolute;
  left: 4px;
  top: -2.5px;
  display: block;
  content: '';
  width: 5px;
  height: 5px;
  background-color: #333;
}

.end {
  width: 60px;
  height: 1px;
  background-color: #333;
  position: absolute;
  right: 4px;
  bottom: 0;
}

.end:after {
  position: absolute;
  right: 0;
  top: -2.5px;
  display: block;
  content: '';
  width: 5px;
  height: 5px;
  background-color: #333;
}

.desc {
  padding: 10px 4px;
}

.info-key {
  font-size: 14px;
  padding-bottom: 6px;
  line-height: 20px;
  margin: 4px 0;
  text-indent: 10px;
}

.info-list img {
  width: 100%;
}
</style>
