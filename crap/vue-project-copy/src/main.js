// import './assets/main.css'
// import './assets/main.scss'
import 'bulma/css/bulma.min.css'

import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'

import {
    defineCustomElements
} from '@astrouxds/astro-web-components/loader'

defineCustomElements()

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
