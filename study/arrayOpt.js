/**
 * Created by win10 on 2019/4/20.
 */
// 数组去重的方法 去除数组中重复的成员
//方法一set
// console.log('ok',[...new Set([1,2,3,4,4])])
//方法二filter
var source_arr = ['a', 'b', 'a', 'c', 'a', 'd', '1',1,'1'];
var array_unique = source_arr.filter(function (element, index, array) {
  return array.indexOf(element) === index;
});
// console.log(array_unique);
//方法三(更严谨，适用于数组对象)
function reduceQU(arr){
  return arr.reduce((pre,cur,index)=>{
    pre.indexOf(cur)!==-1? '' : pre.push(cur)
    return pre
  }, [])
}
// console.log('ok?',reduceQU([1,2,2,3,3,4]))

//适用于数组对象
function quchongObj(arr){
  let obj = {}
  return arr.reduce((pre,cur)=>{
    obj[cur.id]? '':obj[cur.id] = true&&pre.push(cur)
    return pre
  },[])
}
 let person = [
   {id: 0, name: "小明"},
   {id: 1, name: "小张"},
   {id: 2, name: "小李"},
   {id: 3, name: "小孙"},
   {id: 1, name: "小周"},
   {id: 2, name: "小陈"}
 ]
console.log(quchongObj(person))
