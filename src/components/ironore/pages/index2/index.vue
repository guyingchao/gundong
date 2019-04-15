<!--Created by win10 on 2018/10/11.-->
<template>
    <div style="height: 1500px;min-width: 1200px;">
      <div style="width: 1200px;margin: auto;margin-top: 40px;">
        <div style="width: 820px;display: inline-block;text-align: left;">
          <detailprice></detailprice>
          <ironfadetail></ironfadetail>
        </div>
        <div style="float: right;width: 350px;">
          <indexright></indexright>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import detailprice from './detailAndprice.vue'
import ironfadetail from './ironFadetail.vue'
import indexright from './indexright.vue'
export default {
  components: {detailprice, ironfadetail, indexright},
  data () {
    return {}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
