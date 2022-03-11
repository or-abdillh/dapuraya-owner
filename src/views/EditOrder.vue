<style scoped>

	.order-field {
		@apply w-full border-b-2 border-gray-500 pb-2 mb-3;
	}

</style>
<template>
	<main>
		<section class="w-full text-lg flex items-center gap-2">
			<i @click="router.go(-1)" class="fa fa-arrow-left text-xl"></i>
			Edit orderan
		</section>
		<section class="w-11/12 mx-auto flex items-center justify-between mt-10">
			<p class="text-sm">{{ order.date }}</p>
			<p class="font-medium">{{ order.pcs }} item Rp {{ order.price.toLocaleString('id') }}</p>
		</section>
		<section class="w-11/12 mx-auto flex flex-wrap mt-6">
			<span class="order-field">{{ order.name }}</span>
			<span class="order-field">{{ order.phone }}</span>
			<span class="order-field">{{ order.address }}</span>
			<template v-for="(item, x) in order.items" :key="x">
				<span class="order-field text-sm flex justify-between">
					<div>
						<p class="font-medium">{{ item.name }}</p>
						<p>Rp{{ item.price }}</p>
					</div>
					<div class="w-6/12 text-gray-100 flex items-center justify-around gap-1 px-2 w-3/12 rounded-full">
						<div class="bg-gray-500 w-8/12 flex justify-around items-center rounded-full py-2 px-2">
							<button>-</button>
							{{ item.pcs }}
							<button>+</button>
						</div>
						<div class="w-3/12 rounded-full bg-gray-500 grid text-3xl">
							<button>-</button>
						</div>
					</div>
				</span>
			</template>
		</section>
		<section class="w-11/12 mx-auto mt-5 flex justify-between items-center">
			<div>
				<i class="fa fa-plus"></i>
				Tambah produk
			</div>
			<button class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</main>
</template>

<script setup>

	import { computed } from 'vue'
	import { useOrders } from '@/stores/orders'
	import { useRouter } from 'vue-router'

	const orders = useOrders()
	const router = useRouter()
	const order = computed(() => orders.order)
	
</script>
