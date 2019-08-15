/**
 * 定义二叉树的节点结构
 * 在原型链上实现
 */
function Node (val) {
  this.val = val
  this.leftChild = null
  this.rightChild = null
}

function BinaryTree () {
  this.root = null
}

BinaryTree.prototype = {
  // constructor: Node,
  insertNode: function (val) {
    if (this.root === null) {
      this.root = {val}
    } else {
      insertData(this.root, val)
    }
  },
  travelTree: function (root) { // 这个其实是前序遍历的哦
    if (root != null) {
      // console.log(root.data)
      this.travelTree(root.leftChild)
      this.travelTree(root.rightChild)
    }
  }
}
/**
 *
 * @param {*} node 树的节点
 * @param {*} val 把数字插入节点，使其成为左孩子或者右孩子
 */
function insertData (node, val) {
  if (val < node.val) {
    if (node.leftChild == null) {
			// node.leftChild = { val }
      node.leftChild = new Node(val)		
    } else {
      insertData(node.leftChild, val)
    }
  } else {
    if (node.rightChild == null) {
			// node.rightChild = { val }
      node.rightChild = new Node(val)					
    } else {
      insertData(node.rightChild, val)
    }
  }
}

var tree = new BinaryTree()
var tree2 = new BinaryTree()
var tree3 = new BinaryTree()

tree2.insertNode(10)
tree2.insertNode(8)
tree2.insertNode(20)

tree.insertNode(5)
tree.insertNode(10)
tree.insertNode(1)
tree.insertNode(3)
tree.insertNode(20)
tree.insertNode(8)

tree3.insertNode(8)
tree3.insertNode(6)
tree3.insertNode(10)
tree3.insertNode(5)
tree3.insertNode(7)
tree3.insertNode(9)
tree3.insertNode(11)

// tree.travelTree(tree.root)
console.log(JSON.stringify(tree))
// {"root":{"val":5,"rightChild":{"val":10,"rightChild":{"val":20},"leftChild":{"val":8}},"leftChild":{"val":1,"rightChild":{"val":3}}}}

/* 前、中、后序遍历的递归通用方法 */
// function diguiInorder (root) {
//   var list = []
//   if (root) {
//     inOrder(root)
//   } else {
//     return []
//   }
//   return list
//   function inOrder (root) {
//     if (root) {
//       inOrder(root.leftChild)
//       list.push(root.val)
//       inOrder(root.rightChild)
//     }
//   }
// }

/* 前、中、后序遍历的非递归通用方法 */
/**
 * 对于二叉树中的任何一个节点而言，它都有两个角色需要扮演，一个是作为值存储的角色（角色1），另一个角色是作为它所带领的子树的一个代表（角色2）。
 * 而我们设置的bool变量，就是为了说明我当前拿到的这个节点，应该是以一个值存储的这种角色对待它(True)，还是应该以一个子树的代表这种角色对待它（False），
 * 如果是前者，那么就简单的将其所存储的值打印出来，如果是后者，我们需要继续探索由它带领的子树。
 */
// function preorderTraversal (root) {
//     if (!root) return []
//         let st=[{key:root,value:false}]
//         let res=[]
//         while (st.length){
//             let cur = st.pop()
//             if(cur.value){
//                 res.push(cur.key.val)
//             } else {
//                 if(cur.key.rightChild){
//                     st.push({key:cur.key.rightChild,value:false})
//                 }
//                 if(cur.key.leftChild){
//                     st.push({key:cur.key.leftChild,value:false})
//                 }
//                 st.push({key:cur.key,value:true})//改变这句话的位置
//             }
//         }
//     return res
// }

/* 前序遍历 */
// 方法1：递归
// 1.1
// function preorderTraversal (root) {
//   if (!root) return []
//   return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
// };

// 1.2
// var preorderTraversal = function(root) {
//     let result = [];
//     if (!root) {
//         return result;
//     }
//     result = [root.val];

//     if (root.left) {
//         result = [
//             ...result,
//             ...preorderTraversal(root.left)
//         ];
//     }

//     if (root.right) {
//         result = [
//             ...result,
//             ...preorderTraversal(root.right)
//         ];
//     }
//     return result;
// };

/* 方法2：非递归 */
// 2.1
// function preorderTraversal (root) {
//     let stack = []
//     let currentNode = null
//     let res = []

//     stack.push(root)
//     currentNode = stack.pop()

//     while (currentNode) {
//       res.push(currentNode.val)
//       if (currentNode.rightChild) {
//         stack.push(currentNode.rightChild)
//       }
//       if (currentNode.leftChild) {
//         stack.push(currentNode.leftChild)
//       }

//       currentNode = stack.pop()
//     }
//     return res
// }

// 2.2前序非递归（和中序遍历一样）
function preorderTraversal (root) {
  var result = []
  var stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      result.push(root.val)
      root = root.leftChild
    } else {
      root = stack.pop()
      root = root.rightChild
    }
  }
  return result
}

