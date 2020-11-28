import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//在原型连中加入相关空的Vue实例。
Vue.prototype.$bus=new Vue();
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
