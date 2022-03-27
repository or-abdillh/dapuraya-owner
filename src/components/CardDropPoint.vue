<template>
	<section>
			<CardSettings v-if="isShow" v-on:delete="deleteDropPoint" :isLoad="isLoad" :isSuccess="isSuccess" :isFail="isFail">
			<template v-slot:content>
				<section class="w-full px-5 py-2 flex flex-wrap">
					<input v-model="form.name" placeholder="Nama tempat" class="w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4" type="text"/>
					<textarea v-model="form.gmaps" placeholder="URL google Map" class="w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4" type="text"></textarea>
				</section>
			</template>
		</CardSettings>
	</section>
</template>

<script setup>

	import { reactive, computed, ref, watch } from 'vue'
	import CardSettings from '@/components/CardSettings.vue'
	import http from '@/http'

	const props = defineProps({
		source: {
			type: Object
		},
		isSubmit: {
			type: Boolean
		}
	})

	const isSubmit = computed(() => props.isSubmit)
	const state = {
		load() {
			[ isLoad.value, isSuccess.value, isFail.value ] = [ true, false, false ]
		},
		success() {
			setTimeout(() => {
				[ isLoad.value, isSuccess.value, isFail.value ] = [ false, true, false ]
			}, 300)
			setTimeout(() => {
				this.reset()
			}, 1000)
		},
		fail() {
			[ isLoad.value, isSuccess.value, isFail.value ] = [ false, false, true ]
			setTimeout(() => {
				this.reset()
			}, 1000)
		},
		reset() {
			[ isLoad.value, isSuccess.value, isFail.value ] = [ false, false, false ]
		}
	}

	watch(isSubmit, val => {
		state.load()
		if (form.key === false) {
			//Create new drop point
			http.post('/admin/drop-point', form, res => {
				if (res.status) {
					form.key = res.results.id
					state.success()
				}
				else state.fail()
			})
		}
		else {
			//Update drop point
			http.put('/admin/drop-point', form, res => {
				if (res.status) state.success()
				else state.fail()
			})
		}	
	})

	const deleteDropPoint = () => {
		state.load()
		http.delete('/admin/drop-point', { key: form.key }, res => {
			if (res.status) {
				state.success()
				setTimeout(() => {
					isShow.value = false
				}, 500)
			}
			else state.fail()
		})
	}

	const isLoad = ref(false)
	const isSuccess = ref(false)
	const isFail = ref(false)
	const isShow = ref(true)

	const form = reactive({
		name: props.source.drop_point_name,
		gmaps: props.source.drop_point_gmaps,
		key: props.source.drop_point_id
	})

	const emits = defineEmits(['delete'])
</script>
