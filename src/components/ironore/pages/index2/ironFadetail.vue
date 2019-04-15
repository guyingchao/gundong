<!--Created by win10 on 2018/10/9.-->
<template>
    <div style="width: 100%;text-align: left;margin: auto;margin-top: 30px;">
      <div style="margin-bottom: 20px;font-size: 18px;color: #666666;">{{$t('ironfa.irodetail')}}</div>
      <div style="width: 100%;height: 597px;padding-top: 25px;background: #ffffff;border-radius: 6px">
        <!--巴西 澳大利亚-->
        <div class="tubk">
          <div style="float: left;width: 432px;">
            <div class="zi-name" style="margin-bottom: 10px;">{{$t('ironfa.baxi')}}</div>
            <div style="height: 80px;line-height: 40px;cursor: pointer;" @click="handleproduct('BRA')">
              <div class="kuai">
                <div class="zi-ton">
                  <span style="font-family: myfont;font-size: 30px">{{baxi.past14}}</span>
                  {{$t('ironfa.danwei')}}
                </div>
                <div class="zi-name">{{$t('ironfa.past14')}}</div>
              </div>
              <div class="kuai">
                <div class="zi-ton">
                  <span style="font-family: myfont;font-size: 30px">{{baxi.past7}}</span>
                  {{$t('ironfa.danwei')}}
                </div>
                <div class="zi-name">{{$t('ironfa.past7')}}</div>
              </div>
            </div>
          </div>
          <div style="float: left">
            <div class="zi-name" style="margin-bottom: 10px;">{{$t('ironfa.aoda')}}</div>
            <div style="height: 80px;line-height: 40px;cursor: pointer;" @click="handleproduct('AUS')">
              <div class="kuai">
                <div class="zi-ton">
                  <span style="font-family: myfont;font-size: 30px;">{{ao.past14}}</span>
                  {{$t('ironfa.danwei')}}
                </div>
                <div class="zi-name">{{$t('ironfa.past14')}}</div>
              </div>
              <div class="kuai">
                <div class="zi-ton">
                  <span style="font-size: 30px;font-family: myfont;">{{ao.past7}}</span>
                  {{$t('ironfa.danwei')}}
                </div>
                <div class="zi-name">{{$t('ironfa.past7')}}</div>
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
        <!--产品 港口-->
        <div style="width: 780px;margin: auto;margin-top: 20px;">
          <!--产品-->
          <div style="float: left;width: 380px;height: 350px;border: 1px solid #ebeef5;overflow: hidden;" class="product-tb">
            <!--<div class="tb-title">
              <div style="display: inline-block;width: 60px;">产品</div>
              <div style="display: inline-block;width: 95px;">过去7天发货</div>
              <div style="display: inline-block;width: 105px;">过去14天发货</div>
              <div style="display: inline-block;width: 40px;">涨跌</div>
            </div>
            <div class="tb-content">
              <div v-for="(item, index) in product" class="li-style" @click="productkuang">
                <span style="display:inline-block;width: 60px">{{item.name}}</span>
                <span style="display:inline-block;width: 95px">{{item.past}}</span>
                <span style="display: inline-block;width: 105px;">{{item.pastlong}}</span>
                <span style="display: inline-block;width: 40px" :style="{color:item.color}">{{item.zd}}</span>
                <i class="iconfont icon-qiangdu"></i>
              </div>
            </div>-->
            <el-table :data="productData" highlight-current-row max-height="350" :empty-text="productdes">
              <el-table-column prop="product" :label="$t('ironfa.product')" width="70" align="center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span>{{scope.row.product}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="past14" :label="$t('ironfa.past14')" width="100" align="center">
              </el-table-column>
              <el-table-column prop="past7" :label="$t('ironfa.past7')" width="91" align="center">
              </el-table-column>
              <el-table-column prop="zd" :label="$t('ironfa.zd')" width="60" align="center">
                <template scope="scope">
                  <span v-if="scope.row.zd < 0" style="color:#51e111">{{ scope.row.zd }}%</span>
                  <span v-else-if="scope.row.zd > 0" style="color: #ff3a3a ">+{{ scope.row.zd }}%</span>
                  <span v-else>{{ scope.row.zd }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="qushi" :label="$t('ironfa.qu')" width="57" align="center">
                <template slot-scope="scope">
                  <i style="cursor: pointer;color: #409eff;font-size: 18px;" class="iconfont icon-qiangdu" @click=handleproduct(scope.row)></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!--港口-->
          <div style="float: right;width: 380px;height: 350px;border: 1px solid #ebeef5;overflow: hidden" class="port-tb">
            <!--<div class="tb-title">
              <div style="display: inline-block;width: 60px;">港口</div>
              <div style="display: inline-block;width: 95px;">过去7天发货</div>
              <div style="display: inline-block;width: 105px;">过去14天发货</div>
              <div style="display: inline-block;width: 40px;">涨跌</div>
            </div>
            <div class="tb-content">
              <div v-for="(item, index) in port" class="li-style" @click="portkuang">
                <span style="display:inline-block;width: 60px">{{item.name}}</span>
                <span style="display:inline-block;width: 95px">{{item.past}}</span>
                <span style="display: inline-block;width: 105px;">{{item.pastlong}}</span>
                <span style="display: inline-block;width: 40px">{{item.zd}}</span>
                <i class="iconfont icon-qiangdu"></i>
              </div>
            </div>-->
            <el-table :data="portData" highlight-current-row max-height="350" :empty-text="portdes">
              <el-table-column prop="port" :label="$t('ironfa.port')" width="70" align="center" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span>{{$t('port.' + scope.row.portid)}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="past14" :label="$t('ironfa.past14')" width="100" align="center">
              </el-table-column>
              <el-table-column prop="past7" :label="$t('ironfa.past7')" width="91" align="center">
              </el-table-column>
              <el-table-column prop="zd" :label="$t('ironfa.zd')" width="60" align="center">
                <template scope="scope">
                  <span v-if="scope.row.zd < 0" style="color:#51e111">{{ scope.row.zd }}%</span>
                  <span v-else-if="scope.row.zd > 0" style="color: #ff3a3a ">+{{ scope.row.zd }}%</span>
                  <span v-else>{{ scope.row.zd }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="qushi" :label="$t('ironfa.qu')" width="57" align="center">
                <template slot-scope="scope">
                  <i style="cursor: pointer;color: #409eff;font-size: 18px;" class="iconfont icon-qiangdu" @click=handleproduct(scope.row,scope.row.portid)></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <productdialog></productdialog>
    </div>
</template>

<script type="text/ecmascript-6">
import productdialog from './productdialog.vue'
export default {
  components: {productdialog},
  data () {
    return {
      productdes: this.$t('ironfa.load'),
      portdes: this.$t('ironfa.load'),
      productData: [
        /*{product:'pbfen',past7:200,past14:210,zd:-5},
        {product:'pbfen',past7:200,past14:210,zd:5},
        {product:'pbfen',past7:200,past14:210,zd:5}*/
      ],
      portData: [
        /*{portid: '40437',port:'青岛',past7:200,past14:210,zd:5},
        {portid: '40438',port:'青岛',past7:200,past14:210,zd:-5},
        {portid: '40439',port:'青岛',past7:200,past14:210,zd:5}*/
      ],
      baxi: {
        past7: 200,
        past14: 210
      },
      ao: {
        past7: 200,
        past14: 210
      }
    }
  },
  mounted () {
    this.reqData()
  },
  methods:{
    //国家 产品 港口弹框
    handleproduct (param1) {
      // console.log(param1)
      let type = ''
      let name = ''
      if(param1 === 'BRA'){
        type = 'country'
        name = 'BRA'
      }else if (param1 === 'AUS'){
        type = 'country'
        name = 'AUS'
      } else if(param1.product){
        type = 'product'
        name = param1.product
      }else{
        type = 'port_id'
        name = param1.portid
      }
      this.$root.GOEVENT.$emit('PRODUCT_DIALOG',{type:type,name: name})
    },
    // 请求数据
    reqData () {
      var me = this
      let data = {}
      window.GO_UTIL.ajax('get', '/get/export/detail', data, (err, result) => {
        if (!err && !result.error) {
          // console.log(':::::a',result.data)
          let country = result.data.country
          let productdata = result.data.product
          if(!productdata.length){
             me.productdes = this.$t('ironfa.nodata')
          }
          let portdata = result.data.port
          if(!portdata.length){
            me.portdes = this.$t('ironfa.nodata')
          }
          let productarr = []
          let portarr = []
          // 国家
          for(let i = 0; i < country.length; i++){
              let item = country[i]
            if(item.ISO3 === 'AUS'){
              me.ao.past7 = Math.round(item.last_7_day_ton / 10000)
              me.ao.past14 = Math.round(item.last_14_day_ton / 10000)
            }else{
              me.baxi.past7 = Math.round(item.last_7_day_ton / 10000)
              me.baxi.past14 = Math.round(item.last_14_day_ton / 10000)
            }
          }
          // 产品
          for(let i = 0; i < productdata.length; i++){
            let item = productdata[i]
            let obj = {}
            obj.product = item.product_type
            obj.past7 = Math.round(item.last_7_day_ton / 10000)
            obj.past14 = Math.round(item.last_14_day_ton / 10000)
            if(item.last_14_day_ton - item.last_7_day_ton === 0){
              obj.zd = '--'
            }else{
              obj.zd = parseFloat((item.last_7_day_ton - (item.last_14_day_ton - item.last_7_day_ton))/ (item.last_14_day_ton - item.last_7_day_ton) * 100).toFixed(1)
            }
            productarr.push(obj)
          }
          me.productData = productarr
          //港口
          for(let i = 0; i < portdata.length; i++){
            let item = portdata[i]
            let obj = {}
            obj.portid = item.port_id
            obj.port = me.$t('port.' + item.port_id)
            obj.past7 = Math.round(item.last_7_day_ton /10000)
            obj.past14 = Math.round(item.last_14_day_ton /10000)
            if(item.last_14_day_ton - item.last_7_day_ton === 0){
                obj.zd = '--'
            }else{
              obj.zd = parseFloat((item.last_7_day_ton - (item.last_14_day_ton - item.last_7_day_ton))/ (item.last_14_day_ton - item.last_7_day_ton) * 100).toFixed(1)
            }
            portarr.push(obj)
          }
          me.portData = portarr
        }
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.tubk{border-radius: 6px;width: 780px;margin: auto;padding: 10px 10px 5px;color: #ffffff;
background: url("../../../../assets/tu2.png") center no-repeat;}
.kuai{
  display: inline-block;
  width: 150px;
  text-align: center;
}
  .zi-name{font-size: 14px;}
  .zi-ton{font-size: 14px;}
  .li-style{height: 40px;
    line-height: 40px;
    cursor: pointer;padding: 0 5px;
  }
  .li-style:hover{background: rgb(236,245,230)}
  .tb-title{height: 40px;line-height: 40px;padding: 0 5px;}
</style>
<style>
  /*.product-tb thead tr{
    background-image: none!important;
    color: #606266!important;
  }*/
  .product-tb .el-table .cell, .el-table th div{
    padding-right: 0px;
    padding-left: 0px;
  }
  .product-tb .el-table--scrollable-y .el-table__body-wrapper{
    overflow-y: scroll;
  }
  .product-tb .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
    display: none;
  }
  .product-tb,.port-tb .el-table{
    font-size: 13px;
  }
  /*.port-tb thead tr{
    background-image: none!important;
    color: #606266!important;
  }*/
  .port-tb .el-table .cell, .el-table th div{
    padding-right: 0px;
    padding-left: 0px;
  }
  .port-tb .el-table--scrollable-y .el-table__body-wrapper{
    overflow-y: scroll;
  }
  .port-tb .el-table--scrollable-y .el-table__body-wrapper::-webkit-scrollbar {
    display: none;
  }
</style>
