// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import GO_UTIL from './common/util'
import VueMonent from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(elementUI)
Vue.use(VueMonent, {moment})
window.GO_UTIL = GO_UTIL
Vue.config.productionTip = false
Vue.prototype.$axios = axios // ajax请求

/* eslint-disable no-new */
var GOEVENT = new Vue()
window.GOEVENT = GOEVENT
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    GOEVENT,
    GO_UTIL
  }
})
