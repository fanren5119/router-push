import Vue from 'vue'
import Router from 'vue-router'
import pathPush from '@/components/pathPush'
import namePush from '@/components/namePush'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'pathPush',
    //   component: pathPush
    // },
    {
      path: '/',
      name: 'namePush',
      component: namePush
    },
    {
      name: 'first',
      component: first
    },
    {
      path: '/third',
      name: 'third',
      component: third
    }
  ]
})
