import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import VuePatternFly from '@vue-patternfly/core'

import '@/tailwind.css'
import '@patternfly/patternfly/patternfly.scss'
import '@patternfly/patternfly/patternfly-addons.scss'
import '@/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, { unstyled: true })
app.use(VuePatternFly)

app.mount('#app')
