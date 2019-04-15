import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home.vue'
import gun from '@/components/gundong.vue'

// const head = r => require.ensure([], () => r(require('./../components/headtail/head.vue')), 'head')
const parent = r => require.ensure([], () => r(require('./../test/parent.vue')), 'parent')
const index = r => require.ensure([], () => r(require('./../components/index.vue')), 'index')
const jiaocheng = r => require.ensure([], () => r(require('./../components/jiaocheng.vue')), 'jiaocheng')
// const first = r => require.ensure([], () => r(require('./../components/first.vue')), 'first')
// const second = r => require.ensure([], () => r(require('./../components/second.vue')), 'second')

const contract = r => require.ensure([], () => r(require('./../components/contract.vue')), 'contract')
const ironore = r => require.ensure([], () => r(require('./../components/ironore/ironore.vue')), 'ironore')
const ironindex = r => require.ensure([], () => r(require('./../components/ironore/pages/ironoreindex.vue')), 'ironore')
const forecast = r => require.ensure([], () => r(require('./../components/ironore/pages/forecast.vue')), 'ironore')
const irohistory = r => require.ensure([], () => r(require('./../components/ironore/pages/history.vue')), 'ironore')
const hang = r => require.ensure([], () => r(require('./../components/ironore/pages/hang.vue')), 'ironore')
const map = r => require.ensure([], () => r(require('./../components/ironore/pages/map.vue')), 'ironore')
const about = r => require.ensure([], () => r(require('./../components/help/about.vue')), 'about')
// 选择城市
const city = r => require.ensure([], () => r(require('./../components/chooseCity/index.vue')), 'choosecity')
// 新柱页面
const index7 = r => require.ensure([], () => r(require('./../components/ironore/pages/index2/index.vue')), 'index7')
// 地图页面
const worldmap = r => require.ensure([], () => r(require('./../components/ironore/pages/index2/map/worldmap.vue')), 'worldmap')
const gworldmap = r => require.ensure([], () => r(require('./../components/ironore/pages/index2/googlemap/gworld.vue')), 'gworldmap')

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/parent',
      name: 'parent',
      component: parent
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    // 主页面
    {
      path: '/index7',
      name: 'index7',
      component: index7
    },
    // 地图
    {
      path: '/detailmap',
      name: 'detailmap',
      component: worldmap
    },
    {
      path: '/gdetailmap',
      name: 'gdetailmap',
      component: gworldmap
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
    /*{
      path: '/jiaocheng',
      name: 'jiaocheng',
      component: jiaocheng,
      children: [
        // {path: '/', component: first},
        // {path: 'first', component: first},
        // {path: 'second', component: second}
      ]
    },*/
    {
      path: '/contract',
      name: 'contract',
      component: contract
    },
    {
      path: '/help/about',
      name: 'about',
      component: about
    },
    // 选择城市
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
export default router
