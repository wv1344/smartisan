<template>
  <div class="cart">
    <div class="header">
      <span class="title">购物车</span>
    </div>
    <div class="content">
      <div class="no-goods">
        <i class="iconfont icon-gouwu2"></i>
        <h3 class="no-title">购物车暂无商品</h3>
        <span class="no-text">添加到购物车的商品将会显示在这里</span>
        <div class="btn">
          <button class="login">登录</button>
          <button class="select-now">现在选购</button>
        </div>
      </div>
    </div>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'Cart',
  components: {
    "i-tabbar": tabbar
  }
}
</script>

<style lang="stylus" scoped>
.cart
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
  .content
    position absolute
    top 50px
    left 0
    right 0
    bottom 0
    background #ededed
    .no-goods
      text-align center
      position absolute
      top 40%
      left 0
      right 0
      transform translateY(-40%)
      .iconfont
        font-size 100px
        color #D9D9D9
      .no-title
        color #C9C9C9
        font-size 20px
        margin-top 20px
      .no-text
        display block
        margin-top 10px
        color #C9C9C9
        font-size 12px
      .btn
        margin-top 15px
        .login  
          display inline-block
          width 140px
          height 40px
          background linear-gradient(to top, #5B69CD 0%,#6574DD 10%,#6A7ADF 50%,#7688E4 100%);
          outline none
          border 1px solid #e0e0e0
          color #fff
          border-radius 7px
          font-size 12px
          font-weight 700
        .select-now
          display inline-block
          width 140px
          height 40px
          border none
          color #777
          outline none
          font-weight 700
          border 1px solid #e0e0e0
          border-radius 7px
          background #EBEBEB
          font-size 12px
</style>
