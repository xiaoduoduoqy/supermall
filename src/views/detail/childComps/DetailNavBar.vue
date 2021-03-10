<template>
  <div>
    <nav-bar class="home-nva">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(itme, index) in title"
             class="title-item"
             @click="titleClick(index)"
             :class="{active:isactive==index}">{{ itme }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      isactive: 0,
    }
  },
  methods: {
    titleClick(index) {
      this.isactive = index;
    },
    backClick() {
      // this.$router.go(-1);
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #fff;
  font-size: 13px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back img {
  margin-top: 10px;
}
</style>
