/**
 * Created by win10 on 2018/6/19.
 */
/*let a = () =>{
  setTimeout(() => {
    console.log('任务队列函数1')
  },0)
  for(let i = 0; i < 20; i++){
      console.log('a的for循环')
  }
  console.log('a事件执行完')
}
let b = () =>{
  setTimeout(() =>{
    console.log('2')
  },0)
  for(let i = 0; i < 20; i++){
      console.log('b的循环')
  }
  console.log('b事件执行完')
}
let c = () =>{
  setTimeout(() =>{
    console.log('3')
  },0)
  for(let i = 0; i < 20; i++){
    console.log('c的循环')
  }
  console.log('c事件执行完')
}
a()
b()
c()*/
/*var a = {name:'haha'};
var b = a;
a.name = 'wo'
console.log(b)*/
/*
if(a.age){
  console.log('ok')
}
console.log('hhah')
*/
//1把原始数据改了
/*var a = [{name:'gu',age:'18'},{name:'gu',age:'19'},{name:'gu',age:'20'}]
var b = [];
b = a
b[0].name = 'chao'
console.log(a)*/

//2这样赋值不改变原始数据
/*var a = [{name:'gu',age:'18'},{name:'gu',age:'19'},{name:'gu',age:'20'}]
var b = [];
for (let i=0;i<a.length;i++){
  b.push({
    name:a[i].name,
    age:a[i].age
  })
}
b[0].name = 'chao'
console.log(a,b)*/
// var a = 'I\'m guchao'
// console.log(a)
// var s = "test";
// s.len = 4;
// var t = s.len
// console.log(t)
var a = [],b=[];
// console.log(a===b)
function equalarrays(a,b) {
  if(a.length != b.length) return false;
  for (var i = 0;i<a.length;i++){
    if(a[i]!== b[i]){
      console.log('false')
      return false
    }
  }
  console.log('true')
  return true
}
// equalarrays([],[])
// console.log(Date.now())
// import moment from './moment'
var moment = require("./moment");
// console.log('1',moment(new Date()).startOf('day'))//
// console.log('2',moment().startOf('week'))
// /console.log(moment().subtract(1, 'years'))
// console.log(moment(new Date()).format('YYYY-MM-DD'))
let start_date = moment().subtract(1,'weeks')
let end_date = moment();
/*console.log(start_date,end_date)
console.log(end_date.diff(start_date))
console.log(end_date.diff(start_date,'months'))
console.log(end_date.diff(start_date,'weeks'))
console.log(end_date.diff(start_date,'days'))
console.log(start_date.diff(end_date,'days'))*/
// var a = '2015-11-30T16:00:00.000Z'
// console.log(moment(a).format('YYYY-MM'))
var arr = [
  {id:'pb粉',value:'21.3'},
  {id:'pb块',value:'28.9'},
  {id:'麦克',value:'15'},
  {id:'阿特',value:'12.1'},
  {id:'买片',value:'34'}
]
var newarr = []
//a-b是由小到大
function sequence(a,b){
  return a.value - b.value;
}
arr.sort(sequence)
// console.log(arr);
/*newarr = arr.map((item) =>{
  return[item.id]
})
console.log(newarr)*/
/*var exdate = new Date()
console.log('1',exdate)
//向后推了100年
exdate.setTime(exdate.getTime() + 24*3600*1000*36500)
console.log('2',exdate)*/
var data = moment([2018, 6, 23]).add(1, 'months')
// console.log(moment(data).format('YYYY-MM-DD'))
var date = "2016-01-24T16:00:00.000Z"
var  beginUnixTime = new Date(date).getTime();
var currentUnixTime = beginUnixTime;
var endUnixTime = moment(beginUnixTime).add(7,'days').unix()*1000;
while(currentUnixTime<endUnixTime){
  var dt = moment(currentUnixTime).format('YYYY-MM-DD');
  // console.log(dt)
  currentUnixTime+= 24*3600*1000;
}
// console.log(moment('2016-01-31T16:00:00.000Z').format('YYYY-MM-DD'))
var zh = {
  global:{
    iron: 'tie'
  },
  home: {
    home1: 'wo'
  }
}
// console.log(Object.assign(zh))
var shan = ['h','aa','aaaa','v']
var aa = ['h','aa','aaaa','v']
var ss = aa.sort().slice(0,3)
// console.log(ss)
var result = {
    "data_sum": {
      "region": [
        {
          "regionCode": "CHNCJR",
          "ton": 163127532.299
        },
        {
          "regionCode": "CHNC",
          "ton": 163127532.299
        },
        {
          "regionCode": "JR",
          "ton": 163127532.299
        }
      ],
      "region_total": 406964782.492
    },
    "data_month": {
      "region": {
        "sub": [
          {
            "regionCode": "CHNCJR",
            "ton": 27926213.11,
            "tongbi": 53.696941,
            "huanbi": 14.939775
          },
          {
            "regionCode": "CHNC",
            "ton": 27926213.11,
            "tongbi": 53.696941,
            "huanbi": 14.939775
          },
          {
            "regionCode": "JR",
            "ton": 27926213.11,
            "tongbi": 53.696941,
            "huanbi": 14.939775
          }
    ],
        "total": {
            "ton": 78711962.03,
            "lfl": 28.67398676544937,
            "mom": 3.3958569006892327
        }
      }
    },
    "data_week": {
      "region": {
        "sub": [
          {
            "regionCode": "CHNCJR",
            "ton": 8507443.04,
            "tongbi": 50.930567,
            "huanbi": -0.924759
          },
          {
            "regionCode": "CHNC",
            "ton": 8507443.04,
            "tongbi": 50.930567,
            "huanbi": -0.924759
          },
          {
            "regionCode": "JR",
            "ton": 8507443.04,
            "tongbi": 50.930567,
            "huanbi": -0.924759
          }
        ],
        "total": {
          "ton": 23369641.87,
            "lfl": 19.010561209460636,
            "mom": -1.1738681437973562
        }
      }
  }
}
var imdataSum = {}
var regionsum = []//总数
var imdataMonth = {}
var immonth = []//上月地区
var imdataWeek = {}
var imweek = [] //上周地区
//处理总数
imdataSum['region_total'] = result.data_sum.region_total
for(let i = 0; i < result.data_sum.region.length; i++){
  let item = result.data_sum.region[i]
    regionsum.push(item)
}
imdataSum['region'] = regionsum
// console.log(imdataSum)

