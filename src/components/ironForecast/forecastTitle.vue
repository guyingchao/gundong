<!--Created by win10 on 2018/7/16.-->
<template>
    <div class="forestyle">
      <div class="fore-left">
        <ul>
          <li v-for="(item, index) in forename" :id="'left' + index" :key="index" @click="handleselect(index,item)">
            {{$t('country.' + item)}}
            <i :id="'tri' + index" class="san_you"></i>
          </li>
        </ul>
      </div>
      <div class="foreRight">
        <div style="font-size: 22px;font-weight: bold;margin-bottom: 40px">
          <span>未来四周预计进口铁矿石</span>
          <span>{{foreton}}</span>
          <span>万吨</span>
        </div>
        <div style="margin-bottom: 40px;font-size: 16px">
          <i class="el-icon-location-outline smalltu"></i>
          <span>{{portname}}</span>
        </div>
        <!--具体的港口-->
        <div class="gangkou">
          <ul>
            <li v-for="(item, index) in gangkou" :key="index">
              <span style="color: #409EFF" class="el-icon-location-outline"></span>
              {{$t('port.' + item)}}
            </li>
            <span>等</span>
            <span>{{sumport}}</span>
            <span>港</span>
          </ul>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    objectData: {
      type: Object,
      required: true,
      default: function () {
        return {
          'ALL': '',
          'CHNCJR': '',
          'CHNNOR': '',
          'CHNSOU': ''
        }
      }
    }
  },
  // props: ['objectData'],
  data () {
    return {
      objData: {},
      foreton: '',
      portname: '',
      gangkou: [],
      sumport: '',
      dataObject: {
        'CHNNOR': {
          num: 25,
          items: ['40553', '56604', '40579', '40389', '40591']
        },
        'CHNSOU': {
          items: ['40449', '40505', '40556', '40557', '40560'],
          num: 43
        },
        'CHNCJR': {
          items: ['40440', '40552', '40555', '40592', '40593'],
          num: 26
        },
        'CHN': {
          items: ['56615', '40553', '80140', '40593', '40389'],
          num: 94
        },
        'BRA': {
          items: ['54132', '52345', '40627'],
          num: 45
        },
        'AUS': {
          items: ['40434', '48926', '40405'],
          num: 61
        },
        'IND': {
          items: ['45218', '40340', '45071'],
          num: 53
        },
        'ZAF': {
          items: ['41227', '40299', '40629'],
          num: 8
        }
      }
    }
  },
  watch: {
    objectData (val) {
      console.log('aaaaaaaaaaa', val)
      this.objData = val
      this.handleselect(0, 'CHNNOR')
    }
  },
  computed: {
    forename () {
      return ['CHNNOR', 'CHNSOU', 'CHNCJR', 'CHN']
    }
  },
  mounted () {
  },
  methods: {
    handleselect (val, item) {
      var me = this
      for (let i = 0; i < this.forename.length; i++) {
        document.getElementById('left' + i).style.background = '#475669'
        document.getElementById('tri' + i).style.display = 'none'
      }
      document.getElementById('left' + val).style.background = '#409EFF'
      document.getElementById('tri' + val).style.display = 'block'
      // 总吨数
      if (item !== 'CHN') {
        // console.log('this.objData', me.objData, me.objData['CHNNOR'])
        me.foreton = parseFloat(this.objData[item] / 10000).toFixed(2)
      } else {
        this.foreton = parseFloat(this.objData.ALL / 10000).toFixed(2)
      }
      this.portname = this.$t('country.' + item)
      this.gangkou = this.dataObject[item].items
      this.sumport = this.dataObject[item].num
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .forestyle{
    font-family: "Microsoft YaHei";
    color: #ffffff;
    float: left;
    margin-top: 40px;
    min-width: 1100px;
    margin-left: 50px;
    .fore-left{
      float: left;
      margin-left: 100px;
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
    .foreRight{
      text-align: left;
      margin-left: 60px;
      float: left;
      .smalltu{
        padding: 1px;
        background: #409EFF;
        border: 1px solid #409EFF;
        margin-right: 8px;
      }
      .gangkou{
        li{
          display: inline-block;
          font-size: 14px;
          margin-right: 18px;
        }
      }
    }
  }
</style>
