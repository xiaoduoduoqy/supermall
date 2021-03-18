<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content"
            ref='bbb'
            :probe-type="3"
            :pull-up-load="true">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imgLoad"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

import Scroll from "components/common/scroll/Scroll";

import {getDetailData, Goods, Shop} from "network/detail"
import {debounce} from "common/utils"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  created() {
    //保存传入进来的商品ID
    this.iid = this.$route.params.iid;
    console.log(this.iid)
    //根据ID获取详数据
    this.getDetail(this.iid);
  },
  methods: {
    getDetail(id) {
      getDetailData(id).then(ref => {
        const data = ref.result;
        //顶部轮播数据相关图片
        this.topImages = ref.result.itemInfo.topImages;
        //商品详细数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        // console.log(this.goods);
        //商店的相关数据
        this.shop = new Shop(data.shopInfo);
        //获取商品详情信息
        this.detailInfo = data.detailInfo;

      }).catch(err => {
        console.log(err + '相关数据没有取到');
      })
    },
    /*监听组件detail-goods-info组件图片加载完*/
    imgLoad() {
      /*从新刷scroll*/
      // this.$refs.bbb.refresh();
      const refresh = debounce(this.$refs.bbb.refresh, 50);
      refresh();
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  background-color: #fff;
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;
  height: calc(100% - 44px);
}
</style>
