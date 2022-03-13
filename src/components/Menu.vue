<template>
	<section class="bg-gray-600 w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 px-5 py-3 flex justify-between text-gray-100">
		<template v-for="(item, x) in menu" :key="x">
			<router-link :to="item.path" class="active:scale-95 duration-300">{{ item.title }}</router-link>
		</template>
	</section>
</template>

<script setup>

	import menu from '@/menu.js'

</script>
