<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="home-tab-control" :tabtitle="['流行', '新款', '精选']" @tabClick="hometabClick"></tab-control>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";
import TabControl from "components/content/tabControl/TabControl";

import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  // 注册相关组件
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    HomeFeatureView,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  /*组件创建成功的钩子函数*/
  created() {
    // 获取首页相关轮的数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    // tab-control组件返回的函数
    hometabClick(index) {
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nva {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.home-tab-control {
  /*两个要混合使用*/
  /*position: sticky;*/
  /*top: 43px;!*顶部navbar的高度*!*/
  /*z-index: 9;*/
}
</style>
