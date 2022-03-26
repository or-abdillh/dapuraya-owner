<template>
	<main>
		<HeaderProducts :title="dropPointName" />

		<section class="columns-2 mt-56">
			<div @click="toOrders" class="active:scale-95 duration-300 w-44 flex items-center gap-2 mb-5 bg-orange-500 rounded-xl px-3 py-2 text-gray-50">
				<i class="fa fa-user"></i>
				<p v-if="orderCount > 0" class="text-base">{{ orderCount }} customer telah order</p>
			</div>
			
			<div @click="toAddProduct" class="active:scale-95 duration-300 w-44 flex items-center gap-2 mb-5 rounded-xl px-3 py-2 text-gray-700">
				<i class="fa fa-plus"></i>
				<p class="text-base">Tambah produk</p>
			</div>
			
			<template v-for="card in products" :key="card.id">
				<CardProduct :source="card" />
			</template>
		</section>
	</main>	
</template>

<script setup>

	import { useRoute, useRouter } from 'vue-router'
	import { computed, ref, onMounted } from 'vue'
	import HeaderProducts from '@/components/HeaderProducts.vue'
	import CardProduct from '@/components/CardProduct.vue'
	import http from '@/http'	

	const route = useRoute()
	const router = useRouter()

	const orderCount = ref(0)
	const products = ref(0)

	//Request to API for get products and order count
	onMounted(() => {
		http.get('/orders/count/all', res => {
			orderCount.value = res.results.count
		})

		http.get('/products/ready-stock', res => {
			products.value = res.results.products
		})
	})

	const isShow = ref(false)
	let order = ref({
		pcs: 0,
		total: 45000
	})

	const toOrders = () => {
		setTimeout(() => {
			router.push({ name: 'Orders' })
		}, 300);
	}

	const toAddProduct = () => {
		setTimeout(() => {
			router.push({ name: 'AddProduct' })
		}, 300);
	}
 	
</script>
