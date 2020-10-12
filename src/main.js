import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.config.productionTip = false
// 在根组件挂载myRouter实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
