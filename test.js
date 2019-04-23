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
//var a = [],b=[];
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
// console.log(timtarr)
//浅复制
let target = {a: 123};
let source1 = {b: 456};
let source2 = {c: 789};
// let obj = Object.assign(target, source1, source2);
// console.log(obj);
// 深复制
let obj = {
  a: 123,
  b: {
    c: 456,
    d: {
      e: 789
    }
  }
};
let copy = JSON.parse(JSON.stringify(obj));
// 对obj对象无论怎么修改，都不会影响到copy对象
obj.b.c = 'hello';
obj.b.d.e = 'world';
// console.log(copy);
var kuang = moment('2018-07-29').format('MM月DD日'); //2014年10月01日 
// console.log(kuang)
let zhou = moment().startOf('isoWeek').format('YYYY-MM-DD');
let end = moment().endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
let onestart = moment().add(7, 'day').startOf('isoWeek').format('YYYY-MM-DD');
let oneend = moment().add(7, 'day').endOf('isoWeek').format('YYYY-MM-DD HH:mm:ss');
// console.log(onestart,oneend)
let geshi = moment("2018-08-06 01").format('MM月DD日 HH:mm')
// console.log(geshi)
var aarray = [{'id':'1','name':'guchao'}]
var barray = [{'id':'2','name':'guchao'}]
aarray.concat(barray)
// console.log(aarray)
// console.log('hahhah',moment().format('dddd'))
var sleep = function (time) {
  return new Promise(function (resolve,reject) {
    setTimeout(function () {
      // resolve('ok')
      reject('error')
    },time)
  })
};
var start = async function () {
  try {
    console.log('start')
    await sleep(3000)
    console.log('end')
  } catch (err) {
    console.log(err)
  }
  /*let result = await sleep(3000);
  console.log(result)*/
};
// start()
//立即执行函数
/*(function (a) {
  console.log(a);
})(123);*/
/*async function timeout() {
  return 'hello world'
}
console.log(timeout())
timeout().then(result =>{
  console.log(result)
})
console.log('我虽然在后面，但是我先执行了')*/
/*function double(num) {
  return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      resolve(2*num)
    },2000);
  })
};
(async function () {
  let result1 = await double(30);
  console.log(result1)
  let result2 = await double(20);
  let result3 = await double(10);
  console.log(result1,result2,result3)
})()*/
const getRandom = ()=> +(Math.random()*1000).toFixed(0);
function test(taskid) {
  new Promise((resolve)=>{
    let timeout = getRandom();
    console.log(`taskid=${taskid} start.`)
    setTimeout(function () {
      console.log(`taskid=${taskid} finish in time=${timeout}`)
    },timeout)
  })
}
/*Promise.all([test(1),test(2),test(3)]).then(
  result =>{
    console.log('results:',result)
  }
)*/

var gu = ['a,','b','c']
// console.log(gu.reverse())
var da = '2016-02-21T16:00:00.000Z'

// var con = moment(da).format('YYYY-MM-DD')
var currenttime = moment(da).unix()*1000
var endtime = moment(da).add(6,'day').unix()*1000
console.log(currenttime,endtime,moment(currenttime).format('YYYY-MM-DD'))
while (currenttime < endtime){
  // console.log(moment(currenttime).format('YYYY-MM-DD'))
  currenttime += 24*60*60*1000
}
// console.log(con)
let objtry = {}

// console.log(objtry)
var string = 'var returnCitySN = {"cip": "218.247.161.212", "cid": "110000", "cname": "北京市"};'
var split1 = string.split('= ')[1]
var split2 = split1.split(';')
// console.log(JSON.parse(split2[0]))
var asy = ['a','b','c','d']
var addasy = asy.map((v, i) => Object.assign({}, {v: v, position: String.fromCharCode(65+i) + 1 }))
  .reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});
// console.log(addasy)
var a = {
  1: {'a': 'a'},
  2: {'a': 'a'}
}
delete a[1]
var day1 = moment(new Date('2018/11/06')).startOf('day').unix()
var day2 = moment().unix()
// console.log('day1',day1,day2)
// var duan = "120.631779|30.050923#120.619696|30.055179#120.622350|30.060534#120.624704|30.064292#120.626252|30.063942"
// duan.replace(/|/g,",")
// console.log(spli.split("|",3))
var splice1 = ['George','John','William','Thomas','James','Adrew']
splice1.splice(0,1)
console.log(splice1)
console.log(splice1.slice(0,1))
var spli = "yyyy|MM|dd|hh|mm|ss"
// console.log(spli.split("|",3))
// console.log(spli.replace(/\|/g,","))
function printArr(arr,n,res) {
  for(let i = 0; i < arr[i].length; i++){
      if(n==0){
         res = []
        console.log('jinlai')
      }
      if(n<arr.length){
          var _res = res.slice()
        _res.push(arr[n][i])
        if(n == arr.length - 1){
            console.log(_res)
        }else{
          printArr(arr,n+1,_res)
        }
      }
  }
}

var arrtes = [[1,2],[3,4],[5,6]]
// printArr(arrtes,0)
let miao = 1541966400000
var shijian = moment(miao).format('YYYY-MM-DD HH:mm:ss')
// console.log(shijian)
var dd = moment("12-25-1995", "MM-DD-YYYY");// new Date()
// console.log(dd)
// console.log(dd.getDate())
var tesss = "115.331496,38.9485129001184|115.3269449,38.9490046001185|115.3243881,38.9492808001185"
console.log(tesss.split('|'))
console.log(tesss)
var arrest = [0,1]
// console.log(arrest.indexOf(0))
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var a = fruits.indexOf("Apple");
let pileNos = fruits
// pileNos.splice(pileNos.indexOf('Apple'),1)
fruits.splice(fruits.indexOf('Apple'),1)
// console.log(fruits)
// console.log('hao',pileNos)
// console.log(a)
var myreginData = [
  {
    "bufferRegionId": "A00001",
    "bufferRegionName": "停车困难区域",
    "elementRegion":"POINT(1 1,5 1,5 5,1 5,1 1)",
    "bufferRegion": "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2))",
    "lastTime":"2018-11-14 16:01",
    "bufferRegionArea":500
  },
  {
    "bufferRegionId": "A00001",
    "bufferRegionName": "停车困难区域",
    "elementRegion":"POINT(1 1,5 1,5 5,1 5,1 1)",
    "bufferRegion": "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2))",
    "lastTime":"2018-11-14 16:01",
    "bufferRegionArea":400
  },
  {
    "bufferRegionId": "A00001",
    "bufferRegionName": "停车困难区域",
    "elementRegion":"POINT(1 1,5 1,5 5,1 5,1 1)",
    "bufferRegion": "POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2))",
    "lastTime":"2018-11-14 16:01",
    "bufferRegionArea":600
  }
  ]
myreginData.sort(function (a,b) {
  return a.bufferRegionArea - b.bufferRegionArea
})
// console.log(myreginData)
var testarr = ['1','2']
// console.log(['全部桩号'].concat(testarr))
// console.log(testarr.includes('1'))
var strrr = 1
// console.log(strrr.toString())
let at = []
let objj = {
  roadId: 1,
  oldOptions: [['全部桩号']],
  quzhuang:['全部桩号'],
}
at.push(objj)
// console.log(at[0].roadId)
var fruitss = [{"Banana":"Banana"}, {"Orange":"Orange"}, {"Apple":"Apple"}, {"Mango":"Mango"}];
function hou(array,index) {
  let len = array.length - 1
  if(index === len){
    return array
  }else{
    let as = array.splice(index,1)
    array.splice(index+1,0,as[0])
    return array
  }
}

