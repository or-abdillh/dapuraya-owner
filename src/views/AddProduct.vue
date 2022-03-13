<template>
	<main>
		<HeaderNavigation title="Tambah produk" />
		<section class="mt-5 w-11/12 mx-auto">
			<template v-for="(product, x) in products" :key="x">
				<ListAddProduct :source="product" v-on:change="isChange" />
			</template>
		</section>
		<section class="w-11/12 mx-auto mt-8 flex justify-between items-center">
			<p class="text-sm">{{ count }} produk ditambahkan</p>
			<button class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</main>
</template>

<script setup>

	import { useOrders } from '@/stores/orders'
	import { computed, ref } from 'vue'
	import HeaderNavigation from '@/components/HeaderNavigation.vue'
	import ListAddProduct from '@/components/ListAddProduct.vue'

	const orders = useOrders()
	const products = computed(() => orders.products)
	const count = ref(0)

	const isChange = increment => {
		if (increment) count.value++
		else count.value--
	}

</script>
