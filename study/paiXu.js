/**
 * 直接插入排序算法
 * 时间复杂度：o(n^2)
 * 空间复杂度：o(1)
 * 稳定性：稳定的（由于每次插入总是从后往前先比较再移动，所以不会出现相同元素相对位置发生变化。）
 */
function insertOrder (arr, n) {
  for (var i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      let item = arr[i]
      for (var j = i - 1; arr[j] > item; --j) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = item
    }
  }
  return arr
}
console.log(insertOrder([2, 12, 16, 88, 5, 10], 6))
/**
 * 冒泡排序
 * 时间复杂度：o(n^2)
 * 空间复杂度：o(1)
 * 稳定性：稳定的
 * flag是为了少进行一些for循环操作的。
 */
function maopao (arr, n) {
  for (var i = 0; i < n; i++) {
    var flag = false
    for (var j = n - 1; j > i; j--) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp
        flag = true
      }
    }
    if (flag === false) {
      return arr
    }
  }
  return arr
}
// console.log(maopao([2, 12, 16, 88, 5, 10], 6))

/**
 * 快速排序算法
 * 时间复杂度：o(nlogn）
 * 空间复杂度：o(logn)
 * 稳定性：不稳定的
 */
function partition (arr, len, start, end) {
  if (arr === null || len < 0 || start < 0 || end >= len) return -1
  let target = arr[start]
  while (start < end) {
    while (start < end && arr[end] >= target) --end
    arr[start] = arr[end]
    while (start < end && arr[start] <= target) ++start
    arr[end] = arr[start]
  }
  arr[start] = target
  return start
}
function quickSort (arr, len, start, end) {
  if (start === end) return
  let index = partition(arr, len, start, end)
  if (index > start) {
    quickSort(arr, len, start, index - 1)
  }
  if (index < end) {
    quickSort(arr, len, index + 1, end)
  }
  console.log('arr:::', arr)
}
// quickSort([6,10,9,2,5,7,13,8],8,0,7)


