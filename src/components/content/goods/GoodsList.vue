<template>
  <div class="goods-list" >
    <goods-list-item v-for="itme in goodslist" :goodItem="itme"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [{},{},{},{}]
      },
      request: false
    },
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>
