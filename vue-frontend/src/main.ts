import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-noir/theme.css'

import './tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue)

app.mount('#app')
