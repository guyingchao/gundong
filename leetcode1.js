/**
 * Created by win10 on 2019/2/18.
 */
function ListNode(x){
  this.val = x;
  this.next = null;
}
/**
 * 创建链表，
 * 返回链表第一个节点的地址
 * @returns {null|ListNode}
 */
function getList(val){
  let head = new ListNode(-1);
  let tmp = head;
  for(let i=0; i<val.length; i++){
    tmp.next = new ListNode(val[i]);
    tmp = tmp.next;
  }
  return head;
}
//从尾到头输出链表
function printListFromTailToHead(head)
{
  // write code here
  var arr = [];    // 创建一个空数组，将每个节点存放哎数组中
  if(!head) {        // 判断链表是否为空
    return arr;
  }
  while(head) {
    arr.unshift(head.val);    // 使用unshift()方法，将当前节点放到数组的开头
    head = head.next;    // 指针后移
  }
  return arr;
  /*//递归法
  if(head!==null){
    if(head.next!==null){
      printListFromTailToHead(head.next)
    }
    console.log(head.val)
  }*/
}
//不改变原始链表，从尾到头打印链表
function reverselist(head) {
  let i = head
  let j = head.next
  i.next = null
  while(j!=null){
    let temp = j
    j = j.next
    temp.next = i.next
    i.next = temp
  }
  return i
}
//从尾到头打印链表
// console.log(reverselist(list()))
// 删除链表中指定的节点o(1)时间复杂度
function deleNode(head,node){
    //不是尾节点
  if(node.next!==null){
    node.val = node.next.val
    node.next = node.next.next
  }
  //只有一个节点
  else if(head === node){
  head = null
  }
  //删除的节点是尾节点
  else {
    let i = head
    while (i.next!==node){
      i = i.next
    }
    i.next = null
  }
  return head
}
// 删除重复的节点
function quChong(head) {
  if(!head){
    return
  }
  let pre = head
  let cur = head.next
  while (cur!==null){
    if(cur.next!==null){
      console.log('jinlai')
      let pnext = cur.next
      if(cur.val === pnext.val){
        cur = pnext
      } else {
        pre.next = cur
        pre = cur
        cur = pnext
      }
    } else {
      pre.next = cur
      cur = cur.next
    }
  }
  return head
}
let node = getList([1,2,2,3,5]);
// console.log(node)

console.log(quChong(node))
