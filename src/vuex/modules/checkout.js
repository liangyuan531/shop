import { getField } from 'vuex-map-fields';
const state = {
	isChecked1: false,
	isChecked2: false,
	userInfo: {
		firstName: '',
		lastName: '',
		password: '',
        email: '',
        address: '',
        postcode: '',
        city: '',
        phone: '',
        instructions: ''
	},
	cardInfo: {
		cardNum: '',
        expiry: '',
        cvv: ''
	}
}

const getters = {
	getField,
}

const actions = {
	choose1({ commit }) {
		commit('check1')
	},
	choose2({ commit }) {
		commit('check2')
	}
}

const mutations = {
	check1(state) {
		state.isChecked1 ? state.isChecked1 = false : state.isChecked1 = true
	},
	check2(state) {
		state.isChecked2 ? state.isChecked2 = false : state.isChecked2 = true
	}
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}