import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './components/About'
import Contact from './components/Contact'
import InfoWrapper from './components/InfoWrapper'
import References from './components/References'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: InfoWrapper },
    { path: '/contact', component: Contact },
    { path: '/references', component: References },
    { path: '/about', component: About }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
