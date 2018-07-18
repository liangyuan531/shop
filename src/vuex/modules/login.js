const state = {
	isMatch: false,
	useremail: '',
	isLogin: false
}

const getters = {
}

const actions = {
	login({ commit }, user) {
		commit('showUser', user)
	},
	logout({ commit }) {
		commit('logout')
	}
}

const mutations = {
	showUser(state, user) {
		state.useremail = user.email
		state.isLogin = true
	},
	logout(state) {
		state.isLogin = false
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