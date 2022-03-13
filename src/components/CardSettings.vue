<template>
	<section v-if="show" class="bg-gray-50 rounded-xl overflow-hidden w-full shadow mb-8">
		<slot name="content"></slot>
		<div class="bg-slate-600 text-gray-100 w-full px-5 py-2">
			<span class="active:scale-95 duration-300" @click="deleteCard">Delete</span>
		</div>
	</section>
</template>

<script setup>

	import { ref } from 'vue'

	const show = ref(true) 
	const emits = defineEmits(['delete'])
	const deleteCard = () => {
		show.value = false
		emits('delete')
	}

</script>
