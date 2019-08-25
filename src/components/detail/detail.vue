<template>
  <div>
    <div class="detail">
      <div class="header">
        <div class="title">
          <span class="back" @click="goBack">
            <i class="iconfont icon-zuo"></i>
            返回
            </span>
          <h3>{{headerTitle}}</h3>
        </div>
        <div class="switch">
          <ul class="box-border">
            <li class="box-line" @click="moveTo(1,$event)" :class="{'active':currentIndex === 1}" style="border-right:1px solid #d5d5d5;">
            商品</li>
            <li class="box-line" @click="moveTo(2,$event)" :class="{'active':currentIndex === 2}"  style="border-right:1px solid #d5d5d5;">
            详情</li>
            <li class="box-line" @click="moveTo(3,$event)" :class="{'active':currentIndex === 3}"  style="border-right:1px solid #d5d5d5;">
            参数</li>
            <li class="box-line" @click="moveTo(4,$event)" :class="{'active':currentIndex === 4}" >
            推荐</li>
          </ul>
        </div>
      </div>
      <div class="good">
        <div class="shangping" ref="shangping">
          <swiper class="banner" :options="swiperOption" ref="mySwiper">
          <!-- slides -->
            <swiper-slide class="slide slide1" v-for="(item,index) in bannerImg" :key="index">
              <img :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="title-content">
            <h4>{{headerTitle}}</h4>
            <p>{{subTitle}}</p>
            <i-price class="title-price" :price="Number(price)"></i-price>
          </div>
          <div class="item-box" @click="select">
            <div class="left">
              <h6>已选版本</h6>
              <p>
                <span class="name">颜色：</span>
                <span class="value">藏蓝色</span>
              </p>
              <p>
                <span class="name">尺码：</span>
                <span class="value">37</span>
              </p>
              <p>
                <span class="name">数量：</span>
                <span class="value">1</span>
              </p>
            </div>
            <div class="right">
              <i class="iconfont icon-tubiaozhizuo-"></i>
            </div>
          </div>
        </div>
        <div class="item-detail" ref="detail">
          <div class="item-title">
            <h2>商品详情</h2>
          </div>
          <div class="item-img">
            <img :src=longImg alt="">
          </div>
        </div>
        <div class="canshu" ref="canshu">
          <div class="item-specs">
            <div class="item-title">
              <h2>技术参数</h2>
            </div>
            <div class="specs">
              <ul>
                <li class="specs-item" v-for="(iitem,index) in specsData" :key="index">
                  <h4>{{iitem.name}}</h4>
                  <span>{{iitem.value}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-server">
            <div class="item-title">
              <h2>服务说明</h2>
            </div>
            <div class="con">
              lasdjf
            </div>
          </div>  
        </div>
        <div class="recommend" ref="recommend">
          <div class="item-title">
            <h2>相关推荐</h2>
          </div>
          <ul class="box">
            <li class="item" v-for="(item,index) in recommentData" :key="index">
              <i-goodblock :iitem=item :typee="large"></i-goodblock>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <ul>
          <li class="cart">
            <i class="iconfont icon-gouwu1"></i>          
          </li>
          <li class="add-cart">
            <button class="addCart">加入购物车</button>
          </li>
          <li class="buy">
            <button class="buyNow">现在购买</button>
          </li>
        </ul>
      </div>
      
    </div>
    <transition name="fade">
      <div class="mark-bg" v-show="show" @click="select">
        <div class="select" >
          <div class="mask" @click.prevent="select">
            <div class="mark-head">
              <div class="mark-img">
                <img :src=dataList.spu.sku_info[0].ali_image alt="">
              </div>
              <div class="mark-title">
                <h4>{{dataList.spu.sku_info[0].title}}</h4>
                <p>
                  <span>{{dataList.spu.sku_info[0].spec_json[0].show_name}}</span>
                  <span>{{dataList.spu.sku_info[0].spec_json[1].show_name}}</span>
                  <span>{{dataList.spu.sku_info[0].spec_json[2].show_name}}</span>
                </p>
                <i-price class="mark-price" :price=dataList.spu.sku_info[0].price ></i-price>
              </div>
            </div>
            <div class="mark-content" ref="markContent">
              lkjldsh
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import api from '../../api/index'
import Price from '@/components/price/price'
import goodBlock from '../goodBlock/goodblock'

export default {
  data(){
    return {
      id:this.$route.params.id,
      large:'large',
      dataList:{},
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay:true,
        loop : true,
        slidesPerView :1.1,
        loopedSlides:document.querySelectorAll('.swiper-slide').length,
        spaceBetween : 20,
        centeredSlides:true,
      },
      recommentData:null,
      headerTitle:'',
      specsData:null,
      bannerImg:null,
      longImg:null,
      subTitle:null,
      price:null,
      scroll:0,
      heightList:[],
      show:false,
    }
  },
  methods:{

    goBack(){
      this.$router.go(-1);//返回上一层
    },
    select(){
      if(this.show){
        this.show = false;
        this.canScroll()
      }else{
        this.show = true;
        this.noScroll()
      }
    },
    moveTo(index,event){
      console.log(index,event)
      if(index === 1){
        window.scrollTo({"behavior": "smooth", "top": this.$refs.shangping.offsetTop-104})
      }else if(index === 2){
        window.scrollTo({"behavior": "smooth", "top": this.$refs.detail.offsetTop-104})
      }else if(index === 3){
        window.scrollTo({"behavior": "smooth", "top": this.$refs.canshu.offsetTop-104})
      }else if(index === 4){
        window.scrollTo({"behavior": "smooth", "top": this.$refs.recommend.offsetTop-104})
      }
    },
    _initScroll(){
      let that = this
      window.onscroll = function() {
        //为了保证兼容性，这里取两个值，哪个有值取哪一个
        //scrollTop就是触发滚轮事件时滚轮的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop)
        that.scroll = scrollTop+10;
        // console.log(that.$refs.shangping.clientHeight)
      }
      that.heightList.push(that.$refs.shangping.clientHeight,
        that.$refs.detail.clientHeight,
        that.$refs.canshu.clientHeight,
        that.$refs.recommend.clientHeight
      )
      this.contentScroll = new BScroll(this.$refs.markContent,{
        click:true
      })
      // console.log(this.heightList)
    }
  },
  components:{
    "i-price":Price,
    "i-goodblock":goodBlock

  },
  computed:{
    currentIndex(){
      if(this.scroll >= 0 && this.scroll<this.heightList[0]){
        return 1
      }
      if(this.scroll >= this.heightList[0] && this.scroll < this.heightList[1]+this.heightList[0]){
        return 2
      }
      if(this.scroll >= this.heightList[1] && this.scroll < this.heightList[1]+this.heightList[0]+this.heightList[2]){
        return 3
      }
      if(this.scroll > this.heightList[2]){
        return 4
      }
      // return 2
    }
  },
  created() {
    console.log(this.id)
    api.getDetail(this.id).then((res) => {
      this.dataList = res.data[0];
      this.headerTitle = res.data[0].spu.name;
      this.specsData = res.data[0].shop_info.tpl_content.base.attributes[0].list;
      this.bannerImg = res.data[0].shop_info.ali_images;
      this.longImg = res.data[0].shop_info.tpl_content.base.images.ali_mobile.url[0];
      this.subTitle = res.data[0].shop_info.sku_mobile_sub_title;
      this.price = res.data[0].spu.sku_info[0].price
      console.log(this.dataList)
    }).then(()=> {    
      api.getRecomment().then((res) => {
        let reco = res.data.map((item) => {
          if(item.sale_status === 3){
            return item
          }
        })
        let reco2 = []
        reco.forEach(item => {
          if(item){
            reco2.push(item)
          }
        });
        console.log(reco2)
        this.recommentData = reco2
      })
    })
    this.$nextTick(()=> {
      this._initScroll()
    })
  },
}
</script>

