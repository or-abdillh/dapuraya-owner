<template>
	<section v-if="!dismiss" class="order-field text-sm flex justify-between">
		<div>
			<p class="font-medium">{{ item.name }}</p>
			<p>Rp{{ price.toLocaleString('id') }}</p>
		</div>
		<div class="w-7/12 text-gray-100 flex items-center justify-around gap-1 px-2 w-3/12 rounded-full">
			<div class="bg-gray-500 w-8/12 flex justify-around items-center rounded-full py-2 px-2">
				<button @click="increment(false)">-</button>
				{{ pcs }}
				<button @click="increment">+</button>
			</div>
			<div class="w-3/12 rounded-full bg-gray-500 grid text-3xl">
				<button @click="btnDismiss">-</button>
			</div>
		</div>
	</section>
</template>

<script setup>

	import { ref, computed } from 'vue'

	const props = defineProps({
		item: {
			type: Object
		}
	})

	const emits = defineEmits(['change', 'dismiss'])

	const dismiss = ref(false)

	const pcs = ref(props.item.pcs)
	const price = computed(() => pcs.value * props.item.price)

	const increment = (plus = true) => {
		if (plus) pcs.value++
		else {
			if (pcs.value > 0) pcs.value--
		}
		emits('change', { pcs: pcs.value, price: props.item.price, id: props.item.id, name: props.item.name, total: price.value })
	}

	const btnDismiss = () => {
		dismiss.value = true
		emits('dismiss', props.item.id)
	}

</script>
