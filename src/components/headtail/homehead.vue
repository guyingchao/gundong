<!--Created by win10 on 2018/7/15.-->
<template>
    <div>
      <div class="content1">
        <i></i>
        <div style="font-size: 24px;color: #666666;">{{titileString}}</div>
        <i></i>
      </div>
      <div style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 70px">Iron Ore Data Service</div>
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
