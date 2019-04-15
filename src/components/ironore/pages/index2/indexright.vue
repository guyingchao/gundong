<!--Created by win10 on 2018/10/11.-->
<template>
    <div style="width: 100%">
      <!--中国未来14天到港总量-->
      <div class="title-des">中国未来14天到港总量</div>
      <div style="width: 100%;background: #ffffff;border-radius: 6px;padding: 20px 10px 0;">
        <div v-if="page">
          <div class="pro-right" v-for="(item, index) in products" :key="index">
            <div style="float: left;width: 46px;height: 60px;display: table;">
              <div style="display: table-cell;vertical-align: middle;">{{item.name}}</div>
            </div>
            <div style="float: right;color: #ffffff;width: 92px;height: 60px;border-radius: 6px;display: table;" :style="{background: item.color}">
              <div style="display: table-cell;vertical-align: middle;">
                <span style="font-family: myfont;font-size: 26px;">{{item.ton}}</span>
                <span>万吨</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="huadong">
          <el-carousel trigger="click">
            <el-carousel-item v-for="one in pageData">
              <div class="pro-right" v-for="(item, index) in one" :key="index">
                <div style="float: left;width: 46px;height: 60px;display: table;">
                  <div style="display: table-cell;vertical-align: middle;">{{item.name}}</div>
                </div>
                <div style="float: right;color: #ffffff;width: 92px;height: 60px;border-radius: 6px;display: table;" :style="{background: item.color}">
                  <div style="display: table-cell;vertical-align: middle;">
                    <span style="font-family: myfont;font-size: 26px;">{{item.ton}}</span>
                    <span>万吨</span>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="clear: both"></div>
      </div>
      <!--新闻动态-->
      <div class="title-des" style="margin-top: 30px;">新闻动态</div>
      <div style="background: #ffffff;border-radius: 6px;">
        <div style="height: 50px;line-height: 49px;border-bottom: 1px solid #ccc">
          <div class="newli" style="display: inline-block;" :style="{width: newWidth+'%'}" :class="{activeClass: setnew == index}"
               v-for="(item, index) in newtitle" :key="index" @click="setnewli(index)">
            <span>{{item}}</span>
          </div>
        </div>
        <div class="new-content">
          <div style="height: 30px;line-height: 30px;
    border-bottom: 1px dashed #eee;" v-for="(item, index) in liData" :key="index">
            <i class="new-i"></i>
            <div class="newduan">
              <a :href="item.link" target="_blank">{{item.title}}</a>
            </div>
            <span style="color: #ccc;float: right;margin-right: 10px;">{{item.time}}</span>
          </div>
        </div>
        <div class="more" @click="clickMore">更多</div>
      </div>
      <!--装卸货动态-->
      <div class="title-des" style="margin-top: 30px;">装卸货动态</div>
      <div style="background: #ffffff;border-radius: 6px;height: 410px;">
        <div style="height: 50px;line-height: 49px;border-bottom: 1px solid #ccc">
          <div style="display: inline-block" v-for="(item, index) in huo" :key="index" :class="{activeClass: sethuo == index}"
               :style="{width: huowidth + '%'}" @click="clickhuo(index)">{{item}}</div>
        </div>
        <!--通过element实现的提示框-->
        <!--<div class="huo-content">
          <div style="height: 30px;line-height: 30px;
    border-bottom: 1px dashed #eee;" v-for="(item, index) in huoData" :key="index">
            <i class="new-i"></i>
            <el-tooltip placement="top-start">
              <div slot="content">
                <span>{{item.name}}</span>
                <span>{{item.des}},</span>
                <span>前往{{item.port}}</span>
              </div>
              <div class="newhuoduan">
                <span>{{item.name}}</span>
                <span>{{item.des}},</span>
                <span>前往{{item.port}}</span>
              </div>
            </el-tooltip>
            &lt;!&ndash;<div class="newhuoduan">
              <span>{{item.name}}</span>
              <span>{{item.des}},</span>
              <span>前往{{item.port}}</span>
            </div>&ndash;&gt;
            <span style="color: #ccc;float: right;">{{item.time}}</span>
          </div>
        </div>-->
        <!--通过纯css实现的提示框-->
        <div class="huo-content">
          <div style="height: 30px;line-height: 30px;
    border-bottom: 1px dashed #eee;" v-for="(item, index) in huoData" :key="index">
            <i class="new-i"></i>
            <div class="tootlipsum">
              <div class="newhuoduan">
                <span>{{item.name}}</span>
                <span>{{item.des}},</span>
                <span>前往{{item.port}}</span>
              </div>
              <div class="tooltips">
                <span>{{item.name}}</span>
                <span>{{item.des}},</span>
                <span>前往{{item.port}}</span>
              </div>
            </div>
            <span style="color: #ccc;float: right;">{{item.time}}</span>
          </div>
        </div>
      </div>
      <!--微信-->
      <div style="border-radius: 6px;background: #ffffff;margin-top: 30px;padding: 20px;
    text-align: left;">
        <img src="./../../../../assets/wx.jpg" style="width: 160px;"/>
        <div style="float: right;text-align: center;margin-top: 55px;color: #409eff;">
          <div>关注订阅号</div>
          <div style="margin-top: 20px;">实时查询最新动态</div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      page: false,
      pageData: [], // 分页总数
      products: [
        /*{name: 'FMG粉'},
        {name: '卡拉加斯粉'},
        {name: '纽曼粉'},
        {name: 'PB粉'},
        {name: '金布巴粉'},
        {name: '巴西南部'}*/
      ],
      newtitle: ['周报', '日内快讯', '行业新闻'],
      huo: ['装货', '卸货'],
      setnew: 0,
      sethuo: 0,
      type: '周报',
      huotype: 'load',
      offset: 0,
      newWidth: 1 / 3 * 100,
      huowidth: 1 / 2 * 100,
      liData: [],
      huoData: []
    }
  },
  mounted () {
    this.reqDataton()
    this.reqDataNew()
    this.reqHuoData()
  },
  methods: {
    // 获取吨位数据
    reqDataton () {
      var me = this
      let products = 'FMG粉,PB粉,卡拉加斯粉,巴西南部粉,纽曼粉,金布巴粉,PB块,麦克粉,纽曼块,杨迪粉'
      let data = {products: products}
      let colors = ['#ea9549', '#f4d146', '#ff6559', '#ff7995', '#7297ff', '#6dda9b', '#d81818', '#84cefa']
      window.GO_UTIL.ajax('get', '/iron/index/products/import/ton', data, (err, result)=>{
        if (!err && !result.error) {
          console.log('resultright', result.data)
          let resultdata = result.data
          if (resultdata.length) {
            let length = resultdata.length
            if (length > 6) {
              me.page = false
              let onearr = []
              let color = 0
              for (let i = 0; i < resultdata.length; i++) {
                if (i % 6 === 0 && i > 0) {
                  me.pageData.push(onearr)
                  onearr = []
                  color = 0
                }
                let item = resultdata[i]
                let name = item.product
                let ton = (item.next_recent_ton / 10000).toFixed(0)
                let procolor = colors[color]
                onearr.push({
                  'name': name,
                  'ton': ton,
                  'color': procolor
                })
                color++
              }
              me.pageData.push(onearr)
            } else {
              me.page = true
              for (let i = 0; i < resultdata.length; i++) {
                let item = resultdata[i]
                let name = item.product
                let ton = (item.next_recent_ton / 10000).toFixed(0)
                let procolor = colors[i]
                me.products.push({
                  'name': name,
                  'ton': ton,
                  'color': procolor
                })
              }
            }
          }
        }
      })
    },
    // 新闻动态获取数据
    reqDataNew () {
      var me = this
      let data = {limit: 10, type: me.type, offset: me.offset}
      console.log('params:::', data)
      window.GO_UTIL.ajax('get', '/iron/index/iron/news', data, (err, result)=>{
        if (!err && !result.error){
          console.log('new:::',result.data)
          let resultdata = result.data
          for(let i = 0; i < resultdata.length; i++){
            let item = resultdata[i]
            let title = item.title
            let link = item.link
            let date = me.$moment(item.time).format('MM/DD')
            me.liData.push({
              'title': title,
              'link': link,
              'time': date
            })
          }
        }
      })
    },
    // 装卸货获取数据
    reqHuoData () {
      var me = this
      let data = {date: '2018-08-10', type: me.huotype}
      window.GO_UTIL.ajax('get', '/iron/index/loadOrUnload/news', data, (err, result)=>{
        if(!err&&!result.error){
          console.log('huo::',result.data)
          let huoresult = result.data
          for(let i = 0; i < huoresult.length; i++){
            let item = huoresult[i]
            let date = me.$moment(item.o_time).format('MM/DD hh:mm')
            let name = item.ship_name
            let port = me.$t('port.' + item.f_port)
            let shiptype = item.ship_type
            let des = ''
            if(shiptype === 'kszh'){
              des = '开始装货'
            }else if(shiptype === 'zhwc'){
              des = '装货完成'
            }else if(shiptype === 'ksxh'){
              des = '开始卸货'
            } else if(shiptype === 'xhdd') {
              des = '卸货等待'
            } else if(shiptype === 'xhwc'){
              des = '卸货完成'
            }
            me.huoData.push({
              'name': name,
              'des': des,
              'port': port,
              'time': date
            })
          }
        }
      })
    },
    // 点击新闻动态
    setnewli (index) {
      this.setnew = index
      this.liData = []
      this.offset = 0
      if (index === 0) {
        this.type = '周报'
      } else if (index === 1) {
        this.type = '日内快讯'
      } else {
        this.type = '行业新闻'
      }
      console.log('index', index)
      this.reqDataNew()
    },
    // 点击更多事件
    clickMore () {
      this.offset += 10
      this.reqDataNew()
    },
    clickhuo (index) {
      this.huoData = []
      this.sethuo = index
      if(index === 0){
        this.huotype = 'load'
      }else{
        this.huotype = 'unload'
      }
      this.reqHuoData()
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .title-des{margin-bottom: 20px;font-size: 18px;text-align: left;}
  .pro-right{border-radius: 6px;border:1px solid #ccc;width: 160px;
    height: 80px;padding: 10px 5px;font-size: 14px;
    float: left;margin-bottom: 20px;}
  .pro-right:nth-child(2n){float: right;}
  .newli:first-child{border-top-left-radius: 6px;}
  .newli:last-child{border-top-right-radius: 6px;}
  .activeClass{border-bottom: 2px solid #409eff;color: #409eff;background: rgb(231,243,255);font-weight: bold;}
  .new-content{margin-top:20px;max-height: 300px;overflow-x: hidden;overflow-y: scroll;text-align: left;padding: 0px 20px;font-size: 12px;}
  .new-content::-webkit-scrollbar {display: none;}
  .newduan{display: inline-block;width: 255px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
  .new-i{width: 4px;height: 4px;background: #409eff;float: left;margin-top: 12px;margin-right: 5px;}
  .more{text-decoration: underline;cursor: pointer;height: 50px;line-height: 45px;text-align: right;padding-right: 25px;font-size: 14px;}
  .huo-content{margin-top:20px;max-height: 300px;text-align: left;padding: 0px 20px;font-size: 12px;}
  .newhuoduan{width: 232px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;height: 14px;line-height: 14px;margin-top: 8px;}
  .tootlipsum{display: inline-block;position: relative;}
  .tootlipsum .tooltips {
    visibility: hidden;
    /*width:fit-content;
    width:-moz-fit-content;
    display: inline-block;*/
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;

    /* 定位 */
    position: absolute;
    /*left: 25%;*/
    /*margin-left: -60px;*/
    bottom: 110%;
    z-index: 1;
    white-space: nowrap;
  }
  .tootlipsum:hover .tooltips {
    visibility: visible;
  }
  .tootlipsum .tooltips::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
</style>
<style>
  .huadong .el-carousel__indicators .el-carousel__indicator .el-carousel__button{
    background-color: #ccc
  }
</style>
