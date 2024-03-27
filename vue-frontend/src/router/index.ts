import { createRouter, createWebHistory } from 'vue-router'
import DispatchView from '@/views/DispatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dispatch',
      component: DispatchView
    }
  ]
})

export default router
