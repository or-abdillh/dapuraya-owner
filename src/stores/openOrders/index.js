import { defineStore } from 'pinia'

export const useOpenOrders = defineStore('openOrders', {
	state() {
		return {
			lists: []
		}
	},
	persist: true
})
