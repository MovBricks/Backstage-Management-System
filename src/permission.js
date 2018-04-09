import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getStore } from './utils/mUtils'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    next()
  } else {
    if (getStore('token')) { // 判断是否有token
      if (!store.getters['common/loginUser']['token']) {
        store.dispatch('common/setLoginUser', JSON.parse(getStore('login_info')))
      }
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done()
    }
  }
  // next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
