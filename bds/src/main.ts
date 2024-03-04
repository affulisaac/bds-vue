import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Tailwind from "primevue/passthrough/tailwind";
import Lara from './presets/lara';  



const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
    unstyled: true, pt: Tailwind
});


app.use(router)

app.mount('#app')
