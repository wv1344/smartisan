<template>
  <div class="header">
    <div class="more-icon">
      <i class="iconfont icon-caidan" title="菜单"></i>
    </div>
    <div class="logo-icon">
      <i class="iconfont icon-chuizi" title="锤子商城"></i>
    </div>
    <div class="search-icon">
      <i  class="iconfont icon-sousuo" title="搜索"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  display:block;
}
* {
  margin: 0;
  padding: 0;
}
/* 头部背景 */
.header{
  background: #1d1d1d;
  background-image: linear-gradient(#1d1d1d,#181818);
  background-size: auto;
  display: block;
  position: fixed;
  height: 50px;
  line-height: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
/* more-icon */
.more-icon .iconfont .icon-caidan{
  display: block;
   /* background: url('./more.png'); */
  background-size: cover;
}
.icon-caidan{
  font-size: 25px;
  background-origin: content-box;
  float: left;
  height: 100%;
  padding: 0 5px;
  width: 50px;
  transition: none;
  color: #e6e6e6;
}
/* logo */
.logo-icon{
  float: left;
  display: inline-block;
  width: 71%;
}
.logo-icon .iconfont .icon-chuizi{
  height: 100%;
  display: block;
  font-weight: bold;
}
.icon-chuizi{
  color: #e6e6e6;
  background-color: rgba(0, 0, 0, 0);
  font-size: 25px;
  /* font-weight: 500; */
  line-height: 50px;
  /* text-indent: -1000px; */
  padding-right: 10px;
}
/* search */
.search-icon{
  float: left;
  display: inline-block;
  line-height: 50px;
}
.search-icon .iconfont .icon-sousuo{
  display: inline-block;
  background-origin: content-box;
  height: 100%;
}
.icon-sousuo{
  font-size: 23px;
  color: #e6e6e6;
  float: none;
  padding: 0 5px;
  width: 50px;
  transition: none;
}
</style>