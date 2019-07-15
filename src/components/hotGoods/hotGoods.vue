<template>
  <div class="hot-goods">
    <div class="head">
      <h2 class="title">热销商品</h2>
      <i class="iconfont icon-tubiaozhizuo-"></i>
    </div>
    <swiper class="goods" :options="swiperOption" ref="mySwiper" >
      <!-- slides -->
      <swiper-slide class="slide" v-for="(item,index) in goodList" :key="index">
        <i-goodblock :iitem=item ></i-goodblock>
        <!-- <div class="img">
          <img :src="item.shop_info.ali_image" alt="">
        </div>
        <div class="text">
          <h4>{{item.name}}</h4>
          <p>{{item.shop_info.sku_mobile_sub_title}}</p>
          <i-price :price="item.price"></i-price>
        </div> -->
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
  </div>
</template>

<script>
import api from '../../api/index'
import Price from '../price/price'
import goodBlock from '../goodBlock/goodblock'
export default {
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-scrollbar',
        },
        dragSize: 60,
        slidesPerView :2.6,
      },
      goodList:[]
    }
  },
  components: {
    "i-price":Price,
    "i-goodblock":goodBlock
  },
  created() {
    api.getHotGoods().then(res => {
      this.goodList = res.data
      // console.log(this.goodList)
    })
  },
};
</script>

<style lang="stylus" scoped>
.hot-goods 
  width 100%
  height 100%
  .head 
    height 40px
    position relative
    &:after 
      content '  '
      position absolute
      left 0
      bottom 0
      width 100%
      height 1px
      background-color #ebebeb
      -webkit-transform scaleY(0.667)
      transform scaleY(0.667)
    .title 
      margin-left 3%
      line-height 40px
      color #6F6F6F
      font-size 15px
      display inline-block
    .iconfont 
      display inline-block
      height 40px
      line-height 40px
      float right
      padding-right 2%
      color #999999
      font-size 12px
  .goods
    width 100%
    padding-top 20px
    .slide
      height 180px
      background #fff
      text-align center
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
          display inline-block
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