function qian(array,index) {
  let len = array.length - 1
  if(index === 0){
    return array
  }else{
    let as = array.splice(index,1)
    array.splice(index-1,0,as[0])
    return array
  }
}
// var houdata = hou(fruitss,1)
var qiandata = qian(fruitss,2)
// console.log(qiandata)
// console.log(houdata)
// var as = fruitss.splice(1,1)
// console.log(as[0],fruitss)
// fruitss.splice(2,0,as[0])
// console.log(fruitss)
let want = []
var parse = require('wellknown');
var te = 'MULTIPOLYGON (((116.94354628825756 39.40967317273517, 116.94350193342757 39.40932157030449, 116.94337000731356 39.40898343630055, 116.94315558086777 39.408671764742174, 116.94286689511823 39.40839853257044, 116.9425150443583 39.40817423944578, 116.9421135497592 39.40800750432794, 116.94167783979802 39.40790473433009, 116.94122465746204 39.4078698785616, 116.94077141699269 39.40790427640925, 116.94033553486433 39.40800660608063, 116.93993376067708 39.408172935385146, 116.93958153364751 39.408396872802925, 116.93929238940079 39.408669813043204, 116.93907743984401 39.40898126766496, 116.9389449461032 39.409319268065715, 116.93890000094073 39.40967082536368, 116.93894433287561 39.410022429510036, 116.93907623955936 39.410360568457016, 116.9392906529979 39.41067224743332, 116.93957933414339 39.410945488368505, 116.93993118940341 39.411169790267984, 116.94033269692167 39.41133653283613, 116.94076842625418 39.411439307825574, 116.94122163146467 39.41147416536696, 116.94167489482918 39.41143976580364, 116.94211079638778 39.41133743118918, 116.94251258358229 39.411171094466795, 116.94286481521588 39.41094714828557, 116.94315395496254 39.41067419927046, 116.94336889160013 39.41036273719836, 116.94350136596955 39.41002473180604, 116.94354628825756 39.40967317273517)), ((117.36651910050645 39.38631792314121, 117.36647263888298 39.38596648855274, 117.36633871852196 39.38562884036917, 117.3661224869999 39.38531795392982, 117.36583225469404 39.385045775997874, 117.36547917530942 39.384822765718056, 117.36507681721164 39.38465749275391, 117.36464064204449 39.384556308035854, 117.36418741066217 39.384523099762085, 117.3637345391883 39.38455914401884, 117.36329942992282 39.384663055754835, 117.36289880277863 39.384830841991175, 117.36254805291092 39.385056055225235, 117.36226065919993 39.385330041139206, 117.3620476663017 39.38564227110459, 117.36191726016602 39.385980746715845, 117.36187445334042 39.38633246081896, 117.36192089217144 39.38668389732733, 117.36205479333798 39.38702155062383, 117.36227101218564 39.38733244459074, 117.36256124026681 39.38760463131888, 117.36291432451956 39.38782765032437, 117.36331669583721 39.387992930615276, 117.36375289056332 39.38809412014574, 117.36420614486607 39.38812732998492, 117.36465903913235 39.38809128380825, 117.36509416759233 39.38798736695934, 117.36549480741093 39.38781957319543, 117.36584556150335 39.38759435116519, 117.36613295034618 39.38732035652555, 117.36634593002452 39.3870081192334, 117.36647631660125 39.38666963880974, 117.36651910050645 39.38631792314121)))'
var endu = parse(te).coordinates.toString()
var enduarr = endu.split(',')
for(let i = 0; i < enduarr.length/2; i++){
  want.push(enduarr.splice(0,2))
  // console.log(enduarr.length)
}
// console.log("tag", want)

// console.log(parse('MULTIPOINT ((117.32089682555599 39.111833254555606), (117.322024164556 39.1116270355556), (117.346562462333 40.030178415666704), (117.347726489333 40.0297398486667))'));
/*var daa = [
  {'last':'2018-11-23 10:00'},
  {'last':'2018-11-23 12:59'},
  {'last':'2018-11-23 11:08'},
  ]
daa.sort(function (a,b) {
  // return moment(a.last).unix()-moment(b.last).unix()
  return new Date(b.last).getTime() - new Date(a.last).getTime()
})*/
// console.log(daa)
// console.log(db)
var tiget = '2018-11-23 10:00'
// console.log(moment(tiget).unix())
// console.log(new Date(tiget).getTime())
let wantar = []
let en = [ [ 117.32089682555599, 39.111833254555606 ],
  [ 117.322024164556, 39.1116270355556 ],
  [ 117.346562462333, 40.030178415666704 ],
  [ 117.347726489333, 40.0297398486667 ] ]
en.forEach(function (item, index) {
  let obj = {
    'evalue': item[0],
    'nvalue': item[1]
  }
  wantar.push(obj)
})
// console.log(wantar)
let testt = [117.32089682555599, 39.111833254555606,117.322024164556, 39.1116270355556]
// console.log('jinlai',testt.splice(0,2),testt)
let warra = []
let leng = testt.length/2
for(let i = 0; i < leng; i++){
  warra.push(testt.splice(0,2))
  // console.log(testt,testt.length)
}
// console.log('jin',warra)
var testpoint = 'POINT (-116.94671630859374 39.34810449643777)'
var jsonge = parse.parse(testpoint)
// console.log(jsonge,parse.stringify(jsonge))
let index = 1
var targetArr = [[[0,1],[0,2]]]
targetArr[0][index][0] = 1
// console.log(targetArr)
function formatDegree(value){
  var v1,v2,v3
  let values = Math.abs(value)
  v1 = Math.floor(values); //度
  let fen = (values - v1) * 60
  v2 = Math.floor(fen); //分
  v3 = Math.round((fen - v2) * 60); //秒
  if(value > 0){
    return v1 + "°" + v2 + "'" + v3 + '"';
  }else{
    return -v1 + "°" + v2 + "'" + v3 + '"';
  }
}
console.log('hello',formatDegree('-117.59709'))
var endata = [
  {evalue: '117.13974828515614', nvalue: '39.16511179109776'},
   {evalue: '117.13974828515614', nvalue: '39.16511179109776'},
   {evalue: '117.13974828515614', nvalue: '39.16511179109776'},
]
/*endata.forEach(function (item,index) {
  item.evalue = formatDegree(item.evalue)
})
console.log(endata)*/
let sto = JSON.parse(JSON.stringify(endata))
sto.forEach(function (item, index) {
  item.evalue = '1'
})
// endata = []
// console.log('sto',sto,endata)
let eri = '-117°35\'50\"'
let fuhao = eri.slice(0,1)
// console.log(fuhao,eri)
/*function f() {
  console.log(this.x);
}
f();
var x = 2;
var ax = {x: 1};
ax.f = f;
var bx = ax.f;
ax.f();
bx();*/

var one = ['1','2','3','4']
var two = ['6','2','3','7']
for(let i = 0; i < one.length; i++){
    let item = one[i]
  for(let i = 0; i < two.length; i++){
      let titem = two[i]
      if(item === titem){
        //console.log('jnlai:::')
        break
      }
  }
}
var
  rs,
  arrs = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
rs = arrs.filter((el,index,self) => {
  return self.indexOf(el) === index
})
// console.log(rs)
//筛选出质数
function zhishu(arr) {
  return arr.filter(function (x) {
    var r = true;
    if(x===1){//将1排除
      r = false;
    }else{
      for(let i=2;i<=Math.sqrt(x);i++){//质数判断算法，以平方根为条件，循环次数最少
        if(x%i===0){//只要出现一次整除情况即停止循环
          r = false;
          break;
        }
      }
    }
    return r;
  });
}
var arrt = [];
for (x = 1; x < 100; x++) {
  arrt.push(x);
}
// console.log(zhishu(arrt))
// var arr0 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr0.map(String));
var one1 = [{evalue: '117.13974828515614', nvalue: '39.16511179109776'}]
var one2 = one1
one2 = [{'a':1}]
// console.log(one1,one2)
function product(arr) {
  return arr.reduce(function (x, y) {
    return x * y;
  });
}
/*if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
  console.log('测试通过!');
}
else {
  console.log('测试失败!');
}*/
let ooo = '13579'
/*let arryy = ooo.split('')
arryy.reduce(function (x,y) {
  return x*10+y
})
console.log('3'*10)*/
function snumber(s) {
  let arr = s.split('')
  return arr.map(function (x) {
    return x-0
  }).reduce(function (x,y) {
    return x*10+y
  })
}
// console.log(snumber(ooo))
function normalize(arr) {
  return arr.map(function(x){
    return x.toLowerCase().replace(/\b[a-z]/g,function(s){
      console.log(s)
      return s.toUpperCase();})
  });
}
/*if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
  console.log('测试通过!');
}
else {
  console.log('测试失败!');
}*/
function foo(a,b,...rest) {
  console.log('a='+a)
  console.log('b='+b)
  console.log(rest)
}
// foo(1,2,3,4,5)
let bian = {
  fuzhi:function () {
    console.log('jinlai')
  }
}

