import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import HelloWorld from '@/components/HelloWorld'
import Classify from '@/components/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header

    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    }
  ]
})
