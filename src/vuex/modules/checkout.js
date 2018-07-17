const state = {
	isChecked: false
}

const getters = {
}

const actions = {
	choose({ commit }) {
		commit('check')
	}
}

const mutations = {
	check(state) {
		state.isChecked ? state.isChecked = false : state.isChecked = true
	}
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}