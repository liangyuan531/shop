import Vue from 'vue'
import Vuex from 'vuex'
import vouchers from './modules/vouchers'
import addToCart from './modules/addToCart'
import checkout from './modules/checkout'
import cart from './modules/cart'
import login from './modules/login'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
    // add all modules
    modules: {
        vouchers,
        addToCart,
        checkout,
        cart,
        login,
        message
    }
})