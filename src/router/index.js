import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Classify from '@/components/classify'
import Search from '@/components/search'

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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
