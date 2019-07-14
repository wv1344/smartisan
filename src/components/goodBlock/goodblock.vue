<template>
 <div>
   <div class="img">
      <img :src="item.shop_info.ali_image" alt="">
    </div>
    <div class="text">
      <h4>{{item.name}}</h4>
      <p>{{item.shop_info.sku_mobile_sub_title}}</p>
      <i-price :price="item.price"></i-price>
    </div>
 </div>
</template>

<script>
import Price from '../price/price'
export default {
  props: {
    item:{
      type:Object
    }
  },
  components: {
    "i-price":Price
  }
}
</script>

<style lang="stylus" scoped>
      .img
        display inline-block
        width 100px
        height 100px
        position relative
        &:after 
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          z-index:-1;
          width: 200%;
          height:200%;
          border:1px solid #ebebeb;
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scale(.5, .5);
          transform: scale(.5, .5);
        img 
          width 100%
          height 100%
      .text
        display inline-block
        width 90px
        height 100px
        h4 
          overflow hidden
          margin-top 5px
          white-space nowrap
          text-overflow ellipsis
          font-size 12px
          font-weight 700
        p 
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          margin-top 5px
          color #AAAAAA
          font-size 10px
          height 15px
        .price
          text-align left
          margin-top 0px
          font-size 10px
          font-weight 700
          color red
          .iconfont
            font-size 10px
            color red
</style>
