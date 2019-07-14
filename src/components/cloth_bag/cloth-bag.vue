<template>
  <div class="cloth-bag">
    <div class="head">
      <h2 class="title">服饰箱包</h2>
      <i class="iconfont icon-tubiaozhizuo-"></i>
    </div>
    <div class="item" v-for="(item,index) in clothbag" :key="index">
      <div class="left">
        <img class="image" :src="item.shop_info.ali_image">
      </div>
      <div class="right">
        <div class="box">
          <h3 class="title">{{item.product_info.product_name}}</h3>
          <p class="text" v-if="item.shop_info.sku_mobile_sub_title">{{item.shop_info.sku_mobile_sub_title}}</p>
          <span class="boy" v-else>男款</span>
          <!-- <i-color :color=item.shop_info.spec_v2[0].spec_values ></i-color> -->
          <i-color :color=color(item.shop_info.spec_v2) ></i-color>
          <i-price :price=item.price class="price"></i-price>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Price from '../price/price'
import Color from '../color/color'
import api from '../../api/index'
export default {
  data(){
    return{
      clothbag:[]
    }
  },
  computed: {
    color(){
      return function(item) {
        let cur = item.map((it) => {
           if(it.spec_id===1 || it.spec_id === '1'){
             return it.spec_values
           }
        })
        let newArr=[]
        cur.forEach(item => {
          if (item) {
          newArr.push(item)
        }})
        console.log(newArr)
        return newArr[0]
      }
    }
  },
  components: {
    "i-price":Price,
    "i-color":Color
  },
  created () {
    api.getClothBag().then((res) => {
      // console.log(res.data)
      this.clothbag = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
li 
  list-style none
.cloth-bag 
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
  .item
    width 100%
    height 180px
    .left
      display inline-block
      height 180px
      width 40%
      float left
      border-top 1px solid #ccc
      box-sizing border-box
      img 
        padding-top 15px
        width 150px
        height 150px
    .right
      display inline-block
      border-top 1px solid #ccc
      box-sizing border-box
      height 180px
      width 60%
      float left
      .box 
        margin-top 50px
        margin-left 30px
        .title
          overflow hidden
          white-space nowrap 
          text-overflow ellipsis
          font-size 12px
        .text
          overflow hidden
          margin-top 4px
          color #7E7E7E
          font-size 10px
          white-space nowrap 
          text-overflow ellipsis
        .boy 
          display inline-block
          font-size 10px
          font-weight 700
          color #5665CC
          background #E6EEFE
          border 1px solid #5665CC
          border-radius 2px
          padding 0px 2px
        
      .price 
        font-size 12px
        margin-top 3px  
</style>
