<template>
	<section v-if="show" class="fixed inset-0 duration-300 bg-gray-400 bg-opacity-75 grid place-items-center">
		<section class="shadow-sm w-10/12 md:w-4/12 lg:w-3/12 mx-auto xl:w-2/12 p-5 bg-orange-400 rounded-xl">
			<p class="text-xl">Apakah anda yakin ingin menghapus ?</p>
			<div class="w-full mt-5 flex justify-between text-sm">
				<button @click="emits('cancel')" class="font-medium">Kembali</button>
				<button @click="confirm" class="bg-orange-700 text-gray-200 w-4/12 py-2 rounded-xl">Ya, hapus</button>
			</div>
		</section>
	</section>
</template>

<script setup>

	const props = defineProps({
		show: {
			type: Boolean,
			default: false
		},
		id: {
			type: Number,
			default: 0
		}
	})

	const emits = defineEmits(['confirm', 'cancel'])

	const confirm = () => {
		emits('confirm', props.id)
	}

</script>
