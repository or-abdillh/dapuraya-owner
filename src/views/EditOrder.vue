<style scoped>

	.order-field {
		@apply w-full border-b-2 border-gray-500 pb-2 mb-3;
	}

</style>
<template>
	<main>
		<HeaderNavigation title="Edit orderan" />
		<section class="w-11/12 mx-auto flex items-center justify-between mt-10">
			<p class="text-sm">{{ order.date }}</p>
			<p class="font-medium">{{ order.pcs }} item Rp {{ order.price.toLocaleString('id') }}</p>
		</section>
		<section class="w-11/12 mx-auto flex flex-wrap mt-6">
			<span class="order-field">{{ order.name }}</span>
			<span class="order-field">{{ order.phone }}</span>
			<span class="order-field">{{ order.address }}</span>
			<template v-for="(item, x) in order.items" :key="x">
				<OrderListEdit v-on:dismiss="dismiss" v-on:change="updateItem" :item="item" />	
			</template>
		</section>
		<section class="w-11/12 mx-auto mt-5 flex justify-between items-center">
			<div @click="toAddItemOrder" class="active:scale-95 duration-300">
				<i class="fa fa-plus"></i>
				Tambah produk
			</div>
			<button class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</main>
	<ModalDialog :show="showModalDialog" v-on:cancel="showModalDialog = false" v-on:confirm="removeItem" :id="itemId" />
</template>

<script setup>

	import { computed, ref } from 'vue'
	import { useOrders } from '@/stores/orders'
	import { useRouter } from 'vue-router'
	import OrderListEdit from '@/components/OrderListEdit.vue'
	import ModalDialog from '@/components/ModalDialog.vue'
	import HeaderNavigation from '@/components/HeaderNavigation.vue'

	const orders = useOrders()
	const router = useRouter()
	const order = computed(() => orders.order)

	const showModalDialog = ref(false)
	const itemId = ref(null)

	const toAddItemOrder = () => {
		setTimeout(() => {
			router.push({ name: 'AddItemOrder' })
		}, 300)
	}

	const updateItem = val => {
		let pcs = 0
		let price = 0
		orders.order.items.forEach((item, x) => {
			if (item.id === val.id) orders.order.items[x] = val
		})

		orders.order.items.forEach(item => {
			pcs += item.pcs
			price += item.total
		})

		orders.order.pcs = pcs
		orders.order.price = price
	}

	const dismiss = id => {
		showModalDialog.value = true
		itemId.value = id
	}

	const removeItem = id => {
		orders.order.items.forEach((item, x) => {
			if (item.id === id) {
				updateItem({
					id,
					name: '',
					pcs: 0,
					price: 0,
					total: 0
				})
			}
		})
		showModalDialog.value = false
	}

	const closeModalDialog = () => {
		alert('ok')
	}
	
</script>
