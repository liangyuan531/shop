const state = {
    messageGroup: {
		messageClass: '',
		message: '',
		timeoutEvent: null
    },
    msgs: ''
}

const getters = {
	messages: (state) => {
		return state.messageGroup;
	}
}

const actions = {
	addMessage({ commit }, obj) {
		commit('ADD_MESSAGE', obj);
	},
	clearMessage({ commit }) {
		commit('clearMessage');
	}
}

const mutations = {
	'ADD_MESSAGE' (state, obj) {
        console.log(obj);
        state.messageGroup.messageClass = obj.messageClass
        state.messageGroup.message = obj.message
        state.msgs = obj.message
		// if (state.timeoutEvent) {
		// 	clearTimeout(state.timeoutEvent);
		// }
		// state.timeoutEvent = setTimeout(function() {
		// 	state.messageGroup = {
		// 		messageClass: '',
		// 		message: ''
		// 	}
		// }, 5000);
	},
	clearMessage(state) {
		state.messageGroup = {
			messageClass: '',
			message: ''
		}
	}
}

export default {
    //namespaced: true,
	state,
	mutations,
	actions,
	getters
}