var copy1 = bian.fuzhi
bian.fuzhi = function () {
  console.log('bian')
}
// console.log(copy1.toString(),JSON.stringify(bian.fuzhi))
var arr0 = [[1], 2, [3]];
var arr1 = arr0.pop()
// arr1[0] = 0
console.log('arrrr',arr1,arr0)
// console.log(arr0 instanceof Array)
// arr0.splice(arr0.length-1,1)
// console.log(arr0)
/*arr0.forEach(function (item,index) {
  item = item+'1'
})*/
// console.log(arr0)
/*function shenru(){
  var args = Array.prototype.slice.call(arguments);
  console.log(args instanceof Array)
}*/
// shenru(1,2,3)
var ary = [1,23,4];
function isArray(o){
  return Object.prototype.toString.call(o)==='[object Array]';
}
console.log(isArray(ary));
// console.log(Array.isArray(ary))
// 浅拷贝实现，仅供参考
/*function shallowClone(source) {
  if (!source || typeof source !== 'object') {
    throw new Error('error arguments');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for (var keys in source) {
    if (source.hasOwnProperty(keys)) {
      targetObj[keys] = source[keys];
    }
  }
  return targetObj;
}
var shaow = {'a':'guchao'}
var shaow1 = shallowClone(shaow)*/
// console.log(shaow === shaow1)
// shaow1.a = 'chaoziya'
// console.log(shaow)
// 递归实现一个深拷贝
/*function deepClone(source){
  if(!source || typeof source !== 'object'){
    throw new Error('error arguments', 'shallowClone');
  }
  var targetObj = source.constructor === Array ? [] : {};
  for(var keys in source){
    if(source.hasOwnProperty(keys)){
      if(source[keys] && typeof source[keys] === 'object'){
        targetObj[keys] = source[keys].constructor === Array ? [] : {};
        targetObj[keys] = deepClone(source[keys]);
      }else{
        targetObj[keys] = source[keys];
      }
    }
  }
  return targetObj;
}
// test example
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o3 = deepClone(o1);
console.log(o3 === o1); // => false
console.log(o3.obj === o1.obj); // => false
console.log(o3.func === o1.func); // => true*/
function deepClone(source){
  return JSON.parse(JSON.stringify(source));
}
var o1 = {
  arr: [1, 2, 3],
  obj: {
    key: 'value'
  },
  func: function(){
    return 1;
  }
};
var o2 = deepClone(o1);
// console.log(o2);
/*async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('settimeout')
})
async1()
new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})*/
// console.log('script end')
var abc = ['A', 'B', 'C'];
abc.name = 'Hello';
/*for (var x in abc) {
  console.log(x); // '0', '1', '2', 'name'
}*/
for (var x of abc) {
  // console.log(x); // '0', '1', '2', 'name'
}
// console.log('abs:',abc)
// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);
// using setTimeout we can execute code after the stack is empty
/*setTimeout(function() {
  console.log(p);
  console.log(p2);
  console.log(p3);
});*/
//模拟ajax异步操作1
function ajax1() {
  const p = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('ajax 1 has be loaded!')
    }, 1000)
  })
  return p

}
//模拟ajax异步操作2
function ajax2() {
  const p = new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('ajax 2 has be loaded!')
    }, 2000)
  })
  return p
}
function ajax3() {
  return 'ajax3'
}
//等待两个ajax异步操作执行完了后执行的方法
const myFunction = async function() {
  const x = await Promise.all([ajax1(),ajax2(),ajax3()])
  /*const x = await ajax1()
  const y = await ajax2()
  const z = await ajax3()*/
  //等待两个异步ajax请求同时执行完毕后打印出数据
  console.log(x)
}
// myFunction()
var lineInfoList =  [
  {
    "lineName": "123路",
    "lineDir": 0
  },
  {
    "lineName": "123路",
    "lineDir": 0
  }
]
let reu = lineInfoList.map((el)=>{
  return el.lineName
})
// console.log(reu)
let totalnum = 0
var bcyData = [
  {
    color:'#D3576F',
    value:'58101',
    name:'单车停车数量',
  },
  {
    color:'#57D5AE',
    value:'63841',
    name:'单车到达数量',
  },
  {
    color:'#D5C458',
    value:'36264',
    name:'单车出发数量',
  },
]
let reqarr = []
let newar = bcyData.map((el)=>{
  return {
    'color':el.color,
    'value':el.value,
    'name':el.name,
  }
})
// console.log(newar)
var te = ['698']
var len = te.length -1
var str = ''
var yao = te.map((el,index)=>{
  if(index === len){
    str+=el
  }else{
    str+=(el + '|')
  }
  return str
})
// console.log(yao[yao.length -1])
let motimt = '10:00'
// console.log(moment(motimt).('hh:mm'))
var timsor = ['00:00','01:00','5:50','4:30']
var zong = timsor.concat(timsor)
console.log(zong)
function time_to_min(time) {
  var m = '';
  var hour = time.split(':')[0];
  var min = time.split(':')[1];
  m = Number(hour*60) + Number(min);
  return m;
}
timsor.sort(function (a,b) {
  return time_to_min(a) - time_to_min(b)
})
// console.log(timsor)
let re1 = [0,1,2,3,4]
let res1 = re1.splice(0,3)
// console.log(res1)
let data1 = [20, 40, 30, 50, 70]
// console.log(getMaxOfArray(data1))
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
//moment().format('MMMM Do YYYY, h:mm:ss a'); // 一月 7日 2019, 2:13:21 下午
// console.log(moment('2018-12-30').format('E').replace('7', 'ri'));
// console.log(moment('2018-12-30').unix(),moment('2018-12-29').unix())
let cal_time = [1,2,3,4]
let saveh = cal_time.splice(0,2);
console.log(saveh,cal_time)
let str222 = '一类客运班线'
// console.log(str222.substring(0,2))
function sum(arr,item) {
  var newarr = arr.slice(0)
  newarr.unshift(item)
  return newarr
}
// console.log(sum([1, 3,4],2))
function duplicates(arr,target) {
  var newarr = arr.filter(function(item,index){
    return item === target
})
  return newarr;
}
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3],1))
function aq(){
  console.log(':::',this)   //输出函数a中的this对象
}
function bq(){}

var cq={name:"call"};    //定义对象c

// aq.call();   //window
//a.call(null);   //window
//a.call(undefined);   //window
//a.call(1);   //Number
// a.call('');   //String
// a.call(true);   //Boolean
aq.call(bq);   //function b(){}
// a.call(c);   //Object
function Animal(){
  this.name="animal";
  this.showName=function(){
    console.log(this.name);
  }
}
function Dog(){
  this.name="dog";
}
var animal=new Animal();
var dog=new Dog();

// animal.showName.call(dog);
function class1(){
  this.name=function(){
    console.log("我是class1内的方法");
  }
}
function class2(){
  this.name = 'guchao'
  class1.call(this);  //此行代码执行后，当前的this指向了class1（也可以说class2继承了class1）
}

var f=new class2();
f.name();

var bar=function(){
  console.log(this.x);
}
var foo={
  x:3
}
var func=bar.bind(foo);
// func();
var urltest = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'.split('?')
// console.log(urltest[1])
function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
    if(result[k] !== void 0){
      var t = result[k];
      result[k] = [].concat(t,v);
    }else{
      result[k] = v;
    }
  });
  if(sKey === void 0){
    return result;
  }else{
    return result[sKey] || '';
  }
}

