/**
 * Created by win10 on 2019/1/13.
 */
//找出元素 item 在给定数组 arr 中的位置
function indexOf(arr, item) {
  if (Array.prototype.indexOf){   //判断当前浏览器是否支持
    return arr.indexOf(item);
  } else {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        return i;
      }
    }
  }
  return -1;
}
//console.log(indexOf([ 1, 2, 3, 4 ], 3))

//计算给定数组 arr 中所有元素的总和(3)
//递归
function sum(arr) {
  var len = arr.length;
  if(len == 0){
    return 0;
  } else if (len == 1){
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

//reduce
function sum(arr) {
  return arr.reduce(function(prev, curr, idx, arr){
    return prev + curr;
  });
}

//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
function remove(arr, item) {
  return arr.filter(function (items,index) {
    return items!==item
  })
}

function remove(arr, item) {
  var newarr = []
  arr.forEach(function(items,index){
    if(items!== item ){
      newarr.push(items)
    }
  })
  return newarr
}

//移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
function removeWithoutCopy(arr, item) {
  while(arr.indexOf(item)!=-1){
    arr.splice(arr.indexOf(item),1)
  }
  return arr
}

//倒着检测就可以不用i--了
function removeWithoutCopy(arr, item) {
  for(let i = 0; i < arr.length; i++){
      if(arr[i]==item){
        arr.splice(i,1)
        i--
      }
  }
  return arr
}

//在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
  var newarr = []
  arr.forEach(function(item){
    newarr.push(item)
  })
  newarr.push(item)
  return newarr
}

function append(arr, item) {
  var newArr = arr.slice(0);  // slice(start, end)浅拷贝数组
  newArr.push(item);
  return newArr;
}

function append(arr, item) {
  return arr.concat(item);
}

//删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
function truncate(arr) {
  var newarr = []
  for(var i=0;i<arr.length-1;i++){
    newarr.push(arr[i])
  }
  return newarr
}

//利用slice
function truncate(arr) {
  return arr.slice(0,-1);
}
//利用filter
function truncate(arr) {
  return arr.filter(function(v,i,ar) {
    return i!==ar.length-1;
  });
}
//利用push.apply+pop
function truncate(arr) {
  var newArr=[];
  [].push.apply(newArr, arr);
  newArr.pop();
  return newArr;
}
//利用join+split+pop    注意！！！：数据类型会变成字符型
function truncate(arr) {
  var newArr = arr.join().split(',');
  newArr.pop();
  return newArr;
}
//利用concat+pop
function truncate(arr) {
  var newArr = arr.concat();
  newArr.pop();
  return newArr;
}

//在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
function prepend(arr, item) {//unshift直接修改原有数组
  var newarr = arr.slice(0)
  newarr.unshift(item)
  return newarr
}

//利用concat
function prepend(arr, item) {
  return [item].concat(arr);
}
//使用push.apply
function prepend(arr, item) {
  var newArr=[item];
  [].push.apply(newArr, arr);
  return newArr;
}
//使用join+split+unshift/splice组合
function prepend(arr, item) {
  var newArr=arr.join().split(',');
  newArr.unshift(item);//newArr.splice(0,0,item);
  return newArr;
}

//删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
function curtail(arr) {
  var newarr = arr.join().split(',')
  newarr.shift()
  return newarr
}
function curtail(arr) {
  return arr.slice(1);
}

//合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
//利用concat
function concat(arr1, arr2) {
  return arr1.concat(arr2);
}
//利用slice+push.apply
function concat(arr1, arr2) {
  var newArr=arr1.slice(0);
  [].push.apply(newArr, arr2);
  return newArr;
}
//利用slice+push
function concat(arr1, arr2) {
  var newArr=arr1.slice(0);
  for(var i=0;i<arr2.length;i++){
    newArr.push(arr2[i]);
  }
  return newArr;
}

//在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

//利用slice+concat
function insert(arr, item, index) {
  return arr.slice(0,index).concat(item,arr.slice(index));
}
//利用concat +splice
function insert(arr, item, index) {
  var newArr=arr.concat();
  newArr.splice(index,0,item);
  return newArr;
}
//利用slice+splice
function insert(arr, item, index) {
  var newArr=arr.slice(0);
  newArr.splice(index,0,item);
  return newArr;
}
//利用push.apply+splice
function insert(arr, item, index) {
  var newArr=[];
  [].push.apply(newArr, arr);
  newArr.splice(index,0,item);
  return newArr;
}
//普通的迭代拷贝
function insert(arr, item, index) {
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    newArr.push(arr[i]);
  }
  newArr.splice(index,0,item);
  return newArr;
}

//统计数组 arr 中值等于 item 的元素出现的次数

//filter()-->利用指定的函数确定是否在返回的数组中包含某一项
function count(arr, item) {
  var count = arr.filter(function(a) {
    return a === item;   //返回true的项组成的数组
  });
  return count.length;
}
//map()-->对数组中的每一项进行给定函数，
//返回每次函数条用的结果组成的数组；
function count(arr, item) {
  var count = 0;
  arr.map(function(a) {
    if(a === item) {
      count++;
    }
  });
  return count;
}
//for循环
function count(arr, item) {
  var count = 0;
  for(var i=0; i<arr.length; i++) {
    if(arr[i] === item) {
      count++;
    }
  }
  return count;
}

//找出数组 arr 中重复出现过的元素
function duplicates(arr) {
  var arrs = []
  for(var i=0;i<arr.length;i++){
    var items = arr[i]
    var newarr = arr.slice(i+1)
    for(var j=0;j<newarr.length;j++){
      var itemx = newarr[j]
      if(itemx === items){
        if(arrs.indexOf(itemx)===-1){
          arrs.push(items)
        }
        break
      }
    }
  }
  return arrs
}

function duplicates(arr) {
  //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
  var a = [],b = [];
  //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
  for(var i = 0; i < arr.length; i++){
    if(!b[arr[i]]){
      b[arr[i]] = 1;
      continue;
    }
    b[arr[i]]++;
  }
  //遍历b数组，将其中元素值大于1的元素下标存入a数组中
  for(var i = 0; i < b.length; i++){
    if(b[i] > 1){
      a.push(i);
    }
  }
  return a;
}

//为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组
function square(arr) {
  return arr.map(function(item){
    return item*item
  })
}
//es6一句话的事
const square = arr => arr.map(e => e * e);

