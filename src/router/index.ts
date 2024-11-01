import { createRouter, createWebHistory } from 'vue-router'

import { loadView } from '@/utils/asyncLoaders'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accountTypeView',
      component: loadView(routes.unauthenticated.accountTypeView),
    },
    {
      path: '/registration',
      name: 'registrationView',
      component: loadView(routes.unauthenticated.registrationView),
    },
  ],
})

export default router
