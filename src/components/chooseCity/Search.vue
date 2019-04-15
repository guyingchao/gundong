<!--Created by win10 on 2018/9/18.-->
<template>
    <div style="width: 100%;background: blue;height: 50px;line-height: 50px;position: relative">
      <input placeholder="城市名称/拼音" style="width: 1000px;background: #ffffff;height: 40px;line-height: 40px;border-radius: 10px;padding-left: 60px;" v-model="selectText" @keydown="entry"/>
      <div style="position: absolute;top: 0;left: 198px;">
        <i class="iconfont icon-sousuo" style="font-size: 26px;color: blue;"></i>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    clearText: Boolean
  },
  data () {
    return {
      selectText: '',
      timer: {}
    }
  },
  methods: {
    // 延时搜索
    entry () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('txtdata', this.selectText)
      }, 300)
      console.log('123')
    }
  },
  watch: {
    clearText (val) {
      if (val) {
        this.selectText = ''
        this.entry()
      }
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
