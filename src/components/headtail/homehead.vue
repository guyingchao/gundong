<!--Created by win10 on 2018/7/15.-->
<template>
    <div>
      <div class="content1">
        <i></i>
        <div style="font-size: 24px;color: #666666;">{{$t(titileString)}}
          <span v-show="foreshow" style="position: relative">
          <el-popover placement="right-start" width="400" trigger="hover">
            <p>进口预测：根据满载船舶预测未来各港口进口量</p>
            <p>出口预测：根据空载船舶预测未来各港口出口量</p>
            <p style="color: red">*由于卸货完成后部分船舶有一定概率不直接去装货港装货。此处的出口量预测可能会偏小。</p>
            <p style="color: red">*由于各港口装卸货调度不能准确预测，会导致船舶的到港时间出现偏差。</p>
            <span style="font-size: 18px;position: absolute;top: 4px;left: 50px;" class="el-icon-question" slot="reference"></span>
          </el-popover>
          </span>
        </div>
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
    return {
      foreshow: false
    }
  },
  mounted () {
    if (this.titileString === 'global.imex') {
      this.foreshow = true
    } else {
      this.foreshow = false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  div > p{
    line-height: 25px;
  }
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
