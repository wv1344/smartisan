import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    }
  ]
})
