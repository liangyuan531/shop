import Vue from 'vue'
import Vuex from 'vuex'
import vouchers from './modules/vouchers'
import addToCart from './modules/addToCart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        vouchers,
        addToCart
    }
})