<!--Created by win10 on 2018/6/22.-->
<template>
  <!--买家卖家-->
  <div class="leftBar leftHelpBar">
    <ul class="leftHelp_tab clearfix">
      <li v-for="(item, index) in items" :class="{onCur: iscur == index}" @click="setCur(index)" :key="index">{{ item.name }}</li>
    </ul>
    <ul class="help_list" v-for="(item, index) in items" :key="index" v-show="iscur == index">
      <li v-for="(item, index) in item.dataList" :key="index">
        <h3>{{item.title}}</h3>
        <span v-for="(item, subIndex) in item.content"
              :key="subIndex"
              :class="{curStyle: `${index},${subIndex}`== getcur}"
              @click="postCur(`${index},${subIndex}`)">
          {{ item.subTit }}
        </span>
      </li>
    </ul>
    <!--<ul class="help_list" v-for="(item, index) in items" :key="index" v-show="iscur == index">
      <li v-for="(item, index) in item.dataList" :key="index">
        <h3>{{item.title}}</h3>
        <span v-for="(item, subIndex) in item.content" :key="subIndex" :class="{curStyle: `${index},${subIndex}`== '0,0'}" @click="postCur(index)">
          {{ item.subTit }}
        </span>
      </li>
    </ul>-->

    <!--插槽-->
    <div style="background: red;height: 300px;">
      <h3>这里是父组件</h3>
      <child>
        <div class="tmpl" slot="up">
          <span>菜单1</span>
          <span>菜单2</span>
          <span>菜单3</span>
          <span>菜单4</span>
          <span>菜单5</span>
          <span>菜单6</span>
        </div>
        <div class="tmpl" slot="down">
          <span>菜单-1</span>
          <span>菜单-2</span>
          <span>菜单-3</span>
          <span>菜单-4</span>
          <span>菜单-5</span>
          <span>菜单-6</span>
        </div>
        <div class="tmpl">
          <span>菜单1</span>
          <span>菜单2</span>
          <span>菜单3</span>
          <span>菜单4</span>
          <span>菜单5</span>
          <span>菜单6</span>
        </div>
      </child>
    </div>
    <div>gundongtiao</div>
    <div style="width: 200px;height: 200px;background-color:#ccc;">
      <happy-scroll hide-vertical>
        <div class="con">
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
          <p>士大夫撒入个任务二个人合同不大废物个人都怕顺风耳个二级gap所爱速发sure欧若尔奥沙是否</p>
        </div>
      </happy-scroll>
    </div>
    <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
    <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
    <div style="height: 300px;">
      <el-select v-model="value5" collapse-tags multiple placeholder="请选择" @change="selectAll($event,'1')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-input v-model="input" placeholder="请输入内容" @change="changeCLick"></el-input>

    <div v-zhou="color" >百度</div>
    <div style="position: relative">
      <div @click="dianjiK">点击弹出对话框</div>
      <div class="box" v-show="tankuang" v-drag></div>
    </div>
    <div>{{items2[0].a}}</div>
    <div>
      价格：{{price|formatMoney}}
    </div>
    <div>
      订单状态：{{orderStatus | statusName}}
    </div>
    <div :title="name | capitalize">guchao</div>
  </div>
</template>

