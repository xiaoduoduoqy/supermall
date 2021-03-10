<template>
  <div id="app">
    <keep-alive exclude="Detail"><!--exclude排除路由Detail需要刷新-->
      <router-view></router-view>
    </keep-alive>
    <mian-tabbar></mian-tabbar>
  </div>
</template>

<script>
import MianTabbar from "components/content/mianTabbar/MianTabbar";

export default {
  name: 'App',
  components: {MianTabbar}
}
</script>

<style>
/*引入相关css文件*/
@import "assets/css/base.css";
</style>