/*function getUrlParam(sUrl, sKey) {
  var param = sUrl.split('#')[0].split('?')[1];
  if (sKey){//指定参数名称
    var strs = param.split('&');
    var arrs = [];//如果存在多个同名参数，则返回数组
    for(var i = 0, len = strs.length; i < len; i++){
      var tmp = strs[i].split('=');
      if(tmp[0] == sKey){
        arrs.push(tmp[1]);
      }
    }
    if (arrs.length == 1){//返回该参数的值或者空字符串
      return arrs[0];
    } else if (arrs.length == 0){
      return "";
    } else {
      return arrs;
    }
  } else {//不指定参数名称，返回全部的参数对象 或者 {}
    if(param == undefined || param == ""){
      return {};
    } else {
      var strs = param.split('&');
      var arrObj = new Object();
      for(var i = 0, len = strs.length; i < len; i++){
        var tmp = strs[i].split('=');
        if (!(tmp[0] in arrObj)) {
          arrObj[tmp[0]] = [];
        }
        arrObj[tmp[0]].push(tmp[1]);
      }
      return arrObj;
    }
  }
}*/
// console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
var str = "a1ba2b";
var reg = /a.b/g;
str = str.replace(reg,function(a,b,c){
  //console.log(a);
  //console.log(b);
  //console.log(c)
  return b == 0 ? a.replace("a","0") : a.replace("b","3");
});
//console.log(str);
// console.log([].concat([1,2],3))
function parse2Int(num) {
  return parseInt(num,10);
}
// console.log(parse2Int('12px'))
function identity(val1, val2) {
  return Object.is(val1, val2);
}
// console.log(identity(NaN,NaN))
function count(start, end) {
//立即输出第一个值
  console.log(start++);
  var timer = setInterval(function(){
    if(start <= end){
      console.log(start++);
    }else{
      clearInterval(timer);
    }
  },100);
  //返回一个对象
  return {
    cancel : function(){
      clearInterval(timer);
    }
  };
}
// count(1,10)
/*function fizzBuzz(num) {
  if(num === ''||typeof(num)!=='number'){
    return false
  } else if(num%3===0&&num%5===0){
    return 'fizzbuzz'
  } else if(num%3===0){
    return 'fizz'
  } else if(num%5===0){
    return 'buzz'
  } else {
    return num
  }
}*/
function fizzBuzz(num) {
  if(num == null || typeof num != "number")
    return false;
  else if(num%3 == 0 && num%5 == 0)
    return "fizzbuzz";
  else if(num%3 == 0)
    return "fizz";
  else if(num%5 == 0)
    return "buzz";
  else return num;
}
// console.log(fizzBuzz('15'))
function argsAsArray(fn, arr) {
  return fn.apply(this,arr)
}
var daibiao = function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}
// console.log(argsAsArray(daibiao,['Hello', 'Ellie', '!']))
/*
var animals = [
  {species: 'Lion', name: 'King'},
  {species: 'Whale', name: 'Fail'}
];
for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log('#' + i  + ' ' + this.species + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
*/
/*function functionFunction(str) {
  var ret = Array.prototype.slice.call(arguments).join(', ');
  var temp = function(str) {
    console.log('ret:::',ret)
    console.log('arguments:::',arguments)
    ret = [ret, Array.prototype.slice.call(arguments).join(', ')].join(', ');
    return temp;
  };
  temp.toString = function(){
    return ret;
  };
  return temp;
}*/
// console.log(functionFunction('a')('b')('c'))
/*function makeClosures(arr, fn) {
  var result = []
  for(var i =0;i<arr.length;i++){
    (function(i){
      result.push(
        function (){
            return fn.call(null,arr[i])
        }
      )
    })(i)

  }
  console.log(result[1](),fn(arr[1]))
  return result
}*/
//自己写的通过的
function makeClosures(arr, fn) {
  var result = []
  for(var i =0;i<arr.length;i++){
    result.push(
      fn.bind(null,arr[i])
    )
  }
  console.log(result[1](),fn(arr[1]))
  return result
}
makeClosures([1,2,3],function (x){
    return x*x
})
var namess = "The Window";
var objects = {
  namess : "My Object",
  //console.log('bind',global.namess)
  getNameFunc : function(){
    return function(){
      console.log(this.toString())
      return this.namess;
    };
  }
};
var name = "The Window";
/*var objects = {
  name : "My Object",
  getNameFunc : function(){
    var that = this;
    return function(){
      console.log(this.toString())
      return that.name;
    };
  }
};*/
console.log(objects.getNameFunc()());
var timetest = moment(new Date()).format('YYYY-MM-DD')
// console.log(moment(('2019-01-26 08:00')).unix())

// 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 1、返回一个函数 result，该函数接受一个参数
// 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
/*function partial(fn, str1, str2) {
var args = Array.prototype.slice.call(arguments,1)
  var result = function () {
    var args_fn = Array.prototype.slice.call(arguments)
    return fn.apply(null,args.concat(args_fn))
  }
  return result
}
var sayIt = function(greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!');
};
console.log('::::',partial())*/

// 实现函数 callIt，调用之后满足如下条件
// 1、返回的结果为调用 fn 之后的结果
// 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
/*function callIt(fn) {
  var args = Array.prototype.slice.call(arguments,1)
  return fn.apply(null,args)
}
console.log(':::',callIt(function () {

}))*/

/*//手动柯里化函数
已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数*/
/*function curryIt(fn) {
  var a = function(str1){
    return function b(str2){
      return function c(str3){
        return fn.call(null,str1,str2,str3)
      }
    }
  }
  return a
}*/
function curryIt(fn) {
  //获取fn参数的数量
  var n = fn.length;
  //声明一个数组args
  var args = [];
  //返回一个匿名函数
  return function(arg){
    //将curryIt后面括号中的参数放入数组
    args.push(arg);
    //如果args中的参数个数小于fn函数的参数个数，
    //则执行arguments.callee（其作用是引用当前正在执行的函数，这里是返回的当前匿名函数）。
    //否则，返回fn的调用结果
    if(args.length < n){
      return arguments.callee;
    }else return fn.apply("",args);
  }
}
//不用匿名函数
/*function curryIt(fn) {
  var n = fn.length;
  var args = [];
  var result = function(arg){
    args.push(arg);
    if(args.length < n){
      return result;
    }else {
      return fn.apply("",args);
    }
  }
  return result
}*/
//不用arguments.callee的方法
/*function curryIt(fn) {
  var length = fn.length,
    args = [];
  var result =  function (arg){
    args.push(arg);
    length --;
    if(length <= 0 ){
      return fn.apply(this, args);
    } else {
      return result;
    }
  }

  return result;
}*/

var fn = function (a, b, c) {return a + b + c};
// console.log(curryIt(fn)(1)(2)(3))
function or(a, b) {
  return a&&b
}
// console.log(or(3,true))
function createModule(str1, str2) {
  return obj = {
    greeting: str1,
    name: str2,
    sayIt:function(){
      return this.greeting+','+this.name
    }
  }
}
// console.log(JSON.stringify(createModule('gu','chao')))
/*function valueAtBit(num, bit) {
  var numb = num.toString(2)
  console.log('num:::',numb)
  var arr = numb.split('')
  console.log(arr)
  // var arr = numb.split('').reverse()
  return arr[bit-1]
}*/
function valueAtBit(num, bit) {
  return (num >> (bit -1)) & 1;
}
console.log('jinlai',valueAtBit(128,8))
// let jin = 10000000
// console.log('jinlai',jin.toString().split(''))
/*function convertToBinary(num) {
  var numb = num.toString(2)
  console.log('num:::',numb)
  while (numb.length < 8){
    numb='0'+numb
  }
  return numb
}
console.log(convertToBinary(65))*/
function multiply(a, b) {
return a*b
}
// console.log(multiply(3, 0.0001))
function containsNumber(str) {
  var arr = str.split('')
  for(var i = 0;i<arr.length;i++){
    var item = arr[i]
    if(!isNaN(parseInt(item))){
      console.log('jinlai::;')
      return true
    }
  }
  return false
}
// console.log(containsNumber('abc'))
function endsWithVowel(str) {
  var arr = str.slice(-1)
  var last = arr.toLowerCase()
  var arr2 = ['a','e','i','o','u']
  if(arr2.indexOf(last)!==-1){
    return true
  } else{
    return false
  }
}
// console.log(endsWithVowel('gorillb'))
function Find(target, array) {
  for(let i = 0; i < array.length; i++){
    let item = array[i]
    for(let j = 0; j < item.length; j++){
        let item2 = item[j]
      if(item2 === target){
          return true
      }
    }
  }
  return false
}
// console.log(Find(6,[[1,2,4],[2,3,5]]))
function replaceSpace(str) {
  // write code here
  // return str.replace(/ /g,'%20')
  var need = ''
  var arr = str.split('')
  arr.forEach((item)=>{
    if(item === ' '){
        need+='%20'
    } else {
      need+=item
    }
  })
  return need
}
// console.log(replaceSpace('we are '))
// console.log(('we are ').split(''))
//节点
function Node(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}
//链表类
function LList () {
  this.head = new Node( 'head' );     //头节点
  this.find = find;                   //查找节点
  this.insert = insert;               //插入节点
  // this.remove = remove;               //删除节点
  // this.findPrev = findPrev;           //查找前一个节点
  this.display = display;             //显示链表
}
//查找给定节点
function find ( item ) {
  var currNode = this.head;
  while ( currNode.element != item ){
    currNode = currNode.next;
  }
  return currNode;
}
//插入节点
function insert ( newElement , item ) {
  var newNode = new Node( newElement );
  var currNode = this.find( item );
  newNode.next = currNode.next;
  currNode.next = newNode;
}
//显示链表元素
function display () {
  var currNode = this.head;
  while ( !(currNode.next == null) ){
    console.log(':::', currNode.next.element );
    currNode = currNode.next;
  }
}
var fruits = new LList();
// fruits.insert('Apple' , 'head');
// fruits.insert('Banana' , 'Apple');
// fruits.insert('Pear' , 'Banana');
// fruits.display()
function c2(){
  this.a = 37
  // return {b:38}
}
var o = new c2()
// console.log(o.a)
function mFunction(c, d) {
  return this.a + this.b + c+d;
}
var myObject     // 返回 20
// console.log(mFunction.call(myObject, 10, 2))
var name = "The Window";
var object = {
  name : "My Object",
  getNameFunc : function(){
    return function(){
      console.log('this',this===global,global.name)
      return this.name;
    };
  }
};

