import Vue from 'vue'
import App from './App'

// import '../static/weui/weui.wxss'

import toast from './utils/toast'

Vue.prototype.$toast = toast

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
