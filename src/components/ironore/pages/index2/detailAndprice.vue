<!--Created by win10 on 2018/10/11.-->
<template>
    <div style="width: 100%">
      <div class="title-des">各品种进口详情及现货价格</div>
      <div style="width: 100%;height: 620px;background: #ffffff;border-radius: 6px;text-align: center">
        <!--选择框（两种方法）-->
        <div style="height: 60px;line-height: 59px;border-bottom: 1px solid #cccccc">
          <div class="selectpro" :class="{activeClass: iscur == index}" :style="{width:wid+'%'}" style="display: inline-block;" v-for="(item, index) in products" :key="index"
          @click="setCur(index,item)">{{item}}</div>
        </div>
        <!--<div style="height: 60px;line-height: 59px;border-bottom: 1px solid #cccccc">
          <div class="selectpro" :id="'pro-'+index" :style="{width:wid+'%'}" style="display: inline-block;" v-for="(item, index) in products" :key="index"
               @click="setCur(index,item)">{{item}}</div>
        </div>-->
        <!--内容-->
        <div style="padding: 20px;">
          <!--全国-->
          <div style="margin-bottom: 20px;">
            <div class="addbk">
              <!--全国进口-->
              <div class="two-kuang" style="float: left;">
                <div style="height: 48px;">
                  <span>全国到港</span>
                  <i class="iconfont icon-qiangdu" style="float: right;"></i>
                </div>
                <div>
                  <div class="kuai">
                    <span class="zi-style">{{partobj.impast}}</span>
                    <span>万吨</span>
                    <div class="kuai-bot">过去14天进口</div>
                  </div>
                  <div class="kuai">
                    <span class="zi-style">{{partobj.imfut}}</span>
                    <span>万吨</span>
                    <div class="kuai-bot">未来14天进口</div>
                  </div>
                  <div style="float: right;margin-right: 10px;" :style="{color: partobj.imcolor}">
                    <div style="margin-bottom: 10px;">{{partobj.imzdton}}</div>
                    <div>{{partobj.imzd}}</div>
                  </div>
                </div>
              </div>
              <!--全国现货价格-->
              <div class="two-kuang" style="float: right;">
                <div style="height: 48px;">
                  <span>全国现货价格</span>
                  <i class="iconfont icon-qiangdu" style="float: right;"></i>
                </div>
                <div>
                  <div class="kuai">
                    <span class="zi-style">{{partobj.llprice}}</span>
                    <span>元/吨</span>
                    <div class="kuai-bot">前日价格</div>
                  </div>
                  <div class="kuai">
                    <span class="zi-style">{{partobj.lprice}}</span>
                    <span>元/吨</span>
                    <div class="kuai-bot">昨日价格</div>
                  </div>
                  <div style="float: right;margin-right: 10px;" :style="{color: partobj.pricecolor}">
                    <div style="margin-bottom: 10px;">{{partobj.zdyuan}}</div>
                    <div>{{partobj.pricezd}}</div>
                  </div>
                </div>
              </div>
              <div style="clear: both;"></div>
            </div>
          </div>
          <!--表格-->
          <div class="select-tb" style="border: 1px solid rgb(235, 238, 245);height: 350px;">
            <el-table :data="Data" highlight-current-row max-height="350" :empty-text="portdes">
              <el-table-column prop="portregion" label="港口/区域" width="100" align="center" show-overflow-tooltip>
                <template scope="scope">
                  <span style="color: #409eff;text-decoration: underline">{{scope.row.portregion}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="past" label="过去到港" width="100" align="center">
              </el-table-column>
              <el-table-column prop="fut" label="未来到港" width="100" align="center">
              </el-table-column>
              <el-table-column prop="daozd" :label="$t('ironfa.zd')" width="80" align="center">
                <template scope="scope">
                  <span v-if="scope.row.daozd < 0" style="color:#51e111">{{ scope.row.daozd }}%</span>
                  <span v-else-if="scope.row.daozd > 0" style="color: #ff3a3a">+{{ scope.row.daozd }}%</span>
                  <span v-else>{{ scope.row.daozd }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="" label="" width="48" align="center">
              </el-table-column>
              <el-table-column prop="llprice" label="前日价格" width="95" align="center">
              </el-table-column>
              <el-table-column prop="lprice" label="昨日价格" width="95" align="center">
              </el-table-column>
              <el-table-column prop="pricezd" :label="$t('ironfa.zd')" width="80" align="center">
                <template scope="scope">
                  <span v-if="scope.row.pricezd < 0" style="color:#51e111">{{ scope.row.pricezd }}%</span>
                  <span v-else-if="scope.row.pricezd >= 0" style="color: #ff3a3a">+{{ scope.row.pricezd }}%</span>
                  <span v-else>{{ scope.row.pricezd }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="qushi" :label="$t('ironfa.qu')" width="80" align="center">
                <template slot-scope="scope">
                  <i style="cursor: pointer;color: #409eff;font-size: 18px;" class="iconfont icon-qiangdu" @click=handleproduct(scope.row,scope.row.portid)></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      portdes: 'loading',
      iscur: 0,
      wid: '',
      resultData: [],
      originData: {},
      products: [
        /*{name: 'FMG粉'},
        {name: '卡拉加斯粉'},
        {name: '纽曼粉'},
        {name: 'PB粉'},
        {name: '金布巴粉'},
        {name: '巴西南部'}*/
      ],
      Data: [
        /*{portid: '40437',portregion:'青岛',past:200,fut:210,daozd:5,llprice:405,lprice:405,pricezd:6},
        {portid: '40437',portregion:'青岛',past:200,fut:210,daozd:5,llprice:405,lprice:405,pricezd:6},
        {portid: '40437',portregion:'青岛',past:200,fut:210,daozd:5,llprice:405,lprice:405,pricezd:6}*/
      ],
      partobj: {
        impast: '',
        imfut: '',
        imzdton: '',
        imzd: '',
        llprice: '',
        lprice: '',
        zdyuan: '',
        pricezd: ''
      }
    }
  },
  mounted () {
    this.reqData()
  },
  methods: {
    // 获取数据
    reqData () {
      var me = this
      let data = {}
      window.GO_UTIL.ajax('get', '/get/import/detail', data, (err, result) => {
        if (!err && !result.error) {
          console.log('reqdata:::', result.data)
          me.resultData = result.data
          me.handelData()
        }
      })
    },
    // 处理数据
    handelData () {
      this.originData = {}
      for (let i = 0; i < this.resultData.length; i++) {
        let item = this.resultData[i]
        let product = item.product
        let region = item.region
        if (product in this.originData) {
          if (region === '全国') {
            this.originData[product].all.impast = item.last_recent_ton ? Math.round(item.last_recent_ton / 10000) : '--'
            this.originData[product].all.imfut = item.next_recent_ton? Math.round(item.next_recent_ton / 10000) : '--'
            if(item.last_recent_ton === item.next_recent_ton){
              this.originData[product].all.imzdton = '--'
              this.originData[product].all.imzd = '--'
              this.originData[product].all.imcolor = '#ffffff'
            } else {
              let imcha = ((item.next_recent_ton - item.last_recent_ton)/10000).toFixed(0)
              let imbi = item.last_recent_ton !=0? (((item.next_recent_ton - item.last_recent_ton)/item.last_recent_ton)*100).toFixed(1) : '--'
              this.originData[product].all.imzdton = imcha>0? ('+'+imcha+'万吨'):(imcha+'万吨')
              this.originData[product].all.imzd = imbi>0? ('+'+imbi+'%'):(imbi+'%')
              this.originData[product].all.imcolor = imcha>0? '#ff3a3a':'#51e111'
            }
            this.originData[product].all.llprice = item.price_before_yesterday? Math.round(item.price_before_yesterday):'--'
            this.originData[product].all.lprice = item.price_yesterday? Math.round(item.price_yesterday): '--'
            // 现货价格处理
            if(!item.price_before_yesterday||!item.price_yesterday||item.price_yesterday==item.price_before_yesterday){
              this.originData[product].all.zdyuan = '--'
              this.originData[product].all.pricezd = '--'
              this.originData[product].all.pricecolor = '#ffffff'
            }else{
              let pricecha = item.price_yesterday - item.price_before_yesterday
              let pricebi = item.price_before_yesterday!=0? (((item.price_yesterday - item.price_before_yesterday)/item.price_before_yesterday)*100).toFixed(1) : '--'
              this.originData[product].all.zdyuan = pricecha > 0? ('+'+pricecha+'元'):(pricecha+'元')
              this.originData[product].all.pricezd = pricebi > 0? ('+' + pricebi + '%'):(pricebi+'%')
              this.originData[product].all.pricecolor = pricecha > 0 ? '#ff3a3a':'#51e111'
            }
          } else {
            let portid = region
            let past = item.last_recent_ton ? Math.round(item.last_recent_ton / 10000) : '--'
            let fut = item.next_recent_ton? Math.round(item.next_recent_ton / 10000) : '--'
            let daozd = item.last_recent_ton&&item.next_recent_ton&&(item.last_recent_ton!==0)&&(item.next_recent_ton!=item.last_recent_ton)? parseFloat(100*(item.next_recent_ton-item.last_recent_ton)/item.last_recent_ton).toFixed(1):'--'
            let llprice = item.price_before_yesterday? Math.round(item.price_before_yesterday):'--'
            let lprice = item.price_yesterday? Math.round(item.price_yesterday): '--'
            let pricezd = item.price_before_yesterday&&item.price_yesterday&&(item.price_before_yesterday!==0)&&(item.price_yesterday!=item.price_before_yesterday)?parseFloat(100*(item.price_yesterday-item.price_before_yesterday)/item.price_before_yesterday).toFixed(1):'--'

            this.originData[product].details.push({
              "portid": portid,
              "portregion": this.$t('port.'+ portid),
              "past": past,
              "fut": fut,
              "daozd": daozd,
              "llprice": llprice,
              "lprice": lprice,
              "pricezd": pricezd
            })
          }
        } else {
        // 初始化数据格式
          this.originData[product] = {
            all: {},
            details: []
          }
          if (region === '全国') {
            this.originData[product].all.impast = item.last_recent_ton ? Math.round(item.last_recent_ton / 10000) : '--'
            this.originData[product].all.imfut = item.next_recent_ton? Math.round(item.next_recent_ton / 10000) : '--'
            if(item.last_recent_ton === item.next_recent_ton){
              this.originData[product].all.imzdton = '--'
              this.originData[product].all.imzd = '--'
              this.originData[product].all.imcolor = '#ffffff'
            } else {
              let imcha = ((item.next_recent_ton - item.last_recent_ton)/10000).toFixed(0)
              let imbi = item.last_recent_ton !=0? (((item.next_recent_ton - item.last_recent_ton)/item.last_recent_ton)*100).toFixed(1) : '--'
              this.originData[product].all.imzdton = imcha>0? ('+'+imcha+'万吨'):(imcha+'万吨')
              this.originData[product].all.imzd = imbi>0? ('+'+imbi+'%'):(imbi+'%')
              this.originData[product].all.imcolor = imcha>0? '#ff3a3a':'#51e111'
            }
            this.originData[product].all.llprice = item.price_before_yesterday? Math.round(item.price_before_yesterday):'--'
            this.originData[product].all.lprice = item.price_yesterday? Math.round(item.price_yesterday): '--'
            // 现货价格处理
            if(!item.price_before_yesterday||!item.price_yesterday||item.price_yesterday==item.price_before_yesterday){
              this.originData[product].all.zdyuan = '--'
              this.originData[product].all.pricezd = '--'
              this.originData[product].all.pricecolor = '#ffffff'
            }else{
              let pricecha = item.price_yesterday - item.price_before_yesterday
              let pricebi = item.price_before_yesterday!=0? (((item.price_yesterday - item.price_before_yesterday)/item.price_before_yesterday)*100).toFixed(1) : '--'
              this.originData[product].all.zdyuan = pricecha > 0? ('+'+pricecha+'元'):(pricecha+'元')
              this.originData[product].all.pricezd = pricebi > 0? ('+' + pricebi + '%'):(pricebi+'%')
              this.originData[product].all.pricecolor = pricecha > 0 ? '#ff3a3a':'#51e111'
            }
          } else {
            let portid = region
            let past = item.last_recent_ton ? Math.round(item.last_recent_ton / 10000) : '--'
            let fut = item.next_recent_ton? Math.round(item.next_recent_ton / 10000) : '--'
            let daozd = item.last_recent_ton&&item.next_recent_ton&&(item.last_recent_ton!==0)&&(item.last_recent_ton!=item.next_recent_ton)? parseFloat(100*(item.next_recent_ton-item.last_recent_ton)/item.last_recent_ton).toFixed(1):'--'
            let llprice = item.price_before_yesterday? Math.round(item.price_before_yesterday):'--'
            let lprice = item.price_yesterday? Math.round(item.price_yesterday): '--'
            let pricezd = item.price_before_yesterday&&item.price_yesterday&&(item.price_before_yesterday!==0)&&(item.price_before_yesterday!=item.price_yesterday)?parseFloat(100*(item.price_yesterday-item.price_before_yesterday)/item.price_before_yesterday).toFixed(1):'--'
            this.originData[product].details.push({
              "portid": portid,
              "portregion": this.$t('port.'+ portid),
              "past": past,
              "fut": fut,
              "daozd": daozd,
              "llprice": llprice,
              "lprice": lprice,
              "pricezd": pricezd
            })
          }
        }
      }

      console.log('this.originData',this.originData)

      for (let key in this.originData) {
        this.products.push(key)
      }
      let length = this.products.length
      this.wid = 1/length*100
      this.partobj = this.originData[this.products[0]].all
      this.Data = this.originData[this.products[0]].details
    },
    // 点击产品选择事件(两种方法)
    /*setCur (index, name) {
      console.log('index', index, name)
      for (let i = 0; i < this.products.length; i++) {
        document.getElementById('pro-' + i).style.borderBottom = '0'
        document.getElementById('pro-' + i).style.color = '#666666'
        document.getElementById('pro-' + i).style.background = '#FFFFFF'
        document.getElementById('pro-' + i).style.fontWeight = 'normal'
      }
      document.getElementById('pro-' + index).style.borderBottom = '2px solid #409eff'
      document.getElementById('pro-' + index).style.color = '#409eff'
      document.getElementById('pro-' + index).style.background = 'rgb(231,243,255)'
      document.getElementById('pro-' + index).style.fontWeight = 'bold'
      this.partobj = this.originData[name].all
      this.Data = this.originData[name].details
    }*/
    setCur (index, name) {
      console.log('index', index, name)
      this.iscur = index
      this.partobj = this.originData[name].all
      this.Data = this.originData[name].details
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.addbk{background: url("../../../../assets/tu1.png") center no-repeat;height: 140px;border-radius: 6px;}
.kuai{width: 135px;display: inline-block;text-align: center}
.kuai-bot{padding-top: 20px;}
.two-kuang{padding: 10px;text-align: left;font-size: 14px;width: 380px;height: 140px;color: #ffffff;border-radius: 6px;}
.zi-style{font-size: 30px;font-family: myfont;}
.title-des{margin-bottom: 20px;font-size: 18px;}
.selectpro:first-child{border-top-left-radius: 6px;}
.selectpro:last-child{border-top-right-radius: 6px;}
.activeClass{border-bottom: 2px solid #409eff;color: #409eff;background: rgb(231,243,255);font-weight: bold;}
#pro-0{border-bottom: 2px solid #409eff;color: #409eff;background: rgb(231,243,255);font-weight: bold;}
</style>
<style>
  .select-tb .el-table{
    font-size: 13px;
  }
  .select-tb .el-table--scrollable-y .el-table__body-wrapper{
    overflow-y: scroll;
  }
  .select-tb .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
    display: none;
  }
</style>
