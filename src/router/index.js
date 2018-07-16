import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home.vue'
import gun from '@/components/gundong.vue'

// const head = r => require.ensure([], () => r(require('./../components/headtail/head.vue')), 'head')
const index = r => require.ensure([], () => r(require('./../components/index.vue')), 'index')
const jiaocheng = r => require.ensure([], () => r(require('./../components/jiaocheng.vue')), 'jiaocheng')
const contract = r => require.ensure([], () => r(require('./../components/contract.vue')), 'contract')
const ironore = r => require.ensure([], () => r(require('./../components/ironore/ironore.vue')), 'ironore')
const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/ironore',
      name: 'ironore',
      component: ironore
    },
    /*{
      path: '/head',
      name: 'head',
      component: head
    },*/
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/gun',
      name: 'gun',
      component: gun
    },
    {
      path: '/jiaocheng',
      name: 'jiaocheng',
      component: jiaocheng
    },
    {
      path: '/contract',
      name: 'contract',
      component: contract
    }
  ]
})
