<template>
  <div class="price">
    <i class="iconfont icon-renminbi"></i>
    <span class="money">{{price}}.00</span>
  </div>
</template>

<script>
export default {
  props:{
    price:{
      type:Number,
      default:0
    }
  }
};
</script>

<style lang="stylus" scoped>
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
