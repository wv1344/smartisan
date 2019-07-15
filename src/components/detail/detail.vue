<template>
  <div class="detail">
    <swiper class="banner" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="slide slide1" v-for="(item,index) in dataList.shop_info.ali_images" :key="index">
        <img :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import api from '../../api/index'
export default {
  data(){
    return {
      id:this.$route.params.id,
      dataList:null,
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
    }
  },
  created() {
    console.log(this.id)
    api.getDetail(this.id).then((res) => {
      this.dataList = res.data[0]
    } )
  },
}
</script>

<style lang="stylus" scoped>
.detail
  .banner
    .slide
      text-align center
      img 
        width 100%
        height 100%
</style>
