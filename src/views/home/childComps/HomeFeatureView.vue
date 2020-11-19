<template>
  <div class="home-feature">
    <a :href="imghref"></a>
    <img src="~assets/img/home/recommend_bg.jpg">
  </div>
</template>

<script>
export default {
  name: "HomeFeatureView",
  props: {
    imghref: {
      type: String,
      default() {
        return ''
      },
      request: true
    }
  }
}
</script>

<style scoped>
.home-feature{
  height: 70px;
}
.home-feature img{
  width: 100%;
}
</style>
