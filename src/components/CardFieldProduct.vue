<style scoped>

.field {
	@apply w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4;
}

.file-upload::-webkit-file-upload-button {
	display: none;
}

.file-upload {
	color: transparent;
	@apply active:scale-95 duration-300;
}

.file-upload::before {
	content: 'Upload';
	@apply border-gray-500 border-2 duration-300 inline-block px-3 py-1 rounded text-gray-500 text-sm;
}

</style>
<template>
	<CardSettings v-if="isShow" v-on:delete="deleteProduct" :isLoad="isLoad" :isSuccess="isSuccess" :isFail="isFail">
		<template v-slot:content>
			<form ref="formUpload" enctype="multipart/form-data" class="w-full px-5 py-2 flex justify-between flex-wrap">
				<input v-model="form.name" placeholder="Nama produk" class="field" name="name" type="text"/>
				<div class="w-6/12">
					<input v-model="form.price" placeholder="Harga" class="field" name="price" type="text"/>
					<input v-model="form.stock" placeholder="Stok" class="field" name="stock" type="number"/>
				</div>
				<div class="w-5/12 overflow-hidden bg-gray-300 rounded grid place-items-center">
					<img v-if="thumbnail !== false" :src="thumbnail" class="w-full" />
					<i v-else class="fa fa-camera text-gray-500"></i>
				</div>
				<input @change="uploader" type="file" name="image" class="file-upload"/>
			</form>
		</template>
	</CardSettings>
</template>

<script setup>

import { reactive, ref, computed, watch } from 'vue'
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

const isLoad = ref(false)
const isSuccess = ref(false)
const isFail = ref(false)

const state = {
	load() {
		[ isLoad.value, isSuccess.value, isFail.value ] = [ true, false, false ]
	},
	success() {
		setTimeout(() => {
			[ isLoad.value, isSuccess.value, isFail.value ] = [ false, true, false ]
		}, 300)
	},
	fail() {
		setTimeout(() => {
			[ isLoad.value, isSuccess.value, isFail.value ] = [ false, false, true ]
		}, 300)			
	},
	reset() {
		[ isLoad.value, isSuccess.value, isFail.value ] = [ false, false, false ]
	}
}


const isSubmit = computed(() => props.isSubmit)

watch(isSubmit, val => {
	state.load()
	if (props.source.id === false) {
		//Create new product
		const formData = new FormData(formUpload.value)
		http.post('/admin/products', formData, res => {
			if (res.status) {
				form.key = res.results.insertId
				state.success()
			} else state.fail()
		})
	} else {
		//Update product
		if (isUploadNewFile) {
			//Upload with new image
			const formData = new FormData(formUpload.value)
			formData.append('key', form.key)
			http.put('/admin/products', formData, res => {
				if (res.status) {
					isUploadNewFile.value = false
					state.success()
				}
				else state.fail()
			})
		} else {
			//Upload without image
			http.put('/admin/products', form, res => {
				if (res.status) state.success()
				else state.fail()
			})
		}
	}
})

const form = reactive({
	key: props.source.id,
	name: props.source.name,
	price: props.source.price,
	stock: props.source.stock
})

const formUpload = ref(null)
const isUploadNewFile = ref(false)

const thumbnail = ref(props.source.thumbnail)

const uploader = e => {

	const reader = new FileReader()

	reader.onload = () => thumbnail.value = reader.result
	reader.readAsDataURL(e.target.files[0])
	isUploadNewFile.value = true
}

const emits = defineEmits(['delete'])
const isShow = ref(true)

const deleteProduct = () => {
	if (form.key === false) emits('delete')
	else {
		state.load()
		http.delete('/admin/products', { key: form.key }, res => {
			if (res.status) {
				state.success()
				setTimeout(() => {
					isShow.value = false
				}, 500)
			}
			else state.fail()
		})
	}
}
</script>
