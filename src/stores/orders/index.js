import { defineStore } from 'pinia'

export const useOrders = defineStore('orders', {
	state() {
		return {
			items: [],
			order: {
				name: '',
				phone: '',
				address: '',
				amounts: 0,
				total: 0,
				items: []
			}
		}
	},
	actions: {
		addItem(payload) {
			const id = payload.id
			let currentDuplicate;

			if ( this.items.length > 0 ) {
				this.items.forEach((item, x) => {
					if (item.id === id) {
						this.items[x] = payload
						currentDuplicate = item.id
					}
				})
			}

			if ( payload.id !== currentDuplicate ) this.items.push(payload)
		}, 
		addOrder(payload) {
			this.order = payload
		}
	}
})
