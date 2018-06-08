// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //vuesax styles

Vue.use(Vuesax)
Vue.config.productionTip = false
Vue.use(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: VueRouter,
  components: { App },
  template: '<App/>'
})
