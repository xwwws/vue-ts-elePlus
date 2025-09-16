import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/custom-table',
      name: 'about',
      component: () => import('@/views/CustomTable.vue'),
    },
  ],
})

export default router
