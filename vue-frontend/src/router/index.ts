import { createRouter, createWebHistory } from 'vue-router'
import DispatchView from '@/views/DispatchView.vue'
import ActivityLogView from '@/views/ActivityLogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dispatch',
      component: DispatchView
    },
    {
      path: '/activityLog',
      name: 'activity log',
      component: ActivityLogView
    }
  ]
})

export default router
