<!--Created by win10 on 2018/7/16.-->rgb(153, 100, 227)
<template>
    <div style="background: rgb(245,246,248);min-width: 1200px;">
      <div style="width: 1200px;min-width: 1200px;margin: auto;text-align: left;">
        <div style="margin-bottom: 20px;">
          <span style="font-size: 18px">沸腾供给指数</span>
          <i style="font-size: 18px;color: #409eff;" class="iconfont icon-iconfontquestion"></i>
          <div style="float: right;cursor: pointer;" @click="updown">
            <div style="color: #409eff;margin-left: 20px;margin-right: 3px;display: inline-block;">{{showtext}}</div>
            <i style="color: #409eff;font-size: 14px;margin-top: 8px;display: inline-block" :class="{iconfont:true, 'icon-shouqi': upshang, 'icon-arrow-down': down}"></i>
          </div>
          <div style="float: right;cursor: pointer;height: 30px;line-height: 30px;border-radius: 6px;border: 1px solid;">
            <div class="lstyle" :style="{background:lbk, color: lcolor}" @click="regionportclick('region')">区域</div>
            <div class="rstyle" :style="{background:rbk, color: rcolor}" @click="regionportclick('port')">港口</div>
          </div>
        </div>
        <div class="fenkuang" v-for="(item, index) in fenarray" :key="index" :id="index" :style="{background: item.bkcolor}">
          <div style="">{{item.fenname}}</div>
          <div style="height: 30px;text-align: right;font-size: 13px;padding-right: 5px;">
            <div style="display: inline-block;">
              <i class="pastcircle"></i>过去14天
            </div>
            <div style="display: inline-block;">
              <i class="futcircle"></i>未来14天</div>
          </div>
          <div class="kuang-content" style="padding-right: 20px">
            <div style="margin: 20px 0;height: 30px;line-height: 30px;" v-for="options in item.quportname">
              <div style="float:left;font-size: 18px;width: 78px;">{{options.quportname}}</div>
              <div class="number" style="float:left;font-size: 28px;width: 70px;text-align: center">{{options.index}}</div>
              <div style="margin-top: -6px;float: left">
                <div style="line-height: 15px;">
                  <div class="line-top">
                    <div class="tian-top" :style="{width: options.pastwidth}"></div>
                  </div>
                  <div style="display: inline-block;font-size: 10px;">{{options.pasttons}}万</div>
                </div>
                <div style="line-height: 15px;">
                  <div class="line-top">
                    <div class="tian-bot" :style="{width: options.futwidth}"></div>
                  </div>
                  <div style="display: inline-block;font-size: 10px;">{{options.futtons}}万</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="clear: both"></div>
      </div>
      <!--自定义供给指数-->
      <div style="width: 1200px;margin: auto;font-size: 18px;">
        <div style="text-align: left;margin-bottom: 15px;">自定义供给指数</div>
        <div class="kuang2">
          <div style="display: inline-block;width: 80%;margin-bottom: 10px;">PB粉+FMG</div>
          <el-popover placement="right" width="206" trigger="click" popper-class="tankuang">
            <div style="margin-bottom: 8px;">自定义选项</div>
            <el-checkbox-group v-model="checkList1">
              <el-checkbox label="PB粉"></el-checkbox>
              <el-checkbox label="纽曼"></el-checkbox>
              <el-checkbox label="FMG"></el-checkbox>
              <el-checkbox label="巴西南部"></el-checkbox>
              <el-checkbox label="金布巴"></el-checkbox>
              <el-checkbox label="卡粉"></el-checkbox>
            </el-checkbox-group>
            <div style="margin-top: 8px;">
              <el-button type="primary">确定</el-button>
            </div>
            <i slot="reference" style="display: inline-block;cursor: pointer;" class="iconfont icon-bianji"></i>
          </el-popover>
          <i style="float:right;padding-right: 5px;font-size: 24px;" class="iconfont icon-guanbi"></i>
          <div style="height: 30px;text-align: right;font-size: 13px;padding-right: 5px;">
            <div style="display: inline-block;">
              <i class="pastcircle"></i>过去14天
            </div>
            <div style="display: inline-block;">
              <i class="futcircle"></i>未来14天</div>
          </div>
          <el-scrollbar wrap-class="list" view-class="view-box" :native="false">
            <div v-for="(item, index) in ziDataarr" :key="index" style="padding: 10px 0">
              <div style="display: inline-block;font-size: 18px;width: 78px;">{{item.quportname}}</div>
              <div class="number" style="display: inline-block;font-size: 28px;width: 70px;height: 63px;line-height: 63px;background:#409eff;color: #ffffff;-webkit-border-radius: 6px;-moz-border-radius: 6px;border-radius: 6px;text-align: center">{{item.index}}</div>
              <div style="display: inline-block;vertical-align: sub;">
                <div>
                  <div class="line-top2">
                    <div class="tian-top" :style="{width: item.pastwidth}"></div>
                  </div>
                  <div style="display: inline-block;font-size: 10px;">{{item.pasttons}}万</div>
                </div>
                <div style="margin-top: 7px">
                  <div class="line-top2">
                    <div class="tian-bot" :style="{width: item.futwidth}"></div>
                  </div>
                  <div style="display: inline-block;font-size: 10px;">{{item.futtons}}万</div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div class="kuang2" style="text-align: center;line-height: 430px;background: rgb(245,246,248);border: 1px dashed;">
          <el-popover placement="right" width="206" trigger="click" popper-class="tankuang">
            <div style="margin-bottom: 8px;">自定义选项</div>
            <el-checkbox-group v-model="checkList2" @change="addchange">
              <el-checkbox label="PB粉"></el-checkbox>
              <el-checkbox label="纽曼"></el-checkbox>
              <el-checkbox label="FMG"></el-checkbox>
              <el-checkbox label="巴西南部"></el-checkbox>
              <el-checkbox label="金布巴"></el-checkbox>
              <el-checkbox label="卡粉"></el-checkbox>
            </el-checkbox-group>
            <div style="margin-top: 8px;">
              <el-button type="primary" @click="determin2">确定</el-button>
            </div>
            <i slot="reference" style="font-size: 35px;cursor: pointer;" class="iconfont icon-hao"></i>
          </el-popover>
        </div>
        <div style="clear: both"></div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      checkList1: ['PB粉', 'FMG'],
      checkList2: [],
      showtext: '部分收起',
      upshang: true,
      down: false,
      max: 0,
      lbk: '#409eff',
      lcolor: '#fff',
      rbk: '#fff',
      rcolor: '#666',
      bkcolor: {
        'FMG': 'rgb(234, 149, 73)',
        '卡粉': 'rgb(255, 101, 89)',
        '巴西南部': 'rgb(255, 121, 149)',
        '皮尔巴拉': 'rgb(114, 151, 255)',
        '纽曼': 'rgb(109, 218, 153)',
        '金布巴': 'rgb(244, 209, 70)'
      },
      fenarray: [
        {
          fenname: 'PB粉',
          bkcolor: 'rgb(114, 151, 255)',
          quportname: {}
        },
        {
          fenname: '纽曼',
          bkcolor: 'rgb(109, 218, 153)',
          quportname: {}
        },
        {
          fenname: 'FMG',
          bkcolor: 'rgb(234, 149, 73)',
          quportname: {}
        },
        {
          fenname: '巴西南部',
          bkcolor: 'rgb(255, 121, 149)',
          quportname: {}
        },
        {
          fenname: '金布巴',
          bkcolor: 'rgb(244, 209, 70)',
          quportname: {}
        },
        {
          fenname: '卡粉',
          bkcolor: 'rgb(255, 101, 89)',
          quportname: {}
          /*quportname: [
            {type: 'ALL', quportname: '全国', index: '', pasttons: '', futtons: ''},
            {type: 'CHNNOR', quportname: '北方', index: '', pasttons: '', futtons: ''},
            {type: 'CHNSOU', quportname: '南方', index: '', pasttons: '', futtons: ''},
            {type: 'CHNCJR', quportname: '长江口岸', index: '', pasttons: '', futtons: ''}
          ]*/
        }
      ],
      ziDataarr: [
        {quportname: '全国', index: '28.5', pasttons: '', futtons: '', pastwidth: '50px', futwidth: ''},
        {quportname: '全国', index: '28.9', pasttons: '', futtons: '', pastwidth: '', futwidth: ''},
        {quportname: '全国', index: '28.5', pasttons: '', futtons: '', pastwidth: '', futwidth: ''},
        {quportname: '全国', index: '28.5', pasttons: '', futtons: '', pastwidth: '', futwidth: ''}
      ]
    }
  },
  mounted () {
    this.reqAreaData()
  },
  methods: {
    // 加号的改变
    addchange (e) {
      this.checkList2 = e
    },
    // 加号的确认
    determin2 () {
      console.log(this.checkList2)
    },
    // 隐藏和显示
    updown () {
      if (this.upshang) {
        this.upshang = false
        this.down = true
        this.showtext = '展开全部'
        document.getElementById('3').style.display = 'none'
        document.getElementById('4').style.display = 'none'
        document.getElementById('5').style.display = 'none'
      } else {
        this.upshang = true
        this.down = false
        this.showtext = '部分收起'
        document.getElementById('3').style.display = 'block'
        document.getElementById('4').style.display = 'block'
        document.getElementById('5').style.display = 'block'
      }
    },
    // click事件
    regionportclick (type) {
      if (type === 'region') {
        this.lbk = '#409eff'
        this.lcolor = '#fff'
        this.rbk = '#fff'
        this.rcolor = '#666'
        this.reqAreaData()
      } else {
        this.lbk = '#fff'
        this.lcolor = '#666'
        this.rbk = '#409eff'
        this.rcolor = '#fff'
        this.reqPortData()
      }
    },
    // 获取区域数据
    reqAreaData () {
      var me = this
      let data = {type: 'region'}
      window.GO_UTIL.ajax('get', '/iron/index/products/import/detail', data, (err, result) => {
        if (!err && !result.error) {
          console.log(result.data)
          let reqdata = result.data
          let maxlength = []
          // 找出最大长度
          for (var reqkey in reqdata) {
            for (let i = 0; i < reqdata[reqkey].length; i++) {
              let item = reqdata[reqkey][i]
              let region = item.region
              if (region === 'ALL') {
                maxlength.push(item.last_recent_ton, item.next_recent_ton)
              }
            }
          }
          maxlength.sort(function (a, b) {
            return b - a
          })
          me.max = maxlength[0]
          for (let i = 0; i < me.fenarray.length; i++) {
            let item = me.fenarray[i]
            let key = item.fenname
            if (key === 'PB粉') {
              key = '皮尔巴拉'
            }
            let fenarr = reqdata[key]
            let regionxu = {
              'ALL': {quportname: '全国', index: '', pasttons: '', futtons: '', pastwidth: '', futwidth: ''},
              'CHNNOR': {quportname: '北方', index: '', pasttons: '', futtons: '', pastwidth: '', futwidth: ''},
              'CHNSOU': {quportname: '南方', index: '', pasttons: '', futtons: '', pastwidth: '', futwidth: ''},
              'CHNCJR': {quportname: '长江口岸', index: '', pasttons: '', futtons: '', pastwidth: '', futwidth: ''}
            }
            for (let i = 0; i < fenarr.length; i++) {
              let fenitem = fenarr[i]
              let region = fenitem.region
              let indice = fenitem.indice
              let pastton = fenitem.last_recent_ton
              let futton = fenitem.next_recent_ton
              regionxu[region].pastwidth = (pastton * 148 / me.max) + 'px'
              regionxu[region].futwidth = (futton * 148 / me.max) + 'px'
              if (!isNaN(indice) && indice % 1 === 0) {
                regionxu[region].index = indice
              } else {
                regionxu[region].index = parseFloat(indice).toFixed(1)
              }
              regionxu[region].pasttons = Math.round(fenitem.last_recent_ton / 10000)
              regionxu[region].futtons = Math.round(fenitem.next_recent_ton / 10000)
            }
            for (var xukey in regionxu) {
              if (regionxu[xukey].pasttons === '' && regionxu[xukey].futtons === '') {
                delete regionxu[xukey]
              }
            }
            item.quportname = regionxu
          }
        }
      })
    },
    /*********** 获取港口数据 ***********/
    reqPortData () {
      var me = this
      let data = {type: 'port'}
      window.GO_UTIL.ajax('get', '/iron/index/products/import/detail', data, (err, result) => {
        if (!err && !result.error) {
          console.log('port', result.data)
          let portdata = result.data
          let maxlength = []
          let max = 0
          for (var portkey in portdata) {
            for (let i = 0; i < portdata[portkey].length; i++) {
              let item = portdata[portkey][i]
              maxlength.push(item.last_recent_ton, item.next_recent_ton)
            }
          }
          maxlength.sort(function (a, b) {
            return b - a
          })
          max = maxlength[0]
          for (let i = 0; i < me.fenarray.length; i++) {
            let item = me.fenarray[i]
            let key = item.fenname
            if (key === 'PB粉') {
              key = '皮尔巴拉'
            }
            let fenarr = portdata[key]
            let zongobj = {}
            for (let i = 0; i < fenarr.length; i++) {
              let portitem = fenarr[i]
              let indice = portitem.indice
              let obj = {}
              let pastton = portitem.last_recent_ton
              let futton = portitem.next_recent_ton
              obj['pastwidth'] = (pastton * 148 / max) + 'px'
              obj['futwidth'] = (futton * 148 / max) + 'px'
              obj['quportname'] = this.$t('port.' + portitem.port_id)
              if (!isNaN(indice) && indice % 1 === 0) {
                obj['index'] = indice
              } else {
                obj['index'] = parseFloat(indice).toFixed(1)
              }
              obj['pasttons'] = Math.round(portitem.last_recent_ton / 10000)
              obj['futtons'] = Math.round(portitem.next_recent_ton / 10000)
              zongobj[i] = obj
            }
            item.quportname = zongobj
          }
        }
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .lstyle{
    float: left;
    height: 100%;
    border-top-left-radius: 6px;
    /*background: #409eff;
    color: #fff;*/
    padding: 0 10px;
    border-bottom-left-radius: 6px;
    font-size: 14px;
  }
  .rstyle{
    float: right;
    height: 100%;
    border-top-right-radius: 6px;
    /*background: #ffffff;
    color: #666;*/
    padding: 0 10px;
    border-bottom-right-radius: 6px;
    font-size: 14px;
  }
  .pastcircle{display: inline-block;
    width: 8px;
    height: 8px;
    background: #3abf94;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .futcircle{
    display: inline-block;
    width: 8px;
    height: 8px;
    background: rgb(153, 100, 227);
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .number{
    font-family: myfont;
  }
  .line-top{
    width: 150px;
    height: 6px;
    background: #fff;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  .line-top2{
    width: 150px;
    height: 6px;
    background:rgb(204, 204, 204);
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  .tian-top{
    height: 4px;
    background: #3abf94;
    border-radius: 10px;
  }
  .tian-bot{
    height: 4px;
    background: rgb(153, 100, 227);
    border-radius: 10px;
  }
  .kuang-content{
    overflow-x: hidden;
    overflow-y: hidden;
    height: 250px;
  }
  .kuang-content:hover{
    overflow-y: scroll;
  }
  .kuang-content::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 6px;
  }
  .kuang-content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #666;
  }
  .kuang-content::-webkit-scrollbar-track {/*滚动条里面轨道*/
    /*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*/
    /*border-radius: 0;*/
  }
  .fenkuang{padding-left: 20px;padding-top: 15px;width: 32.5%;height: 310px;border-radius: 6px;color: #fff;overflow: hidden;
    float: left;
    margin-right: 15px;
    margin-bottom: 20px;
  }
  .fenkuang:nth-child(3n+1){
    float: right;
    margin-right: 0;
  }
  .kuang2{background:#ffffff;color:#666;padding-left: 20px;padding-top: 15px;width: 32.5%;height: 430px;border-radius: 6px;overflow: hidden;
    float: left;
    margin-right: 15px;
    margin-bottom: 20px;text-align: left;}
  /*.kuang2:nth-child(3n){
    float: right;
    margin-right: 0;
  }*/
</style>
<style>
  .kuang2 .list {max-height: 355px;}
  .tankuang .el-checkbox{width: 90px;}
  .tankuang .el-checkbox+.el-checkbox{margin-left: 0}
  .tankuang .el-button{padding: 4px 20px;width: 100%;}
</style>
