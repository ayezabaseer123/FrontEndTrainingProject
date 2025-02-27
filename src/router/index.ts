import { createRouter, createWebHistory } from 'vue-router'

import { loadView } from '@/utils/asyncLoaders'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sessionLayout',
      component: loadView(routes.unauthenticated.sessionLayout),
      children: [
        {
          path: '/',
          name: 'accountTypeView',
          component: loadView(routes.unauthenticated.accountTypeView),
        },
        {
          path: 'registration',
          name: 'registrationView',
          component: loadView(routes.unauthenticated.registrationView),
        },
        {
          path: 'login',
          name: 'loginView',
          component: loadView(routes.unauthenticated.loginView),
        },
        {
          path: 'forget-password',
          name: 'forgetPassword',
          component: loadView(routes.unauthenticated.forgetPasswordView),
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: loadView(routes.authenticated.dashboardView),
      children: [
        {
          path: '',
          name: 'feedView',
          component: loadView(routes.authenticated.feedView),
        },
      ],
    },
  ],
})

export default router
