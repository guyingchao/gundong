<!--Created by win10 on 2018/8/8.-->
<template>
    <div style="width: 1200px;margin: auto;font-family: 'Microsoft YaHei'">
      <!--四个框-->
      <div class="zong">
        <!--第一个框-->
        <div class="kuang1" :style="{ background: 'url(' + activebackground1 + ')'}" @click="kuangclick1()">
          <div class="timestyle">
            <span>{{start1}}</span>-
            <span>{{end1}}</span>
          </div>
          <div class="imstyle" style="">进口：
            <span>{{im1}}</span>万吨</div>
          <div class="exstyle">出口：
            <span>{{ex1}}</span>万吨</div>
        </div>
        <!--第二个框-->
        <div class="kuang1" :style="{ background: 'url(' + activebackground2 + ')'}" @click="kuangclick2()">
          <div class="timestyle">
            <span>{{start2}}</span>-
            <span>{{end2}}</span>
          </div>
          <div class="imstyle" style="">进口：
            <span>{{im2}}</span>万吨</div>
          <div class="exstyle">出口：
            <span>{{ex2}}</span>万吨</div>
        </div>
        <!--第三个框-->
        <div class="kuang1" :style="{ background: 'url(' + activebackground3 + ')'}" @click="kuangclick3()">
          <div class="timestyle">
            <span>{{start3}}</span>-
            <span>{{end3}}</span>
          </div>
          <div class="imstyle" style="">进口：
            <span>{{im3}}</span>万吨</div>
          <div class="exstyle">出口：
            <span>{{ex3}}</span>万吨</div>
        </div>
        <!--第四个框-->
        <div class="kuang1" :style="{ background: 'url(' + activebackground4 + ')'}" @click="kuangclick4()">
          <div class="timestyle">
            <span>{{start4}}</span>-
            <span>{{end4}}</span>
          </div>
          <div class="imstyle" style="">进口：
            <span>{{im4}}</span>万吨</div>
          <div class="exstyle">出口：
            <span>{{ex4}}</span>万吨</div>
        </div>
      </div>
      <!--一张图片上的内容-->
      <div style="clear: both"></div>
      <div class="detail">
        <!--进口-->
        <div class="imdetailstyle">
          <div style="color: #409EFF;font-size: 16px;height: 30px">中国进口</div>
          <div class="imgeshi">
            <div v-for="(item, index) in detailimData" :key="index" style="min-height: 30px;line-height: 30px;width: 530px;">
              <i class="el-icon-time" style="width: 15px;height: 15px;color:rgb(64,158,255);float: left"></i>
              <span>{{item.portname}},</span>
              <span style="color: #409EFF;text-decoration: underline">{{item.shipname}}</span>
              <span>({{item.ton}}万吨),</span>
              <span>预计卸货完成时间:</span>
              <span>{{item.time}}</span>
            </div>
          </div>
        </div>
        <!--出口-->
        <div class="exdetailstyle">
          <div style="color: #409EFF;font-size: 16px;height: 30px">全球出口</div>
          <div class="exgeshi">
            <div v-for="(item, index) in detailexData" :key="index" style="min-height: 30px;line-height: 30px;width: 530px;">
              <span>{{item.portname}},</span>
              <span style="color: #409EFF;text-decoration: underline">{{item.shipname}}</span>
              <span>({{item.ton}}万吨),</span>
              <span>预计开始装货时间:</span>
              <span>{{item.time}}</span>
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
      start1: '',
      end1: '',
      im1: '',
      ex1: '',
      start2: '',
      end2: '',
      im2: '',
      ex2: '',
      start3: '',
      end3: '',
      im3: '',
      ex3: '',
      start4: '',
      end4: '',
      im4: '',
      ex4: '',
      activebackground1: '/static/img/bg-active.a834564.jpg',
      activebackground2: '/static/img/bg-normal.bd8127f.jpg',
      activebackground3: '/static/img/bg-normal.bd8127f.jpg',
      activebackground4: '/static/img/bg-normal.bd8127f.jpg',
      detailimData: [],
      detailexData: []
    }
  },
  mounted () {
    this.reqAllData()
    this.kuangclick1()
  },
  methods: {
    kuangclick1 () {
      this.activebackground1 = '/static/img/bg-active.a834564.jpg'
      this.activebackground2 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground3 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground4 = '/static/img/bg-normal.bd8127f.jpg'
      let start = this.$moment().startOf('isoWeek').format('YYYY-MM-DD')
      let end = this.$moment().endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
      this.reqDetail(start, end)
    },
    kuangclick2 () {
      this.activebackground2 = '/static/img/bg-active.a834564.jpg'
      this.activebackground1 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground3 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground4 = '/static/img/bg-normal.bd8127f.jpg'
      let start = this.$moment().add(7, 'day').startOf('isoWeek').format('YYYY-MM-DD')
      let end = this.$moment().add(7, 'day').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
      this.reqDetail(start, end)
    },
    kuangclick3 () {
      this.activebackground3 = '/static/img/bg-active.a834564.jpg'
      this.activebackground2 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground1 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground4 = '/static/img/bg-normal.bd8127f.jpg'
      let start = this.$moment().add(14, 'day').startOf('isoWeek').format('YYYY-MM-DD')
      let end = this.$moment().add(14, 'day').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
      this.reqDetail(start, end)
    },
    kuangclick4 () {
      this.activebackground4 = '/static/img/bg-active.a834564.jpg'
      this.activebackground2 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground3 = '/static/img/bg-normal.bd8127f.jpg'
      this.activebackground1 = '/static/img/bg-normal.bd8127f.jpg'
      let start = this.$moment().add(21, 'day').startOf('isoWeek').format('YYYY-MM-DD')
      let end = this.$moment().add(21, 'day').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss')
      this.reqDetail(start, end)
    },
    // 获取四个框的数据
    reqAllData: function () {
      let data = {}
      window.GO_UTIL.ajax('get', '/home/forecast', data, (err, result) => {
        console.log('result.data', result.data)
        this.handlekuang(result.data)
      })
    },
    // 处理四个框的数据
    handlekuang (data) {
      this.start1 = this.$moment(data['v1'].startTime).format('MM月DD日')
      this.end1 = this.$moment(data['v1'].endTime).format('MM月DD日')
      this.im1 = parseFloat(data['v1'].import.ton / 10000).toFixed(2)
      this.ex1 = parseFloat(data['v1'].export.ton / 10000).toFixed(2)
      this.start2 = this.$moment(data['v2'].startTime).format('MM月DD日')
      this.end2 = this.$moment(data['v2'].endTime).format('MM月DD日')
      this.im2 = parseFloat(data['v2'].import.ton / 10000).toFixed(2)
      this.ex2 = parseFloat(data['v2'].export.ton / 10000).toFixed(2)
      this.start3 = this.$moment(data['v3'].startTime).format('MM月DD日')
      this.end3 = this.$moment(data['v3'].endTime).format('MM月DD日')
      this.im3 = parseFloat(data['v3'].import.ton / 10000).toFixed(2)
      this.ex3 = parseFloat(data['v3'].export.ton / 10000).toFixed(2)
      this.start4 = this.$moment(data['v4'].startTime).format('MM月DD日')
      this.end4 = this.$moment(data['v4'].endTime).format('MM月DD日')
      this.im4 = parseFloat(data['v4'].import.ton / 10000).toFixed(2)
      this.ex4 = parseFloat(data['v4'].export.ton / 10000).toFixed(2)
    },
    // 获取两框的数据
    reqDetail: function (start, end) {
      let data = {startTime: start, endTime: end}
      console.log('timegeshi', data)
      window.GO_UTIL.ajax('get', '/home/forecast/detail', data, (err, result) => {
        console.log('result.data::::::', result.data)
        this.handledetail(result.data)
      })
    },
    // 处理两框的数据
    handledetail (data) {
      let im = data.import
      let importdata = []
      let ex = data.export
      let exportdata = []
      for (let i = 0;i<im.length;i++){
        let item = im[i]
        let obj = {}
        obj['portname'] = this.$t('port.' + item.port_id)
        obj['shipname'] = item.ship_name
        obj['ton'] = parseFloat(item.DWT / 10000).toFixed(2)
        obj['time'] = this.$moment(item.time).format('MM月DD日 HH:mm')
        importdata.push(obj)
      }
      this.detailimData = importdata
      for (let i = 0;i<ex.length;i++) {
        let item = ex[i]
        let obj = {}
        obj['portname'] = this.$t('port.' + item.port_id)
        obj['shipname'] = item.ship_name
        obj['ton'] = parseFloat(item.DWT / 10000).toFixed(2)
        obj['time'] = this.$moment(item.time).format('MM月DD日 HH:mm')
        exportdata.push(obj)
      }
      this.detailexData = exportdata
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .zong > div:nth-child(1){
    margin-right: 66px
  }
  .zong > div:nth-child(2){
    margin-right: 66px
  }
  .zong > div:nth-child(3){
    margin-right: 66px
  }
.kuang1{
  cursor: pointer;
  padding: 10px;
  text-align: left;
  color: #666666;
  font-size: 14px;
  width: 250px;
  height: 180px;
  float: left;
  background-repeat: no-repeat;
  /*background: url("./../../assets/ironore/bg-normal.bd8127f.jpg");*/
}
  .timestyle{
    font-size: 12px;
    padding-bottom: 5px;
  }
  .imstyle{padding-top: 20px;padding-bottom: 20px;border-top: 1px solid rgb(166, 207, 250);border-bottom: 1px solid rgb(166, 207, 250)}
  .exstyle{padding-top: 30px}
  .detail{margin-top:50px;background: url("/static/img/bg.91ba04a.png");background-repeat: no-repeat;width: 1200px;height: 470px;background-size:1200px 470px }
  .imdetailstyle{text-align:left;font-size:14px;margin-top:25px;margin-left:25px;width: 568px;height: 410px;padding: 10px;float: left;border: 1px solid #ffffff;padding-left: 27px}
  .imgeshi{width: 530px;height: 358px;overflow: scroll;}
  .imgeshi::-webkit-scrollbar {display: none;}
  .exgeshi::-webkit-scrollbar {display: none;}
  .exgeshi{width: 530px;height: 358px;overflow: scroll;}
  .exdetailstyle{text-align:left;font-size:14px;margin-top:25px;margin-right:25px;width: 568px;height: 410px;padding: 10px;float: right;border: 1px solid #ffffff;padding-left: 27px}
</style>
