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
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}

.recommend-itme {
  flex: 1
}

.recommend-itme img {
  width: 65px;
  height: 65px;
  margin-top: 10px;
}

.recommend-itme div {
  margin-top: 5px;
}
</style>
