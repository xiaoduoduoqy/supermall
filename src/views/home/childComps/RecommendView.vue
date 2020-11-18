<template>
  <div class="recommend">
    <div v-for="itme in recommends" class="recommend-itme">
      <a :href="itme.link">
        <img :src="itme.image" alt="">
        <div>{{ itme.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
      request: true
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
}

.recommend-itme {
  flex: 1
}

.recommend-itme img {
  width: 65px;
  height: 65px;

}
</style>
