<!--Created by win10 on 2018/7/15.-->
<template>
    <div>
      <div id="titlestyle" :style="{background:activebackground}">
        <el-menu :default-active="activeIndex" class="el-menu-demo bkcolor" mode="horizontal" @select="handleSelect"
                 router :text-color="textcolor" active-text-color="#ffffff">
          <el-menu-item id="/ironore" index="/ironore">铁矿石</el-menu-item>
          <el-menu-item id="/ironore/forecast" index="/ironore/forecast">预测</el-menu-item>
          <el-menu-item id="/ironore/history" index="/ironore/history">历史</el-menu-item>
          <el-menu-item index="/ironore/hang">航运</el-menu-item>
          <el-menu-item index="/ironore/map">地图</el-menu-item>
        </el-menu>
      </div>
      <!--<div class="irontitle">
      </div>-->
      <router-view/>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      activeIndex: '',
      textcolor: '#409EFF',
      activebackground: ''
    }
  },
  mounted () {
    this.dealroute(this.$route.path)
    console.log(this.$route.path)
    console.log(window.location.pathname)
  },
  methods: {
    dealroute (route) {
      this.activeIndex = route
      if (route === '/ironore' || route === '/ironore/forecast') {
        this.textcolor = '#FFFFFF'
        this.activebackground = 'rgba(255, 255, 255, 0.2)'
//        document.getElementById('titlestyle').style.background = 'rgba(255, 255, 255, 0.2)'
      } else {
        this.textcolor = '#409EFF'
        this.activebackground = '#ffffff'
//        document.getElementById('titlestyle').style.background = '#ffffff'
      }
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if (key === '/ironore' || key === '/ironore/forecast') {
        this.textcolor = '#FFFFFF'
        document.getElementById('titlestyle').style.background = 'rgba(255, 255, 255, 0.2)'
      } else {
        this.textcolor = '#409EFF'
        document.getElementById('titlestyle').style.background = '#ffffff'
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .bkcolor{
    width: 1200px;
    margin: auto;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.0);
    border-bottom: 0;
    .el-menu-item{
      width: 60px;
      margin-top: 7px;
      margin-right: 40px;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
      padding: 0 10px;
      border: 1px;
      border-radius: 20px;
    }
    .el-menu-item.is-active{
      background-color: #409EFF!important;
      border: 1px;
    }
  }
  .bkcolor>li:hover{
    /*outline: 0;*/
    background-color: #409EFF!important;
    color: #ffffff!important;
  }
</style>

<style lang="less" rel="stylesheet/less" scoped>
  #titlestyle{
    float: left;
    height: 40px;
    width: 100%;
    min-width: 1200px;
    /*background: rgba(255, 255, 255, 0.2);*/
    /*background-color: #ffffff;*/
  }
</style>
