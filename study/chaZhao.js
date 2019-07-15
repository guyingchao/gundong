/**
 * Created by win10 on 2019/4/16.
 */
// 二分查找
function erfen (arr, key) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (arr[mid] === key) {
      return mid
    } else if (arr[mid] < key) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
// console.log('erfen:::',erfen([1,2,3,4,5,6,7],7))
