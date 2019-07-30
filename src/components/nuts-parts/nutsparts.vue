<template>
  <div class="nutsparts">
    <div class="head">
      <h2 class="title">坚果系列手机及配件</h2>
      <i class="iconfont icon-tubiaozhizuo-"></i>
    </div>
    <ul class="box">
      <li class="item" v-for="(item,index) in dataList" :key="index" @click="showDetail(item.id)">
        <i-goodblock :iitem=item :typee="large"></i-goodblock>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../api/index'
import goodBlock from '../goodBlock/goodblock'
export default {
  data(){
    return {
      dataList:[],
      large:'large'
    }
  },
  components:{
    "i-goodblock":goodBlock    
  },
  methods: {
    showDetail(id){
      // console.log(id)
      this.$router.push({
          path: `/detail/${id}`,        
      })
    }
  },
  created () {
    api.getNutsparts().then((res) => {
      this.dataList = res.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.nutsparts 
  display inline-block
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
  .box 
    display flex
    flex-wrap wrap 
    .item 
      display inline-block
      width 50%
      text-align center
</style>
