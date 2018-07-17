import Vue from 'vue'
import App from './App'
import { routes } from './routes'
import VueRouter from 'vue-router';
import VueFire from 'vuefire'
import store from './vuex/store'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFire)
Vue.use(VeeValidate)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  // using router
  router,
  // using store
  store,
  render: h => h(App)
  //components: { App },
 // template: '<App/>'
})
