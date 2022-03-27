<style scoped>

	.field {
		@apply w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4;
	}

</style>
<template>
	<section>
		<section class="w-full flex flex-col items-end">
		</section>
		<section class="mt-3">
			<template v-for="product in products" :key="product.id">
				<CardFieldProduct v-on:delete="products.pop()" :isSubmit="isSubmit" :source="product"/>
			</template>
		</section>
		<section class="w-full flex justify-between items-center">
			<div @click="createNewCard" class="active:scale-95 duration-300">
				<i class="fa fa-plus mr-2"></i>
				<span>Tambah produk</span>
			</div>
			<button @click="isSubmit = !isSubmit" class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</section>
</template>

<script setup>

	import { ref, onMounted } from 'vue'
	import http from '@/http'
	import CardFieldProduct from '@/components/CardFieldProduct.vue'

	const products = ref([])
	const isSubmit = ref(false)

	onMounted(() => {
		http.get('/products/ready-stock', res => {
			products.value = res.results.products
		})
	})

	const createNewCard = () => {
		products.value.push({
			name: '',
			price: '',
			stock: '',
			id: false,
			thumbnail: false
		})
	}
</script>
