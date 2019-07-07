<template>
  <!-- 搜索页头部 -->
  <div class="search-from">
    <div class="moudle-from">
      <div class="from-item">
        <input type="text" 
        class="input-box" 
        placeholder="请输入要搜索的内容" 
        @focus="showShadow"
        @blur="hideShadow"
        >
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="cancel-btn">
        <router-link to="/">
          <button class="cancel">返回</button>
        </router-link>
      </div>
    </div>
    <transition>
        <div v-show="detailShow" class="detail" >
          <!-- <div class="detail-hide" @click="hideShow"></div> -->
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailShow: false
    }
  },
  methods: {
    showShadow () {
      this.detailShow = true
    },
    hideShadow () {
      this.detailShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  input 
    border none 
    &:focus
      outline none 
  button 
    border none 
    &:focus
      outline none
  .search-from
    box-sizing border-box
    positon fixed
    top 0
    left 0
    right 0
    width 100%
    height 50px
    line-height 24px
    padding 9.5px 6.25px
    display inline-block
    background-color #f5f5f5
    box-shadow 0 1px 10px rgba(0, 0, 0 ,.1)
    z-index 200
    .moudle-from
      display flex
      margin 0 auto
      height 31px
      line-height 31px
      position relative
      .from-item
        flex 4
        height 31px
        line-height 31px
        overflow hidden
        position relative
        .input-box
          box-sizing border-box
          border-radius 16.7px
          display inline-block
          height 31px
          line-height 31px
          width 100%
          background #ffffff
          font-size 14.5px
          padding-left 31px
        .icon-sousuo
          text-align center
          background-size 14.6px 14.6px
          left 0
          top 0
          height 31px
          line-height 31px
          width 31px
          background-position 50% 50%
          transition none
          position absolute
          color #e6e6e6
      .cancel-btn
          flex 1
          display inline-block
          height 31px
          line-height 31px 
          .cancel
            border 1px solid rgb(230, 230, 230)
            background-color #f5f5f5
            flex .2
            border-radius 5px
            position relative
            display inline-block
            font-size 14.5px
            font-weight 700
            width 70%
            height 31px
            line-height 31px 
            margin-left 15px
            text-align center
            color #626262
    .detail
      position: fixed
      z-index: 100
      top: 50px
      left: 0
      bottom 0
      width: 100%
      height: 100%
      overflow: auto
      background-color rgba(0,0,0,.8)
</style>