<!--Created by win10 on 2018/7/4.-->
<template>
  <div class="selectdetail">
    <el-dialog class="setwidth" style="text-align: left;" custom-class="setheight" title="船舶选择" :visible.sync="selectShow">
      <div>
        <div style="float: left;background: #f4f9ff;border-top: 1px solid #e6e6e6;">
          <ul class="ship-li">
            <li ref="arr" v-for="(item, index) in shipData" :id="index" @click="selectChange(index)">
              <span class="itemname" :title="item.ship_name">{{item.ship_name}}</span>
              <el-button ref="el" :id="'bg-' + index" class="confirm" type="primary" @click="sub(index)">确定</el-button>
            </li>
          </ul>
        </div>
        <div style="float: left;margin-left: 16px;width: 694px;">
          <ul class="same-style" style="list-style: none;display: inline">
            <li :title="shipdetail.ship_name">船名：{{shipdetail.ship_name}}</li>
            <li>IMO：{{shipdetail.imo}}</li>
            <li>MMSI：{{shipdetail.mmsi}}</li>
            <li>DWT：{{shipdetail.dwt}}</li>
            <li :title="shipdetail.ship_owner">船东：{{shipdetail.ship_owner}}</li>
            <li>运营商：{{shipdetail.ship_manager}}</li>
          </ul>
          <!--地图-->
          <div style="width: 100%;height: 305px;overflow: hidden;position: relative">
            <div :v-show="tishi" style="position: absolute;z-index: 999;color: red;top: 10px;left: 50%;font-size: 18px;"></div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      shipdetail: {},
      shipData: [{ship_name:'chaun1',number: '11'},{ship_name:'chaun2',number: '12'},{ship_name:'chaun3',number: '13'}],
      selectShow: false,
      item: 0,
      tishi: false
    }
  },
  mounted () {
    var me = this
    // 单击事件监听
    this.$root.GOEVENT.$on('SELECT_SHIP', (param) => {
      console.log(param)
      this.selectShow = true
    })
  },
  methods: {
    selectChange (val) {
      if (this.item === val) {
        return
      }
      this.item = val
      for (let i = 0;i<this.shipData.length;i++) {
        console.log('i',this.$refs.arr,this.$refs.arr[i].children[1])
        //另一种操作dom的方法
        this.$refs.arr[i].style.background = '#f4f9ff'
        this.$refs.arr[i].children[1].style.display = 'none'
        /*document.getElementById(i).style.background = '#f4f9ff'
        document.getElementById('bg-' + i).style.display = 'none'*/
      }
      this.$refs.arr[val].style.background = '#ffffff'
      this.$refs.arr[val].children[1].style.display = 'inline-block'
      /*document.getElementById(val).style.background = '#ffffff'
      document.getElementById('bg-' + val).style.display = 'inline-block'*/
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .selectdetail{
    .same-style{
      li{width: 200px;
        display: inline-block;
        margin-bottom: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .setheight{
      height: 490px;
      overflow: hidden;
    }
    .setwidth .el-dialog{
      width: 950px;
    }
    .el-dialog__header{
      background-color: #e6e6e6;
    }
    .ship-li{
      font-family: "Microsoft YaHei";
      list-style: none;
      font-size: 12px;
      color: #666666;
      text-align: left;
      text-indent: 10px;
      margin: 0;
      padding: 0;
      li{
        width: 200px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        .itemname{
          display: inline-block;
          width: 135px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .confirm{
        width: 40px;
        height: 22px;
        text-align: center;
        padding: 0;
        display: none;
        position: absolute;
        top: 9px;
        right: 8px;
      }
      li:first-child{
        background: #ffffff;
        .confirm{
          display: inline-block;
        }
      }
    }
  }
</style>