<style lang="stylus" scoped>


.detail
  // position fixed
  .header 
    position fixed
    top 0
    left 0
    right 0
    height 100px
    z-index 100
    .title
      height 50px
      position relative
      background #202020
      color #fff
      text-align center
      line-height 50px
      .back
        position absolute
        display inline-block
        border 1px solid #000
        height 28px
        left 10px
        font-size 12px
        line-height 28px
        top 50%
        transform translateY(-50%)
        padding 1px 5px
        border-radius 5px 
        background linear-gradient(#2a2a2a,#151515)
        box-shadow inset 0 1px 1px hsla(0,0%,100%,.1), inset 0 0 1px rgba(0,0,0,.5)
        i 
          font-size 12px
          line-height 30px

      h3 
        display inline-block
    .switch
      height 35px
      padding 10px 10px 
      background #F2F2F2
      box-shadow 0 5px 13px rgba(0,0,0,.12)
      .box-border 
        border 1px solid #d5d5d5
        display flex
        text-align center
        border-radius 5px
        height 35px
        .box-line 
          display inline-block
          padding 7px 0
          flex 1
          color #606060
          font-weight 700
          &.active 
            background #bfbfbf
            color #fff
            box-shadow inset 0 1px 3px rgba(0,0,0,.15)
            background-image linear-gradient(#aeaeae,#b3b3b3)
  .good
    .banner
      margin-top 100px
      height 80vw
      border-bottom 6px solid #E3E3E3
      .slide
        text-align center
        img 
          height 100%
    .title-content
      padding 18px 20px
      border-bottom 6px solid #E3E3E3
      h4 
        font-size 17px
        color #333
        margin-bottom 9px
      p 
        margin-bottom 9px
        color #7f7f7f
        font-size 14px
      .title-price
        font-size 17px
    .item-box
      display flex
      border-bottom 6px solid #E3E3E3
      .left 
        flex 12
        padding 18px 0 13px 18px
        h6 
          color #999
          font-size 14px
          padding-bottom 7px
        p 
          padding-bottom 7px
          font-size 15px
          .value 
            font-weight 700
      .right 
        flex 1
        text-align center
        position relative
        i 
          display block
          height 20px
          position absolute
          top 50%
          margin-top -10px  
          color #999
    .item-detail
      .item-title
        height 40px
        h2
          font-size 17px
          margin-left 20px
          color #666
          font-weight 600
          line-height 40px
      .item-img 
        img 
          background-size contain
          width 100%
          border-bottom 6px solid #E3E3E3        
    .item-specs 
      border-bottom 6px solid #E3E3E3        
      .item-title
        height 40px
        position relative
        h2
          font-size 17px
          margin-left 20px
          color #666
          font-weight 600
          line-height 40px
        &:after 
          content ''
          width 100% 
          position absolute
          height 1px
          left 0
          right 0
          bottom 0
          background #ededed
          transform scaleY(.667)
          transform-origin 0 100%
      .specs 
        padding 22px 22px 46px
        .specs-item 
          padding 20px 22px
          display block
          font-size 11px
          &:nth-child(odd) 
            background #fafafa
          h4 
            display inline-block
            color #333
            font-weight 700
            flex-wrap nowrap
            flex-shrink 0
          span 
            display inline-block
            float right
            color #7f7f7f
    .item-server
      border-bottom 6px solid #E3E3E3        
      .item-title
        height 40px
        position relative
        h2
          font-size 17px
          margin-left 20px
          color #666
          font-weight 600
          line-height 40px
        &:after 
          content ''
          width 100% 
          position absolute
          height 1px
          left 0
          right 0
          bottom 0
          background #ededed
          transform scaleY(.667)
          transform-origin 0 100%
    .recommend
      position relative
      margin-bottom 50px
      .item-title
        height 40px
        position relative
        h2
          font-size 17px
          margin-left 20px
          color #666
          font-weight 600
          line-height 40px
      .box 
        display flex
        flex-wrap wrap 
        .item 
          display inline-block
          width 50%
          text-align center
  .footer 
    position fixed 
    height 66px
    bottom 0
    left 0
    right 0
    background #fff
    ul 
      display flex
      height 66px
      line-height 66px
      text-align center
      li 
        display inline-block
      .cart 
        flex 1
        i 
          font-size 35px
          color #d3d3d3
      .add-cart 
        flex 3 
        button 
          display inline-block
          box-sizing border-box
          width 90%
          height 70%
          background #fff
          border-radius 5px
          border 1px solid #ccc
          color #929292
          font-size 17px
          font-weight 700
      .buy 
        flex 3
        button 
          display inline-block
          width 90%
          height 70%
          border-radius 5px
          border 1px solid #ccc
          background linear-gradient(#6e98f4,#4b77ee)
          font-size 17px
          font-weight 700
          color #fff
.mark-bg 
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  margin-bottom 66px
  background rgba(0,0,0,.8)
  z-index 1000
  .select  
    position absolute
    bottom 0
    left 0
    right 0
    top 40%
    // flex-direction column
    .mark-head 
      position fixed
      display flex
      top 40%
      left 0
      right 0
      bottom 45%
      background #f7f7f7
      background-image linear-gradient(#fefefe,#f6f6f6)
      box-shadow 0 5px 13px rgba(0,0,0,.12)
      .mark-img 
        position relative
        display inline-block
        width 98px
        height 98px
        top -28px
        margin 14px
        padding 11px
        background-color #fff
        border-radius 5px
        flex-shrink 0
        img 
          width 100%
          height 100%   
      .mark-title 
        display inline-block
        margin 18px 13px 18px 4px
        color #333
        font-size 17px
        flex-grow 1
        h4 
          margin-bottom 7px
        p  
          font-size 14px
          color #7f7f7f
          margin-bottom 13px
          span  
            margin-right 4px
        .mark-price 
          font-size 18px
    .mark-content 
      position absolute
      top 33%
      bottom 0
      left 0
      right 0
      background-color #fff
    
.detail >>>.swiper-pagination-bullet 
  width 6px
  height 6px
  background-color #EAEAEA
  opacity 1
.detail >>>.swiper-pagination-bullet-active
  width 6px
  height 6px
  opacity 1
  background-color #fff
  box-shadow 0 1px 3px rgba(0,0,0,.15)
</style>
