<!--Created by win10 on 2018/7/16.-->
<template>
    <div>
      <div class="indextitle">
        <!--铁矿石主页的头部-->
        <ironindextitle></ironindextitle>
      </div>
      <div style="background-color: rgb(245, 245, 246);clear: both;padding-top: 50px;">
        <!--中国进口铁矿石到岸行情-->
        <title-style :titileString="'global.ironhang'"></title-style>
        <div style="height: 400px"></div>
        <!--船舶动态-->
        <title-style :titileString="'global.boat'"></title-style>
        <div style="height: 400px"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import ironindextitle from './ironindextitle.vue'
import titleStyle from './../../headtail/homehead.vue'
export default {
  components: {ironindextitle, titleStyle},
  data () {
    return {
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  /*.clearfix:after{
    display: block;
    visibility: visible;
    clear: both;
    height: 0;
    content: ".";
  }
  .clearfix{
    zoom:1;
  }*/
  .indextitle{
    width: 100%;
    min-width: 1200px;
    height: 500px;
    background-image: url("./../../../assets/ironore/banner.jpg");
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