// console.log('h',object.getNameFunc()());
/*console.log([3,4,5,1,2].reduce(function(pre,cur){
  return pre>cur?cur:pre
}))*/
function Power(base, exponent) {
  // write code here
  var need=1
  if(exponent === 0){
    return 1
  } else if(exponent>0){
    console.log('jin')
    for(var i = 0;i<exponent;i++){
      need*=base
    }
    return need
  } else if(exponent<0){
    var zheng = -exponent
    var shu = 1
    for(var i = 0;i<zheng;i++){
      shu*=1/base
    }
    return shu
  }
}
// console.log('result',Power(2,3))
var ex = 5
// console.log(ex >>=2)
var ayear = '2014年'
// console.log(ayear.slice(0,4))
var whitwlist = '192.168.0.1,198.192.0.2,190.198.0.3'
// console.log(whitwlist.split(','))
// var whitearr = [ '192.168.0.1', '198.192.0.2', '190.198.0.3' ]
// console.log(whitearr.splice(1,1),whitearr)
var whitearr = ['']
let whitestr = ''
let whilen = whitearr.length-1
whitearr.map((item,index)=>{
  if(index == whilen){
    whitestr+=item
  } else {
    whitestr+=item+','
  }
})
// console.log(whitestr)
console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))

var timecon="2016-12-29 15:39:33";

