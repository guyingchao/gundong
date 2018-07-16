<!--Created by win10 on 2018/7/13.-->
<template>
    <div>
      <div class="index-title">
        <div style="padding-top: 130px;width: 800px;margin: auto">
          <div style="font-size: 38px;font-family: impact;font-weight: bolder;">GO-GO  <span style="color: #409EFF">基于海运大数据</span>  分析大宗商品贸易</div>
          <div style="border-top: 3px solid #409EFF;padding-bottom: 18px;margin-left: 156px;width: 280px;"></div>
          <div style="font-family: ArialMT;font-size: 14px;">Go-Go Analyzes Commodity Trading Based On Maritime Big Data</div>
          <ul class="group">
            <li>
              <i class="iconfont icon-ironstone"></i>
              <div class="kuang" style="margin-top: 16px;font-size: 12px;width: 66px;height: 24px;border: 1px solid" @click="tie">铁矿石</div>
            </li>
            <li>
              <i class="iconfont icon-meitan"></i>
              <div class="kuang">煤炭</div>
            </li>
            <li>
              <i class="iconfont icon-yuanyouhangqing"></i>
              <div class="kuang">原油</div>
            </li>
            <li style="border-right: 0;">
              <img style="padding-bottom: 16px" src="./../assets/logo-w.png"/>
              <div style=""></div>
            </li>
            <li style="border-left: 1px solid" >
              <i class="iconfont icon-chengpinyou"></i>
              <div class="kuang">成品油</div>
            </li>
            <li>
              <i class="iconfont icon-beans"></i>
              <div class="kuang">大豆</div>
            </li>
            <li style="border-right: 0">
              <i class="iconfont icon-yumi"></i>
              <div class="kuang">玉米</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-content">
        <!--1200的第一部分-->
        <div class="content1">
          <i></i>
          <div style="font-size: 24px;color: #666666;">铁矿石数据服务</div>
          <i></i>
        </div>
        <div style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 70px">Iron Ore Data Service</div>
        <div class="desdata">
          <div class="tu">
            <img src="./../assets/clock.png">
            <div class="tutitle1">历史数据</div>
            <div class="tutitle2">海关数据 + 航运数据</div>
          </div>
          <div style="margin-left: 204px;margin-right: 204px" class="tu">
            <img src="./../assets/deng.png">
            <div class="tutitle1">预测数据</div>
            <div class="tutitle2">航线数据 + AI预测</div>
          </div>
          <div class="tu">
            <img src="./../assets/route.png">
            <div class="tutitle1">航线</div>
            <div class="tutitle2">BCI航线 + 实时AIS</div>
          </div>
        </div>
        <!--1200的第二部分-->
        <div class="content1">
          <i></i>
          <div style="font-size: 24px;color: #666666;">数据特色</div>
          <i></i>
        </div>
        <div style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 70px">Data Features</div>
        <div class="pgroup">
          <img style="padding-right: 300px" src="./../assets/computer.png"/>
          <p class="p1">Go-Go 基于海运大数据分析大宗商品贸易</p>
          <p class="p2">Go-Go 基于船舶轨迹预测未来贸易走向</p>
          <p class="p3">Go-Go 建立大宗商品现货和期货的桥梁</p>
          <p class="p4">Go-Go 真实数据给您交易的细节</p>
          <p class="p5">Go-Go 为现货和期货交易提供依据</p>
        </div>
      </div>
      <div class="index-tail">
        <div style="padding-top: 50px;width: 1200px;text-align: center;margin: auto">
          <div class="content1">
            <i></i>
            <div style="font-size: 24px;color: #666666;">服务客户</div>
            <i></i>
          </div>
          <div style="font-size: 16px;color: #E6E6E6;margin-top: 5px;margin-bottom: 90px">Customer Service</div>
          <div class="cus-tu">
            <div class="customdes">产业链企业</div>
            <!--<div style="font-size: 12px;color: #ffffff;">Traders</div>-->
          </div>
          <div style="margin-right: 124px;margin-left: 124px" class="cus-tu">
            <div class="customdes">贸易商</div>
            <!--<div style="font-size: 12px;color: #ffffff;">Traders</div>-->
          </div>
          <div class="cus-tu">
            <div class="customdes">期货参与者</div>
            <!--<div style="font-size: 12px;color: #ffffff;">Traders</div>-->
          </div>
        </div>
      </div>
      <homehead :titileString="stringtitle"></homehead>
    </div>
