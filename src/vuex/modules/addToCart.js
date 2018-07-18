const state = {
	giftNum: 1,
	//store voucher information
	addedVouchers: [],
	isAdd: false
}

const getters = {
	totalPrice: (state) => {
		let total = 0
		state.addedVouchers.forEach(n => {
			total += n.amount * n.giftNum
		})
		return total
	}
}

const actions = {
    add({ commit }) {
		commit('addGift')
	},
	minus({ commit }) {
		commit('minusGift')
	},
	addVouchers({ commit }, voucher) {
		commit('addVoucher', voucher)
	},
	resetCart({ commit }) {
		commit('resetCart')
	}
}

const mutations = {
	addGift(state) {
		state.giftNum++
	},
    minusGift(state) {
		if(state.giftNum > 1)
			state.giftNum--
	},
	addVoucher(state, voucher) {
		let temp = state.addedVouchers.find(n => n.amount == voucher.amount)
		if(!temp){
			state.addedVouchers.push(voucher)
		}else{
			temp.giftNum += voucher.giftNum
		}
		state.isAdd = true
		//reset giftnum
		state.giftNum = 1
		//reset voucherInfo
		// voucher.description = ''
		// voucher.from = ''
		// voucher.toName = ''
		// voucher.toEmail = ''
		// voucher.message = ''
	},
	resetCart(state) {
		state.addedVouchers = []
	}
}

export default {
    namespaced: true,
	state,
	mutations,
	actions,
	getters
}