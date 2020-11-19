<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <home-feature-view></home-feature-view>
    <tab-control class="home-tab-control" :tabtitle="['流行', '新款', '精选']" @tabClick="hometabClick"></tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>


    </ul>
  </div>
</template>

<script>


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";

import {getHomeMultidata, getGoodsHomedata} from "network/home";

export default {
  name: "Home",
  // 注册相关组件
  components: {
    HomeSwiper,
    RecommendView,
    HomeFeatureView,
    NavBar,
    TabControl
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {//首页相关数据结构
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  /*组件创建成功的钩子函数*/
  created() {
    //1获取首页相关轮的数据
    this.getHomeMultidata();
    //2获取流行,新款，精选相关数据
    this.getGoodsHomedata('pop');
  },
  methods: {
    //1获取首页相关轮的数据
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      })
    },

    //2获取流行,新款，精选相关数据
    getGoodsHomedata(type) {
      const page = this.goods[type].page + 1;
      alert(page);
      getGoodsHomedata(type,page).then(res => {
        console.log(res);
        switch (type) {
          case 'pop':
            this.goods.pop.page = page;
            this.goods.pop.list.push(res.data.list);
            break;
          case 'new':
            this.goods.new.page = page;
            this.goods.new.list.push(res.data.list);
            break;
          case 'sell':
            this.goods.sell.page = page;
            this.goods.sell.list.push(res.data.list);
            break;
        }
      }).catch(err => {
        console.log(err);
      })
    },

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
  position: sticky;
  top: 43px; /*顶部navbar的高度*/
  z-index: 9;
}
</style>
