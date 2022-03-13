<style scoped>

	.switch {
		transform: translateY(1px);
	}

	@keyframes to-left {
		from {
			right: 0
		} 40% {
			right: 50%
		} to {
			left: 0
		}
	}

	@keyframes to-right {
		from {
			left: 0
		} 40% {
			left: 50%
		} to {
			right: 0
		}
	}

	.to-left {
		animation: to-left .2s ease forwards;
	}

	.to-right {
		animation: to-right .2s ease forwards;
	}

</style>

<template>
	<section @click="isSwitchOn = !isSwitchOn" :class="isSwitchOn ? 'bg-green-300 border-green-500' : 'bg-red-300 border-red-500'" class="w-11/12 border-2 relative rounded-full py-1 text-center">
		<i :class="isSwitchOn ? 'to-left' : 'to-right'" class="fa fa-circle text-3xl switch absolute -top-1 bottom-0 text-gray-100"></i>
		<span class="text-sm text-gray-700 font-medium">{{ isSwitchOn ? 'OPEN' : 'CLOSE' }}</span>
	</section>
</template>

<script setup>

	import { ref } from 'vue'

	const isSwitchOn = ref(true)

</script>
