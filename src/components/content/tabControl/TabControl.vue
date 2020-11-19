<template>
  <div class="tab-control">
    <!--因为需求上看这里只是字不一样所以并没有使用插槽-->
    <div v-for="(itme, index) in tabtitle" class="tab-control-item">
      <span tab-contaor-item :class="{active:isactive==index}" @click="btnClick(index)"> {{ itme }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabtitle: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isactive: 0,
    }
  },
  methods: {
    btnClick(index) {
      //修改isactive动态修改样式
      this.isactive = index;
      // 定义一个事件将相关数据返回给父组件
      this.$emit('tabClick', index);
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>
