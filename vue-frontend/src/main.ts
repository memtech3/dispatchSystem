import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '@/main.scss'

import urql, { cacheExchange, fetchExchange } from '@urql/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(urql, {
  url: 'http://localhost:5107/graphql',
  exchanges: [cacheExchange, fetchExchange]
})

app.mount('#app')
