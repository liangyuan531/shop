const state = {
	isMatch: false
}

const getters = {
}

const actions = {
	login({ commit }, user) {
		commit('checkUser', user)
	}
}

const mutations = {
	checkUser(state, user) {
		
	}
	// close(state) {
	// 	state.isLoginPage = false
	// }
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}