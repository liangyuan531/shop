import { getField } from 'vuex-map-fields';
const state = {
	isChecked: false,
	userInfo: {
		firstName: '',
        lastName: '',
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