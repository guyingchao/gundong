/**
 * Created by win10 on 2019/4/10.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * 创建链表，
 * 返回链表第一个节点的地址
 * @returns {null|ListNode}
 */
function getList(arr) {
  let newlist = new ListNode(-1)
  let p = newlist
  for(let i = 0; i < arr.length; i++){
    let temp = new ListNode(arr[i])
    p.next = temp
    p = temp
  }
  //console.log(JSON.stringify(newlist.next))
  return newlist.next
}
//getList()
//链表翻转(最不好的新建链表的方法)
function reverseList(head) {
  if(!head||!head.next){
    return head
  }
  let phead = new ListNode(-1)
  let p = head
  while (p!==null){
    let q = new ListNode(p.val)
    p = p.next
    q.next = phead.next
    phead.next = q
  }
  console.log(JSON.stringify(phead.next))
  return phead.next
}
function reverseList2(head) {
  if(!head||!head.next){
    return head
  }
  let phead = new ListNode(-1)
  let p = head
  let q = head
  while (p!==null){
    q = p.next
    p.next = phead.next
    phead.next = p
    p = q
  }
  console.log(JSON.stringify(phead.next))
  return phead.next
}

//链表翻转的方法（直接改变指针的指向）
function reverseListtwo(head) {
  if(head === null || head.next === null){
    return head
  }
  let prenode = null
  let phead;
  let p = head
  while (p!==null){
    let nextnode = p.next
    if(nextnode === null){
      phead=p
    }
    p.next = prenode
    prenode = p
    p = nextnode
  }
  console.log(JSON.stringify(phead))
  return phead
}

// let heads = getList()
// reverseList2(heads)

//删除链表中指定节点o(1)
function deleteNode(head,node){
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
  console.log(JSON.stringify(head))
  return head
}
// let heads = getList()
// deleteNode(heads,heads)

//链表中倒数第k个节点
function lastK(head,k) {
  if(head===null||k===0){
    return null
  }
  let i = j = head
  for(let m = 1; m < k; m++){
    if(i.next!==null){
      i=i.next
    } else {
      return null
    }
  }
  while (i.next!==null){
    j = j.next
    i = i.next
  }
  console.log(JSON.stringify(j))
  return j
}
// let heads = getList()
// lastK(heads,6)

//删除重复的节点(没有头结点的，自己给他加了一个头结点)
function quchongNode(head){
  if(head === null||head.next===null){
    return head
  }
  let phead = new ListNode(-1)
  phead.next = head
  let pre = phead
  let last = head
  while(last!=null){
    if(last.next!=null&&last.val === last.next.val){
      while(last.next!=null&&last.val === last.next.val){
        last = last.next
      }
      pre.next = last.next
      last = last.next
    } else{
      pre = pre.next
      last = last.next
    }
  }
  console.log(JSON.stringify(phead.next))
  return phead.next
}
// let heads = getList([1,1,3,3,4,4,4])
// quchongNode(heads)

//两个链表的第一个公共节点
function FindFirstCommonNode(pHead1, pHead2)
{
  // write code here
  if(!pHead1&&!pHead2){
    return null
  }
  var long,short
  var head2 = pHead2
  var len1 = getLength(pHead1)
  var len2 = getLength(pHead2)
  var dis = len1-len2
  if(dis>0){
    long = pHead1
    short = pHead2

  } else{
    long = pHead2
    short = pHead1
  }
  for(var i = 0;i<Math.abs(dis);i++){
    long = long.next
  }
  while(long!==null&&short!==null&&long!==short){
    long = long.next
    short = short.next
  }
  return long

  function getLength(head){
    var leng = 0
    var p = head
    while(p!==null){
      leng++
      p = p.next
    }
    return leng
  }
}

let heads1 = getList([1,2,3])
let heads2 = getList([2,3])
let heads3 = getList([4,5])
heads1.next.next.next = heads3
heads2.next.next = heads3
// console.log(FindFirstCommonNode(heads1,heads2))



