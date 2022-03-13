<style scoped>

	.field {
		@apply w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4;
	}

</style>
<template>
	<section>
		<section class="w-full flex flex-col items-end">
			<span>{{ products }}</span>
		</section>
		<section class="mt-3">
			<template v-for="product in products" :key="product">
				<CardSettings v-on:delete="products--">
					<template v-slot:content>
						<section class="w-full px-5 py-2 flex justify-between flex-wrap">
							<input placeholder="Nama produk" class="field" type="text"/>
							<div class="w-6/12">
								<input placeholder="Harga" class="field" type="text"/>
								<input placeholder="Stok" class="field" type="text"/>
							</div>
							<div class="w-5/12 bg-gray-300 rounded grid place-items-center">
								<i class="fa fa-camera text-gray-700"></i>
							</div>
						</section>
					</template>
				</CardSettings>
			</template>
		</section>
		<section class="w-full flex justify-between items-center">
			<div @click="products++" class="active:scale-95 duration-300">
				<i class="fa fa-plus mr-2"></i>
				<span>Tambah produk</span>
			</div>
			<button class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</section>
</template>

<script setup>

	import { ref } from 'vue'
	import CardSettings from '@/components/CardSettings.vue'

	const products = ref(1)

</script>
