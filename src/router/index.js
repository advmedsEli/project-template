import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

import accountRouter from './modules/account.module'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  },

  accountRouter,

  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
