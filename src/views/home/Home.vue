<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tabControl"
      v-show="isTabFixed"
      :tabtitle="['流行', '新款', '精选']"
      @tabClick="backtabClick"
      ref="tabControl1"></tab-control>
    <scroll class="content"
            ref='aaa'
            :probe-type="3"
            :pull-up-load="true"
            @scroll="backscroll"
            @pullingUp="backpullingUp">
      <home-swiper :banners="banners"
                   @swiperImageLoad="backswiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control
        v-show="!isTabFixed"
        :tabtitle="['流行', '新款', '精选']"
        @tabClick="backtabClick"
        ref="tabControl2"></tab-control>
      <goods-list :goodslist="showGoodsData"></goods-list>
    </scroll>
    <!--采用子组件的返回方法-->
    <!--<back-top @backTopClick="backTop" ></back-top>-->
    <back-top @click.native="TopClick" v-show="isactive"></back-top>
    <!--直接采用native监听组件根元素的原生事件-->
  </div>
</template>

<script>


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import {getHomeMultidata, getGoodsHomedata} from "network/home";
import {debounce} from "common/utils"

export default {
  name: "Home",
  // 注册相关组件
  components: {
    HomeSwiper,
    RecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {//首页相关数据结构
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',//默认当前类型
      isactive: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      homeOffsetTop: 0,
      saveY: 0,
    }
  },
  /*组件创建成功的钩子函数*/
  created() {
    //1获取首页相关轮的数据
    this.getHomeMultidata();
    //2获取流行,新款，精选相关数据
    this.getGoodsHomedata('pop');
    this.getGoodsHomedata('new');
    this.getGoodsHomedata('sell');
  },
  destroyed() {//组件销毁回调函数
    console.log('组件销毁回调函数');
  },
  /*el已经渲染完成并挂载到实例上*/
  mounted() {
    //1监听item中图片加载完成加入防抖动
    const refresh = debounce(this.$refs.aaa.refresh, 50)
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    })
  },
  /*这两个activated和deactivated只有该组件使用了keep-alive时，这两个函数才是有效的*/
  activated() {//组件活跃状态回调函数
    this.$refs.aaa.scrollTo(0, this.saveY, 0);
    this.$refs.aaa.refresh();
  },
  deactivated() {//组件界面处于不活跃状态函数
    this.saveY = this.$refs.aaa.getScrollY();
  },
  /*计算属性*/
  computed: {
    //获取当前展示的相关数据
    showGoodsData() {
      return this.goods[this.currentType].list;
    }
  },
  /*定义相关方法*/
  methods: {
    /**
     * 网络请求相关方法
     */
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
      getGoodsHomedata(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = res.data.page;
      }).catch(err => {
        console.log(err);
      })
    },
    /**
     *事件监听子组件返回的相关方法
     */
    // tab-control组件返回的函数
    backtabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl2.isactive = index;
      this.$refs.tabControl1.isactive = index;
    },
    //back-top组件返回的函数
    // backTop() {
    //   // 父组件获取子组件对象$children和$refs
    //   // console.log(this.$children);
    //   // console.log(this.$refs.aaa);
    //   //可以直接取相关的值
    //   // console.log(this.$refs.aaa.scroll);
    //   // 直接调用better-scroll里面methods里面的函数
    //   this.$refs.aaa.showMessage();
    // },
    // 但是我们可以直接采用native监听组件根元素的原生事件
    TopClick() {
      this.$refs.aaa.scrollTo(0, 0, 300);
    },
    // BScroll组件返回的函数
    backscroll(position) {
      //1判断backtop是否显示
      if (position.y < -2000) {
        this.isactive = true;
      } else {
        this.isactive = false;
      }
      //2.决定tabControl是不是吸顶(posstition:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop - 44;
    },
    backpullingUp() {
      // console.log('加载更多');
      this.getGoodsHomedata(this.currentType);
      this.$refs.aaa.finishPullUp();
    },
    //加载tab-control组件的offsetTop
    backswiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.tabOffsetTop);
    },
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.home-nva {
  background-color: var(--color-tint);
  color: #ffffff;
  /*position: fixed;*/
  /*left: 0;*/
  /*right: 0;*/
  /*top: 0;*/
  /*z-index: 9;*/
}


/*.content {*/
/*  overflow: hidden;*/
/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  left: 0;*/
/*  right: 0;*/
/*}*/

.content {
  overflow: hidden;
  height: calc(100% - 93px);
  /*margin-top: 44px;*/
}

/*.tabControl{*/
/*  position: relative;*/
/*  z-index: 9;*/
/*}*/
</style>
