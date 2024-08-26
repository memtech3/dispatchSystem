import { createRouter, createWebHistory } from 'vue-router'
import DispatchView from '@/views/DispatchView.vue'
import CommandLogView from '@/views/CommandLogView.vue'

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
    }
  ]
})

export default router
