<template>
	<section>
		<CardSettings v-on:delete="emits('delete')">
			<template v-slot:content>
				<section class="w-full px-5 py-2 flex flex-wrap">
					<input placeholder="Nama tempat" class="w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4" type="text" v-model="props.name"/>
					<textarea placeholder="URL google Map" class="w-full outline-0 bg-gray-50 border-b-2 border-gray-600 pb-1 mb-4" type="text" v-model="props.gmaps"></textarea>
				</section>
			</template>
		</CardSettings>
	</section>
</template>

<script setup>

	import CardSettings from '@/components/CardSettings.vue'

	const props = defineProps({
		name: {
			type: String
		}, 
		gmaps: {
			type: String
		}
	})

	const emits = defineEmits(['delete'])
</script>
