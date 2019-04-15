<!--Created by win10 on 2018/7/16.-->
<template>
    <div style="background: rgb(245 245 246);clear: both;min-width: 1200px">
      <div style="width: 1200px;height:750px;margin: auto">
        <!--沸腾供给指数-->
        <div style="margin-bottom: 20px">
          <div style="text-align: left;font-size: 18px;line-height: 55px">沸腾供给指数
            <el-popover placement="right-start" width="500" trigger="hover">
              <i style="color: #409EFF" class="el-icon-question" slot="reference"></i>
              <div style="color: #409EFF;font-weight: bold;margin-bottom: 10px">{{supply.supply1}}</div>
              <div style="font-size: 12px;line-height: 20px">{{supply.supply2}}</div>
              <div style="font-size: 12px;line-height: 20px">{{supply.supply3}}</div>
              <div style="color: #409EFF;line-height: 20px">
                <span class="tedian"></span>
                {{supply.supply4}}
              </div>
              <div style="font-size: 12px;line-height: 20px">
                <span class="te"></span>
                {{supply.supply5}}
              </div>
              <div style="font-size: 12px;line-height: 20px">
                <span class="te"></span>
                {{supply.supply6}}
              </div>
              <div style="font-size: 12px;line-height: 20px">
                <span class="te"></span>
                {{supply.supply7}}
              </div>
              <div style="font-size: 12px;line-height: 20px">
                <span class="te"></span>
                {{supply.supply8}}
              </div>
              <div class="tipbtn" @click="clicktip">{{$t('indexTip.button')}}</div>
            </el-popover>
          </div>
          <ul>
            <li class="listyle">
              <div class="productname">PB粉</div>
              <div class="prostyle" style="background:rgb(114, 151, 255)">{{gongji.pb}}</div>
            </li>
            <li class="listyle">
              <div class="productname">纽曼粉</div>
              <div class="prostyle" style="background: rgb(109, 218, 155)">{{gongji.nm}}</div>
            </li>
            <li class="listyle">
              <div class="productname">麦克粉</div>
              <div class="prostyle" style="background: rgb(234, 149, 73)">{{gongji.mike}}</div>
            </li>
            <li class="listyle">
              <div class="productname">巴西南部粉</div>
              <div class="prostyle" style="background: rgb(255, 121, 149)">{{gongji.bx}}</div>
            </li>
            <li class="listyle">
              <div class="productname">金布巴粉</div>
              <div class="prostyle" style="background: rgb(244, 209, 70)">{{gongji.jb}}</div>
            </li>
            <li class="listyle" style="margin-right: 0px">
              <div class="productname">卡粉</div>
              <div class="prostyle" style="background: rgb(255, 101, 89)">{{gongji.ka}}</div>
            </li>
          </ul>
        </div>
        <!--沸腾支阻价指数-->
        <div style="width: 850px;float: left;">
          <div style="height: 48px;line-height: 48px;text-align: left;font-size: 18px">沸腾支阻价指数
            <i></i>
          </div>
          <div style="height: 470px;background: #ffffff;border-radius: 6px"></div>
        </div>
        <!--沸腾敞口指数-->
        <div style="width: 330px;float: right;">
          <div style="height: 48px;line-height: 48px;text-align: left;font-size: 18px">沸腾敞口指数</div>
          <div style="height: 200px;background: #ffffff;border-radius: 6px;text-align: left;padding: 10px">
            <div style="line-height: 90px;height: 90px;border-bottom: 1px dashed rgb(238, 238, 238)">
              <span style="display: inline-block;width: 150px">巴西</span>
              <span class="ziti">{{giotce.BRA}}</span>
            </div>
            <div style="line-height: 90px;height: 90px">
              <span style="display: inline-block;width: 150px">澳大利亚</span>
              <span class="ziti">{{giotce.AUS}}</span>
            </div>
          </div>
        </div>
        <!--沸腾满载度指数-->
        <div style="width: 330px;float: right;margin-top: 20px">
          <div style="height: 48px;line-height: 48px;text-align: left;font-size: 18px">沸腾满载度指数</div>
          <div id="man" style="height: 200px;background: #ffffff;border-radius: 6px">
          </div>
        </div>
      </div>

    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      gongji: {
        pb: '',
        nm: '',
        mike: '',
        bx: '',
        jb: '',
        ka: ''
      },
      supply: {
        supply1: this.$t('indexTip.supply1'),
        supply2: this.$t('indexTip.supply2'),
        supply3: this.$t('indexTip.supply3'),
        supply4: this.$t('indexTip.supply4'),
        supply5: this.$t('indexTip.supply5'),
        supply6: this.$t('indexTip.supply6'),
        supply7: this.$t('indexTip.supply7'),
        supply8: this.$t('indexTip.supply8')
      },
      giotce: {
        AUS: '',
        BRA: ''
      }
    }
  },
  mounted () {
    this.reqGIOISData()
    this.reqGIOTCEData()
    this.reqGIOLLData()
  },
  methods: {
    // 供给指数
    reqGIOISData () {
      var me = this
      let data = {}
      window.GO_UTIL.ajax('get', 'http://192.168.129.209:3000/iron/index/products/import', data, (err, result) => {
        if (!err && !result.error) {
          console.log('gongjiindex', result.data)
          this.gongji.pb = parseFloat(result.data['皮尔巴拉混合粉'].indice).toFixed(1)
          this.gongji.nm = parseFloat(result.data['纽曼粉'].indice).toFixed(1)
          this.gongji.mike = parseFloat(result.data['麦克粉'].indice).toFixed(1)
          this.gongji.bx = parseFloat(result.data['巴西南部粉'].indice).toFixed(1)
          this.gongji.jb = parseFloat(result.data['金布巴粉'].indice).toFixed(1)
          this.gongji.ka = parseFloat(result.data['SFCJ粉'].indice).toFixed(1)
        } else {
          console.log('shujucuowu')
        }
      })
    },
    // 敞口指数
    reqGIOTCEData () {
      var me = this
      let data = {}
      window.GO_UTIL.ajax('get', 'http://192.168.129.209:3000/iron/bci/yunli', data, (err, result) => {
        if (!err && !result.error) {
          console.log('giotce',result.data)
          me.giotce = {
            AUS: result.data['AUS'].yunli,
            BRA: result.data['BRA'].yunli
          }
        }
      })
    },
    // 满载度指数
    reqGIOLLData () {
      let me = this
      let data = {}
      window.GO_UTIL.ajax('get', '/iron/index/shipping/empty/ratio', data, (err, result) => {
        if (!err && !result.error) {
          console.log('manzai',result.data)
          this.drawPie(result.data)
        }
      })
    },
    // 满载图
    drawPie (data) {
      var me = this
      var mandata1 = parseFloat(data.ratio).toFixed(2)
      var mandata2 = parseFloat(100 - mandata1).toFixed(2)
      var myChart = me.$echarts.init(document.getElementById('man'))
      var option = {
        series: [
          {
            type: 'pie',
            radius: ['65%', '70%'],
            silent: true,
            avoidLabelOverlap: false,
            color: ['#6dda9b', '#e6e6e6'],
            label: {
              show: true,
              position: 'center',
              fontWeight: 'bold',
              fontSize: 32,
              color: '#6dda9b',
              formatter: function (params){
                console.log('params',params)
                return mandata1
              }
            },
            data: [
              {value: mandata1},
              {value: mandata2}
            ]
          }
        ]
      }
      myChart.setOption(option)
    },
    // 点击查看完整指数解释
    clicktip () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  @font-face {
    font-family: myfont;
    src: url('./../../../fonts/6PX2BUS.ttf');
  }
  .listyle{width: 186px;height: 100px;line-height:100px;display: inline-block;padding: 10px;background: #ffffff;border-radius: 6px;box-shadow: 1px 1px 1px #eceefd;margin-right: 10px}
  .listyle div{
    display: inline-block;width: 80px;height: 80px;line-height:80px;overflow: hidden;
  }
  .productname{font-size: 16px;color: #999999}
  .prostyle{border-radius:6px;font-size: 30px;font-family: myfont;color: #ffffff}
  .ziti{font-size: 30px;font-family: myfont;color: #666666}
  .tedian{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    background: #409EFF;
    transform: rotate(45deg);
    -ms-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
  }
  .te{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 3px;
    border: 1px solid #409EFF;
    transform: rotate(45deg);
    -ms-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    -webkit-transform:rotate(45deg);
    -o-transform:rotate(45deg);
  }
  .tipbtn{
    width: 500px;
    background: #409EFF;
    color: white;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-left: -13px;
    margin-top: 10px;
    margin-bottom: -12px;
  }
</style>
