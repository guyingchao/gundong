/**
 * Created by win10 on 2019/4/2.
 */
// console.log('guchao')
var a = 'a.b.c'.replace(/(.)\.(.)\.(.)/,'$2.$1.$0')
// console.log(a)
var name = 'tom'
var a = {name:name};
var b = Object.assign(a)
// console.log(b.name)

/*var a = 1
var b= []
var c = ''
var d = true
console.log((c&&d)===true)
console.log((b&&c)=== true)
console.log((a||b)===true)
console.log((d||a)===true)*/

/*console.log(/^a[xyz]\d*!/.test('ax'))
console.log(/^a[xyz]\d*!/.test('^axyz'))
console.log(/^a[xyz]\d*!/.test('^axd'))
console.log(/^a[xyz]\d*!/.test('axyz123'))*/

/*console.log(1)
setTimeout(function () {
  console.log(2)
},0)
new Promise((resolve,reject)=>{
  console.log(3)
  resolve()
}).then(()=>{
  console.log(4)
})
console.log(5)*/

var a = []
a.push(1,2)
a.shift(3,4)
a.concat([5,6])
a.splice(0,1,2)
// console.log(a,a.length)//1
var tmp = 123
if(true){
  tmp = 'abc'
  console.log(tmp)
  let tmp;
}
