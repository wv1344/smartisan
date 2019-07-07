<template>
  <div class="classify">
    <i-header></i-header>
     <i-tabbar></i-tabbar>
  </div>
 
</template>

<script>
import Header from '@/components/header/header'
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'Classify',
  components: {
    "i-tabbar": tabbar,
    "i-header": Header
  }
}
</script>

<style>

</style>
