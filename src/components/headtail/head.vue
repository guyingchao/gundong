<!--Created by win10 on 2018/7/13.-->
<template>
    <div style="background: #475669">
      <div class="index-width">
        <el-menu router :default-active="'/'+$route.path.split('/')[1]" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 background-color="#475669" text-color="#ffffff" active-text-color="#409EFF">
          <img style="width: 145px;margin-top: 10px;float: left;outline:none;" src="./../../assets/logo_new.png" @click="logoto"/>

          <el-dropdown class="selectLang" trigger="click">
            <span class="el-dropdown-link">语言<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>简体中文</el-dropdown-item>
              <el-dropdown-item>English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button size="small" class="login-btn" round>登录</el-button>
          <div class="selectclick">
            <el-menu-item index="/ironore">铁矿石</el-menu-item>
            <el-menu-item index="/2">煤炭</el-menu-item>
            <el-menu-item index="/3">原油</el-menu-item>
            <el-menu-item index="/4">大豆</el-menu-item>
            <el-menu-item index="/5">玉米</el-menu-item>
          </div>
        </el-menu>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    // 点击logo图片跳转到首页
    logoto () {
      this.$router.push('/index')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .index-width{
    .el-menu--horizontal{
      border-bottom: 0;
    }
    .selectclick{
      float: right;
      width: 520px;
      height: 60px;
      line-height: 60px;
      li{
        display: inline-block;
        padding: 0 30px;
      }
      .el-menu-item.is-active {
        border-bottom: 2px solid #409EFF;
        color: #409EFF;
      }
    }
  }
</style>

<style lang="less" rel="stylesheet/less" scoped>
  .index-width{
    width: 1200px;
    margin: auto;
    .selectLang{
      float: right;
      height: 60px;
      line-height: 60px;
      width: 50px;
      color: white;
    }
    .login-btn{
      float: right;
      background: transparent;
      color: #409EFF;
      border: 1px solid #409EFF;
      margin-top: 15px;
      margin-right: 30px;
      padding: 9px 25px;
    }
  }

</style>