/* 中序遍历 */
// 非递归
// var inorderTraversal = function(root) {
//     var result=[];
//    var stack=[];
//    while(stack.length||root){
//         if(root){
//             stack.push(root);
//             root = root.leftChild
//         }else{
//             root=stack.pop();
//             result.push(root.val);
//             root = root.rightChild;
//         }
//     }
//     return result;
// };

/* 后序遍历 */
// 1.递归
// var postorderTraversal = function(root) {
//     if (!root) return [];
//     return postorderTraversal(root.leftChild)
//     .concat(postorderTraversal(root.rightChild))
//     .concat([root.val]);
// };

// 2.非递归
// var postorderTraversal = function(root) {
//     let res = []
//     let stack = []

//     if (!root) {
//       return []
//     }

//     stack.push(root)
//     while (stack.length) {
//       let tmp = stack.pop()
//       if (!tmp.leftChild && !tmp.rightChild) {
//         res.push(tmp.val)
//         continue
//       }
//       stack.push(tmp)
//       if (tmp.rightChild) {
//         stack.push(tmp.rightChild)
//         tmp.rightChild = null
//       }
//       if (tmp.leftChild) {
//         stack.push(tmp.leftChild)
//         tmp.leftChild = null
//       }
//     }
//     return res
//   };

// console.log(preorderTraversal(tree.root))

// 层次遍历
// 输出结果：[ 5, 1, 10, 3, 8, 20 ]
function levelOrder (root) {
  if (!root) return []
  let res = []
  let opt = [root]
  while (opt.length) {
    let cur = opt.shift()
    res.push(cur.val)
    if (cur.leftChild) {
      opt.push(cur.leftChild)
    }
    if (cur.rightChild) {
      opt.push(cur.rightChild)
    }
  }
  return res
}
// console.log(levelOrder(tree.root))

// 层次遍历2(方法1：)
// 输出结果[[5], [1, 10], [3, 8, 20]]
function levelOrder21 (root) {
  if (!root) return []
  let level = 0
  let levels = []
  let likeQueue = [root]
  while (likeQueue.length !== 0) {
    levels.push([])
    let len = likeQueue.length
    for (let i = 0; i < len; i++) {
      let item = likeQueue.shift()
      levels[level].push(item.val)
      if (item.leftChild) { likeQueue.push(item.leftChild) }
      if (item.rightChild) { likeQueue.push(item.rightChild) }
    }
    level++
  }
  return levels
}

// 方法2:
function levelOrder22 (root) {
  if (!root) return []
  let res = []
  function traverorder (node, layer) {
    if (node) {
      res[layer] ? res[layer].push(node.val) : res[layer] = [node.val]
      traverorder(node.leftChild, layer + 1)
      traverorder(node.rightChild, layer + 1)
    }
  }
  traverorder(root, 0)
  return res
}
console.log(levelOrder21(tree.root))

// 输入两棵二叉树A，B，判断B是不是A的子结构。
function HasSubtree (pRoot1, pRoot2) {
  var result = false
  if (pRoot1 && pRoot2) {
    if (pRoot1.val === pRoot2.val) {
      result = treetotwo(pRoot1, pRoot2)
    }
    if (!result) {
      result = HasSubtree(pRoot1.leftChild, pRoot2)
    }
    if (!result) {
      result = HasSubtree(pRoot1.rightChild, pRoot2)
    }
  }
  return result
}
function treetotwo (pRoot1, pRoot2) {
  if (pRoot2 == null) return true
  if (pRoot1 == null) return false
  if (pRoot1.val !== pRoot2.val) return false
  return treetotwo(pRoot1.leftChild, pRoot2.leftChild) && treetotwo(pRoot1.rightChild, pRoot2.rightChild)
}
// console.log(HasSubtree(tree.root, tree2.root))

// 树的镜像
function Mirror (root) {
  if (!root) return []
  var res = []
  function traverorder (node, layer) {
    if (node) {
      traverorder(node.leftChild, layer + 1)
      res[layer] ? res[layer].push(node.val) : res[layer] = [node.val]
      traverorder(node.rightChild, layer + 1)
    }
  }
  traverorder(root, 0)
  console.log(res)
  var arrss = []
  res.forEach(function (item) {
    for (var j = item.length - 1; j >= 0; j--) {
      arrss.push(item[j])
    }
  })
  return arrss
}
// console.log(Mirror(tree3.root))

// 根据前序和中序重新重建一棵树
function reConstructBinaryTree (pre, vin) {
  // write code here
  if (pre.length === 0 || vin.length === 0) {
    return null
  }
  var index = vin.indexOf(pre[0])
  var left = vin.slice(0, index)
  var right = vin.slice(index + 1)
  return {
    val: pre[0],
    left: reConstructBinaryTree(pre.slice(1, index + 1), left),
    right: reConstructBinaryTree(pre.slice(index + 1), right)
  }
}
// console.log(reConstructBinaryTree([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6]))
