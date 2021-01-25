import router from './router'
// import store from './store'

import getPageTitle from '@/common/getPageTitle'
import checkPermission from '@/common/checkPermission'

// const whiteList = ['Login']

router.beforeEach(async (to, from, next) => {
  // if (!store.getters.websiteTitle) await store.dispatch('getWebSetting')
  // if (to.meta.breadcrumb) store.commit('setWebSuffix', i18n.t([...to.meta.breadcrumb].pop().text))
  // else store.commit('setWebSuffix', null)
  // document.title = store.getters.websiteTitle

  // const hasToken = store.getters.authHeader
  // if (hasToken) {
  //   if (to.name === 'Login') next({ name: 'Index' })
  //   else {
  //     if (store.state.system.permissions.length === 0) await store.dispatch('getPermissions')

  //     const permissionName = to.meta.permissions
  //     if (!permissionName || permission(permissionName)) next()
  //     else next({ name: 'Access_Denied' })
  //   }
  // } else {
  //   if (whiteList.indexOf(to.name) !== -1) next()
  //   else next({ name: 'Login', query: { redirect: to.fullPath } })
  // }
  console.log('beforeEach:permission')
  getPageTitle()
  checkPermission()
  next()
})
