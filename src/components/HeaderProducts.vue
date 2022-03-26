<style scoped>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
		width: 0;
	}
</style>
<template>
	<section class="z-20 fixed top-0 left-0 right-0">
		<Menu />
		<section class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-primary p-5">
			<div class="flex justify-between mb-6 items-center text-2xl">
				<i @click="router.go(-1)" class="fa fa-arrow-left"></i>
				<i class="fa fa-arrow-right"></i>
			</div>
			<div class="flex text-center text-sm gap-6 overflow-scroll no-scrollbar">
				<template v-for="(point, x) in dropPoints">
					<span @click="currentID = point.open_order_id" style="min-width: 30%" class="flex flex-col gap-1">
						<strong>{{ point.drop_point_name }}</strong>
						<p class="text-sm">{{ formatingDate(point.open_order_date) }}</p>
						<p v-if="currentID === point.open_order_id" @click="toEditSchedule(point)" class="active:scale-95 duration-300 text-xxs border-2 border-gray-700 rounded-full px-1">Atur ulang jadwal</p>
					</span>
				</template>
				<span @click="router.push({ name: 'NewSchedule' })" class="active:scale-95 duration-300 w-4/12">
					<i class="fa fa-plus mb-2 text-gray-100 bg-gray-800 p-2 rounded-full"></i>
					<p class="text-sm">Tambah jadwal</p>
				</span>
			</div>
		</section>
	</section>
</template>

<script setup>

	import { ref, computed, onMounted } from 'vue'
	import { useRouter } from 'vue-router' 
	import { useOpenOrders } from '@/stores/openOrders'
	import Menu from '@/components/Menu.vue'
	import http from '@/http'
	import formatingDate from '@/helper/formatingDate.js'

	const currentID = ref()
	const router = useRouter()
	const openOrders = useOpenOrders()

	const dropPoints = ref()
	//Get drop point with open order
	onMounted(() => {
		http.get('/open-orders', res => {
			dropPoints.value = res.results.openOrders
			openOrders.lists = dropPoints.value
		})
	})

	const toEditSchedule = data => {
		setTimeout(() => {
			router.push({
				name: 'EditSchedule',
				params: {
					key: data.open_order_id
				}
			})
		}, 300)
	}

</script>
