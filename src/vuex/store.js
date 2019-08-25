import Vue from "vue"
import Vuex from "vuex"

import cart from './modules/cart'

Vue.use(vuex)

export default new Vuex.Store({
  modules:{
    cart
  }
})