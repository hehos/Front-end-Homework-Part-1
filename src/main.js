import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import * as utils from '@utils'

// 全局挂载
Vue.prototype.$utils = utils

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
