<template>
    <ul>
      <li v-for="(item,index) in color" :key="index">
        <img :src="item.image" alt="">
      </li>
    </ul>
</template>

<script>
export default {
  props: {
    color:{
      type:Array,
      default:null
    }
  }
}
</script>

<style lang="stylus" scoped>
  li
   list-style none
  ul 
    margin-top 2px
    li 
      display inline-block
      margin-right 5px
      img 
        border-radius 50%
        width 7px
        height 7px
        padding 1px
        border 1px solid #ccc
        border-radius 50%
        display inline-block
</style>