var datecon = new Date(timecon);
// console.log(datecon)
/*
var removeDuplicates = function(nums) {
  var temp = []
  for(var i = 0; i < nums.length; i++){
    if(temp.indexOf(nums[i]) == -1){
      temp.push(nums[i]);
    }
  }
  return temp;
};
*/
// console.log(removeDuplicates([1,1,1,2,3]))
// console.log([1,2,3].slice())
//数组去重
function quchong(arr) {
  let arr1 = []
  for(let i = 0; i < arr.length; i++){
    if(arr1.indexOf(arr[i])===-1){
      arr1.push(arr[i])
    }
  }
  return arr1
}
var counByApiList = [
  {
    "name": "test",
    "count": 23,
    "dateTime": "2019-02-26"
  },
  {
    "name": "baidu",
    "count": 14,
    "dateTime": "2019-02-27"
  },
  {
    "name": "baidu",
    "count": 0,
    "dateTime": "2019-02-26"
  },
  {
    "name": "test",
    "count": 0,
    "dateTime": "2019-02-27"
  },
  {
    "name": "test",
    "count": 0,
    "dateTime": "2019-02-28"
  },
  {
    "name": "baidu",
    "count": 0,
    "dateTime": "2019-02-28"
  }
]
let arrall = []
counByApiList.sort((a,b)=>{
  return moment(a.dateTime).unix() - moment(b.dateTime).unix()
})
// console.log(counByApiList)
// var timeArr = []
// var nameArr = []
// counByApiList.map((item,index)=>{
//   timeArr.push(item.dateTime)
//   nameArr.push(item.name)
// })
// let timeArr1 = quchong(timeArr)//横坐标
// let nameArr1 = quchong(nameArr)
// console.log(timeArr1,nameArr1)
var objneed = {}
for(let i = 0; i < counByApiList.length; i++){
  let item = counByApiList[i]
  if(objneed[item.name]){
    objneed[item.name].push(item.count)
  } else {
    objneed[item.name] = []
    objneed[item.name].push(item.count)
  }
}
// console.log(objneed)
var removeDuplicates = function(nums) {
  /*var temp = []
  for(let i = 0; i < nums.length; i++){
    if(temp.indexOf(nums[i]) === -1){
      temp.push(nums[i]);
    }
  }
  return temp;*/
  if (nums.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// console.log(removeDuplicates([1,1,2]))
var maxProfit = function(prices) {
  var tepnum = 0
  for(let i = 0; i < prices.length; i++){
    for(j = i+1;j<prices.length;j++){
      var num = 0
      let k = i
      let m = j
      while(m<prices.length){
        if(prices[m]>prices[k]){
          num+=(prices[m]-prices[k])
          k = m+1
          m = m+2
        } else{
          m++
        }
      }
      tepnum = tepnum>=num?tepnum:num
    }
  }
  return tepnum
};
// console.log('shuchu',maxProfit([6,1,3,2,4,7]))
// var solarr = [1,2,3,4,5,6,7]
// console.log(solarr.splice(-3).concat(solarr))
var rotate = function(nums, k) {
  // let arr = nums.splice(-k)
  //  nums.unshift(...arr)
  let newnums = nums.splice(nums.length - k, k)
  nums.unshift(...newnums)
  return nums
};
// console.log(rotate([1,2],3))
var containsDuplicate = function(nums) {
  for(let i = 0;i<nums.length;i++){
    let j = i+1
    while(j<nums.length){
      if(nums[j]===nums[i]){
        return true
      } else {
        j++
      }
    }
  }
  return false

};
// console.log(containsDuplicate([1,2,3,4,1]))
var singleNumber = function(nums) {
  return nums.reduce((pre,cur)=>pre^cur)
};
// const singleNumber = nums => nums.reduce((prev, cur) => prev ^ cur);
console.log(singleNumber([2,2,1]))
// console.log(2^3^2)
  /*[0, 1, 2, 3, 4].reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
})*/
var plusOne = function(digits) {
  var len = digits.length-1
  var last = Number(digits[len]) + 1
  digits.splice(len,1)
  digits.push(last)
  return digits
};

console.log(plusOne([1,2,3]))
// console.log(6145390195186705000+1)
var name3 = "the window"
var obj22={
  name3:'myobject',
  getName: function () {
//          var me = this
    return function () {
      return this.name3
    }
  }
}
console.log(obj22.getName()())
var nnnn = 0
// console.log(nnnn++)
var reverseString = function(s) {
  let newS = ""
  for(let i=s.length-1; i>=0; i--) {
    newS +=s[i]
  }
  return newS
};
// console.log(reverseString('guchoa'))
function jian3(arr){
  /*var tepmarr = []
  arr.sort((a,b)=>{
      return a-b
  })
  for(let i = 0; i < arr.length; i++){
      if(arr[i]===arr[i+1]){
        return true
      }
  }
  return false*/
  var len = arr.length
  if(len===0){
      return false
  }
  for(let i = 0; i < len; i++){
      if(arr[i]<0||arr[i]>len -1){
          return false
      }
  }
  for(let i = 0; i < len; i++){
      while(arr[i]!=i){
        console.log('jinlai')
        if(arr[i]===arr[arr[i]]){
            return true
        }else{
        let tem = arr[arr[i]]
          arr[arr[i]]=arr[i]
          arr[i] = tem
        }
      }
      console.log('arr::::',arr)
  }
  return false
}
// console.log('result',jian3([2,3,1,1,2,5,3]))
//不修改数组找出重复的数字
function countfun(arr,start,end){
  let leng = arr.length
  let count = 0
  for(let i = 0; i < leng; i++){
      if(arr[i]>=start&&arr[i]<=end){
          count++
      }
  }
  return count
}
function jian32(arr) {
  /*var temp1arr = []
  var chongzi = []
  for(let i = 0; i < arr.length; i++){
    if(temp1arr.indexOf(arr[i])===-1){
      temp1arr.push(arr[i])
    }else{
      return true
    }
  }
  return false*/
  var len = arr.length
  let star = 1
  let end = len-1
  while(end >=star){
    let middle = ((end-star)>>1)+star
    let count = countfun(arr,star,middle)
    if(end === star){
        if(count>1){
            return star
        }else{
         break
        }
    }
    if(count >(middle-star+1)){
        end = middle
    }else{
    star = middle +1
    }
  }
  return -1
}
// console.log(jian32([1,2,3,4,5,6,7,7]))
function jian4(arr,number) {
  let rows = arr.length
  let columns = arr[0].length
  let row = 0
  let column = columns-1
  while (row<rows&&column>=0){
    if(arr[row][column] === number){
        return true
    }else if(arr[row][column] > number){
      --column
    } else {
      ++row
    }
  }
  return false
}
// console.log(jian4([[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]],3))
function jian5(str) {
  return str.replace(/ /g,'%20')
}
// console.log(jian5('we are happy'))
function mySort() {
  var tags = new Array();//使用数组作为参数存储容器
  let arr = Array.prototype.slice.call(arguments)
  arr.sort((a,b)=>{
    return a-b
  })
  tags = arr
  return tags;//返回已经排序的数组
}

var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
// console.info(result);//显示结果
function myreplace(str) {
  let arr = str.split('')
  let strs = ''
  arr.forEach((item,index)=>{
    if(item === ' '){
      strs+='%20'
    } else {
      strs+=item
    }
  })
  return strs
}
// console.log(myreplace('we are happy'))
function myPai(arr1,arr2) {
  let q = arr1.length+arr2.length - 1
  let p = arr1.length - 1
  let number = arr2.length - 1
  while (number>=0){
    if(arr1[p]<arr2[number]){
      arr1[q] = arr2[number]
      q--
      number--
    } else {
      if(p<0){
        arr1[q] = arr2[number]
        number--
        q--
      } else {
        arr1[q] = arr1[p]
        p--
        q--
      }
    }
  }
  return arr1
}
// console.log('mypai',myPai([1,2,4],[2,2,4,6]))//1,2,2,3,4,4
// console.log(myPai([1,2,4],[3,4,5,6]))
function ListNode(x){
  this.val = x;
  this.next = null;
}
/**
 * 创建链表，
 * 返回链表第一个节点的地址
 * @returns {null|ListNode}
 */
function getList(){
  let head = new ListNode(null);
  let tmp = head;
  for(let i=0; i<1; i++){
    tmp.next = new ListNode(i);
    tmp = tmp.next;
  }
  return head.next;
}
let diarr = []
function digui(head) {
  if(head!=null){
    if(head.next!=null){
      digui(head.next)
    }
    diarr.push(head.val)
  }
  return diarr
}
let node = getList();
// console.log(digui(node))
function deleteLian(head,delnode) {
  if(!head||!delnode){
    return;
  }
  //要删除的节点不是尾节点
  if(delnode.next!=null){
    delnode.val = delnode.next.val
    delnode.next = delnode.next.next
  } else if(head === delnode){
    //只有一个节点
    head = new ListNode(null)
  } else {
    //多个节点的尾节点(还是需要遍历的)
    let tmpnode = head
    while (tmpnode.next!=delnode){
      tmpnode = tmpnode.next
    }
    tmpnode.next = null
  }
  return head
}
// console.log(deleteLian(node,node))
Array.prototype.distinct = function() {
  var ret = [];
  for (var i = 0; i < this.length; i++)
  {
    for (var j = i+1; j < this.length;) {
      if (this[i] === this[j]) {
        ret.push(this.splice(j, 1)[0]);
      } else {
        j++;
      }
    }
  }
  return ret;
}
//for test
// console.log(['a','b','c','d','b','a','e'].distinct());
function fn2(){
  for(var i=0;i<4;i++){
    var tc=setInterval(function(i,tc){
      console.log(i,tc);
      clearInterval(tc)
    },3000,i,tc);
  }
}
// fn2()
function zifuquchong(str) {
  var arr = str.split('')
  var needarr = []
  var needstr = ''
  arr.forEach((item)=>{
    if(needarr.indexOf(item)===-1){
      needarr.push(item)
      needstr+=item
    }
  })
  return needstr
}
// console.log(zifuquchong('11223411567'))
// console.log(100+'num')
// console.log(100+'100')
// console.log(100+true)
// console.log(100+false)
// console.log(100+undefined)
// console.log(100+null)
var a = 1
var b = {
  number:1
}
function changea(number) {
  number = 3
}
function changeb(obj) {
  obj.number = 3
}
changea(a)
changeb(b)
function add () {
  console.log('jin-add')
  var args = Array.prototype.slice.call(arguments);
  console.log('args',args)

  var fn = function () {
    var arg_fn = Array.prototype.slice.call(arguments);
    console.log('diao-fn')
    return add.apply(null, args.concat(arg_fn));
  }

  fn.toString  = function () {
    console.log('diao-valueof')
    return args.reduce(function(a, b) {
      return a + b;
    })
  }

  return fn;
}
// console.log(add(1)(10)(2).toString())
var fn = function(a,b,c) {
  return a+b+c;
}

function curry(fn) {
  var arr = [],
  fnLen = fn.length;

  function curring() {
    arr = arr.concat([].slice.call(arguments));
    if(arr.length < fnLen) {
      return curring;
    }
    return fn.apply(this, arr);
  }
  return curring
}
// console.log(curry(fn)(1)(2)(3));//6
Number.prototype.add=function(num){
  return this+num;
}
Number.prototype.reduce=function(num){
  return this-num;
}
console.log((10).add(10).reduce(3))
var tesrarr = []
// console.log(tesrarr[0])
var regex1 =/(.+)/
var inte = 'name(character varying)'
// if(inte.match(regex1)){ //如果匹配上直接获取括号里的内容
//   console.log(inte.match(regex1)) //236737
// }
/*var str = "deleteChild(236737)";
var result = /\((\d+)\)/.exec(str);

if(result.length > 1) {　　//加这个判断是以防字符串中没有匹配的内容，那么result[1]会抛错！
  console.log("您想要的结果是：" +result[1]); //输出 236737。
} else {
  console.log("字符串中没有符合条件的数字");
}*/
var aa="name(character varying)";
var result = aa.match(/\(([^)]*)\)/);
// 此时result＝["(dsfasjfj3124123)", "dsfasjfj3124123"];
if (result) {
  // console.log(result[1]); // "dsfasjfj3124123"
}
var shuju = 'id >= 1 or id <= 10 and id >= 20'
var needshuArr = shuju.split(' ')
var num = Math.ceil(needshuArr.length/4)
var needarr = []
for(let i = 0; i < num; i++){
    let obj = {
      name: needshuArr[i*4],
      yunopt: needshuArr[i*4+1],
      shu: needshuArr[i*4+2],
      luoji: needshuArr[i*4+3]
    }
    needarr.push(obj)
}
// console.log(needarr)
var handleArr = [
  { name: 'id', yunopt: '>=', shu: '1', luoji: 'or' },
  { name: 'id', yunopt: '<=', shu: '10', luoji: 'and' },
  { name: 'id', yunopt: '>=', shu: '20', luoji: undefined }
  ]
let handleStr = ''
handleArr.forEach((item)=>{
  for(var key in item){
    if(item[key]){
      handleStr += item[key]+' '
    }
  }
})
// console.log(handleStr)
var zistr = 'osm_id(character varying)'
console.log(zistr.split('(')[0])
console.log(moment('2019-03-15 11:20:09').unix())
console.log(Number('15:00'))
function jiaoji(arr1,arr2){
  let arr = []
    for(let i = 0; i < arr1.length; i++){
        let item = arr1[i]
      if(arr2.indexOf(item)){
          arr.push(item)
      }
    }
    return arr
}
function rejectFun(str){
  let arr = str.split('')
  let needstr = ''
  let len = arr.length
  let i=0,j=1
  while (j<=len){
    if(arr[i]===arr[j]){
      i++
      j++
    }else{
    needstr+=arr[i]
      i++
      j++
    }
  }
  return needstr
}
// console.log(rejectFun('aaabbbcdc'))
var arr = ['1','2','3']
// console.log(arr.join())

function curriedAdd (x) {
  return function(y) {
    return x + y
  }
}
// console.log(curriedAdd(1)(2))
/*function diff(arr){
  arr.sort((a,b)=>{
    return a-b
  })
  let i = 0,j=1
  let arr1 = []
  while (j<arr.length){
    if(arr[i]===arr[j]){
      arr1.push(arr[j])
      i++
      j++
    }
  }

}*/
function diff(arr) {
  let res=arr[0]
  for(let i = 1; i < arr.length; i++){
      res = res^arr[i]
  }
  return res
}
// console.log(diff([2,2,3,4,4]))
class coder{
  name(val){
    return val
  }
  constructor(a,b){
    this.a = a
    this.b = b
  }
  sum(){
    return this.a + this.b
  }
}
var testcode = new coder(1,2)
// console.log(testcode.sum())
class codetwo extends coder{

}
var testtest = new codetwo()
// console.log(testtest.name('gu'))
var objjj = {}
// console.log(objjj.length)
// setTimeout('console.log("gu")',2000)
/*async function guc(flag){
  if(flag){
    return 'hello'
  }else{
    throw 'error!'
  }
}
guc(false).then((resolve)=>{
  console.log('ok',resolve)
}).catch((err)=>{
  console.log(err)
})*/
// console.log('first')
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
})
  .then(result => result)
  .catch(e => e);

