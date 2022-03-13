<style scoped>

	.field {
		@apply outline-0 bg-primary w-full;
	}

</style>

<template>
	<main>
		<HeaderNavigation title="Ganti password"/>
		<section class="w-full grid place-items-center min-h-screen">
			<form @submit.prevent="router.go(-1)" class="w-8/12 mx-auto flex flex-wrap gap-3 mt-4">
           <div class="w-full flex items-center border-b-2 border-gray-700">
               <input class="field" :type="showOldPassword ? 'text' : 'password'" placeholder="Password lama">
               <button type="button"><i @click="showOldPassword = !showOldPassword" :class="showOldPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i></button>
           </div>
           <div class="w-full flex items-center border-b-2 border-gray-700">
               <input class="field" :type="showNewPassword ? 'text' : 'password'" placeholder="Password baru">
               <button type="button"><i @click="showNewPassword = !showNewPassword" :class="showNewPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i></button>
           </div>
           <button class="bg-orange-500 text-gray-100 active:scale-95 duration-300 text-base px-5 py-1 w-8/12 mx-auto rounded-full mt-4" type="submit">SIMPAN</button>
       </form>
		</section>
	</main>	
</template>

<script setup>

	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import HeaderNavigation from '@/components/HeaderNavigation.vue'

	const showOldPassword = ref(false)
	const showNewPassword = ref(false)
	const router = useRouter()

</script>
