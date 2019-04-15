<!--Created by win10 on 2018/8/17.-->
<template>
    <div style="margin-top: 50px">
      <titlestyle :titileString='"about.aboutgo"' ></titlestyle>
      <div class="text">
        <p>沸腾环贸是基于航运和贸易大数据，针对全球大宗商品交易提供信息服务的产品。沸腾环贸是博懋信（北京）科技有限公司旗下的产品之一。</p>
        <p>沸腾环贸是将航运数据与贸易数据完美结合的典范。为大宗商品的现货和期货交易提供信息支持。</p>
        <p>沸腾环贸来自于Go-Go，起源于20世纪70年代，指的是激荡火热的舞蹈。</p>
        <p style="margin-top: 40px">Go-Go引申的含义 —— 沸腾环贸寓意着客户生意兴隆、赚大钱、迅猛发展的良好祝愿。</p>
      </div>
      <div style="position: relative;margin-bottom: 50px;min-width: 1200px">
        <div class="imgcontent">
          <img src="./../../assets/picture-bg1.jpg"/>
          <img src="./../../assets/picture-bg2.jpg"/>
          <img src="./../../assets/picture-bg3.jpg"/>
        </div>
        <div style="position: absolute;width: 100%;top: 0">
          <div class="kuang" style="margin-top: 45px">
            <div class="kuang1">
              <div style="padding-top: 55px;font-size: 16px">热火朝天</div>
            </div>
            <div><span class="spanstyle">实时</span>大量信息，前沿技术</div>
          </div>
          <div class="kuang">
            <div class="kuang2">
              <div style="padding-top: 80px;font-size: 16px">高回报投资</div>
            </div>
            <div><span class="spanstyle">准确</span>而超前的指数</div>
          </div>
          <div class="kuang" style="margin-top: 45px">
            <div class="kuang1">
              <div style="padding-top: 55px;font-size: 16px">迅猛发展</div>
            </div>
            <div><span class="spanstyle">美好</span>的祝愿-客户迅猛发展</div>
          </div>
        </div>
      </div>
      <titlestyle :titileString='"about.contact"' ></titlestyle>
      <div class="last">
        <div>
          <img src="./../../assets/tel.png"/>
          <span style="font-weight: bold">电话：</span>010-62682266-815
        </div>
        <div>
          <img src="./../../assets/info.png"/>
          <span style="font-weight: bold">邮箱：</span>
          business@gogotrade.info
        </div>
        <div>
          <img src="./../../assets/address.png"/>
          <span style="font-weight: bold">地址：</span>
          北京市朝阳区裕民路12号中国国际科技会展中心A1808
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import titlestyle from './../headtail/homehead.vue'
export default {
  components: {titlestyle},
  data () {
    return {}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .text{width: 880px;margin: auto;text-align: left}
  .text > p{font-size: 14px;color: #999999;line-height: 28px;margin-top: 16px}
  .imgcontent{text-align: left;font-size: 0;margin-top: 20px;overflow: hidden}
  .imgcontent>img{width: 33.3%}
  .kuang{width: 33.3%;float: left;color: #ffffff}
  .kuang1{background: url("./../../assets/graymini.png");background-repeat: no-repeat;width: 125px;height: 145px;margin: auto}
  .kuang2{background: url("./../../assets/gray.png");background-repeat: no-repeat;width: 150px;height: 190px;margin: auto}
  .spanstyle{color: rgb(64, 158, 255);font-weight: bold;text-decoration: underline;font-size: 14px}
   img:hover{transform: scale(1.02);}
  .last{width: 880px;margin: auto;text-align: left;color: #999999;font-size: 14px;line-height: 30px;margin-bottom: 100px}
  .last div> span{margin-left: 5px;margin-right: 5px;color: rgb(102, 102, 102)}
</style>
