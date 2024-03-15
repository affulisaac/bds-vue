
import App from './App.vue'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Tailwind from 'primevue/passthrough/tailwind'
import 'primeicons/primeicons.css'
import './presets/lara';  

const app = createApp(App)
app.use(PrimeVue, {
    unstyled: true, pt: Tailwind
})

app.mount('#app')