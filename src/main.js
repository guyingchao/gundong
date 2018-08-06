// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import GO_UTIL from './common/util'
import VueMonent from 'vue-moment'
import moment from 'moment-timezone'
import VueI18n from 'vue-i18n'
import cookies from 'vue-cookies'
import zhGOGO from './common/lang/zh.js'
import enGOGO from './common/lang/en.js'
import port_zhGOGO from './common/lang/port_zh.js'
import port_enGOGO from './common/lang/port_en.js'
import country_zhGOGO from './common/lang/country_zh.js'
import country_enGOGO from './common/lang/country_en.js'
import mock from './mock'

Vue.use(mock)
Vue.use(cookies)
Vue.use(VueI18n)
Vue.use(elementUI)
Vue.use(VueMonent, {moment})
window.GO_UTIL = GO_UTIL
Vue.config.productionTip = false
Vue.prototype.$axios = axios // ajax请求

const getLanguageCookie = function () {
  var language = 'zh'
  console.log('document.cookie', document.cookie)
  if (document.cookie.length > 0) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=')
      if (arr2[0] === 'language' && (arr2[1] === 'zh' || arr2[1] === 'en')) {
        language = arr2[1]
      }
    }
  }
  return language
}
window.language = getLanguageCookie()
const i18n = new VueI18n({
  locale: getLanguageCookie(),    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': Object.assign(zhGOGO, zhLocale, port_zhGOGO, country_zhGOGO),   // 中文语言包(这样用assign可以扩展为一个大的json对象)
    'en': Object.assign(enGOGO, enLocale, port_enGOGO, country_enGOGO)    // 英文语言包
  }
})
locale.i18n((key, value) => i18n.t(key, value))
Vue.use(elementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
var GOEVENT = new Vue()
window.GOEVENT = GOEVENT
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>',
  data: {
    GOEVENT,
    GO_UTIL
  }
})
