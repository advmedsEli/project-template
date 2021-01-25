import Layout from '@/layout'

const accountRouter = {
  path: '/account',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/account/index.vue'),
      name: 'Account'
    }
  ]
}

export default accountRouter
