<template>
  <div class="home">
    <i-header></i-header>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import Header from '@/components/header/header'
import tabbar from '@/components/tabbar/tabbar'
export default {

components: {
  'i-header': Header,
  "i-tabbar": tabbar
}
}
</script>

<style>

</style>
