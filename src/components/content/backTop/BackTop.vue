<template>
  <!--启用下面代码就需要启用定义一个事件将相关数据返回给父组件-->
  <!--<div class="back-top" @click="btnClckick">-->
    <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods:{
    btnClick(){
      // 定义一个事件将相关数据返回给父组件
      // this.$emit('backTopClick');
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 23px;
  bottom: 55px;
}

.back-top img {
  width: 43px;
  height: 43px;
}
</style>
