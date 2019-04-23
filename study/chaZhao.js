/**
 * Created by win10 on 2019/4/16.
 */
//二分查找
function erfen(arr,key){
  let low = 0
  let high = arr.length-1
  while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid] === key){
      return mid
    } else if(arr[mid]<key){
      low = mid+1
    } else {
      high = mid-1
    }
  }
  return -1
}
// console.log('erfen:::',erfen([1,2,3,4,5,6,7],7))

//快速排序算法
function partition(arr,len,start,end){
  if(arr===null||len<0||start<0||end>=len) return -1
  let target = arr[start]
  while(start<end){
    while(start<end&&arr[end]>=target) --end;
    arr[start] = arr[end]
    while(start<end&&arr[start]<=target) ++start;
    arr[end] = arr[start]
  }
  arr[start] = target
  return start
}
function quickSort(arr,len,start,end){
  if(start === end) return
  let index = partition(arr,len,start,end)
  if(index>start){
    quickSort(arr,len,start,index-1)
  }
  if(index<end){
    quickSort(arr,len,index+1,end)
  }
  console.log('arr:::',arr)
}
// quickSort([6,10,9,2,5,7,13,8],8,0,7)
