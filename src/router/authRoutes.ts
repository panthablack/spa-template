import type { RouteRecordRaw } from 'vue-router'

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashboardView.vue'),
  },
].map((r: RouteRecordRaw) => ({ ...r, meta: { ...(r.meta || {}), guard: 'auth' } }))
