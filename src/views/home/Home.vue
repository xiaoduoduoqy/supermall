<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="itme in banner">
        <a v-bind:href="itme.link">
          <img v-bind:src="itme.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import {Swiper, SwiperItem} from 'components/common/swiper';
import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  // 注册相关组件
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      result: {
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: []
      }
    }
  },
  /*组件创建成功的钩子函数*/
  created() {
    // 获取首页相关轮的数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.result.banner = res.data.banner.list;
      this.result.dKeyword = res.data.dKeyword.list;
      this.result.keywords = res.data.keywords.list;
      this.result.recommend = res.data.recommend.list;
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
