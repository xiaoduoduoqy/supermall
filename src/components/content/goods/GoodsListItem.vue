<template>
  <div class="goods-list-item">
<!--    <img :src="goodsItme.image" alt="">-->
<!--    <div class="goods-info">-->
<!--      <p>{{ goodItem.name }}</p>-->
<!--      <span class="price">{{ goodItem.currency_symbol + goodItem.price_rmb }}</span>-->
<!--      <span class="collect">{{ goodItem.id }}</span>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItme: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-list-item{
  background-color:chartreuse;
  height: 75px;
  width: 50%;
  border: 1px solid red;
}
</style>
