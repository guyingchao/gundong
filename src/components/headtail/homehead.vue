<!--Created by win10 on 2018/7/15.-->
<template>
    <div>
      <div class="content1">
        <i></i>
        <div style="font-size: 24px;color: #666666;">{{$t(titileString)}}</div>
        <i></i>
      </div>
      <div v-if="this.$i18n.locale === 'zh'" style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 40px">{{$t(titileString,'en')}}</div>
      <div v-else style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 40px">{{$t(titileString,'zh')}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    titileString: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .content1{
    position:relative;
    width: 1200px;
    margin: auto;
    i{
      width: 420px;
      height: 1px;
      background: #cccccc;
      position: absolute;
      display: inline-block;
    }
    i:first-child{
      top:16px;
      left:0;
    }
    i:last-child{
      right: 0;
      top: 16px;
    }
  }
</style>
