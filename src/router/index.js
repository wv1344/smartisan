import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Classify from '@/components/classify'
import Cart from '@/components/cart'
import User from '@/components/user'
import Search from '@/components/search/search'
import Detail from '@/components/detail/detail'

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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
