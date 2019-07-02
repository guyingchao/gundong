// add(1)(2)
function add (str1) {
  return function (str2) {
    return str1 + str2
  }
}
// console.log(add(1)(2))

// 函数柯里化函数 add(1)(2)(3)或add(1)(2)(3，4)
function addbig () {
  var args = Array.prototype.slice.call(arguments)
  var fn = function () {
    var args_fn = Array.prototype.slice.call(arguments)
    return addbig.apply(null, args.concat(args_fn))
  }
  fn.result = function () {
    return args.reduce((pre, cur) => {
      return pre + cur
    })
  }
  return fn
}
// console.log(addbig(1)(2)(3, 4).result())

// 延伸出来的
function test (...rest) {
  return rest.reduce((pre, cur) => {
    return pre + cur
  })
}
// console.log(test(1, 2))
