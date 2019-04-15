<!--Created by win10 on 2018/7/27.-->
<template>
  <div class="foretable">
    <el-table :data="tableData3" :cell-class-name="getClass" :span-method="objectSpanMethod" @cell-click="clickitem" style="width: 100%">
      <el-table-column align="center" prop="regionCode" label="" width="110">
        <template slot-scope="scope">
          <span>{{$t('country.' + scope.row.regionCode)}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="portId" label="港口" width="110">
        <template slot-scope="scope">
          <span>{{$t('port.' + scope.row.portId)}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :render-header="renderHeader">
        <el-table-column align="center" prop="v1_ships" label="艘次"></el-table-column>
        <el-table-column align="center" prop="v1_ton" label="吨位"></el-table-column>
      </el-table-column>
      <el-table-column align="center" :render-header="renderHeader">
        <el-table-column align="center" prop="v2_ships" label="艘次"></el-table-column>
        <el-table-column align="center" prop="v2_ton" label="吨位"></el-table-column>
      </el-table-column>
      <el-table-column align="center" :render-header="renderHeader">
        <el-table-column align="center" prop="v3_ships" label="艘次"></el-table-column>
        <el-table-column align="center" prop="v3_ton" label="吨位"></el-table-column>
      </el-table-column>
      <el-table-column align="center" :render-header="renderHeader">
        <el-table-column align="center" prop="v4_ships" label="艘次"></el-table-column>
        <el-table-column align="center" prop="v4_ton" label="吨位"></el-table-column>
      </el-table-column>
      <el-table-column align="center" label="小计">
        <el-table-column align="center" prop="vall_ships" label="艘次"></el-table-column>
        <el-table-column align="center" prop="vall_tons" label="吨位"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      tableData3: [],
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      timtarr: [],
      timearr2: [],
      exportData: {},
      region: ''
    }
  },
  mounted () {
    this.gettableTime()
    this.getexport()
  },
  methods: {
    // 自定义表头结构
    renderHeader(createElement, { column, $index }){
      /*let des = ''
       if(this.typetable === 'im'){
       des = '到港'
       }else{
       des = '开始装货'
       }*/
      return createElement(
        'span', [
          createElement('span', this.timtarr[$index-2].begin),
          createElement('el-popover',
            {attrs: {
              placement:"bottom",
              width:"200",
              trigger:"hover",
            }
            }, [
              createElement('div',[
                createElement('div', {'class': 'buju'},[this.timtarr[$index-2].begin + '-' + this.timtarr[$index-2].end + '开始装货']),
                createElement('div', '吨位依据船舶载量吨位进行预测，不考虑货物冗余情况。'),
              ]),
              createElement('span', {'class': 'el-icon-question', 'slot': "reference"})
            ]
          )
        ]
      )
    },
    // 获取时间
    gettableTime(){
      let startweek = this.$moment().startOf('isoWeek').unix();
      let limit = 4
      for(let i = 0; i < limit; i++){
        let begin = startweek * 1000 + 7*i*24*3600*1000
        let end = begin + 6*24*3600*1000
        let mobegin = this.$moment(begin).format('YYYY-MM-DD')
        let moend = this.$moment(end).format('YYYY-MM-DD')
        let beginmonth = new Date(begin).getMonth() + 1
        let beginday = new Date(begin).getDate()
        let beginst = beginmonth + '月' + beginday + '日'
        let endmonth = new Date(end).getMonth() + 1
        let endday = new Date(end).getDate()
        let endst = endmonth + '月' + endday + '日'
        this.timtarr.push({'begin':beginst,'end':endst})
        this.timearr2.push({'begin': mobegin, 'end': moend})
      }
    },
    // 每列的颜色设置
    getClass({row, column, columnIndex}) {
      if (columnIndex === 0) {
        return ''
      } else {
        return 'liStyle'
      }
    },
    // 合并列
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: row.num,
          colspan: 1
        }
      }
    },
    // 单元格的点击事件
    clickitem (row, column, cell, event){
      console.log('jinlaihahhahha',row,column,cell)
      console.log('moment',this.timearr2[0].begin)
      let beginDate = ''
      let endDate = ''
      let regionCode = ''
      let harbor = ''
      let type = 'export'
      if (row.regionCode === 'GLOBAL') {
        regionCode = 'ALL'
      } else {
        regionCode = row.regionCode
      }
      harbor = row.portId
      if (column.property === 'v1_ships' || column.property === 'v1_ton'){
        beginDate = this.timearr2[0].begin
        endDate = this.timearr2[0].end
      } else if (column.property === 'v2_ships' || column.property === 'v2_ton'){
        beginDate = this.timearr2[1].begin
        endDate = this.timearr2[1].end
      }else if(column.property === 'v3_ships' || column.property === 'v3_ton'){
        beginDate = this.timearr2[2].begin
        endDate = this.timearr2[2].end
      } else if(column.property === 'v4_ships' || column.property === 'v4_ton'){
        beginDate = this.timearr2[3].begin
        endDate = this.timearr2[3].end
      } else {
        beginDate = this.timearr2[0].begin
        endDate = this.timearr2[3].end
      }
      this.$router.push({path: '/ironore/forecast/detail', query: {type: type, beginDate: beginDate, endDate: endDate, regionCode: regionCode, harbor: harbor}})
    },
    // 获取出口数据
    getexport () {
      this.$root.GO_UTIL.ajax('get', '/iron/export/forecast', {}, (err, result) => {
        if (!err && !result.error) {
//          console.log('export.data', result.data)
          let data = result.data
          for (let i = 0; i < data.length; i++) {
            data[i]['vall_ships'] = data[i]['v1_ships'] + data[i]['v2_ships'] + data[i]['v3_ships'] + data[i]['v4_ships']
            data[i]['vall_tons'] = data[i]['v1_ton'] + data[i]['v2_ton'] + data[i]['v3_ton'] + data[i]['v4_ton']
            if (data[i].PortID === 'ALL' && data[i].ISO3 !== 'ALL') {
              this.exportData[data[i].ISO3] = data[i]['vall_tons']
            }
          }
          // 这个是处理监听变化的数据的一种处理方法，还可以完全赋值解决
          this.exportData = Object.assign({}, this.exportData)
          this.$emit('exportTitle', this.exportData)
//          console.log('this.exportData', this.exportData)
          this.handleextitledata(result.data)
        }
      })
    },
    handleextitledata (data){
       console.log('exportdata::::',data)
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
      /*function paixu (a,b) {
        return b['vall_tons'] - a['vall_tons']
      }
      aoarray.sort(paixu)
      baarray.sort(paixu)
      yinarray.sort(paixu)
      nanarray.sort(paixu)*/
      exarray[0]['num'] = exarray.length
      aoarray[0]['num'] = aoarray.length
      baarray[0]['num'] = baarray.length
      yinarray[0]['num'] = yinarray.length
      nanarray[0]['num'] = nanarray.length
      var exarrays = exarray.concat(aoarray, baarray, yinarray, nanarray)
      console.log('exarraylenth', exarrays)
      /*for (let i = 1; i < 4; i++) {
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
      exarray.push(nanarray[0])*/
      for(let i = 0; i < exarrays.length; i++){
        let item = exarrays[i]
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
        if (item.v4_ships) {
          item['v4_ships'] = item.v4_ships
        } else {
          item['v4_ships'] = 0
        }
        item['v4_ton'] = (item.v4_ton / 10000).toFixed(2)
        item['vall_ships'] = item.vall_ships
        item['vall_tons'] = (item.vall_tons / 10000).toFixed(2)
      }
      // console.log('exarray::::',exarrays)
      this.tableData3 = exarrays
    }
  }
}
</script>
<style rel="stylesheet/less">
  .foretable .el-table thead.is-group th {
    background: #30a6fd;
    color: #ffffff;
  }
  .liStyle{
    color: #30a6fd;
    text-decoration: underline;
    cursor: pointer;
  }
  .buju{
    color: #30a6fd;
    border-bottom: 1px solid gray;
  }
</style>
<style lang="less" rel="stylesheet/less" scoped>
</style>
