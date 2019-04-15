<!--Created by win10 on 2018/6/29.-->
<template>
  <div>
    <el-input>输入</el-input>
    <!--<el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>-->
    <!--<div @click="downloadtxt">点击下载</div>
    <ul style="list-style-type: none">
      <li v-for="(item, index) in seledata" :key="index">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>-->
  </div>
</template>

<script type="text/ecmascript-6">
  let id = 1000;
import test from './zi.vue'
import ElInput from "../../node_modules/element-ui/packages/input/src/input";
import ElButton from "../../node_modules/element-ui/packages/button/src/button";
export default {
  components: {
    ElButton,
    ElInput,
    test},
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]
      /*inputext: '',
      seledata:[
        {name:'first', link:'/jiaocheng/first'},
        {name:'second', link:'/jiaocheng/second'}
      ]*/
    }
    /*return {
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
    }*/
  },
  computed: {
    author () {
      return this.$store.state.author
    }
  },
  methods: {
    append(data) {
        console.log(data)
      const newChild = {label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
  }
}
</script>
<style>
  .router-link-active {
    color: red;
  }
</style>
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
