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
    <div class="switch" v-show="show">
      你好哇
    </div>
  </transition>
  <i-tabbar></i-tabbar>
</div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'header',
  data(){
    return {
      show:false
    }
  },
  methods: {
    showSwitch(){
      if(this.show === false){
        this.show = true
      }
      if(this.show === true){
        this.show = false
      }
    }
  },
  components: {
    "i-tabbar": tabbar
  }
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
</style>