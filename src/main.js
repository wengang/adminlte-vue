import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Dashboard },
    // Just use them normally in the route config
    { path: '*', component: NotFound }
  ]
})
// require('./uiconfig.js')
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
