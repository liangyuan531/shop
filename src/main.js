import Vue from 'vue'
import App from './App'
import { routes } from './routes'
import VueRouter from 'vue-router';
import VueFirestore from 'vue-firestore'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueFirestore)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  //components: { App },
 // template: '<App/>'
})
