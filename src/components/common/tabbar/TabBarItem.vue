<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item—icon"></slot>
    </div>
    <div v-else>
      <slot name="item—icon—active"></slot>
    </div>
    <div v-bind:style="isActiveColor">
      <slot name="item—text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,//相关类型
      default: '/home',//默认值是当组件没有传值的时候
      requried: true//当这个属性值为true时，就是使用组件必须需要传这个值
    },
    activeColor: {
      type: String,//相关类型
      default: 'red',//默认值是当组件没有传值的时候
    }
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      /*改变图标和相关字的颜色*/
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isActiveColor() {
      return this.isActive ? {} : {color: this.activeColor}
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.link);//改变相关路由
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
}

</style>
