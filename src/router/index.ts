import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/details',
    component: () => import('@/views/details.vue')
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'schedule',
        component: () => import('@/views/schedule.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
