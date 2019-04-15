<!--Created by win10 on 2018/10/9.-->
<template>
    <div>
      <el-dialog class="productdia" :title="producename+productTitle" :visible.sync="PRODUCTVisible" width="900px" center>
        <div style="display: inline-block;margin-right: 20px;margin-left:20px;font-size: 14px;">{{$t('ironfa.past14')}}：{{past14}}{{$t('ironfa.danwei')}}</div>
        <div style="display: inline-block;font-size: 14px;">{{$t('ironfa.past7')}}：{{past7}}{{$t('ironfa.danwei')}}</div>
        <div id="giois-product" style="height:410px;"></div>
      </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      productTitle: this.$t('ironfa.faqu'),
      PRODUCTVisible: false,
      type: '',
      name: '',
      producename: '',
      past7: '',
      past14: ''
    }
  },
  mounted (){
    this.$root.GOEVENT.$on('PRODUCT_DIALOG', (param) => {
      this.PRODUCTVisible = true
      let type = param.type
      let name = param.name
      // console.log('name',name)
      if(type === 'country'){
        this.producename = this.$t('country.' + name)
      }else if (type === 'port_id'){
        this.producename = this.$t('port.' + name)
      } else if(type === 'product') {
        this.producename = name
      }
      this.type = type
      this.name = name
      this.getChartData()
    })
  },
  methods: {
    //获取数据
    getChartData () {
      var me = this
      let data={
        type: me.type,
        name: me.name
      }
      // console.log('dataparam',data)
      window.GO_UTIL.ajax('get', '/get/region/export/info', data, (err, result) => {
        if(!err && !result.error){
          // console.log('jinlaichart',result.data)
          let resultdata = result.data.product
          let shuju = resultdata[resultdata.length - 1]
          me.past7 = parseFloat(shuju.last_7_day_ton/10000).toFixed(1)
          me.past14 = parseFloat(shuju.last_14_day_ton/10000).toFixed(1)
          me.GIOSREchartShow(result.data.product)
        }
      })
    },
    GIOSREchartShow(data) {
      // console.log('chartdata',data)
      var me = this;
      var myChart = me.$echarts.init(document.getElementById('giois-product'));

      let past7data = {
        name: this.$t('ironfa.past7name'),
        type: 'line',
//          step: 'start',
        smooth: true,
        showSymbol: false,
//          color: '#13affa',
        data: []
      }
      let past14data = {
        name: this.$t('ironfa.past14name'),
        type: 'line',
//          step: 'start',
        showSymbol: false,
        // color: 'silver',
//          color: '#C84F60',
        data: [],
        lineStyle:{
          type:'solid',
          width:1
        }
      }

      past7data.data = data.map((item) => {
        let date = me.$moment(item.date).format('YYYY-MM-DD')
        let past7 = parseFloat(item.last_7_day_ton/10000).toFixed(1)
        return [date, past7]
      })
      past14data.data = data.map((item) => {
        let date = me.$moment(item.date).format('YYYY-MM-DD')
        let past14 = parseFloat(item.last_14_day_ton/10000).toFixed(1)
        return [date, past14]
      })
      //梯形图数据
      let dataseries = [past7data,past14data]
      var option = {
        color: window.G_PARAMS.color,
        dataZoom: [{
          zoomOnMouseWheel: false,
          type: 'inside',
          start: 70,
          end: 100
        }, {
          start: 0,
          end: 10,
          handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          }
        }],
        tooltip: {
          trigger: 'axis',
          textStyle: {
            align: 'left'
          },
          formatter: function (params) {
//            console.log('params',params)
            let arrstring = ''
            for (var i = 0; i < params.length; i++) {
              if (params[i].value[1] === null || params[i].value[1] === undefined) {
                arrstring += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color: ' + params[i].color + '"></span>' + params[i].seriesName + ': ' + '' + ' ' + "<br / >"
              } else {
                arrstring += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color: ' + params[i].color + '"></span>' + params[i].seriesName + ': ' + parseFloat(params[i].value[1]).toFixed(1) + me.$t('ironfa.danwei') + ' ' + "<br / >"
              }
            }
            let tip = params[0].name + "<br / >" + arrstring
            return tip
          }
        },
        legend: {
          data: [this.$t('ironfa.past7name'), this.$t('ironfa.past14name')],
          icon: 'stack',
          right: '20',
          top: '-5px'
        },
        grid: {
          top: '40px',
          left: '3%',
          right: '4%',
          bottom: '50px',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          scale: true,
          axisLine: {show: false},
          name: this.$t('ironfa.danwei'),
          axisTick: {
            show: false
          }
        },
        series: dataseries
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

</style>
<style>
  .productdia .el-dialog__body {
    padding: 20px 20px;
  }
  .productdia .el-dialog--center .el-dialog__body {
    padding: 11px 25px 30px;
  }
</style>
