import Vue from 'vue'
import Vuex from 'vuex'
import vouchers from './modules/vouchers'
import addToCart from './modules/addToCart'
import checkout from './modules/checkout'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        vouchers,
        addToCart,
        checkout,
        cart
    }
})