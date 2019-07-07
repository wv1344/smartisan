<template>
  <div class="home">
    <i-header></i-header>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import Tabbar from '@/components/tabbar/tabbar'
export default {

components: {
  'i-header': Header,
  "i-tabbar": Tabbar
}
}
</script>

<style>

</style>
