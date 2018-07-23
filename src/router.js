import Vouchers from './components/Vouchers'
import Checkout from './components/Checkout'
import Login from './components/Login'
import OrderDetail from './components/OrderDetail'
import VueRouter from 'vue-router'; 
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Vouchers',
        component: Vouchers
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/order-detail',
        name: 'Order-detail',
        component: OrderDetail
    }
]

export const router = new VueRouter({
      mode: 'history',
      routes
})

// router.beforeEach((to, from, next) => {
//     if(to.path === '/checkout' || to.path === '/order-detail' ){
//         next('/')
//     }
//     next('/')
// })
 