<template>
	<main>
		<HeaderNavigation title="Tambah produk"/>
		<section class="mt-6 w-11/12 mx-auto">
			<template v-for="(item, x) in items">
				<OrderListEdit :item="item" class="border-b-2 border-gray-500 pb-2 mb-6"/>
			</template>
		</section>
		<section class="w-11/12 mx-auto mt-5 flex justify-between items-center">
			<div @click="router.go(-1)" class="active:scale-95 duration-300">
				Kembali
			</div>
			<button @click="router.go(-1)" class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</main>
</template>

<script setup>

	import HeaderNavigation from '@/components/HeaderNavigation.vue'
	import OrderListEdit from '@/components/OrderListEdit.vue'
	import { useOrders } from '@/stores/orders'
	import { computed } from 'vue'
	import { useRouter } from 'vue-router'

	const orders = useOrders()
	const router = useRouter()
	const items = computed(() => orders.order.items)

</script>
