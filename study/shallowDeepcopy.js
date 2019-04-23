/**
 * Created by win10 on 2019/4/23.
 */
function shallowClone(source) {
  if(!source||typeof source!=='object'){
    return -1
  }
  let targetobj = Object.prototype.toString.call(source)==='[object Array]'?[]:{}
  for(var key in source){
    if(source.hasOwnProperty(key)){
      targetobj[key] = source[key]
    }
  }
  return targetobj
}
/*var a = [1,2,{name:'guchao'}]
var b = shallowClone(a)
b[2].name = 'a'
console.log(a,b)*/

function deepClone(source) {
  if(!source||typeof source!=='object'){
    return -1
  }
  let targetobj = Object.prototype.toString.call(source)==='[object Array]'?[]:{}
  for(var key in source){
    if(source.hasOwnProperty(key)){
      if(source[key]&&typeof source[key] === 'object'){
        targetobj[key] = deepClone(source[key])
      } else {
        targetobj[key] = source[key]
      }
    }
  }
  return targetobj
}
var a = [1,2,{name:'guchao'}]
var b = deepClone(a)
b[2].name = 'a'
console.log(a,b)
