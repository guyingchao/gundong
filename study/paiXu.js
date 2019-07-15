// 快速排序算法
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
