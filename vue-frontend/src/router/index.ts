import { createRouter, createWebHistory } from 'vue-router'
import DispatchView from '@/views/DispatchView.vue'
import CommandLogView from '@/views/CommandLogView.vue'
import ConfigurationView from '@/views/ConfigurationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dispatch',
      component: DispatchView
    },
    {
      path: '/commandLog',
      name: 'activity log',
      component: CommandLogView
    },
    {
      path: '/configuration',
      name: 'configuration',
      component: ConfigurationView
    }
  ]
})

export default router
