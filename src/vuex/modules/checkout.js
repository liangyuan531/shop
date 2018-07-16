const state = {
	isLoginPage: false
}

const getters = {
}

const actions = {
	login({ commit }) {
		commit('openLogin')
	},
	closeLogin({ commit }){
		commit('close')
	}
}

const mutations = {
	openLogin(state) {
		state.isLoginPage = true
	},
	close(state) {
		state.isLoginPage = false
	}
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}