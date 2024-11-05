import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'

import { PiniaSharedState } from 'pinia-shared-state'

import App from './App.vue'
import router from './router'

import '@/main.scss'
import 'fundamental-styles/dist/theming/sap_horizon_dark.css'
import '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_dark/css_variables.css'
import 'dockview-vue/dist/styles/dockview.css'

import urql, { cacheExchange, fetchExchange } from '@urql/vue'

import DockView from './DockView.vue'
import UnitsTable from './components/UnitsTable.vue'
import EventsBoard from './components/EventsBoard/EventsBoard.vue'
import MapComponent from './components/MapComponent.vue'
import AddSeedDataButton from './components/AddSeedDataButton.vue'

const app = createApp(DockView)

app.use(
  createPinia()
    .use(createORM())
    .use(PiniaSharedState({ enable: true }))
)
app.use(router)

app.use(urql, {
  url: 'http://localhost:5107/graphql',
  exchanges: [cacheExchange, fetchExchange]
})

// Register components here so dockview can access them by name
app.component('UnitsTable', UnitsTable)
app.component('EventsBoard', EventsBoard)
app.component('MapComponent', MapComponent)
app.component('AddSeedDataButton', AddSeedDataButton)

app.mount('#app')
