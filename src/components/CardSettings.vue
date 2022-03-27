<template>
	<section v-if="show" class="bg-gray-50 rounded-xl overflow-hidden w-full shadow mb-8">
		<slot name="content"></slot>
		<div class="bg-slate-600 text-gray-100 w-full px-5 py-2">
			<span class="active:scale-95 duration-300" @click="emits('delete')">
				<LoadAction :isLoad="props.isLoad" :isSuccess="props.isSuccess" :isFail="props.isFail" action="Delete"/>
			</span>
		</div>
	</section>
</template>

<script setup>

	import { ref } from 'vue'
	import LoadAction from '@/components/LoadAction.vue'

	const show = ref(true) 
	const emits = defineEmits(['delete'])

	const props = defineProps({
		isLoad: {
			type: Boolean,
			default: false
		}, 
		isSuccess: {
			type: Boolean,
			default: false
		},
		isFail: {
			type: Boolean,
			default: false
		}
	})

</script>
