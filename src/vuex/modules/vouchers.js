const state = {
    amount: 0,
    isOpen: false,
    description: ''
}

const getters = {
}

const actions = {
    openForm({ commit }, amount) {
        commit('setAmount', amount)
    },
    closeForm({ commit }) {
        commit('closeWindow')
    },
    setDescription({ commit }, description) {
        commit('description', description)
    }
}

const mutations = {
    setAmount(state, amount) {
        state.amount = amount
        state.isOpen = true
    },
    closeWindow(state) {
        state.isOpen = false
    },
    description(state, description) {
        state.description = description
    }
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}