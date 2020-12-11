<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from "./childComps/DetailSwiper";

import {getDetailData} from "network/detail"

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      topImages: [],

    }
  },
  created() {
    //保存传入进来的商品ID
    this.iid = this.$router.params.iid;
    //根据ID获取详数据
    this.getDetail(this.iid);
  },
  methods: {
    getDetail(id) {
      getDetailData(id).then(ref => {
        this.topImages = ref.resule.itemInfo.topImages;

      }).catch(err => {
        console.log(err + '相关数据没有取到');
      })
    }
  }
}
</script>

<style scoped>

</style>
