<!--Created by win10 on 2018/7/16.-->
<template>
    <div>
      <!--进口预测-->
      <div class="forecastimg">
        <forecast-title :objectData="objData" typestyle="im"></forecast-title>
      </div>
      <div style="clear: both;background: rgb(245, 245, 246);padding-top: 50px;padding-bottom: 100px;min-width: 1200px">
        <div style="width: 1200px;margin: auto">
          <titlestring :titileString="'forecast.imchina'"></titlestring>
          <fore-table :foreData="foretableData" typetable="im"></fore-table>
        </div>
      </div>
      <!--&lt;!&ndash;出口预测&ndash;&gt;
      <div class="exforecast">
        <forecast-title :objectData="objexportData" typestyle="ex"></forecast-title>
      </div>
      <div style="clear: both;background: rgb(245, 245, 246);padding-top: 50px;padding-bottom: 100px">
        <div style="width: 1200px;margin: auto">
          <titlestring :titileString="'forecast.exchina'"></titlestring>
          <fore-table :foreData="foretableexData" typetable="ex"></fore-table>
        </div>
      </div>-->
      <!--出口预测2(这是用子组件给父组件传值实现的)-->
      <div class="exforecast">
        <foretitleex :objectData="objexportData" typestyle="ex"></foretitleex>
        <!--<forecast-title :objectData="objexportData" typestyle="ex"></forecast-title>-->
      </div>
      <div style="clear: both;background: rgb(245, 245, 246);padding-top: 50px;padding-bottom: 100px;min-width: 1200px">
        <div style="width: 1200px;margin: auto">
          <titlestring :titileString="'forecast.exchina'"></titlestring>
          <fore-tableex @exportTitle="changeextitle"></fore-tableex>
          <!--<fore-table :foreData="foretableexData" typetable="ex"></fore-table>-->
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import forecastTitle from '../../ironForecast/forecastTitle.vue'
import titlestring from './../../headtail/homehead.vue'
import foreTable from '../../ironForecast/forecastTable.vue'
import foreTableex from '../../ironForecast/forecasttable2.vue'
import foretitleex from '../../ironForecast/forecastTitle2.vue'
export default {
  components: {forecastTitle, titlestring, foreTable, foreTableex, foretitleex},
  data () {
    return {
      objData: {},
      foretableData: [],
      foretableexData: [],
      objexportData: {}
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
//    this.getexport()
  },
  methods: {
    changeextitle (data) {
      this.objexportData = data
      console.log('aaaaaa',data)
    },
    // 获取进口数据
    getimport () {
      var me = this
      this.$root.GO_UTIL.ajax('get', '/iron/import/forecast', {}, (err, result) => {
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
      // console.log('needArray',needArray)
      this.foretableData = needArray
    },
    /*// 获取出口数据
    getexport () {
      this.$root.GO_UTIL.ajax('get', '/iron/export/forecast', {}, (err, result) => {
        if (!err && !result.error) {
          console.log('export.data', result.data)
          let data = result.data
          for (let i = 0; i < data.length; i++) {
            data[i]['vall_ships'] = data[i]['v1_ships'] + data[i]['v2_ships'] + data[i]['v3_ships'] + data[i]['v4_ships']
            data[i]['vall_tons'] = data[i]['v1_ton'] + data[i]['v2_ton'] + data[i]['v3_ton'] + data[i]['v4_ton']
            if (data[i].PortID === 'ALL' && data[i].ISO3 !== 'ALL') {
              this.objexportData[data[i].ISO3] = data[i]['vall_tons']
            }
          }
          // 这个是处理监听变化的数据的一种处理方法，还可以完全赋值解决
          this.objexportData = Object.assign({}, this.objexportData)
          this.handleextitledata(result.data)
        }
      })
    },
    handleextitledata (data){
      // console.log('exportdata::::',data)
      var exarray = []
      var aoarray = []
      var baarray = []
      var yinarray = []
      var nanarray = []
      for(let i = 0; i < data.length; i++) {
        let item = data[i]
        let obj = {}
        if(item.ISO3 === 'ALL'){
          obj['ISO3'] = 'GLOBAL'
          obj['PortID'] = 'ALL'
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
          exarray.push(obj)
        } else if(item.ISO3 ==='AUS'){
          aoarray.push(item)
        } else if(item.ISO3 ==='BRA'){
          baarray.push(item)
        } else if(item.ISO3 === 'IND'){
          yinarray.push(item)
        } else if(item.ISO3 === 'ZAF'){
          nanarray.push(item)
        }
      }
      function paixu (a,b) {
        return b['vall_tons'] - a['vall_tons']
      }
      aoarray.sort(paixu)
      baarray.sort(paixu)
      yinarray.sort(paixu)
      nanarray.sort(paixu)
      // console.log('aoarraylenth',aoarray)
      for (let i = 1; i < 4; i++){
        let item = aoarray[i]
        exarray.push(item)
      }
      exarray.push(aoarray[0])
      for (let i = 1; i < 4; i++){
        let item = baarray[i]
        exarray.push(item)
      }
      exarray.push(baarray[0])
      for (let i = 1; i < 4; i++){
        let item = yinarray[i]
        exarray.push(item)
      }
      exarray.push(yinarray[0])
      for (let i = 1; i < 4; i++){
        let item = nanarray[i]
        exarray.push(item)
      }
      exarray.push(nanarray[0])
      for(let i = 0; i < exarray.length; i++){
        let item = exarray[i]
        item['regionCode'] = item.ISO3
        item['portId'] = item.PortID
        if(item.v1_ships){
          item['v1_ships'] = item.v1_ships
        }else{
          item['v1_ships'] = 0
        }
        item['v1_ton'] = (item.v1_ton / 10000).toFixed(2)
        if(item.v2_ships){
          item['v2_ships'] = item.v2_ships
        }else{
          item['v2_ships'] = 0
        }
        item['v2_ton'] = (item.v2_ton / 10000).toFixed(2)
        if(item.v3_ships){
          item['v3_ships'] = item.v3_ships
        }else{
          item['v3_ships'] = 0
        }
        item['v3_ton'] = (item.v3_ton / 10000).toFixed(2)
        if(item.v4_ships){
          item['v4_ships'] = item.v4_ships
        }else{
          item['v4_ships'] = 0
        }
        item['v4_ton'] = (item.v4_ton / 10000).toFixed(2)
        item['vall_ships'] = item.vall_ships
        item['vall_tons'] = (item.vall_tons / 10000).toFixed(2)
      }
      // console.log('exarray::::',exarray)
      this.foretableexData = exarray
    }*/
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .forecastimg{
    width: 100%;
    min-width: 1200px;
    height: 500px;
    background: url("./../../../assets/ironore/banner1.png") center no-repeat;
  }
  .exforecast{
    width: 100%;
    height: 300px;
    min-width: 1200px;
    background: url("./../../../assets/ironore/banner2.png") center no-repeat;
  }

</style>
