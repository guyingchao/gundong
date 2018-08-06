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
const ironindex = r => require.ensure([], () => r(require('./../components/ironore/pages/ironoreindex.vue')), 'ironore')
const forecast = r => require.ensure([], () => r(require('./../components/ironore/pages/forecast.vue')), 'ironore')
const irohistory = r => require.ensure([], () => r(require('./../components/ironore/pages/history.vue')), 'ironore')
const hang = r => require.ensure([], () => r(require('./../components/ironore/pages/hang.vue')), 'ironore')
const map = r => require.ensure([], () => r(require('./../components/ironore/pages/map.vue')), 'ironore')
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
      // name: 'ironore',
      component: ironore,
      children: [
        {path: '/', component: ironindex},
        {path: 'forecast', component: forecast},
        {path: 'history', component: irohistory},
        {path: 'hang', component: hang},
        {path: 'map', component: map}
      ]
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
