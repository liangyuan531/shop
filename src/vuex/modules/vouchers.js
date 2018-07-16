const state = {
    amount: 0,
    isOpen: false
}

const getters = {
}

const actions = {
    openForm({ commit }, amount) {
        commit('setAmount', amount)
    },
    closeForm({ commit }) {
        commit('setOpen')
    }
}

const mutations = {
    setAmount(state, amount) {
        state.amount = amount
        state.isOpen = true
    },
    setOpen(state) {
        state.isOpen = false
    }
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}