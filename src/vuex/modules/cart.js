const state = {
    vouchers: [],
    showCheckout: true,
    showPaynow: false
}

const getters = {
}

const actions = {
    checkout({ commit }) {
        commit('showPay')
    },
    goToLogin({ commit }) {
        commit('hideBtn')
    },
    backToCheckout({ commit }) {
        commit('showPayBtn')
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
    }
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}