<template>
	<section class="w-full text-lg flex items-center gap-2">
		<i @click="router.go(-1)" class="fa fa-arrow-left text-xl"></i>
		{{ title }}
	</section>
</template>

<script setup>

	import { useRouter } from 'vue-router'

	const props = defineProps({
		title: {
			type: String,
			default: 'The Title'
		}
	})

	const router = useRouter()

</script>
