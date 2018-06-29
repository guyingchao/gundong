import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home.vue'
import gun from '@/components/gundong.vue'

// const home = r => require.ensure([], () => r(require('./../components/home.vue')), 'home')
const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
