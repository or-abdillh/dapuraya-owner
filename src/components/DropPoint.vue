<template>
	<section class="w-full flex flex-col items-end">
		<span>{{ cards }}</span>
	</section>
	<section class="mt-3">
		<template v-for="card in cards">
		 <CardDropPoint v-on:delete="cards--"/>
		</template>
		<section class="w-full flex justify-between items-center">
			<div @click="cards++" class="active:scale-95 duration-300">
				<i class="fa fa-plus mr-2"></i>
				<span>Tambah drop point</span>
			</div>
			<button class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</section>	
</template>

<script setup>

	import { ref } from 'vue'
	import CardDropPoint from '@/components/CardDropPoint.vue'

	const cards = ref(1)

</script>
