<template>
	<main>
		<HeaderProducts :title="dropPointName" />

		<section class="columns-2 mt-40">
			<div @click="toOrders" class="active:scale-95 duration-300 w-44 flex items-center gap-2 mb-5 bg-orange-500 rounded-xl px-3 py-2 text-gray-50">
				<i class="fa fa-user"></i>
				<p class="text-base">42 customer telah order</p>
			</div>
			
			<div @click="toAddProduct" class="active:scale-95 duration-300 w-44 flex items-center gap-2 mb-5 rounded-xl px-3 py-2 text-gray-700">
				<i class="fa fa-plus"></i>
				<p class="text-base">Tambah produk</p>
			</div>
			
			<template v-for="card in exampleCard" :key="card.id">
				<CardProduct :source="card" />
			</template>
		</section>
	</main>	
</template>

<script setup>

	import { useRoute, useRouter } from 'vue-router'
	import { computed, ref } from 'vue'
	import HeaderProducts from '@/components/HeaderProducts.vue'
	import CardProduct from '@/components/CardProduct.vue'

	const route = useRoute()
	const router = useRouter()

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
 	
	const exampleCard = [
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 1
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 2
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 3
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 4
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 5
		},
		{
			thumb: '/american-risol.jpg',
			title: 'American risol',
			price: 45000,
			prefix: 'Rp',
			sold: 30,
			stock: 44,
			id: 6
		}
	]

</script>
