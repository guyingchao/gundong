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
console.log(start_date,end_date)
console.log(end_date.diff(start_date))
console.log(end_date.diff(start_date,'months'))
console.log(end_date.diff(start_date,'weeks'))
console.log(end_date.diff(start_date,'days'))
console.log(start_date.diff(end_date,'days'))
