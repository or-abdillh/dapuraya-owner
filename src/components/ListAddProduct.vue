<template>
	<section>
		<div class="flex justify-between mb-4 border-b-2 border-gray-600 pb-3">
			<div class="text-sm flex items-center gap-6">
				<span>
					<span @click="tapCheckbox" v-if="!isChecked" class="active:scale-95 duration-300 px-3 py-1 bg-gray-400"></span>
					<span @click="tapCheckbox" v-if="isChecked" class="active:scale-95 duration-300 px-2 py-1 border-2 border-green-500 text-green-500">
						<i class="fa fa-check"></i>
					</span>
				</span>
				<span>
					<p class="font-medium">{{ source.name }}</p>
					<p>Rp{{ source.price.toLocaleString('id') }}</p>
				</span>
			</div>
			<div class="text-sm">
				100
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref } from 'vue'

	const props = defineProps({
		source: {
			type: Object
		}
	})

	const isChecked = ref(false)
	const emits = defineEmits(['change'])

	const tapCheckbox = () => {
		isChecked.value = !isChecked.value
		emits('change', isChecked.value)
	}

</script>