</template>

<script type="text/ecmascript-6">
import homehead from './headtail/homehead.vue'
export default {
  components: {homehead},
  data () {
    return {
      stringtitle: 'guchao'
    }
  },
  methods: {
    tie () {
      this.$router.push('./ironore')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .index-title{
    font-family: "Microsoft YaHei";
    color: #ffffff;
    background-image: url("./../assets/bg1.jpg");
    width: 100%;
    height: 500px;
    min-width: 1200px;
    /*background-size: 100% 100%;*/
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    .group{
      list-style: none;
      margin-top: 50px;
      font-size: 0;
      li{
        display: inline-block;
        width: 100px;
        text-align: center;
        border-right: 1px solid;
        padding-top: 5px;
        i{
          font-size: 24px;
        }
        .kuang{
          margin: auto;
          margin-top: 16px;
          font-size: 12px;
          width: 66px;
          height: 24px;
          line-height: 24px;
          border: 1px solid;
          border-radius: 20px;
          cursor: pointer;
        }
        .kuang:hover{
          /*opacity: 0.8;background: #ffffff;不可以用，它也会作用于子元素的*/
        background: rgba(255, 255, 255, 0.3)
        }
      }
      li:hover>i{
        font-size: 26px!important;
      }
      li:hover>.kuang{
        margin-top: 14px!important;
      }
    }
  }
  .index-content{
    font-family: "Microsoft YaHei";
    margin: auto;
    margin-top: 40px;
    width: 1200px;
    text-align: center;
    .content1{
      position:relative;
      i{
        width: 420px;
        height: 1px;
        background: #cccccc;
        position: absolute;
        display: inline-block;
      }
      i:first-child{
        top:16px;
        left:0;
      }
      i:last-child{
        right: 0;
        top: 16px;
      }
    }
    .desdata{
      margin-bottom: 70px;
      .tu{
        display: inline-block;
        font-weight: 600;
        .tutitle1{
          font-size: 16px;
          color: #666666;
          margin-top: 20px
        }
        .tutitle2{
          font-size: 12px;color: #999999;margin-top: 8px
        }
      }
      .tu:hover>img{
        transform: scale(1.4);
      }
    }
    .pgroup{
      position: relative;
      margin-bottom: 70px;
      p{
        position: absolute;
      }
      .p1{
        top: 17px;
        left: 563px;
      }
      .p2{
        top: 61px;
        left: 597px;
      }
      .p3{
        top: 106px;
        left: 605px;
      }
      .p4{
        top: 155px;
        left: 600px;
      }
      .p5{
        top: 200px;
        left: 568px;
      }
    }
  }
  .index-tail{
    font-family: "Microsoft YaHei";
    background-image: url("./../assets/bg2.png");
    width: 100%;
    height: 464px;
    min-width: 1200px;
    /* background-size: 100% 100%; */
    background-repeat: no-repeat;
    background-position: center;
    .content1{
      position:relative;
      i{
        width: 420px;
        height: 1px;
        background: #cccccc;
        position: absolute;
        display: inline-block;
      }
      i:first-child{
        top:16px;
        left:0;
      }
      i:last-child{
        right: 0;
        top: 16px;
      }
    }
    .cus-tu{
      width: 190px;
      height: 190px;
      display: inline-block;
      background-image: url("./../assets/gray.png");
      background-repeat: no-repeat;
      background-position: center;
      .customdes{
        font-size: 16px;color: #ffffff;margin-bottom: 20px;margin-top: 83px;
      }
    }
  }
</style>