//处理上月数据
for(let i = 0; i < result.data_month.region.sub.length; i++){
    let item = result.data_month.region.sub[i]
  immonth.push(item)
}
imdataMonth['sub'] = immonth
imdataMonth['total'] = result.data_month.region.total
// console.log(imdataMonth)

//处理上周数据
for(let i = 0; i < result.data_week.region.sub.length; i++){
    let item = result.data_week.region.sub[i]
  imweek.push(item)
}
imdataWeek['sub'] = imweek
imdataWeek['total'] = result.data_week.region.total

//
var current = new Date().getTime()
var before = moment(current).subtract(21, 'days')

// console.log(moment(current).format('YYYY-MM-DD'), moment(before).format('YYYY-MM-DD'))
var ee = 11 / 3
// console.log(parseInt(ee))
var a = [1,2,3]
// console.log(a[3])
var time = moment().format('LLL')
// console.log(time)
/*var d = new Date()
let year = d.getFullYear()
let months = d.getMonth() + 1
let day = d.getDate()
let hour = d.getHours()
let min = d.getMinutes()
let sec = d.getSeconds()
let week = moment().format('dddd')*/
// var st = year + '年' + months + '月' + day + '日' +hour + '时' + min + '分' + sec + '秒' + ',' +week
// console.log(st)
var time = moment('2018-07-29T16:00:00.000Z').format('YYYY-MM-DD')
 var aaaa = time.split('-')
var hhh = aaaa[0] + '年' + aaaa[1] + '月' + aaaa[2] + '日'
// console.log(hhh)
var p ={a:1}
var q = Object.assign({}, this.p, {c: 3})
// console.log(q)
var aw= [1]
aw[0] = 2
// console.log(aw)
var mo = moment().format('MMM Do')
// console.log(mo)
var d = new Date()
// let year = d.getFullYear()
let hao = d.getTime()
let months = d.getMonth() + 1
let day = d.getDate()
let afterone1 = moment().add(7, 'day');
let afterone2 = moment().add(6, 'day')
var st = months + '月' + day + '日'
// console.log(st)
var trya = moment('2018-07-29T16:00:00.000Z').format('M月D日'); //2014年10月01日 
// console.log(trya)
let startweek = moment().startOf('isoWeek').unix();
let limit = 4
let timtarr = []
for(let i = 0; i < limit; i++){
    let begin = startweek * 1000 + 7*i*24*3600*1000
  let end = begin + 6*24*3600*1000
  let beginmonth = new Date(begin).getMonth() + 1
  let beginday = new Date(begin).getDate()
  let beginst = beginmonth + '月' + beginday + '日'
  let endmonth = new Date(end).getMonth() + 1
  let endday = new Date(end).getDate()
  let endst = endmonth + '月' + endday + '日'
  timtarr.push({'begin':beginst,'end':endst})
}
console.log(timtarr)