const p22 = new Promise((resolve, reject) => {
  throw new Error('报错了');
})
  .then(result => result);

/*Promise.all([p1, p22])
  .then(result => console.log(result))
  .catch(e => console.log(e));*/
function remove(arr, item) {
  return arr.filter(function(val){
    return item !== val
  })
}
// console.log(remove([1,2,3,3],3))
function append(arr, item) {
  return arr.concat(item)
}
// console.log(append([1,2],3))
function truncate(arr) {
  // return arr.slice(0,-1)
  var newArr=[item];
  [].push.apply(newArr, arr);
  return newArr;
}
// console.log('result',truncate([1, 2, 3, 4]))
function concat(arr1, arr2) {
  console.log(arguments)
  var needarr = [];
  [].push.apply(needarr,arr1);
  [].push.apply(needarr,arr2)
  return needarr
}
// console.log(concat([1, 2, 3, 4], ['a', 'b', 'c', 1]))
var urlstr = 'http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'
var arrurl = urlstr.split('?')[1].split('#')[0].split('&')
let objurl = {}
/*for(let i = 0; i < arrurl.length; i++){
    let item = arrurl[i]
  let arr = item.split('=')
  if(objurl[arr[0]]){
      if(objurl[arr[0]] instanceof Array){
        objurl[arr[0]].push(arr[1])
      }else{
        objurl[arr[0]] = [objurl[arr[0]]]
        objurl[arr[0]].push(arr[1])
      }
  }else{
    objurl[arr[0]] = arr[1]
  }
}*/
// console.log(objurl)
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
function getUrlParamer(sUrl, sKey) {
  var arrurl = sUrl.split('?')[1].split('#')[0].split('&')
  var objurl = {}
  for(var i = 0; i < arrurl.length; i++){
    var item = arrurl[i]
    var arr = item.split('=')
    if(objurl[arr[0]]){
      var t = objurl[arr[0]];
      objurl[arr[0]] = [].concat(t,arr[1]);
    }else{
      objurl[arr[0]] = arr[1]
    }
  }
  if(sKey===undefined||null){
    return objurl
  }else{
    return objurl[sKey]||''
  }
}
// console.log('result:::',getUrlParamer('http://www.nowcoder.com?key=1'))
function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
    console.log('rsult:::',a,k,v)
    if(result[k] !== void 0){
      var t = result[k];
      result[k] = [].concat(t,v);
    }else{
      result[k] = v;
    }
  });
  if(sKey === void 0){
    return result;
  }else{
    return result[sKey] || '';
  }
}
// console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe'))
var lus = 'i am a dog ,lucky dog'
lus.replace(/dog/g,function (a,k) {
  // console.log(a,k)
})
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
// console.log(newstr);
var aaas = [1,2,3]
// console.log(aaas.join('-'))
function listNode(val){
  this.val = val
  this.next = null
}
function list(){
  var head = new listNode(-1)
  var temp = head
  for(let i = 0; i < 10; i++){
    temp.next = new listNode(i)
    temp = temp.next
  }
  return head
}
console.log(list())

function reverselist(head) {
  let i = head
  let j = head.next
  i.next = null
  while(j!=null){
    let temp = j
    j = j.next
    temp.next = i.next
    i.next = temp
  }
  return i
}
// console.log(reverselist(list()))
function FindNumsAppearOnce(array)
{
  // write code here
  // return list, 比如[a,b]，其中ab是出现一次的两个数字
  var arr = []
  for(var i = 0;i<array.length;i++){
    var item = array[i]
    var pos = arr.indexOf(item)
    if(pos===-1){
      arr.push(item)
    } else{
      arr.splice(pos,1)
    }
  }
  return arr
}
// console.log(FindNumsAppearOnce([1,2,2]))
function singleNumber(nums) {
  let len = nums.length;
  nums = nums.sort((x, y) => x - y);

  if (nums[0] != nums[1]) return nums[0];
  if (nums[len - 1] != nums[len - 2]) return nums[len - 1];
  for (let i = 2; i < len - 2; i += 2) {
    if (nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) return nums[i];}
}
// console.log('result:::',singleNumber([1,1,2,2,3,4,4]))
// console.log(1^2)
function findindex1(num){
  let numindex = 0
  var ji = num&1
  while( ji=== 0){
    num = num>>1
    numindex++
    ji = num&1
  }
  return numindex
}
function isbit1(shu,index) {
  shu= shu>>index
  let ji = shu&1
  return ji
}
function onceFind(arr){
  if(arr.length<2||arr===null){
    return null
  }
  let op = 0
  for(let i = 0; i < arr.length; i++){
      op^=arr[i]
  }
  let indexof1 = findindex1(op)
  //console.log(indexof1)//1
  let num1 = 0,num2 = 0;
  for(let i = 0; i < arr.length; i++){
      if(isbit1(arr[i],indexof1)){
        num1^=arr[i]
        console.log('jin1:::',num1)
      } else {
        num2^=arr[i]
        console.log('jin2:::',num2)
      }
  }
  return [num1,num2]
}
// console.log('result::;',onceFind([1,1,2,3,3,4]))
var objjj = {
  foo: 'foo'
}

Object.defineProperty(objjj, 'foo', {
  get: function () {
    console.log('将要读取obj.foo属性');
  },
  set: function (newVal) {
    console.log('当前值为', newVal);
  }
});

// objjj.foo; // 将要读取obj.foo属性
// objjj.foo = 'name'; // 当前值为 name
//函数柯里化
function kelihua(){
  var args = [].slice.call(arguments)
  var fun = function () {
    var grs = [].slice.call(arguments)
    return kelihua.apply(null,args.concat(grs))
  }
  fun.valueOf = function (){
      return args.reduce((a,b)=>{
        return a+b
      })
  }
  return fun
}
// console.log(kelihua(1)(2).valueOf())
var tesrArr = [1,2,3]
// console.log(tesrArr instanceof Array)
function tesrArra(){}
var fuzhi = new tesrArra()
// console.log(typeof fuzhi
function xia(){
  var aaaa = 1
  return function (){
    console.log('',aaaa)
  }
}
var af1 = xia()
var aaaa = 2
af1()
// console.log(NaN === NaN)
var aahuya='window'
var aaahuya = {
  'aahuya': 'huya',
  a1:function () {
    setTimeout(function () {
      console.log('111',this.aahuya)
    },1)
  },
  a2:function (){
    setTimeout(()=>{
      console.log('222',this.aahuya)
    },1)
  }
}
aaahuya.a1()
var shipina = [1,2,3]
var shipinb = [1,2,4]
// shipinb[0] = 'gu'
// console.log('testa',shipina>shipinb)
var zheng = '01234567'
// var regngx = /^\d+\.\d+$/
var regngx = /^[0-9]{8}$/
// console.log('hello',regngx.test(zheng))
function tonumber(str){
  /*if(str=== ''){
    return -1
  }*/
    /*var re = /^\d+$/
  if(re.test(str)){
      console.log('1111')
      return Number(str)
  }else{
    console.log('2111111')
    return str
  }*/
    if(isNaN(str)){
      console.log('1111')
      return str
    } else {
      console.log('2222')
      return Number(str)
    }
}
console.log('test',tonumber('222'))
// console.log('123'.length)
// console.log(Number('000'))
function jiou(array){
  for(var i = 0; i < array.length; i++){
    if(array[i]%2===0){
      var j = i+1
      while (j<array.length){
        if(array[j]%2!==0){
          var temp = array[i]
          array[i] = array[j]
          array[j] = temp
          break
        } else {
          j++
        }
      }
    }
  }
  return array
}
// console.log('jiouhanshu',jiou([1,2,3,4,5,6,7]))
function foreeach(obj,fn){
  if(obj instanceof Array){
    obj.forEach((item,index)=>{
      fn(index,item)
    })
  } else {
    for(var key in obj){
        fn(key,obj[key])
    }
  }
}
var forArr = [1,2,3]
foreeach(forArr,function(index,item){
  console.log(index,item)
})
// console.log('hello',moment().format('E'))

