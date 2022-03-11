<template>
    <section class="w-full  mb-8 bg-white overflow-hidden rounded-xl shadow-sm flex justify-between flex-wrap items-center">
        <div class="pl-5 py-3">
            <p class="text-sm mb-3">{{ source.date }}</p>
            <span class="flex items-center gap-2">
                <i class="fab fa-whatsapp text-3xl"></i>
                <span>
                    <p class="font-medium">{{ source.name }}</p>
                    <p>{{ source.phone }}</p>
                </span>
            </span>
            <i @click="openPanel(true)" class="active:scale-75 duration-300 fa fa-ellipsis-h"></i>
        </div>
        <div class="text-right pr-5 py-3">
            <p class="text-xs flex items-center gap-2 active:scale-75 duration-300" @click="paymentStatus = !paymentStatus">
                {{ paymentStatus ? 'Sudah Bayar' : 'Belum Bayar' }}
                <i :class="paymentStatus ? 'text-green-300' : 'text-red-400'" class="text-base fa fa-circle"></i>
            </p>
            <p>{{ source.pcs }} pcs</p>
            <p>{{ source.prefix }} {{ source.price.toLocaleString('id') }}</p>
            <button class="flex items-center gap-2 mt-3 px-1 rounded-full active:scale-75 duration-300">
                <p class="text-xs">{{ source.method }}</p>
                <i @click="openPanel()"  class="fa fa-chevron-down"></i>
            </button>
        </div>
        <div v-if="chevronDown" class="duration-300 w-full">
            <div class="w-full py-3 px-5 bg-slate-300">
                {{ source.address }}
            </div>
            <div class="w-full py-3 px-5 duration-300" :class="paymentStatus ? 'bg-green-300' : 'bg-red-300'">
                <template v-for="(item, x) in source.items" :key="x">
                    <span class="flex justify-between items-center text-gray-700">
                        <p>{{ item.pcs }}</p>
                        <p>{{ item.name }}</p>
                        <p>Rp{{ item.price.toLocaleString('id') }}</p>
                    </span>
                </template>
            </div>
        </div>

        <div v-if="optionsDown" class="duration-300 w-full">
            <div class="w-full text-gray-200 py-3 px-5 bg-gray-700">
                <button @click="btnEditOrder" class="active:scale-75 duration-300 mr-6">Edit</button>
                <button class="active:scale-75 duration-300">Batal order</button>
            </div>
        </div>
    </section>
</template>

<script setup>

    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import { useOrders } from '@/stores/orders'

    const props = defineProps({
        source: {
            type: Object
        }
    })

    const chevronDown = ref(false)
    const optionsDown = ref(false)

    const router = useRouter()
    const orders = useOrders()
    
    const btnEditOrder = () => {
        orders.addOrder(props.source)
        setTimeout(() => {
            router.push({ name: 'EditOrder' })
        }, 300)
    }

    const paymentStatus = ref(props.source.paymentStatus)

    const openPanel = (options = false) => {
        if (options) {
            if (optionsDown.value)  [chevronDown.value, optionsDown.value] = [false, false]
            else  [chevronDown.value, optionsDown.value] = [false, true]
        } else {
            if (chevronDown.value)  [chevronDown.value, optionsDown.value] = [false, false]
            else  [chevronDown.value, optionsDown.value] = [true, false]
        }
    }

</script>
