<template>
<div>
  <tab-bar>
    <TabBarItem  link="/home" activeColor="pink">
      <img slot="item—icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item—icon—active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item—text">首页</div>
    </TabBarItem>
    <TabBarItem link="/category" activeColor="pink">
      <img slot="item—icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item—icon—active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item—text">分类</div>
    </TabBarItem>
    <TabBarItem link="/cart" activeColor="pink">
      <img slot="item—icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item—icon—active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item—text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile" activeColor="pink">
      <img slot="item—icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item—icon—active" src="~/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item—text">我的</div>
    </TabBarItem>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MianTabbar",
  components:{
    TabBar,TabBarItem
  }
}
</script>

<style scoped>

</style>
