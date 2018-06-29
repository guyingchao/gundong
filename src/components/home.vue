<!--Created by win10 on 2018/6/22.-->
<template>
    <div>
      <p>hello vue-cli</p>
      <router-link to="/">Go to taobao</router-link>
      <p @click="clickto">click</p>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$router': 'doSomeThing'
  },
  methods: {
    doSomeThing () {
      console.log('hahha')
    },
    clickto () {
      this.$router.push({path: '/', params: { userId: 123 }})
    }
  }
}
</script>

<style scoped>

</style>
