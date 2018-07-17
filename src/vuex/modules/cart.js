const state = {
    vouchers: [],
    showCheckout: true,
    showPaynow: false,
    continueOrderShow: false,
    cartHidden: true
}

const getters = {
}

const actions = {
    checkout({ commit }) {
        commit('showPay')
        commit('showContinue')
    },
    goToLogin({ commit }) {
        commit('hideBtn')
    },
    backToCheckout({ commit }) {
        commit('showPayBtn')
    },
    backToVouchers({ commit }) {
        commit('showCheckoutBtn')
    },
    hindCart({ commit }) {
        commit('hideCart')
    }
}

const mutations = {
    showPay(state) {
        state.showCheckout = false
        state.showPaynow = true
    },
    hideBtn(state) {
        state.showCheckout = false
        state.showPaynow = false
    },
    showPayBtn(state) {
        state.showPaynow = true
        state.showCheckout = false
    },
    showCheckoutBtn(state) {
        state.showCheckout = true
        state.showPaynow = false
        state.continueOrderShow = false
    },
    showContinue(state) {
        state.continueOrderShow = true
    },
    hideCart(state) {
        state.cartHidden = false
    }
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}