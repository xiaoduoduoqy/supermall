<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--轮播图-->
    <home-swiper :banners="banners"></home-swiper>
    <!--相关图-->
    <recommend-view :recommends="recommends"></recommend-view>
    <!--中间部分图片加载-->
    <home-feature-view :imghref="imghref"></home-feature-view>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  // 注册相关组件
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeatureView
  },
  data() {
    return {
      imghref: 'https://www.baidu.com/',
      banners: [],
      recommends: [],
      dKeywords: [],
      keywordss: [],
    }
  },
  /*组件创建成功的钩子函数*/
  created() {
    // 获取首页相关轮的数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.dKeywords = res.data.dKeyword.list;
      this.keywordss = res.data.keywords.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err);
    })
  },
}
</script>

<style scoped>
.home-nva {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
