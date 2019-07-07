<template>
  <div class="tabbar">
      <router-link to="/" class="bar" exact >
        <div class="home" >
          <i class="iconfont icon-shouye bg"></i>
          <span class="text">首页</span>
        </div>
      </router-link>
      <router-link to="/classify" class="bar" exact>
        <div class=" classify">
          <i class="iconfont icon-fenlei bg"></i>        
          <span class="text">分类</span>
        </div>
      </router-link>
      <router-link to="/cart" class="bar" exact>
        <div class=" cart">
          <i class="iconfont icon-gouwu bg"></i>        
          <span class="text">购物车</span>
        </div>
      </router-link>
      <router-link to="/user" class="bar" exact>
        <div class=" user">
          <i class="iconfont icon-yonghu bg"></i>        
          <span class="text">个人中心</span>
        </div>
      </router-link>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .active
    background  linear-gradient(to bottom, #f2f2f2 0%,#ffffff 100%) !important
    .iconfont
      background-image -webkit-linear-gradient( top, #646464, #646464) !important
      -webkit-background-clip text !important
      -webkit-text-fill-color transparent !important
    .text
      color #636363 !important

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
        // color #CECECE
        background-image: -webkit-linear-gradient( top, #cecece, #D9D9D9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      .text
        font-size 12px
        color #999
   
</style>
