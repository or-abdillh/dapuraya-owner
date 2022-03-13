<template>
	<section class="z-20 fixed top-0 left-0 right-0">
		<div class="w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-primary p-5">
			<div class="flex justify-between mb-6 items-center text-2xl">
				<i @click="router.go(-1)" class="fa fa-arrow-left"></i>
				<i class="fa fa-arrow-right"></i>
			</div>
			<div class="flex text-center text-sm gap-6">
				<template v-for="(point, x) in dropPoints">
					<span class="w-4/12 flex flex-col gap-1">
						<strong>{{ point.place }}</strong>
						<p class="text-sm">{{ point.date }}</p>
						<p v-if="currentID === point.id" class="text-xxs border-2 border-gray-700 rounded-full px-1">Atur ulang jadwal</p>
					</span>
				</template>
				<span @click="toNewSchedule" class="active:scale-95 duration-300 w-4/12">
					<i class="fa fa-plus mb-2 text-gray-100 bg-gray-800 p-1 rounded"></i>
					<p class="text-sm">Tambah jadwal</p>
				</span>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, computed } from 'vue'
	import { useRouter } from 'vue-router'
	import { useOrders } from '@/stores/orders'  

	const currentID = ref(2)
	const router = useRouter()
	const orders = useOrders()

	const dropPoints = computed(() => orders.dropPoints)

	const toNewSchedule = () => {
		setTimeout(() => {
			router.push({ name: 'CreateProduct' })
		}, 300)
	}


</script>
