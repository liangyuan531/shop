const state = {
    messageGroup: {
		messageClass: '',
		message: '',
		timeoutEvent: null
    }
}

const getters = {
	messages: (state) => {
		return state.messageGroup;
	}
}

const actions = {
	addMessage({ commit }, message_obj) {
		commit('ADD_MESSAGE', message_obj);
	},
	clearMessage({ commit }) {
		commit('clearMessage');
	}
}

const mutations = {
	'ADD_MESSAGE' (state, message_obj) {
        console.log(message_obj);
        
        state.messageGroup.messageClass = message_obj.messageClass
        state.messageGroup.message = message_obj.message
		if (state.timeoutEvent) {
			clearTimeout(state.timeoutEvent);
		}
		state.timeoutEvent = setTimeout(function() {
			state.messageGroup = {
				messageClass: '',
				message: ''
			}
		}, 3000);
	},
	clearMessage(state) {
		state.messageGroup = {
			messageClass: '',
			message: ''
		}
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}