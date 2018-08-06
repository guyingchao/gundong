<!--Created by win10 on 2018/7/16.-->
<template>
    <div>
      <div class="forecastimg">
        <forecast-title :objectData="objData"></forecast-title>
      </div>
      <div style="clear: both;background: rgb(245, 245, 246);padding-top: 50px">
        <div style="width: 1200px;margin: auto">
          <titlestring :titileString="'forecast.imchina'"></titlestring>
          <fore-table :foreData="foretableData"></fore-table>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import forecastTitle from '../../ironForecast/forecastTitle.vue'
import titlestring from './../../headtail/homehead.vue'
import foreTable from '../../ironForecast/forecastTable.vue'
export default {
  components: {forecastTitle, titlestring, foreTable},
  data () {
    return {
      objData: {},
      foretableData: []
      /*objData: {
        'ALL': 108765627.36,
        'CHNCJR': 24235512.689999998,
        'CHNNOR': 67564170.66,
        'CHNSOU': 16965944.01
      }*/
    }
  },
  mounted () {
    this.getimport()
  },
  methods: {
    // 获取进口数据
    getimport () {
      var me = this
      this.$root.GO_UTIL.ajax('get', 'http://192.168.141.121:8090/iron/import/forecast', {}, (err, result) => {
        if (!err && !result.error) {
          console.log('result.data::::', result.data)
          let data = result.data
          for (let i = 0; i < data.length; i++) {
            data[i]['vall_ships'] = data[i]['v1_ships'] + data[i]['v2_ships'] + data[i]['v3_ships'] + data[i]['v4_ships']
            data[i]['vall_tons'] = data[i]['v1_ton'] + data[i]['v2_ton'] + data[i]['v3_ton'] + data[i]['v4_ton']
            if (data[i].portId === 'ALL') {
              this.objData[data[i].regionCode] = data[i]['vall_tons']
            }
          }
          // 这个是处理监听变化的数据的一种处理方法，还可以完全赋值解决
          this.objData = Object.assign({}, this.objData)
          this.handletitledata(result.data)
        }
      })
    },
    handletitledata (data) {
      var me = this
      /*let objData = {}
      for (let i = 0; i < data.length; i++) {
        data[i]['vall_ships'] = data[i]['v1_ships'] + data[i]['v2_ships'] + data[i]['v3_ships'] + data[i]['v4_ships']
        data[i]['vall_tons'] = data[i]['v1_ton'] + data[i]['v2_ton'] + data[i]['v3_ton'] + data[i]['v4_ton']
        if (data[i].portId === 'ALL') {
          objData[data[i].regionCode] = data[i]['vall_tons']
        }
      }
      me.objData = objData*/
      console.log('oldornew',data)
      var needArray = []
      var changarray = []
      var northarray = []
      var southarray = []
      for(let i = 0; i < data.length; i++) {
        let item = data[i]
        let obj = {}
        if(item.regionCode === 'ALL'){
          obj['regionCode'] = 'CHN'
          obj['portId'] = 'ALL'
          obj['v1_ships'] = item.v1_ships
          obj['v1_ton'] = item.v1_ton
          obj['v2_ships'] = item.v2_ships
          obj['v2_ton'] = item.v2_ton
          obj['v3_ships'] = item.v3_ships
          obj['v3_ton'] = item.v3_ton
          obj['v4_ships'] = item.v4_ships
          obj['v4_ton'] = item.v4_ton
          obj['vall_ships'] = item.vall_ships
          obj['vall_tons'] = item.vall_tons
          needArray.push(obj)
        } else if(item.regionCode ==='CHNCJR'){
          changarray.push(item)
        } else if(item.regionCode ==='CHNNOR'){
          northarray.push(item)
        } else if(item.regionCode === 'CHNSOU'){
          southarray.push(item)
        }
      }
      function paixu (a,b) {
        return b['vall_tons'] - a['vall_tons']
      }
      changarray.sort(paixu)
      northarray.sort(paixu)
      southarray.sort(paixu)
      console.log('changarray',changarray)
      for (let i = 1; i < 4; i++){
        let item = changarray[i]
        needArray.push(item)
      }
      needArray.push(changarray[0])
      for (let i = 1; i < 4; i++){
        let item = northarray[i]
        needArray.push(item)
      }
      needArray.push(northarray[0])
      for (let i = 1; i < 4; i++){
        let item = southarray[i]
        needArray.push(item)
      }
      needArray.push(southarray[0])
      for(let i = 0; i < needArray.length; i++){
        let item = needArray[i]
//        item['regionCode'] = this.$t('country.' + item.regionCode)
//        item['portId'] = this.$t('port.' + item.portId)
        item['v1_ships'] = item.v1_ships
        item['v1_ton'] = (item.v1_ton / 10000).toFixed(2)
        item['v2_ships'] = item.v2_ships
        item['v2_ton'] = (item.v2_ton / 10000).toFixed(2)
        item['v3_ships'] = item.v3_ships
        item['v3_ton'] = (item.v3_ton / 10000).toFixed(2)
        item['v4_ships'] = item.v4_ships
        item['v4_ton'] = (item.v4_ton / 10000).toFixed(2)
        item['vall_ships'] = item.vall_ships
        item['vall_tons'] = (item.vall_tons / 10000).toFixed(2)
      }
      console.log('needArray',needArray)
      this.foretableData = needArray
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .forecastimg{
    width: 100%;
    height: 500px;
    background: url("./../../../assets/ironore/banner1.png") center no-repeat;
  }

</style>
