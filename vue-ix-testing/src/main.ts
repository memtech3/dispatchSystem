// import './assets/main.css'
import '@siemens/ix/dist/siemens-ix/siemens-ix.css'
import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ixPlugin } from '@siemens/ix-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ixPlugin)

app.mount('#app')
