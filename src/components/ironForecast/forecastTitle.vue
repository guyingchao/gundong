<!--Created by win10 on 2018/7/16.-->
<template>
    <div class="forestyle">
      <div class="fore-left">
        <ul>
          <li v-for="(item, index) in forename" :id="'left' + item" :key="index" @click="handleselect(index,item)">
            {{$t('country.' + item)}}
            <i :id="'tri' + item" class="san_you"></i>
          </li>
        </ul>
      </div>
      <div class="foreRight">
        <div style="font-size: 22px;font-weight: bold;margin-bottom: 40px">
          <span>未来四周预计<span>{{titleforename}}</span>铁矿石</span>
          <span>{{foreton}}</span>
          <span>万吨</span>
        </div>
        <div style="margin-bottom: 40px;font-size: 16px">
          <i class="el-icon-location-outline smalltu"></i>
          <span>{{portname}}</span>
          <span>
            <el-popover placement="right-start" width="225" trigger="hover">
              <!--北方港口-->
                <div class="popover">
                  <i v-if="icon === 'CHN' || icon === 'CHNNOR'" class="el-icon-location-outline"></i>
                  <span>北方港口</span>
                  <div class="xian"></div>
                  <div style="margin-top: 3px;margin-bottom: 5px" v-text="northtext"></div>
                </div>
              <!--南方港口-->
                <div class="popover">
                  <i v-if="icon === 'CHN' || icon === 'CHNSOU'" class="el-icon-location-outline"></i>
                  <span>南方港口</span>
                  <div class="xian"></div>
                  <div style="margin-top: 3px;margin-bottom: 5px" v-text="southtext"></div>
                </div>
              <!--长江口岸港口-->
                <div class="popover">
                  <i v-if="icon === 'CHN' || icon === 'CHNCJR'" class="el-icon-location-outline"></i>
                  <span>长江口岸港口</span>
                  <div class="xian"></div>
                  <div style="margin-top: 3px;margin-bottom: 5px" v-text="changtext"></div>
                </div>
              <i class="el-icon-question" slot="reference"></i>
            </el-popover>
          </span>
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
          /*'ALL': '',
          'CHNCJR': '',
          'CHNNOR': '',
          'CHNSOU': ''*/
        }
      }
    },
    typestyle: {
      type: String,
      required: true,
      default: function () {
        return ''
      }
    }
  },
  // props: ['objectData'],
  data () {
    return {
      icon: 'CHNNOR',
      northtext: this.$t('port.' + '40389')+','+this.$t('port.'+ '40579')+','+this.$t('port.'+ '56604')+ ','+this.$t('port.'+ '40541')+ ','+this.$t('port.'+ '40544')
      + ','+this.$t('port.'+ '40547')+ ','+this.$t('port.'+ '40549')+ ','+this.$t('port.'+ '40580')+ ','+this.$t('port.'+ '40582')+ ','
      + this.$t('port.'+ '40586')+ ','+this.$t('port.'+ '55304')+ ','+this.$t('port.'+ '80140')+ ','+this.$t('port.'+ '80145')+ ','
      +this.$t('port.'+ '40415')+ ','+this.$t('port.'+ '40543')+ ','+this.$t('port.'+ '40437')+','+this.$t('port.'+ '40438')+','
      +this.$t('port.'+ '40546')+ ','+this.$t('port.'+ '40548')+ ','+this.$t('port.'+ '40553')+ ','+this.$t('port.'+ '40581')+ ','
      +this.$t('port.'+ '40583')+ ','+this.$t('port.'+ '40591')+ ','+this.$t('port.'+ '45041')+ ','+this.$t('port.'+ '41446'),
      southtext: this.$t('port.'+ '40440')+',' +this.$t('port.'+ '40555')+ ','+this.$t('port.'+ '40593')+ ','+this.$t('port.'+ '40596')+ ','+this.$t('port.'+ '40598')
      + ','+this.$t('port.'+ '56624')+ ','+this.$t('port.'+ '45112')+ ','+this.$t('port.'+ '53307')+ ','+this.$t('port.'+ '55620')+ ','
      +this.$t('port.'+ '55786')+ ','+this.$t('port.'+ '55850')+ ','+this.$t('port.'+ '56621')+ ','+this.$t('port.'+ '56627')+ ','
      +this.$t('port.'+ '40552')+ ','+this.$t('port.'+ '40592')+ ','+this.$t('port.'+ '40594')+ ','
      +this.$t('port.'+ '40597')+ ','+this.$t('port.'+ '40599')+ ','+this.$t('port.'+ '40628')+ ','+this.$t('port.'+ '52813')+ ','
      +this.$t('port.'+ '55262')+ ','+this.$t('port.'+ '55685')+ ','+this.$t('port.'+ '55831')+ ','+this.$t('port.'+ '56615')+ ','+this.$t('port.'+ '40602')+ ','+this.$t('port.'+ '56602'),

      changtext: this.$t('port.'+ '40505')+','+this.$t('port.'+ '40557')+',' +this.$t('port.'+ '40561')+ ','+this.$t('port.'+ '40563')+ ','+this.$t('port.'+ '40565')+ ','+this.$t('port.'+ '40567')
      + ','+this.$t('port.'+ '40569')+ ','+this.$t('port.'+ '40571')+ ','+this.$t('port.'+ '40573')+ ','+this.$t('port.'+ '40575')+ ','
      +this.$t('port.'+ '40605')+ ','+this.$t('port.'+ '40607')+ ','+this.$t('port.'+ '40610')+ ','+this.$t('port.'+ '40612')+ ','
      +this.$t('port.'+ '40615')+ ','+this.$t('port.'+ '45043')+ ','+this.$t('port.'+ '80143')+ ','
      +this.$t('port.'+ '54878')+ ','+this.$t('port.'+ '55804')+ ','+this.$t('port.'+ '56647')+ ','+this.$t('port.'+ '80139')+ ','
      +this.$t('port.'+ '40449')+ ','+this.$t('port.'+ '40556')+ ','+this.$t('port.'+ '40560')+',' +this.$t('port.'+ '40562')+ ','+this.$t('port.'+ '40564')+ ','+this.$t('port.'+ '40566')+ ','+this.$t('port.'+ '40568')
      + ','+this.$t('port.'+ '40570')+ ','+this.$t('port.'+ '40572')+ ','+this.$t('port.'+ '40574')+ ','+this.$t('port.'+ '40604')+ ','
      +this.$t('port.'+ '40606')+ ','+this.$t('port.'+ '40609')+ ','+this.$t('port.'+ '40611')+ ','+this.$t('port.'+ '40613')+ ','
      +this.$t('port.'+ '54849')+ ','
      +this.$t('port.'+ '55617')+ ','+this.$t('port.'+ '80137')+ ','+this.$t('port.'+ '53292')+ ','+this.$t('port.'+ '53753')+ ','+this.$t('port.'+ '41434')+ ','+this.$t('port.'+ '55874'),
      objData: {},
      foreton: '',
      portname: '',
      gangkou: [],
      sumport: '',
      titleforename: '',
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
      if (this.typestyle === 'im'){
        // console.log('aaaaaaaaaaa', val)
        this.titleforename = '进口'
        this.objData = val
        this.handleselect(0, 'CHNNOR')
      } else {
        // console.log('aaaaaaaaaaa', val)
        this.titleforename = '出口'
        this.objData = val
        this.handleselect(0, 'BRA')
      }
    }
  },
  computed: {
    forename () {
      if (this.typestyle === 'im') {
        return ['CHNNOR', 'CHNSOU', 'CHNCJR', 'CHN']
      } else {
        return ['BRA', 'AUS', 'IND', 'ZAF']
      }
    }
  },
  mounted () {
  },
  methods: {
    handleselect (val, item) {
      var me = this
      for (let i = 0; i < this.forename.length; i++) {
        let quid = this.forename[i]
        document.getElementById('left' + quid).style.background = '#475669'
        document.getElementById('tri' + quid).style.display = 'none'
      }
      document.getElementById('left' + item).style.background = '#409EFF'
      document.getElementById('tri' + item).style.display = 'block'
      this.icon = item
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
<style>
  .popover > i,.popover > span{
    font-size: 14px;
    color: #409EFF;
  }
  .popover .xian{border-bottom: 1px solid #cccccc;padding-top: 3px;}
</style>
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
