<template>
  <div class="goods-list" v-for="itme in goodslist">
    <goods-list-item :goodItem="itme"></goods-list-item>
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
        return []
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
}
</style>
