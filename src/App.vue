<template>
  <div id="app">
    <router-view/>
    <!-- <i-tabbar class="tabbarWrapper"></i-tabbar> -->
    <div class="tabbar">
      <router-link to="/" class="bar">
        <div class="home">
          <i class="iconfont icon-shouye-copy bg"></i>
          <span class="text">首页</span>
        </div>
      </router-link>
      <router-link to="/classify" class="bar">
        <div class=" classify">
          <i class="iconfont icon-fenlei-copy bg"></i>        
          <span class="text">分类</span>
        </div>
      </router-link>
      <router-link to="" class="bar">
        <div class=" cart">
          <i class="iconfont icon-gouwu-copy bg"></i>        
          <span class="text">购物车</span>
        </div>
      </router-link>
      <router-link to="" class="bar">
        <div class=" user">
          <i class="iconfont icon-gerenzhongxin-copy bg"></i>        
          <span class="text">个人中心</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="stylus" scoped>
#app
  margin 0
  padding 0
  width 100%
  height 100%
  .tabbar
    position fixed
    bottom  0px
    display flex
    left 0
    right 0
    .bar
      text-decoration none
      height 50px
      flex 1
      background #fff
      text-align center
      padding-top 5px
      .bg
        display block
        font-size 25px
        color #CECECE
      .text
        font-size 12px
        color #d7d7d7
</style>
