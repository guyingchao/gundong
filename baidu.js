// import { fn } from "moment";

/**
 * Created by win10 on 2019/4/2.
 */
// var a = 'a.b.c'.replace(/(.)\.(.)\.(.)/,'$2.$1.$0')
// var name = 'tom'
// var a = {name:name};
// var b = Object.assign(a)
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

function tong(arr,fn){
	if(arr instanceof Array){
		arr.forEach((item,index)=>{
			fn(index,item)
		})
	} else {
		for(var key in arr){
			fn(key,arr[key])
		}
	}
}
var arr = {1:'gu',2:'chao'}
tong(arr,function(index,item){
	console.log(index,item)
})