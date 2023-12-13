// import './assets/main.css'
// import './assets/main.scss'
import '@patternfly/patternfly/patternfly.css'
import '@patternfly/patternfly/patternfly-addons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VuePatternFly from '@vue-patternfly/core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VuePatternFly)

app.mount('#app')
