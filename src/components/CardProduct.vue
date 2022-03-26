<template>
	<section class="relative break-inside-avoid w-42 mb-8 rounded-lg bg-white shadow-sm overflow-hidden">
		<span class="absolute right-2 top-2 grid place-items-center text-gray-100 bg-yellow-500 p-2 rounded-full text-xs grid place-items-center">{{ source.stock }}</span>
		<img :src="source.thumbnail" class="z-10 duration-300 w-full aspect-square" />
		<div class="py-4 px-2 text-center text-sm">
			<h1 class="font-medium">{{ source.name }}</h1>
			<h2 class="font-medium">Rp.{{ source.price }},-</h2>
			<p class="text-xs">
				terjual <span class="text-red-600">{{ source.sold }}</span>
			</p>
			<div class="text-yellow-500 text-xs flex w-10/12 mx-auto justify-center gap-3 mt-3">
				<button>edit</button>
				<button>hapus</button>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, watch, computed } from 'vue'
	import { useOrders } from '@/stores/orders'

	const orders = useOrders()
	const props = defineProps({
		source: {
			type: Object
		}
	})
</script>
