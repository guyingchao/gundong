<!--Created by win10 on 2018/7/9.-->
<template>
    <div class="add">
      <el-dialog style="text-align: left" title="编辑信息" :visible.sync="dialogVisible" width="600px" custom-class="setheight">
        <div style="height: 40px;line-height: 40px;font-size: 12px;text-align: right;color:#999999">编号：M0001</div>
        <div>
          <!--进口商-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">进口商</span>
            <input v-model="importshoper" class="inputstyle" v-on:blur="changeShoper()"/>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshia">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
          </div>
          <!--销售商-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">销售商</span>
            <input class="inputstyle" v-model="sailshoper" @blur="changeSail(sailshoper)"/>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshib">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
          </div>
          <!--合同日期-->
          <div class="group">
            <div class="block">
              <i class="el-icon-star-on"></i>
              <span class="guwidth demonstration">合同日期</span>
              <el-date-picker :picker-options="setdata" class="adjust" v-model="selectdata" type="date" placeholder="选择日期" @blur="loseblur" @change="changeOnlydata">
              </el-date-picker>
              <div style="position: absolute;left: 150px;color: red;" v-show="xianshic">
                <i class="el-icon-info"></i>
                <span>该选项为必填项</span>
              </div>
            </div>
          </div>
          <!--成交量-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">成交量（吨）</span>
            <input class="inputstyle" v-model="jiaoyi" @blur="changeJiaoyi(jiaoyi)"/>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshid">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
          </div>
          <!--受载期-->
          <div class="group">
            <div class="block">
              <i class="el-icon-star-on"></i>
              <span class="guwidth demonstration">受载期</span>
              <el-date-picker class="shouzai" :picker-options="pickerOptions0" v-model="value13" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" @change="changeDoubledata">
              </el-date-picker>
              <div style="position: absolute;left: 150px;color: red;" v-show="xianshie">
                <i class="el-icon-info"></i>
                <span>该选项为必填项</span>
              </div>
            </div>
          </div>
          <!--价格-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">价格（美元）</span>
            <input v-model="contractprice" @blur="changePrice(contractprice)" style="width: 170px;" class="inputstyle"/>
            <el-select class="xuanze" size="mini" v-model="pricevalue" placeholder="请选择">
              <el-option v-for="item in priceoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshif">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
          </div>
          <!--装货地点-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">装货地点</span>
            <el-select size="mini" style="width: 250px" v-model="zhuvalue" placeholder="请选择">
              <el-option v-for="item in zhuoptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!--卸货地点-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">卸货地点</span>
            <el-select size="mini" style="width: 250px" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <!--产品-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">产 品</span>
            <input v-model="productname" @blur="changeproduct(productname)" class="inputstyle"/>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshig">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
          </div>
          <!--元素-->
          <div class="group">
            <i class="el-icon-star-on"></i>
            <span class="guwidth">Fe</span>
            <input v-model="itemfe" @blur="changefe(itemfe)" style="width: 100px" class="inputstyle"/>
            <i style="position: absolute;left: 229px;color: dodgerblue;font-style: normal">%</i>
            <div style="position: absolute;left: 150px;color: red;" v-show="xianshih">
              <i class="el-icon-info"></i>
              <span>该选项为必填项</span>
            </div>
            <i class="item">Al<sub>2</sub>o<sub>3</sub></i>
            <input style="width: 100px;" class="inputstyle"/>
            <i style="position: absolute;right: 110px;color: dodgerblue;font-style: normal">%</i>
          </div>
          <div class="group">
            <span style="padding-left: 16px;" class="guwidth">Sio<sub>2</sub></span>
            <input style="width: 100px" class="inputstyle"/>
            <i style="position: absolute;left: 229px;color: dodgerblue;font-style: normal">%</i>
            <i class="item">H<sub>2</sub>o</i>
            <input style="width: 100px;" class="inputstyle"/>
            <i style="position: absolute;right: 110px;color: dodgerblue;font-style: normal">%</i>
          </div>
          <div class="group">
            <span style="padding-left: 16px;" class="guwidth">P</span>
            <input style="width: 100px" class="inputstyle"/>
            <i style="position: absolute;left: 229px;color: dodgerblue;font-style: normal">%</i>
            <i class="item">S</i>
            <input style="width: 100px;" class="inputstyle"/>
            <i style="position: absolute;right: 110px;color: dodgerblue;font-style: normal">%</i>
          </div>
          <div class="addbtn">
            <el-button type="primary" size="medium" @click="addbutton" :disabled="okclick">添  加</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      importshoper: '',
      sailshoper: '',
      selectdata: '',
      jiaoyi: '',
      contractprice: '',
      productname: '',
      itemfe: '',
      xianshia: false,
      xianshib: false,
      xianshic: false,
      xianshid: false,
      xianshie: false,
      xianshif: false,
      xianshig: false,
      xianshih: false,
      dialogVisible: false,
      value13: [],
      priceoptions: [
        {
          value: '选项1',
          label: 'CIF'
        },
        {
          value: '选项2',
          label: 'CRF'
        }
      ],
      pricevalue: 'CIF',
      zhuoptions: [{
        value: '选项1',
        label: '澳大利亚'
      }, {
        value: '选项2',
        label: '香港'
      }],
      zhuvalue: '澳大利亚',
      options: [
        {value: '选项1',
          label: '南方港口'},
        {value: '选项2',
          label: '北方港口'},
        {value: '选项3',
          label: '长江中下游港口'}
      ],
      value: '南方港口',
      setdata: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      pickerOptions0: {
        disabledDate: (time) => {
          let curDate = (new Date()).getTime()
          let one = 30 * 24 * 3600 * 1000
          let lastmonths = curDate - one
          let nextmonths = curDate + one
          return time.getTime() > nextmonths || time.getTime() < lastmonths
//          return time.getTime() > new Date(2017, 11, 30) || time.getTime() < new Date(2017, 11, 11);//注意是||不是&&
        }
      }
    }
  },
  watch: {
  },
  mounted () {
    this.$root.GOEVENT.$on('ADD_CONTRACT', (param) => {
      console.log('2', param.contract_id)
      this.dialogVisible = true
    })
  },
  computed: {
    okclick: function () {
      if (this.importshoper && this.sailshoper && this.selectdata && this.jiaoyi && this.value13 && this.contractprice && this.productname && this.itemfe) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    changeShoper (value) {
      console.log('111111', this.importshoper, value)
      this.xianshia = false
      if (!value) {
        this.xianshia = true
      }
    },
    changeSail (value) {
      console.log('22222')
      this.xianshib = false
      if (!value) {
        this.xianshib = true
      }
    },
    changeOnlydata (val) {
      console.log('333333', val, typeof (val))
      this.xianshic = false
      if (val === null) {
        this.xianshic = true
      }
    },
    loseblur () {
      if (this.selectdata === '') {
        console.log('hahahha')
        this.xianshic = true
      } else {
        this.xianshic = false
      }
    },
    changeJiaoyi (value) {
      console.log('444444')
      this.xianshid = false
      if (!value) {
        this.xianshid = true
      }
    },
    changeDoubledata (val) {
      console.log(val)
      this.xianshie = false
      if (val === null) {
        this.xianshie = true
      }
    },
    changePrice (price) {
//      console.log('price',price)
      this.xianshif = false
      if (!price) {
        this.xianshif = true
      }
    },
    changeproduct (productname) {
      this.xianshig = false
      if (!productname) {
        this.xianshig = true
      }
    },
    changefe (itemfe) {
      this.xianshih = false
      if (!itemfe) {
        this.xianshih = true
      }
    },
    addbutton () {
      let onlydata = this.$moment(this.selectdata).format('YYYY-MM-DD')
      console.log('button', this.importshoper, this.sailshoper, onlydata, this.jiaoyi, this.value13, this.contractprice)
      // 把数据传给后端
      if (this.importshoper && this.sailshoper && this.selectdata && this.jiaoyi && this.value13.length && this.contractprice) {
        console.log('jinlai')
      }
    },
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .add{
    font-family: "Microsoft YaHei";
    .setheight{
      height: 760px;
      .el-dialog__header{
        background-color: #e6e6e6;
        padding: 0 20px;
        height: 52px;
        line-height: 52px;
        .el-dialog__title{
          font-size: 16px;
        }
      }
      .el-dialog__body{
        padding: 0 20px;
      }
      .group{
        position: relative;
        padding: 15px 40px;
        .guwidth{
          display: inline-block;
          width: 85px;
        }
        .inputstyle{width: 250px;text-indent: 5px;font-size: 14px;color: #333333;outline:none; background:transparent;border-top:0;border-right: 0;border-left: 0;border-bottom: 1px solid #dcdfe6}
        .item{
          display: inline-block;
          padding-left: 40px;
          width: 60px;
          text-align: left;
          font-style: normal;
        }
      }
      .addbtn{
        text-align: center;
        .el-button{
          width:190px;
          /*color:#ffffff;*/
          /*background: dodgerblue;*/
          font-size: 14px;
        }
      }
    }
    .adjust.el-date-editor.el-input, .el-date-editor.el-input__inner {
      width: 250px;
    }
    .adjust{
      .el-input__inner{
        border-radius: 0px;
        border: 0;
        border-bottom: 1px solid #dcdfe6;
        height: 20px;
        line-height: 20px;
      }
      .el-input__prefix{
        left: 200px;
        top: -10px;
      }
      .el-input__suffix{
        top: -10px;
        right: 100px;
      }
    }
    .shouzai.el-input__inner{
      border-radius: 0px;
      border: 0;
      border-bottom: 1px solid #dcdfe6;
      height: 20px;
      line-height: 20px;
    }
    .shouzai.el-date-editor .el-range__icon{
      position: absolute;
      top: -7px;
      right: 5px;
    }
    .shouzai.el-date-editor .el-range-separator{
      position: absolute;
      top: -7px;
      left: 88px;
    }
    .shouzai.el-date-editor .el-range__close-icon{
      position: absolute;
      top: -7px;
      right: 35px;
    }
    .xuanze.el-select{
      top: -5px;
      width: 80px;
    }
  }
</style>
