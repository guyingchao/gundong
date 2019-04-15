<!--Created by win10 on 2019/2/27.-->
<template>
    <div class="parent">
      <div>我是父组件</div>
      <child :datas="message" @TEST="receive"></child>
      <div @click="tongji">tongyi</div>
      <!--<child>-->
        <!--<p>woshiguchao</p>-->
        <!--<template slot-scope="data">
          <li v-for="(item,index) in data.data">{{item}}</li>
        </template>-->
        <!--<template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>-->

        <!--<template slot-scope="user">
          <li v-for="(item, index) in user.data" :key="index">{{item}}</li>
        </template>-->
      <!--</child>-->
    </div>
</template>

<script type="text/ecmascript-6">
import child from './child.vue'
import bus from './bridge'
import ziding from './vueBus'
export default {
  components:{child},
  data () {
      return {
        message:['gu1','gu2','gu3']
      }
  },
  mounted(){

  },
  methods: {
    receive(data){
     console.log('received:::',data)
    },
    tongji(){
//      bus.$emit('TONGJI',{'name':'guchao'})
      ziding.emit('guchao',{name:'hello world'})
      ziding.emit('GU','world!!!')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.parent{
  background-color: red;
}
</style>
