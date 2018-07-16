<!--Created by win10 on 2018/6/29.-->
<template>
    <div>
      <div class="title">
        <p class="content" title="woshiguchao">{{guchao}}</p>
        <span :title="message">haha</span>
        <p @click="tryit">tryit</p>
        <div style="width: 150px;height: 100px;overflow: hidden">
          <!--同时设置宽高和overflow才可以用鼠标滚动来实现上下滚动，并隐藏滑动条-->
          <ul style="overflow: auto;width: 100%;height: 100%;list-style: none">
            <li v-for="(item, index) in marqueeList" :key="index">{{item.name}}在北京</li>
          </ul>
        </div>
        <span v-for="(imgUrl, index) in imagesUrl" :key="index">
          <el-popover
            placement="top-start"
            width="200"
            trigger="hover">
              <i>hi</i>
            <span>hi2</span>
              <i style="margin-right: 10px;" slot="reference">hello</i>
          </el-popover>
        </span>
      </div>
      <test titlestring="my string" @spot="spot" :testdata = 'fatherdata' data-target="test"></test>
      <p>分割线</p>
      <!--<test v-for="(item, index) in posts" :key="item.id" :title="item.title"></test>-->
      <!--等腰三角形，箭头朝右-->
      <div style="position: relative;height: 100px">
        <i class="trig"></i>
      </div>
      <!--两个float在一个div中-->
      <div style="width: 1000px;height:500px;position: relative;margin: auto">
        <div style="width: 100px;height: 300px;float: left">
          <ul>
            <li v-for="(item, index) in marqueeList" :key="index">{{item.name}}在北京</li>
          </ul>
        </div>
        <div style="width: 100px;height: 300px;float: left">我是顾超，哈哈哈哈哈哈哈</div>
      </div>
      <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/contract">
            <el-dropdown-item>合同录入</el-dropdown-item>
          </router-link>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script type="text/ecmascript-6">
import test from './zi.vue'
export default {
  components: {test},
  data () {
    return {
      guchao: 'guchao',
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      fatherdata: {name: 'guchao', age: '24'},
      imagesUrl: ['first', 'second'],
      marqueeList: [
        {
          name: '1军',
          city: '北京',
          amount: '10'
        },
        {
          name: '2军',
          city: '北京',
          amount: '10'
        },
        {
          name: '3军',
          city: '北京',
          amount: '10'
        },
        {
          name: '4军',
          city: '北京',
          amount: '40'
        },
        {
          name: '5军',
          city: '北京',
          amount: '40'
        },
        {
          name: '6军',
          city: '北京',
          amount: '50'
        },
        {
          name: '7军',
          city: '北京',
          amount: '60'
        }
      ],
      message: '页面加载于' + new Date().toLocaleString()
    }
  },
  methods: {
    spot (data) {
      console.log(data)
    },
    tryit () {
      console.log('ok')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .title{
    .content{
      color:red;
    }
  }
  .trig{
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid cyan;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

</style>
