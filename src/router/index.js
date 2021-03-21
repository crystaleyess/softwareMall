import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/app/panel/main'
    },
    {
      path: '/app/panel',
      redirect: '/app/panel/main'
    },
    {
      path: '/app',
      component: () => import('@/common/Home'),
      children: [
        {
          path: 'panel',
          component: () => import('@/page/Panel'),
          children: [
            {
              path: 'main',
              component: () => import('@/page/Main')
            },
            {
              path: 'category',
              component: () => import('@/page/Category')
            },
            {
              path: 'subject',
              component: () => import('@/page/Subject')
            }
          ]
        },
        {
          path: 'series',
          component: () => import('@/page/Series')
        },
        {
          path: 'rankList',
          component: () => import('@/page/RankList')
        },
        {
          path: 'userCenter',
          component: () => import('@/page/UserCenter')
        }
      ]
    }
  ]
})
