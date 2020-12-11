<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodItem.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{ goodItem.title }}</p>
      <span class="price">{{ goodItem.orgPrice }}</span>
      <span class="collect">{{ goodItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      // 第一种:获取父组件的父组件的相关methods方法调用
      // this.$parent.$parent.refresh();
      //第二种:事件总线的方式
      this.$bus.$emit('itemImageLoad');
    },
    itemClick() {
      // console.log('跳转详情页面');
      //第一种动态方式
      this.$router.push('/detail/' +this.goodItem.iid);
      //第二种query，但是在路由的index.js里面不需要再进行相关配置
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: id
      //   }
      // });
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-list-item img {
  width: 100%;
  border-radius: 5px;
  height: 278.5px;
  border: 2px solid var(--color-tint);
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
