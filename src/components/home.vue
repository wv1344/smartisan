<template>
  <div class="home">
    <i-header></i-header>
    <div class="content">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide class="slide slide1">
            <img src="https://resource.smartisan.com/resource/h/h51008420.png" alt="">
        </swiper-slide>
        <swiper-slide class="slide slide2">
          <img src="https://resource.smartisan.com/resource/a/app10084201.png" alt="">
        </swiper-slide>
        <swiper-slide class="slide slide3">
          <img src="https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png" alt="">
        </swiper-slide>
        <swiper-slide class="slide slide4">
          <img src="https://resource.smartisan.com/resource/a/app1008420.png" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <i-tabbar></i-tabbar>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import Tabbar from "@/components/tabbar/tabbar";
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay:true,
        loop : true,
        slidesPerView : 1.1,
        spaceBetween : 20,
        loopedSlides: 4,
        centeredSlides:true,
        bulletClass : 'my-bullett',
        bulletActiveClass: 'my-bullett-active',
      }
    };
  },
  components: {
    "i-header": Header,
    "i-tabbar": Tabbar
  }
};
</script>

<style lang="stylus" scoped>

.home 
  margin: 0;
  padding: 0;
  .content
    position relative
    top 50px
    .slide
      height 100%
      margin-top 10px
      border-radius 10px
    .slide1
      img 
        width 100%
        height 100%
    .slide2
      img 
        width 100%
        height 100%
    .slide3
      img 
        width 100%
        height 100%   
    .slide4
      img 
        width 100%
        height 100%  
  .content >>>.swiper-pagination-bullet 
    width 6px
    height 6px
    background-color #fff
    opacity 1
  .content >>>.swiper-pagination-bullet-active
    width 6px
    height 6px
    opacity .2
    background-color #fff
</style>
