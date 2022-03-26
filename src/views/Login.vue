<template>
    <main class="grid place-items-center pt-24">
        <img src="/dapuraya.jpg" width="120" class="rounded-full mb-3" />
        <h1 class="font-semibold text-2xl">@dapuraya</h1>
        <form @submit.prevent="login" class="w-8/12 mx-auto flex flex-wrap gap-3 mt-4">
            <input v-model="form.username" class="field border-b-2 border-gray-700" type="text" placeholder="Username" required>
            <div class="w-full flex items-center border-b-2 border-gray-700">
                <input v-model="form.password" class="field" :type="showPassword ? 'text' : 'password'" placeholder="Password" required>
                <button type="button"><i @click="showPassword = !showPassword" :class="showPassword ? 'fa-eye' : 'fa-eye-slash'" class="fa"></i></button>
            </div>
            <button :disabled="isLoad" class="bg-orange-500 text-gray-100 active:scale-95 duration-300 text-base px-5 py-1 w-8/12 mx-auto rounded-full mt-4" type="submit">
                <span v-if="isLoad"><i class="fa fa-spinner spinner"></i></span>
                <span v-if="!isLoad">LOGIN</span>
            </button>
        </form>
        <small class="mt-5 text-red-700 fnot-medium">{{ msgErr }}</small>
    </main>
</template>

<style scoped>
    .field {
         @apply w-full bg-primary py-1;
         outline: none;
     }

     @keyframes spinner {
         from {
             transform: rotate(0deg);
         } to {
             transform: rotate(360deg);
         }
     }

     .spinner {
         animation: spinner .45s ease infinite;
     }

     button:disabled {
        @apply bg-opacity-50;
     }
</style>

<script setup>

    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import http from '@/http'

    const router = useRouter()
    const isLoad = ref(false)
    const msgErr = ref('')

    const form = reactive({
        username: '',
        password: ''
    })

    const login = () => {

        [ isLoad.value, msgErr.value ] = [ true, '' ]

        setTimeout(() => {
            //Request to server
            http.post('/login', form, res => {
                if (res.status) { //Login success
                    //Save token into local storage
                    localStorage.setItem('$dapuraya_token', res.results.token)
                    router.push({ name: 'Products' })
                } else {
                    [ isLoad.value, msgErr.value ]= [ false, res.results ]
                }
            })
        }, 300)
    }

    const showPassword = ref(false)

</script>
