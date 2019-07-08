<template>
  <div class="user">
    <div class="header">
      <span class="title">个人中心</span>
    </div>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'User',
  components: {
    "i-tabbar": tabbar
  }
}
</script>

<style lang="stylus" scoped>
.user
  margin 0
  padding 0
  width 100%
  height 100%
  .header
    position fixed
    height 50px
    background #1d1d1d
    left 0
    right 0
    text-align center
    .title
      color #ffffff
      font-weight 600
      font-size 18px
      line-height 50px
</style>