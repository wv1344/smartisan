<template>
  <div id="app">
    <router-view></router-view>
    <i-tabbar class="tabbarWrapper"></i-tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'App',
  components: {
    "i-tabbar": tabbar
  }
}
</script>

<style lang="stylus" scoped>
#app
  margin 0
  padding 0
  width 100%
  height 100%
  
</style>
