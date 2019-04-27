/**
 * Created by win10 on 2019/4/15.
 */
//用reduce实现map
Array.prototype.map = function (callback) {
  var arr = this;
  return arr.reduce((acc, cur, i) => {
    acc.push(callback(cur, i, arr));
    return acc
  }, []);
}
var m = [1,2,3,4,54].map(function (v, i, arr) {
  return v * v
});
// console.log(m)

//用apply实现call
Function.prototype.call = function (obj,...rest){
  var fn = this
  let arr = [...rest]
  return fn.apply(obj,arr)
}
function zhuan (a, b, c) {
  console.log('arguments', arguments)
  let arr = Array.prototype.slice.call(arguments)
  console.log('arr:::', arr)
}
// zhuan(1, 2, 3)
