<template>
	<main>
		<HeaderNavigation title="Settings" />
		<section class="mt-10 text-xl">
			<template v-for="(tab, x) in tabs" :key="x">
				<span @click="tabActive = tab.component" class="mr-5 pb-1 active:scale-95 duration-300" :class="tabActive.__hmrId === tab.component.__hmrId ? 'border-b-2 border-gray-600 font-medium' : ''">{{ tab.name }}</span>
			</template>
		</section>
		<section class="mt-6">
			<KeepAlive>
				<component :is="tabActive"></component>
			</KeepAlive>
		</section>
	</main>	
</template>

<script setup>

	import { ref } from 'vue'
	import HeaderNavigation from '@/components/HeaderNavigation.vue'
	import DropPoint from '@/components/DropPoint.vue'

	const tabActive = ref(DropPoint)

	const tabs = [
		{
			name: 'Drop point',
			component: DropPoint
		}, 
		{
			name: 'Product',
			component: ''
		}
	]

</script>
