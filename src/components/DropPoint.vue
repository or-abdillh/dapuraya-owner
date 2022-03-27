<template>
	<section class="w-full flex flex-col items-end">
		<span>{{  }}</span>
	</section>
	<section class="mt-3">
		<template v-for="dropPoint in dropPoints" :key="dropPoint.drop_point_id">
			<CardDropPoint :isSubmit="trigger" :source="dropPoint" v-on:delete="dropPoints.pop()"/>
		</template>
		<section class="w-full flex justify-between items-center">
			<div @click="createNewCard" class="active:scale-95 duration-300">
				<i class="fa fa-plus mr-2"></i>
				<span>Tambah drop point</span>
			</div>
			<button @click="trigger = !trigger" class="text-gray-100 bg-orange-500 w-4/12 py-1 rounded-full">SIMPAN</button>
		</section>
	</section>	
</template>

<script setup>

	import { ref, onMounted } from 'vue'
	import http from '@/http'
	import CardDropPoint from '@/components/CardDropPoint.vue'

	const cards = ref(1)
	const dropPoints = ref()
	const trigger = ref(false)

	const createNewCard = () => {
		dropPoints.value.push({
			drop_point_name: '',
			drop_point_gmaps: '',
			drop_point_id: false
		})
	}


	onMounted(() => {
		http.get('/drop-points', res => {
			dropPoints.value = res.results.dropPoints
		})
	})

</script>
