import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './icons'
import Cookies from 'js-cookie'
import store from './store'
import Element from 'element-ui'
import './styles/element-variables.scss'
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
