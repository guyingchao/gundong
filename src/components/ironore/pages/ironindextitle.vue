<!--Created by win10 on 2018/7/16.-->
<template>
  <div class="titleStyle clearfix">
    <div class="titleUl">
      <ul>
        <li v-for="(item, index) in liname" :id="'li' + index" :key="index" @click="handelselect(index)">
          {{item}}
          <i :id="'i' + index" class="san_you"></i>
        </li>
      </ul>
    </div>
    <div class="title-content">
      <div class="buju1" v-show="sumstyle">
        <div style="margin-bottom: 40px">
          <span class="imnum">{{leiname}}</span>
          <span class="imnum">{{sumcount}}万吨</span>
          <span class="imdate">2018/1/1-2018/5/28</span>
        </div>
        <div class="sumregion">
          <i class="el-icon-location-outline smalltu"></i>
          <!--北方港口-->
          <span>{{region1}}</span>
          <span style="float: right;font-weight: bold">{{north}}万吨</span>
        </div>
        <div class="sumregion">
          <i class="el-icon-location-outline smalltu"></i>
          <!--长江口岸港口-->
          <span>{{region2}}</span>
          <span style="float: right;font-weight: bold">{{changjiang}}万吨</span>
        </div>
        <div class="sumregion">
          <i class="el-icon-location-outline smalltu"></i>
          <!--南方港口-->
          <span>{{region3}}</span>
          <span style="float: right;font-weight: bold">{{south}}万吨</span>
        </div>
      </div>
      <div class="buju1" v-show="sumstyle2">
        <div style="margin-bottom: 40px">
          <span class="imnum">{{leiname}}</span>
          <span class="imnum">{{sumcount}}万吨</span>
          <span class="imdate">2018/1/1-2018/5/28</span>
        </div>
        <div v-for="(item, index) in exsumData" :key="index" class="sumregion">
          <i class="el-icon-location-outline smalltu"></i>
          <!--北方港口-->
          <span>{{$t('country.' + item.ISO3)}}</span>
          <span style="float: right;font-weight: bold">{{(item.ton / 10000).toFixed(2)}}万吨</span>
        </div>
      </div>
      <div class="buju2" v-show="fenstyle">
        <div style="margin-bottom: 79px">
          <div style="display: inline-block;margin-right: 50px;font-size: 22px;font-weight: bold">
            <span>{{leiname}}</span>
            <span>{{monthsum}}万吨</span>
          </div>
          <!--同比-->
          <div style="display: inline-block;font-size: 16px;margin-right: 20px">
            <span style="margin-right: 8px">同比：</span>
            <span :style="{background: activetongColor}" style="padding: 5px;">{{sumtong}}%</span>
          </div>
          <!--环比-->
          <div style="display: inline-block;font-size: 16px;margin-right: 30px">
            <span style="margin-right: 8px">环比：</span>
            <span :style="{background: activehuanColor}" style="padding: 5px;">{{sumhuan}}%</span>
          </div>
          <span style="font-size: 14px;color: #cccccc">2018/1/1-2018/5/28</span>
        </div>
        <!--北方港口-->
        <div class="region" style="margin-right:54px">
          <div style="margin-bottom: 32px">
            <div style="width: 156px;display: inline-block">
              <i class="el-icon-location-outline smalltu"></i>
              <span>{{region1}}</span>
            </div>
            <span style="font-weight: bold">{{imnorthsum}}</span>
            <span>万吨</span>
          </div>
          <!--同比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">同比：</div>
            <span :style="{background: imnorthtongcolor}">{{imnorthtong}}%</span>
          </div>
          <!--环比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">环比：</div>
            <span :style="{background: imnorthhuancolor}">{{imnorthhuan}}%</span>
          </div>
        </div>
        <!--长江中下港口-->
        <div class="region" style="margin-right: 54px">
          <div style="margin-bottom: 32px">
            <div style="width: 156px;display: inline-block">
              <i class="el-icon-location-outline smalltu"></i>
              <!--长江口岸港口-->
              <span>{{region2}}</span>
            </div>
            <span style="font-weight: bold">{{chang}}</span>
            <span>万吨</span>
          </div>
          <!--同比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">同比：</div>
            <span :style="{background: changtongcolor}">{{changtong}}%</span>
          </div>
          <!--环比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">环比：</div>
            <span :style="{background: changhuancolor}">{{changhuan}}%</span>
          </div>
        </div>
        <!--南方港口-->
        <div class="region">
          <div style="margin-bottom: 32px">
            <div style="width: 156px;display: inline-block">
              <i class="el-icon-location-outline smalltu"></i>
              <!--南方港口-->
              <span>{{region3}}</span>
            </div>
            <span style="font-weight: bold">{{sourth}}</span>
            <span>万吨</span>
          </div>
          <!--同比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">同比：</div>
            <span :style="{background: sourthtongcolor}">{{sourthtong}}%</span>
          </div>
          <!--环比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">环比：</div>
            <span :style="{background: sourthhuancolor}">{{sourthhuan}}%</span>
          </div>
        </div>
      </div>
      <div class="buju2" v-show="fenstyle2">
        <div style="margin-bottom: 79px">
          <div style="display: inline-block;margin-right: 50px;font-size: 22px;font-weight: bold">
            <span>{{leiname}}</span>
            <span>{{monthsum}}万吨</span>
          </div>
          <!--同比-->
          <div style="display: inline-block;font-size: 16px;margin-right: 20px">
            <span style="margin-right: 8px">同比：</span>
            <span :style="{background: activetongColor}" style="padding: 5px;">{{sumtong}}%</span>
          </div>
          <!--环比-->
          <div style="display: inline-block;font-size: 16px;margin-right: 30px">
            <span style="margin-right: 8px">环比：</span>
            <span :style="{background: activehuanColor}" style="padding: 5px;">{{sumhuan}}%</span>
          </div>
          <span style="font-size: 14px;color: #cccccc">2018/1/1-2018/5/28</span>
        </div>
        <!--国家-->
        <div v-for="(item, index) in exregionData" :key="index" class="region" style="margin-right:54px">
          <div style="margin-bottom: 32px">
            <div style="width: 156px;display: inline-block">
              <i class="el-icon-location-outline smalltu"></i>
              <span>{{$t('country.' + item.ISO3)}}</span>
            </div>
            <span style="font-weight: bold">{{(item.ton / 10000).toFixed(2)}}</span>
            <span>万吨</span>
          </div>
          <!--同比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">同比：</div>
            <span v-if="item.tongbi > 0" style="background: red">+{{item.tongbi.toFixed(2)}}%</span>
            <span v-else style="background: green">{{item.tongbi.toFixed(2)}}%</span>
          </div>
          <!--环比-->
          <div style="margin-bottom: 20px">
            <div class="tonghuan">环比：</div>
            <span v-if="item.huanbi > 0" style="background: red">+{{item.huanbi.toFixed(2)}}%</span>
            <span v-else style="background: green">{{item.huanbi.toFixed(2)}}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      region1: '',
      region2: '',
      region3: '',
      activetongColor: '',
      activehuanColor: '',
      imnorthtongcolor: '',
      imnorthhuancolor: '',
      changtongcolor: '',
      changhuancolor: '',
      sourthtongcolor: '',
      sourthhuancolor: '',
      sumstyle: true,
      sumstyle2: false,
      fenstyle: false,
      fenstyle2: false,
      type: '',
      imsum: true,
      immonth: false,
      imweek: false,
      exsum: false,
      exmonth: false,
      exweek: false,
      leiname: '进口',
      sumcount: '',
      north: '',
      changjiang: '',
      south: '',
      monthsum: '',
      sumtong: '',
      sumhuan: '',
      imnorthsum: '',
      imnorthtong: '',
      imnorthhuan: '',
      chang: '',
      changtong: '',
      changhuan: '',
      sourth: '',
      sourthtong: '',
      sourthhuan: '',
      exsumData: [],
      exregionData: []
    }
  },
  computed: {
    liname () {
      return ['累计进口', '上月进口', '上周进口', '累计出口', '上月出口', '上周出口']
    }
  },
  mounted () {
    this.handelselect(0)
  },
  methods: {
    handelselect (val) {
      console.log(val)
      for (let i = 0; i < this.liname.length; i++) {
        document.getElementById('li' + i).style.background = '#475669'
        document.getElementById('i' + i).style.display = 'none'
      }
      document.getElementById('li' + val).style.background = '#409EFF'
      document.getElementById('i' + val).style.display = 'block'
      if (val === 0) {
        this.sumstyle = true
        this.fenstyle = false
        this.sumstyle2 = false
        this.fenstyle2 = false
        this.type = 'imsum'
        this.leiname = '进口'
        this.getImport(this.type)
      } else if (val === 1) {
        this.sumstyle = false
        this.fenstyle = true
        this.sumstyle2 = false
        this.fenstyle2 = false
        this.type = 'immonth'
        this.leiname = '进口'
        this.getImport(this.type)
      } else if (val === 2) {
        this.sumstyle = false
        this.fenstyle = true
        this.sumstyle2 = false
        this.fenstyle2 = false
        this.type = 'imweek'
        this.leiname = '进口'
        this.getImport(this.type)
      } else if (val === 3) {
        this.sumstyle2 = true
        this.sumstyle = false
        this.fenstyle = false
        this.fenstyle2 = false
        this.type = 'exsum'
        this.leiname = '出口'
        this.getExport(this.type)
      } else if (val === 4) {
        this.sumstyle = false
        this.fenstyle2 = true
        this.sumstyle2 = false
        this.fenstyle = false
        this.type = 'exmonth'
        this.leiname = '出口'
        this.getExport(this.type)
      } else if (val === 5) {
        this.sumstyle = false
        this.fenstyle2 = true
        this.fenstyle = false
        this.sumstyle2 = false
        this.type = 'exweek'
        this.leiname = '出口'
        this.getExport(this.type)
      }
    },
    // 获取进口数据
    getImport (type) {
      let data = {}
      window.GO_UTIL.ajax('get', '/home/import/history/LflAndMom', data, (err, result) => {
        if (!err && !result.error) {
          // console.log('importdata', result.data)
          this.dealimport(type, result.data)
        }
      })
    },
    // 获取出口数据
    getExport (type) {
      let data = {}
      window.GO_UTIL.ajax('get', '/home/export/history/LflAndMom', data, (err, result) => {
        if (!err && !result.error) {
          // console.log('exportdata', result.data)
          this.dealexport(type, result.data)
        }
      })
    },
    // 处理进口数据
    dealimport (type, data) {
      var me = this
      // console.log('import', data)
      if (type === 'imsum') {
        this.sumcount = ((data.data_sum.region_total) / 10000).toFixed(2)
        let regiondata = data.data_sum.region
        for (let i = 0; i < regiondata.length; i++) {
          let item = regiondata[i]
          if (item.regionCode === 'CHNCJR') {
            me.region2 = me.$t('global.cj')
            me.changjiang = (item.ton / 10000).toFixed(2)
          } else if (item.regionCode === 'CHNNOR') {
            me.region1 = me.$t('global.north')
            me.north = (item.ton / 10000).toFixed(2)
          } else if (item.regionCode === 'CHNSOU') {
            me.region3 = me.$t('global.south')
            me.south = (item.ton / 10000).toFixed(2)
          }
        }
      } else if (type === 'immonth') {
        // 上月总的
        me.monthsum = ((data.data_month.region.total.ton) / 10000).toFixed(2)
        if (data.data_month.region.total.lfl > 0) {
          me.sumtong = '+' + data.data_month.region.total.lfl.toFixed(2)
          me.activetongColor = 'red'
        } else {
          me.sumtong = data.data_month.region.total.lfl.toFixed(2)
          me.activetongColor = 'green'
        }
        if (data.data_month.region.total.mom > 0) {
          me.sumhuan = '+' + data.data_month.region.total.mom.toFixed(2)
          me.activehuanColor = 'red'
        } else {
          me.sumhuan = data.data_month.region.total.mom.toFixed(2)
          me.activehuanColor = 'green'
        }
        // 北方
        for (let i = 0; i < 3; i++) {
          let item = data.data_month.region.sub[i]
          if (item.regionCode === 'CHNNOR') { // 北方
            me.imnorthsum = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.imnorthtong = '+' + item.tongbi.toFixed(2)
              me.imnorthtongcolor = 'red'
            } else {
              me.imnorthtong = item.tongbi.toFixed(2)
              me.imnorthtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.imnorthhuan = '+' + item.huanbi.toFixed(2)
              me.imnorthhuancolor = 'red'
            } else {
              me.imnorthhuan = item.huanbi.toFixed(2)
              me.imnorthhuancolor = 'green'
            }
          } else if (item.regionCode === 'CHNCJR') { // 长江
            me.chang = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.changtong = '+' + item.tongbi.toFixed(2)
              me.changtongcolor = 'red'
            } else {
              me.changtong = item.tongbi.toFixed(2)
              me.changtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.changhuan = '+' + item.huanbi.toFixed(2)
              me.changhuancolor = 'red'
            } else {
              me.changhuan = item.huanbi.toFixed(2)
              me.changhuancolor = 'green'
            }
          } else if (item.regionCode === 'CHNSOU') { // 南方
            me.sourth = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.sourthtong = '+' + item.tongbi.toFixed(2)
              me.sourthtongcolor = 'red'
            } else {
              me.sourthtong = item.tongbi.toFixed(2)
              me.sourthtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.sourthhuan = '+' + item.huanbi.toFixed(2)
              me.sourthhuancolor = 'red'
            } else {
              me.sourthhuan = item.huanbi.toFixed(2)
              me.sourthhuancolor = 'green'
            }
          }
        }
      } else if (type === 'imweek') {
        // 上周总的
        me.monthsum = ((data.data_week.region.total.ton) / 10000).toFixed(2)
        if (data.data_week.region.total.lfl > 0) {
          me.sumtong = '+' + data.data_week.region.total.lfl.toFixed(2)
          me.activetongColor = 'red'
        } else {
          me.sumtong = data.data_week.region.total.lfl.toFixed(2)
          me.activetongColor = 'green'
        }
        if (data.data_week.region.total.mom > 0) {
          me.sumhuan = '+' + data.data_week.region.total.mom.toFixed(2)
          me.activehuanColor = 'red'
        } else {
          me.sumhuan = data.data_week.region.total.mom.toFixed(2)
          me.activehuanColor = 'green'
        }
        // 北方
        for (let i = 0; i < 3; i++) {
          let item = data.data_week.region.sub[i]
          if (item.regionCode === 'CHNNOR') { // 北方
            me.imnorthsum = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.imnorthtong = '+' + item.tongbi.toFixed(2)
              me.imnorthtongcolor = 'red'
            } else {
              me.imnorthtong = item.tongbi.toFixed(2)
              me.imnorthtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.imnorthhuan = '+' + item.huanbi.toFixed(2)
              me.imnorthhuancolor = 'red'
            } else {
              me.imnorthhuan = item.huanbi.toFixed(2)
              me.imnorthhuancolor = 'green'
            }
          } else if (item.regionCode === 'CHNCJR') { // 长江
            me.chang = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.changtong = '+' + item.tongbi.toFixed(2)
              me.changtongcolor = 'red'
            } else {
              me.changtong = item.tongbi.toFixed(2)
              me.changtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.changhuan = '+' + item.huanbi.toFixed(2)
              me.changhuancolor = 'red'
            } else {
              me.changhuan = item.huanbi.toFixed(2)
              me.changhuancolor = 'green'
            }
          } else if (item.regionCode === 'CHNSOU') { // 南方
            me.sourth = (item.ton / 10000).toFixed(2)
            if (item.tongbi > 0) {
              me.sourthtong = '+' + item.tongbi.toFixed(2)
              me.sourthtongcolor = 'red'
            } else {
              me.sourthtong = item.tongbi.toFixed(2)
              me.sourthtongcolor = 'green'
            }
            if (item.huanbi > 0) {
              me.sourthhuan = '+' + item.huanbi.toFixed(2)
              me.sourthhuancolor = 'red'
            } else {
              me.sourthhuan = item.huanbi.toFixed(2)
              me.sourthhuancolor = 'green'
            }
          }
        }
      }
    },
    // 处理出口数据
    dealexport (type, data) {
      var me = this
      console.log('export', data)
      let dataSum = [] // 排序
      me.exregionData = []
      for (let i = 0; i < data.data_sum.region.length; i++) {
        let item = data.data_sum.region[i]
        dataSum.push(item)
      }
      dataSum.sort(sequence)
      function sequence (a, b) {
        return b.ton - a.ton
      }
      me.exsumData = dataSum.slice(0, 3)
      let obj = {}
      for (let i = 0; i < me.exsumData.length; i++) {
        let item = me.exsumData[i].ISO3
        obj[item] = me.exsumData[i]
      }
      if (type === 'exmonth') {
        // 上月总的
        me.monthsum = ((data.data_month.region.total.ton) / 10000).toFixed(2)
        if (data.data_month.region.total.lfl > 0) {
          me.sumtong = '+' + data.data_month.region.total.lfl.toFixed(2)
          me.activetongColor = 'red'
        } else {
          me.sumtong = data.data_month.region.total.lfl.toFixed(2)
          me.activetongColor = 'green'
        }
        if (data.data_month.region.total.mom > 0) {
          me.sumhuan = '+' + data.data_month.region.total.mom.toFixed(2)
          me.activehuanColor = 'red'
        } else {
          me.sumhuan = data.data_month.region.total.mom.toFixed(2)
          me.activehuanColor = 'green'
        }
        // 不同地区的
        for (let i = 0; i < 4; i++) {
          let item = data.data_month.region.sub[i].ISO3
          if (obj[item]) {
            me.exregionData.push(data.data_month.region.sub[i])
          }
        }
      } else if (type === 'exweek') {
        // 上周
        me.monthsum = ((data.data_week.region.total.ton) / 10000).toFixed(2)
        if (data.data_week.region.total.lfl > 0) {
          me.sumtong = '+' + data.data_week.region.total.lfl.toFixed(2)
          me.activetongColor = 'red'
        } else {
          me.sumtong = data.data_week.region.total.lfl.toFixed(2)
          me.activetongColor = 'green'
        }
        if (data.data_week.region.total.mom > 0) {
          me.sumhuan = '+' + data.data_week.region.total.mom.toFixed(2)
          me.activehuanColor = 'red'
        } else {
          me.sumhuan = data.data_week.region.total.mom.toFixed(2)
          me.activehuanColor = 'green'
        }
        // 不同地区的
        for (let i = 0; i < 4; i++) {
          let item = data.data_week.region.sub[i].ISO3
          if (obj[item]) {
            me.exregionData.push(data.data_week.region.sub[i])
          }
        }
      }
    },

    // 总的进口数据的处理
    dealSumim (data) {
    }

  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .titleStyle{
    font-family: "Microsoft YaHei";
    color: #ffffff;
    float: left;
    margin-top: 40px;
    min-width: 1100px;
    margin-left: 50px;
    .titleUl{
      float: left;
      margin-left: 50px;
      ul{
        list-style: none;
        li{
          position: relative;
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          color: #ffffff;
          background: #475669;
          border-bottom: 1px solid #3e4a58;
          .san_you {
            display: none;
            position: absolute;
            top: 19px;
            right: -8px;
            width: 0;
            height: 0;
            border-left: 8px solid #409EFF;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
          }
        }
      }
    }
    .title-content{
      text-align: left;
      float: left;
      margin-left: 60px;
      .imnum{font-size: 22px;font-weight: bold;margin-right: 30px}
      .imdate{font-size: 14px;color: #cccccc}
      .smalltu{
        padding: 1px;
        background: #409EFF;
        border: 1px solid #409EFF;
        margin-right: 8px;
      }
      .buju1{
        .sumregion{width: 285px;margin-bottom: 40px;font-size: 16px}
      }
      .buju2{
        .region{width: 274px;margin-bottom: 40px;font-size: 16px;display: inline-block;}
        .tonghuan{display: inline-block;width: 121px;padding-left: 35px}
      }
    }
  }
  /*画三角形的方法*/
  /*.triangel{
    width: 50px;
    height: 50px;
    border-left: 20px solid #2ecc71;
    border-right: 20px solid red;
    border-top: 20px solid yellow;
    border-bottom: 20px solid green;
  }*/

</style>
