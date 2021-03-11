<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import {getDetailData, Goods, Shop} from "network/detail"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
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
        console.log(this.goods);
        //商店的相关数据
        this.shop = new Shop(data.shopInfo);
      }).catch(err => {
        console.log(err + '相关数据没有取到');
      })
    }
  }
}
</script>

<style scoped>

</style>
