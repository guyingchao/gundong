<!--Created by win10 on 2019/2/27.-->
<template>
  <!--<div class="container">
    <slot></slot>
  </div>-->
  <div>
    <li v-for="(item,index) in datas">{{item}}</li>
    <div @click="determain">dianji</div>
  </div>
</template>

<script type="text/ecmascript-6">
import bus from './bridge'
import ziding from './vueBus'

export default {
  props:{
    datas:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
      data: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  },
  created(){
    /*bus.$on('TONGJI',function (res) {
      console.log(res)
    }),*/
    const asyhi = (name)=>console.log('hi'+name.name)
    const asyhello = (name)=>console.log('hello'+name)
    ziding.on('guchao',asyhi),
//    ziding.on('guchao',asyhello)
    ziding.once('GU',asyhello)
    //ziding.off('guchao')
  },
  methods: {
    determain(){
      this.$emit('TEST',{'data': this.data})
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.child{
  width: 300px;
  height: 300px;
  background-color: yellow;
}
</style>