//replace不改变原始字符串(下划线转驼峰包括首字母大写)
function _bianTuo(str){
  var reg1 = /^[a-z]/
  var reg = /-(\w)/g;
  var str1 = str.replace(reg1,function ($){
    return $.toUpperCase();
  })
  return str1.replace(reg, function ($,$1) {
    return $1.toUpperCase();
  })
}
console.log(_bianTuo('get-element-by-id'))
//驼峰变下划线(避免首字母有大写的情况)
function tuoBian_(str){
  var reg = /[A-Z]/g
  var temp = str.replace(reg,function ($){
      return '-'+$.toLowerCase()
  })
  if(temp.slice(0,1) === '-'){
    temp = temp.slice(1)
  }
  return temp
}
// console.log(tuoBian_('getElementById'))
function addTest(){
  var args = Array.prototype.slice.call(arguments)
  var fn = function (){
    var args_n = Array.prototype.slice.call(arguments)
    return addTest.apply(null,args.concat(args_n))
  }
  fn.valueOf = function () {
    return args.reduce((a,b)=>{
      return a+b
    })
  }
  return fn
}
// console.log('result',addTest(1,2)(3).valueOf())

var guname = 'window'
var guobj = {
  guname: 'nei',
  getname: function (){
    var me = this
    return function (){
      return me.guname
    }
  }
}
// console.log(guobj.getname()())
// console.log('qinag',2 == [[[2]]])
/*function ceapply(name){
  console.log('hello'+name)
}
var cecall = ceapply
cecall.apply(this,['name'])*/
function youxi(num,arr1,...arr2){
  let arr = Array.prototype.slice.call(arguments,1)
  let target = false //输了
  console.log(arr)
  for(let i = 0; i < num; i++){
    let itemArr = arr[i]
    for(let i = 0; i < itemArr.length; i++){
      let item = itemArr[i]
      if(item === itemArr[i+1]){
        target = !target
      }
    }
    if(target){
      console.log('oh,no')
    } else {
      console.log('win')
    }
  }
}
// console.log(youxi(2,[1,2,3,3,2],[1,1,2,2,3,3]))
/*console.log('start',1);
new  Promise(function(resolve){console.log(2);resolve(); })
  .then(function(){console.log('hello',3)})
process.nextTick(function(){console.log('wo',8) })

setTimeout(function(){console.log(4)
  process.nextTick(function(){console.log(5)})
  new  Promise(function(resolve){console.log(6);resolve()})
    .then(function(){console.log(7)})})

setImmediate(function(){console.log(9)
  process.nextTick(function(){console.log(12)})
  new  Promise(function(resolve){console.log(10);resolve()})
    .then(function(){console.log(11)})
})*/
/*console.log(['1','2','3'].map(parseInt))
console.log(parseInt('2'))
var arrteng = [0,1,2,3,4,5,6,7,8,9]
arrteng.forEach((item,index)=>{
  index%2===0&&arrteng.splice(index,1)
})
console.log(arrteng)*/
/*function toCamp(str){
  var reg = /-(\w)/g
  var strback = str.replace(reg,function ($0,$1) {
    return $1.toUpperCase()
  })
  return strback
}*/
// console.log(toCamp('abc-def-gh'))

//字符串转化为数字
function toNum(str){
  console.log(Number(str).toString())
  if(str === ' '){
    return str
  }
  if(Number(str).toString() === 'NaN'){
    return str
  } else {
    return Number(str)
  }
}
// console.log('num',toNum(' '))

function deepclones(source){
    if(!source||typeof source!=='object'){
      return false
    }
    let obj = Object.prototype.toString.call(source) === '[object Array]'?[]:{}
    for(var key in source){
        if(source.hasOwnProperty(key)){
          if(typeof source[key] === 'object'){
            obj[key] = deepclones(source[key])
          } else {
            obj[key] = source[key]
          }
        }
    }
    return obj
}
let deepData = {
  name:{name1:'gu'},
  age:25
}
let deepdatas = deepclones(deepData)
deepdatas.name.name1 = 'chao'
// console.log(deepdatas,deepData)
let arrsplice = [1,2,3,4]
// console.log(arrsplice.splice(-1))
let objnumber = []
// console.log(Object.prototype.toString.call(objnumber))
/*function FirstNotRepeatingChar(str)
{
  // write code here
  var obj = {}
  let arr = str.split('')
  console.log('arrarr',arr)
  var num
  arr.forEach(function(item){
    if(!obj[item]){
      obj[item] = 1
    } else {
      obj[item]++
    }
  })
  console.log('obj::;',obj)
  for(var key in obj){
    if(obj[key] === 1){
      num = key
      console.log('numss',num)
      break
    }
  }
  let resulet1 = arr.indexOf(num)
  return resulet1
}*/
let google = 'google'
console.log(google.length,google[0])
function FirstNotRepeatingChar(str)
{
  // write code here
  let len = str.length
  let obj = {}
  for(let i = 0; i < len; i++){
    let item = str[i]
    if(obj[item]&&obj[item]!==-2){
      obj[item] = -2
    } else if(!obj[item]){
      obj[item] = i+1
    }
  }
  for(var key in obj){
    if(obj[key] !== -2){
      return obj[key]-1
    }
  }
  return -1
}
console.log('guchao',FirstNotRepeatingChar('google'))
function duplicate(numbers, duplication)
{
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  var arr = []
  for(var i = 0;i<numbers;i++){
    var item = duplication[i]
    if(arr.indexOf(item)===-1){
      arr.push(item)
    } else {
      duplication[0] = item
      return true
    }
  }
  return false

}
// console.log('jinlai::',duplicate(5,[2,1,3,1,4]))
//这个是用的递归的方法
/*function Fibonacci(n)
{
  // write code here
  if(n === 0){
    return 0
  }
  if(n===1){
    return 1
  } else {
    return Fibonacci(n-1) + Fibonacci(n-2)
  }
}*/
function Fibonacci(n)
{
  // write code here
  var pre = 0
  var cur = 1
  var res
  if(n==0){
    return 0
  }
  if(n=== 1){
    return 1
  }
  for(var i = 2;i<=n;i++){
    res = pre + cur
    pre = cur
    cur = res
  }
  return res
}
// console.log(Fibonacci(6))
// setTimeout(() => console.log("hello world"))

Function.prototype.call=function (obj,...rest){
  var fn = this
  let arr = [...rest]
  return fn.apply(obj,arr)
}
function zhuan(a,b,c){
  console.log('arguments',arguments)
  let arr = Array.prototype.slice.call(arguments)
  console.log('arr:::',arr)
}
zhuan(1,2,3)

function canshu(){
  console.log(Array.prototype.slice.apply(arguments))
}
// canshu(1,22,3)
// console.log(+new Date(),new Date().getTime())
function curry (fn, arr = []) {
  console.log('fn.length',fn.length)
  return fn.length === arr.length ? fn.apply(null, arr) : function (...args) {
    return curry (fn, arr.concat(args))
  }
}
var testcurry = function (a,b,c){
  return a+b+c
}
// console.log(curry(testcurry)(1)(2)(3))
// console.log(Object.prototype.toString.call(null))
//   [3,4,5,1,2]
function lookforsmall(arr){
  return arr.reduce((pre,cur,index)=>{
    return pre>cur?cur:pre
  })
}
// console.log('small',lookforsmall([3,4,5,1,2]))
// console.log([1,2,3,4,4].slice(1,3))
var currentNow = new Date()
var yearcur = currentNow.getFullYear()
var monthcur = currentNow.getMonth()
var daycur = currentNow.getDate()
// console.log(yearcur+'-'+(monthcur+1)+'-'+daycur)
function fibonacci(n){
  var pre = 1
  var prepre = 1
  var result = 1
  if(n===1) return 1
  for(let i = 2;i<=n;i++){
    result = pre+prepre
    prepre = pre
    pre = result
  }
  return result
}
console.log(fibonacci(5))
