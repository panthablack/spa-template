import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'

export const guestRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
].map((r: RouteRecordRaw) => ({ ...r, meta: { ...(r.meta || {}), guard: 'guest' } }))