<script>
import Vue from 'vue'
import child from './jiaocheng.vue'
import HappyScroll from "../../node_modules/vue-happy-scroll/src/scroll";
let LEFT;
let TOP;
//指令的传参形式为<dialogo v-dialogdrag=" { target:'selector',container:'.box',dialogVisible:"传入对话框的visible变量" } "></dialog>
/*Vue.directive('dialogdrag',{
  inserted(el,binding){
    let container = el.querySelector(binding.value.container);
    let target = el.querySelector(binding.value.target);

    let temContainerWidth = getComputedStyle(container).width;
    let temHtmlWidth = getComputedStyle(document.firstElementChild).width;
    console.log(temContainerWidth,temHtmlWidth)
    if(temContainerWidth.indexOf('%') != -1){
      //百分值
      LEFT = (
          parseFloat(temHtmlWidth) -
          parseFloat(temHtmlWidth) * temContainerWidth.substring(0,temContainerWidth.length-1)/100
        )/2;
    }else if(temContainerWidth.indexOf('px') != -1){
      //像素值
      LEFT = (
          parseFloat(temHtmlWidth) -
          parseFloat(temContainerWidth)
        )/2;
    }else{
      //其他值
      throw ('对话框容器宽度只能为像素或百分比！')
    }
    console.log(temContainerWidth);
    console.log(temHtmlWidth);
    //
    let temMarginTop = getComputedStyle(container).marginTop;
    if(temMarginTop && temMarginTop.indexOf('px') != -1){
      //不为空并且以像素为单位
      TOP = parseFloat(temMarginTop);
    }else{
      throw ('请设置对话框容器上边距margin-top并以像素为单位！')
    }
    console.log(LEFT)
    //删除对话容器的行内样式（marginleft,margintop,marginbottom,marginrigth）;
    delete container.style.marginTop;
    delete container.style.marginLeft;
    delete container.style.marginRight;
    delete container.style.marginBottom;
    delete container.style.margin;
    //赋值给marginTop;marginLeft;
    container.style.marginTop = TOP+'px';
    container.style.marginLeft = LEFT+'px';

    //事件监听
    target.addEventListener('mousedown',function(event){
      //获取鼠标距离对话框容器的左上边距
      let leftValue = event.clientX - parseFloat(getComputedStyle(container).marginLeft);
      let topValue = event.clientY - parseFloat(getComputedStyle(container).marginTop);
      document.addEventListener('mousemove',moveFn,true)
      document.addEventListener('mouseup',upFn,true)
      function moveFn(event){
        console.log('还在移动')
        target.style.cursor = 'move';
        container.style.marginLeft = (event.clientX-leftValue)+'px';
        container.style.marginTop = (event.clientY-topValue)+'px';

      }
      function upFn(event){
        target.style.cursor = 'default';
        document.removeEventListener('mousemove',moveFn,true);
        //document.removeEventListener('mouseup',upFn);
      }
    })
  },
  componentUpdated(el,binding){
    if(binding.value.dialogVisible){
      //打开时还原对话框位置
      console.log(binding.value.container)
      el.querySelector(binding.value.container).style.marginTop = TOP+'px';

      el.querySelector(binding.value.container).style.marginLeft = LEFT+'px';

    }
  }
})*/
Vue.directive('zhou',function(el,binding){
  el.style="color:"+binding.value;
})
Vue.directive('drag', //自定义指令 拖动JS
  {
    bind: function(el, binding) {
      let oDiv = el; //当前元素
      let self = this; //上下文
      oDiv.onmousedown = function(e) {
        if (el.classList.contains('active')) {
          //鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX,
            disY = e.clientY, //当前xy坐标
            newS = oDiv.style.transform, //当前横移位置
            newL = Number(newS.substring(newS.indexOf('(') + 1, newS.indexOf('px'))),
            newT = Number(newS.substring(newS.lastIndexOf(',') + 1, newS.lastIndexOf('px')));
          document.onmousemove = function(e) {
            //通过事件委托，计算移动的距离
            let l = e.clientX - disX,
              t = e.clientY - disY;
            //移动当前元素
            oDiv.style.transform = 'translate(' + (newL + l) + 'px,' + (newT + t) + 'px)';
            oDiv.style.opacity = '.7';
            //将此时的位置传出去
            // binding.value({
            //   x: e.pageX,
            //   y: e.pageY
            // })
          };
          document.onmouseup = function(e) {
            oDiv.style.opacity = '1';
            document.onmousemove = null;
            document.onmouseup = null;
          };

        } else {
          return false;
        }
      };
    }
  }
)
export default {
  components: {
    HappyScroll,
    child},
  data () {
    return {
      options: [{
        value: '选项0',
        label: '所有选项'
      }, {
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      oldOptions: [['选项0','选项1','选项2','选项3','选项4','选项5']],
      value5: ['选项0','选项1','选项2','选项3','选项4','选项5'],
      iscur: 0,
      getcur: '0,0',
      items: [],
      radio1:'禁用',
      dataInfo: [
        {
          "name":"我是买家",
          "dataList":[
            {
              "title": "买家在线支付教程1",
              "content": [
                {
                  "subTit": "邮箱注册"
                },
                {
                  "subTit": "登录"
                }
              ]
            },
            {
              "title": "买家在线支付教程2",
              "content": [
                {
                  "subTit": "邮箱注册"
                },
                {
                  "subTit": "登录"
                }
              ]
            }
          ]
        },
        {
          "name":"我是卖家",
          "dataList":[
            {
              "title": "卖家在线支付教程111",
              "content": [
                {
                  "subTit": "邮箱注册22"
                },
                {
                  "subTit": "登录"
                }
              ]
            }
          ]
        }
      ],
      input: '',
      num:123,
      color:"red",
      tankuang: false,
      yaosuAddData:[
        {
          roadId: -1,
          oldOptions: [
            /*['全部桩号','P00001','P00002','P00003']*/
          ],
          quzhuang:[/*'全部桩号','P00001','P00002','P00003'*/],
          zhuangList:[
            /* {
             "region": "POINT(1 1)",
             "pileNo": "全部桩号"
             },
             {
             "region": "POINT(1 1)",
             "pileNo": "P00001"
             },
             {
             "region": "POINT(1 1)",
             "pileNo": "P00002"
             },
             {
             "region": "POINT(1 1)",
             "pileNo": "P00003"
             }*/
          ]
        }
      ],
      items2: [
        {'a': 'hello', 'b': [], 'c': [{'aa': 'hello'}]},
        {'a': 'hello', 'b': [], 'c': [{'aa': 'hello'}]},
        {'a': 'hello', 'b': [], 'c': [{'aa': 'hello'}]}],
      price:95,
      orderStatus:10,
      name: 'woshiguchao'
    }
  },
  mounted: function () {
    this.items = this.dataInfo
    this.test()
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  watch: {
    items2:{
      handler: function(cuVal,oldVal){
        console.log('jinlai',cuVal)
      }
    }
  },
  methods: {
    selectAll (val,index) {
      console.log(val,index)
      let allValues = []
      //保留所有值
      for (let item of this.options) {
        allValues.push(item.value)
      }

      // 用来储存上一次的值，可以进行对比
      const oldVal = this.oldOptions.length === 1 ? this.oldOptions[0] : []

      // 若是全部选择
      if (val.includes('选项0')) this.value5 = allValues

      // 取消全部选中  上次有 当前没有 表示取消全选
      if (oldVal.includes('选项0') && !val.includes('选项0')) this.value5 = []

      // 点击非全部选中  需要排除全部选中 以及 当前点击的选项
      // 新老数据都有全部选中
      if (oldVal.includes('选项0') && val.includes('选项0')) {
        const index = val.indexOf('选项0')
        val.splice(index, 1) // 排除全选选项
        this.value5 = val
      }

      //全选未选 但是其他选项全部选上 则全选选上 上次和当前 都没有全选
      if (!oldVal.includes('选项0') && !val.includes('选项0')) {
        console.log(11)
        if (val.length === allValues.length - 1) this.value5 = ['选项0'].concat(val)
      }

      //储存当前最后的结果 作为下次的老数据
      this.oldOptions[0] = this.value5
    },
    setCur: function (index) {
      console.log('index1',index)
      this.iscur = index
    },
    test: function () {
      var md5test = this.$md5('hello')
      console.log(md5test)
    },
    /*postCur (`${index},${subIndex}`) {
      console.log('index2',index)
      this.getcur = index
    }*/
    postCur: function (index) {
      console.log('index2',index)
      this.getcur = index
    },
    changeCLick(e){
      console.log('eee',e)
    },
    dianjiK(){
      this.tankuang = true
      this.$set(this.items2[0],'c',{'a': 'world'})
      this.items2.splice(0,1)
      //this.items2[0].a = 'world'
    },
  }
}
</script>
<style scoped>
.onCur{color: red}
  .curStyle{
    color: #409eff;}
  .box{
    width: 300px;height: 300px;position: absolute;background-color: red
  }
</style>
