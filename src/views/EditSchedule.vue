<style scoped>

	input::placeholder {
		@apply text-gray-700;
	}

</style>
<template>
	<main class="min-h-screen p-5 bg-orange-400">
		<div class="w-full">
			<i @click="router.go(-1)" class="fa fa-arrow-left active:scale-75 duration-300"></i>
		</div>

		<form @submit.prevent="formSubmit" class="mt-5 text-gray-700 flex flex-wrap gap-3">
			<span class="bg-orange-300 w-full pr-1 pl-3 rounded-xl overflow-hidden">
				<select v-model="currentDropPoint.id" class="w-11/12 outline-0 bg-orange-300 py-3">
					<option value="0">Drop point name</option>
					<template v-for="(drop, x) in dropPoints" :key="drop">
						<option :value="drop.id">{{ drop.place }}</option>
					</template>
				</select>
			</span>
			<span class="w-full bg-orange-300 rounded-xl overflow-hidden pl-3">
				<input v-model="currentDropPoint.date" @focus="onFocusEl" @blur="onBlurEl" placeholder="Tanggal open order" class="w-11/12 mx-auto bg-orange-300 px-1 py-3 outline-0" type="text"/>
				<i class="fa fa-calendar"></i>
			</span>
			<span class="w-full flex items-center gap-1">
				<input v-model="currentDropPoint.coureer" type="checkbox"/> Diantar kurir
			</span>
			<div class="w-full flex flex-col items-end">
				<button class="bg-slate-800 px-5 py-1 text-base rounded-xl text-gray-100 w-4/12" type="submit">Simpan</button>
			</div>
		</form>
	</main>
</template>

<script setup>

	import { useRouter } from 'vue-router'
	import { computed, ref } from 'vue'
	import { useOrders } from '@/stores/orders'

	const router = useRouter()
	const orders = useOrders()

	const dropPoints = computed(() => orders.dropPoints)
	const currentDropPoint = computed(() => orders.currentDropPoint)

	const test = ref(null)

	const onFocusEl = el => {
		el.target.setAttribute('type', 'date')
	}

	const onBlurEl = el => {
		el.target.setAttribute('type', 'text')
	}

	const formSubmit = () => {
		
	}
	
</script>
