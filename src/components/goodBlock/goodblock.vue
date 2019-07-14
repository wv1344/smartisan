<template>
 <div class="block">
   <div  :class="typee === 'large' ? 'img-large':'img-normal'">
      <img :src="iitem.shop_info.ali_image" alt="">
    </div>
    <div :class="typee === 'large' ? 'text-large' : 'text-normal'" >
      <h4>{{iitem.name}}</h4>
      <p>{{iitem.shop_info.sku_mobile_sub_title}}</p>
      <i-price :price="iitem.price"></i-price>
    </div>
 </div>
</template>

<script>
import Price from '../price/price'
export default {
  props: {
    iitem:{
      type:Object
    },
    typee:{
      type:String,
      default:'normal'
    }
  },
  components: {
    "i-price":Price
  }
}
</script>

<style lang="stylus" scoped>
    .block
      display inline-block 
      .img-normal
        display block
        width 100px
        height 100px
        max-width 150px
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
      .img-large
        display block
        width 150px
        height 150px
        max-width 150px
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

      .text-normal
        display block
        width 100px
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
      .text-large
        display block
        width 130px
        height 100px
        padding-left 10px
        h4 
          overflow hidden
          margin-top 5px
          padding-left 2px
          white-space nowrap
          text-overflow ellipsis
          font-size 12px
          font-weight 700
        p 
          overflow hidden
          padding-left 2px
          white-space nowrap
          text-overflow ellipsis
          margin-top 8px
          color #AAAAAA
          font-size 10px
          height 15px
        .price
          text-align left
          padding-left 7px
          margin-top 4px
          font-size 12px
          font-weight 700
          color red
          .iconfont
            font-size 10px
            color red
</style>
