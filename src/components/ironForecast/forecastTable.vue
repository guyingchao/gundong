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
  props: {
    foreData: {
      type: Array,
      required: true
    },
    typetable: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      tableData3: [],
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      timtarr: [],
      timearr2: []
    }
  },
  watch: {
    foreData(val){
      // console.log('jinkai')
      this.tableData3 = val
    }
  },
  mounted () {
    this.gettableTime()
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
                createElement('div', {'class': 'buju'},[this.timtarr[$index-2].begin + '-' + this.timtarr[$index-2].end + (this.typetable === 'im' ? '到港' : '开始装货')]),
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
        if(rowIndex === 0){
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex % 4 === 1) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
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
      let type = ''
      if(this.typetable === 'im'){
        type = 'import'
      }else{
        type = 'export'
      }
      if (row.regionCode === 'CHN' || row.regionCode === 'GLOBAL') {
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
