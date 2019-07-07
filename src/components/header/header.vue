<template>
<div>
  <div class="header">
      <div class="more-icon" @click="showSwitch">
        <i class="iconfont icon-caidan" title="菜单"></i>
      </div>
      <div class="logo-icon">
        <i class="iconfont icon-chuizi" title="锤子商城"></i>
      </div>
      <router-link to="/search">
        <div class="search-icon">
          <i  class="iconfont icon-sousuo" title="搜索"></i>
        </div>   
      </router-link>
  </div>
  <transition name='fade'>
    <div class="switch" v-show="show" @click="hide">
      <router-link to="">
        <div class="one">
          <i class="iconfont icon-gouwu1"></i>
          <span class="text">锤子商城</span>
        </div>
      </router-link>

      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>
      <div class="one">
        <i class="iconfont icon-gouwu1"></i>
        <span class="text">锤子商城</span>
      </div>

    </div>
  </transition>
</div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return {
      show:false
    }
  },
  methods: {
    showSwitch(){
      if(this.show === false){
        this.show = true
      }else{
        this.show = false
      }  
    },
    hide(){
      this.show = false
    }
  },

}
</script>

<style lang='stylus' scoped>
* {
  margin: 0;
  padding: 0;
}
/* 头部背景 */
.header
  width 100%
  height 100%
  background #1d1d1d
  background-image linear-gradient(#1d1d1d,#181818)
  background-size auto
  display block
  position fixed
  height 50px
  top 0
  left 0
  right 0
  .more-icon
    display inline-block
    width 15%
    height 50px
    float left
    line-height 50px
    text-align center
    .icon-caidan
      font-size 25px
      background-origin content-box
      height 100%
      padding 0 5px
      width 50px
      transition none
      color #e6e6e6
  .logo-icon
    display inline-block
    text-align center
    width 70%
    height 50px
    float left
    line-height 50px
    .icon-chuizi
      color #e6e6e6
      background-color rgba(0, 0, 0, 0)
      font-size 25px
      text-align center

  .search-icon
    display inline-block
    width 15%
    height 50px
    float left
    line-height 50px
    text-align center
    .icon-sousuo
      font-size 20px
      color #e6e6e6
      padding 0 5px
      transition none
.switch
  position fixed
  z-index 100
  top 50px
  left 0
  width 100%
  height 100%
  overflow auto
  background rgba(0,0,0,1)
  margin 0
  padding 0

  &.fade-enter-active,
  &.fade-leave-active
    transition all .3s linear

  &.fade-enter,
  &.fade-leave-active
    opacity 0
    transform translateY(-1000px)

  .one
    z-index 333
    box-sizing border-box
    display inline-block
    width 25%
    height 65px
    color  #CBCBCB
    text-align center
    border 1px solid #131313   
    float left 
    i 
      display block
      margin-top 10px
      color #CBCBCB
      font-size 20px
    .text
      display block
      font-size 10px
      margin-top 10px
    
</style>


