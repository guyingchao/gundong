<!--Created by win10 on 2018/9/18.-->

<template>
    <div>
      <search @txtdata="searchText" :clearText="clearSearch"></search>
      <div style="height: 20px">guchao</div>
      <gun></gun>
      <shuigun></shuigun>
    </div>
</template>

<script type="text/ecmascript-6">
import search from './Search.vue'
import gun from './gundong.vue'
import shuigun from './shuigun.vue'
export default {
  components: {search, gun, shuigun},
  data () {
    return {
      clearSearch: false
    }
  },
  mounted () {
    this.getNowCity()
  },
  methods: {
    // 定位当前所在城市
    getNowCity () {
      var date = new Date()
      var timer = date.getTime().toString()
      window.GO_UTIL.ajax('get', 'http://localhost:1234/nowcity?t=' + timer, {}, (res) => {
        console.log('res', res)
        return
        this.nowCity = data.cname
        if (!this.choiceCity && !this.choiceCityName) {
          this.choiceCity = this.nowCity
          this.choiceCityName = this.nowCity
        }
      })
    },
    searchText (params) {
      console.log(params)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
