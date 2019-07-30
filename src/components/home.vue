<template>
  <div class="home">
    <i-header class="head"></i-header>
    <div class="content">
      <swiper class="banner" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide class="slide slide1" v-for="(item,index) in bannerList" :key="index">
            <img :src="item.src" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <i-hotgoods class="hot-goods"></i-hotgoods>
      <i-clothBag class="cloth-bag"></i-clothBag>
      <i-breath class="breath"></i-breath>
      <i-fittings class="fittings"></i-fittings>
      <i-nutsparts class="nutsparts"></i-nutsparts>
    </div>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Tabbar from "@/components/tabbar/tabbar";
import hotGoods from "@/components/hotGoods/hotGoods";
import clothBag from "@/components/cloth_bag/cloth-bag";
import Breath from "@/components/breath/breath";
import Fittings from "@/components/fittings/fittings";
import Nutsparts from "@/components/nuts-parts/nutsparts";
import api from '../api/index'
export default {
  data() {
    return {
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
      bannerList:[],
    };
  },
  components: {
    "i-header": Header,
    "i-tabbar": Tabbar,
    "i-hotgoods": hotGoods,
    "i-clothBag": clothBag,
    "i-breath": Breath,
    "i-fittings": Fittings,
    "i-nutsparts": Nutsparts,
  },
  methods: {
    callback(){}
  },
  created() {
    api.Banner().then(res => {
      this.bannerList = res.data
    })
  },
};
</script>

<style lang="stylus" scoped>
.home 
  margin: 0;
  padding: 0;
  .content
    position relative
    top 50px
    padding-bottom 54px
    .banner
      margin-bottom 20px
      .slide
        height 100%
        margin-top 10px
        border-radius 10px
        img 
          width 100%
          height 100%
    .hot-goods
      border-top 7px solid #E4E4E4
    .cloth-bag
      border-top 7px solid #E4E4E4
    .breath
      border-top 7px solid #E4E4E4
    .fittings
      border-top 7px solid #E4E4E4 
    .nutsparts 
      border-top 7px solid #E4E4E4       
  .content >>>.swiper-pagination-bullet 
    width 6px
    height 6px
    background-color #fff
    opacity 1
  .content >>>.swiper-pagination-bullet-active
    width 6px
    height 6px
    opacity 1
    background-color #fff
</style>
