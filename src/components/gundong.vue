<!--Created by win10 on 2018/6/27.-->
<template>
  <div class="vueBox" >
    <div class="marquee">
      <div class="marquee_title">
        <span>最新战报</span>
      </div>
      <div class="marquee_box">
        <ul class="marquee_list" ref="element" :style="{ top: -num + 'px'}">
          <li v-for="(item, index) in marqueeList" :key="index">
            <span>{{item.name}}</span>
            <span>在</span>
            <span class="red">{{item.city}}</span>
            <span>杀敌</span>
            <span class="red">{{item.amount}}</span>
            <span>万</span>
          </li>
          <li v-for="(item, index) in marqueeList" :key="index + 'f'">
            <span>{{item.name}}</span>
            <span>在</span>
            <span class="red">{{item.city}}</span>
            <span>杀敌</span>
            <span class="red">{{item.amount}}</span>
            <span>万</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      setOptime: '',
      num: 0,
      marqueeList: [
        {
          name: '1军',
          city: '北京',
          amount: '10'
        },
        {
          name: '2军',
          city: '北京',
          amount: '10'
        },
        {
          name: '3军',
          city: '北京',
          amount: '10'
        },
        {
          name: '4军',
          city: '北京',
          amount: '40'
        },
        {
          name: '5军',
          city: '北京',
          amount: '40'
        },
        {
          name: '6军',
          city: '北京',
          amount: '50'
        },
        {
          name: '7军',
          city: '北京',
          amount: '60'
        }
      ]
    }
  },
  created: function () {
  },
  mounted () {
    this.showMarquee(this.num)
    console.log(this.$refs['element'].offsetHeight)
  },
  computed: {
    max () {
      return this.$refs['element'].offsetHeight / 2
    }
  },
  methods: {
    showMarquee: function (num) {
      this.setOptime = setInterval(() => {
        num++
        if (num >= this.max) {
          num = 0
        }
        this.num = num
      }, 50)
    }
  },
  beforeDestroy () {
    clearInterval(this.setOptime)
  }
}
</script>

<style scoped>
  div,ul,li,span,img{
    margin:0;
    padding:0;
    display: flex;
    box-sizing: border-box;
  }
  .marquee{
    width: 100%;
    height: 50px;
    align-items: center;
    color: #3A3A3A;
    background-color: aqua;
    display: flex;
    box-sizing: border-box;
  }
  .marquee_title{
    padding: 0 20px;
    height: 30px;/*关键样式*/
    font-size: 14px;
    border-right: 1px solid #d8d8d8;
    align-items: center;
  }
  .marquee_box{
    display: block;
    position: relative;
    width: 60%;
    height: 60px;/*关键样式*/
    overflow: hidden;
  }
  .marquee_list{
    position: absolute;
    top:0;
    left: 0;
    display: block;
  }
  .marquee_top{transition: top 0.5s ;}/*关键样式*/
  .marquee_list li{
    height: 30px;/*关键样式*/
    line-height: 30px;/*关键样式*/
    font-size: 14px;
    padding-left: 20px;
    background-color: #fff;
  }
  .marquee_list li span{
    padding:0 2px;
  }
  .red{
    color: #FF0101;
  }
</style>
