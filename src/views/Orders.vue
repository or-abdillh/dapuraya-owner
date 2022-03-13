<template>
    <section class="fixed top-0 left-0 right-0">
        <div class="bg-primary w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 p-5">
            <section class="flex justify-between items-center mb-8">
                <div class="flex items-center gap-6">
                    <i @click="router.go(-1)" class="fa fa-arrow-left active:scale-75 duration-300"></i>
                    <div>
                        <h1 class="font-medium">Marabahan</h1>
                        <p class="text-sm">Sabtu 05 maret 2022</p>
                    </div>
                </div>
                <div class="w-4/12">
                    <SwitchButton />
                 </div>
            </section>

            <section class="flex justify-between items-end">
                <div class="flex gap-2 items-center">
                    <i class="fa fa-search"></i>                
                    <input v-model="key" type="search" class="outline-0 bg-primary border-b-2 border-gray-600" placeholder="search">
                </div>
                <p class="font-medium text-sm">42 customer</p>
            </section>
        </div>
    </section>

    <section class="mt-36">
        <template v-for="order in 4" :key="order">
            <template v-for="(card, x) in filterOrder" :key="x">
                <OrderCard :source="card" />
            </template>
        </template>
    </section>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { ref, watch } from 'vue'
    import { useOrders } from '@/stores/orders'
    import OrderCard from '@/components/OrderCard.vue'
    import SwitchButton from '@/components/SwitchButton.vue'
    
    const router = useRouter()
    const orders = useOrders()

    const exampleOrder = [
        {
            name: 'Agus',
            phone: '085654036XXX',
            date: 'Rab 6 maret 2022',
            address: 'Handil Bakti RT06 RW02',
            pcs: 2,
            price: 80000,
            prefix: 'Rp',
            items: [
                { name: 'American Risol', pcs: 1, price: 45000, id: 1, total: 45000 },
                { name: 'Kue Cubit', pcs: 1, price: 35000, id: 2, total: 35000 }
            ],
            paymentStatus: true,
            method: 'Diantar kurir'
        },
        {
            name: 'Meta',
            phone: '085654036XXX',
            date: 'Sen 5 maret 2022',
            address: 'Sungai Andai RT21 RW01',
            pcs: 2,
            price: 90000,
            prefix: 'Rp',
            items: [
                { name: 'American risol', pcs: 2, price: 45000, id: 1, total: 90000 }
            ],
            paymentStatus: false,
            method: 'Ambil sendiri'
        }
    ]
    
    const filterOrder = ref(exampleOrder)
    const key = ref('')

    watch(key, val => {
        filterOrder.value = exampleOrder.filter(order => order.name.toLowerCase().includes(val.toLowerCase()))
    })
</script>
