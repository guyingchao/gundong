<!--Created by win10 on 2018/7/3.-->
<template>
    <div>
      <div>
        <p @click="vuetest">hello test</p>
        <p v-text="titlestring"></p>
        <h3>这里是子组件的内容</h3>
        <button v-on:click="spot">点一下就传</button>
        <p></p>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    titlestring: String,
    testdata: {type: Object},
    dataTarget: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    vuetest () {
      if (this.dataTarget === 'test') {
        console.log(this.testdata)
      } else {
        console.log('hahah')
      }
    },
    spot () {
      this.$emit('spot', '我是子组件传给父组件的内容，就我！')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
