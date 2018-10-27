import 'es6-promise/auto'
// Libraries
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueAgile from 'vue-agile'

//Complement Debbuger Store
import Vuenut from 'vuenut'
import 'vuenut/dist/vuenut.css'

// Elements Vue
import { routes } from './router/router'
import { store } from './store/store'

// Main Page
import App from './pages/app/App.vue'


Vue.use(VueRouter)
Vue.use(Vuenut)
Vue.use(VueAgile)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
