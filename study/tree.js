/**
 * 定义二叉树的节点结构
 * 在原型连上实现
 */
function Node() {
    this.val = null
    this.leftChild = null
    this.rightChild = null
}

function BinaryTree() {
    this.root = null
}

BinaryTree.prototype = {
    constructor: Node,
    insertNode: function (val) {
        var root = this.root
        if (this.root === null) {
            this.root = {}
            this.root.val = val
        } else {
            insertData(this.root, val)
        }
    },
    travelTree: function (root) {//这个其实是前序遍历的哦
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
function insertData(node, val) {
    if (val < node.val) {
        if (node.leftChild == null) {
            node.leftChild = { val }
        } else {
            insertData(node.leftChild, val)
        }
    } else {
        if (node.rightChild == null) {
            node.rightChild = { val }
        } else {
            insertData(node.rightChild, val)
        }
    }
}

var tree = new BinaryTree()

tree.insertNode(5)
tree.insertNode(10)
tree.insertNode(1)
tree.insertNode(3)
tree.insertNode(20)
tree.insertNode(8)
// tree.travelTree(tree.root)
// console.log(JSON.stringify(tree))
// {"root":{"data":5,"rightChild":{"data":10,"rightChild":{"data":20},"leftChild":{"data":8}},"leftChild":{"data":1,"rightChild":{"data":3}}}}
// 前序遍历
// 方法1：递归

// 1.1
// var preorderTraversal = function (root) {
//     if(!root) return [];
//     return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));
// };

// //1.2
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

//方法2：非递归
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

// 中序遍历
// 1.递归
// var inorderTraversal = function(root) {
//     var list = [];
//     if(root){
//         inOrder(root);
//     }else{
//         return [];
//     }
//     return list;
//     function inOrder(root){
//         if(root){
//             inOrder(root.leftChild);
//             list.push(root.val);
//             inOrder(root.rightChild);
//         }
//     }
// };

// 2.非递归
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

// 后序遍历
// 1.递归
// 1.1
// var postorderTraversal = function(root) {
//     var list = [];
//     if(root){
//         afterOrder(root);
//     }else{
//         return [];
//     }
//     return list;
//     function afterOrder(root){
//         if(root){
//             afterOrder(root.leftChild);
//             afterOrder(root.rightChild);
//             list.push(root.val);
//         }
//     }
// };

//1.2
// var postorderTraversal = function(root) {
//     if (!root) return [];
//     return postorderTraversal(root.leftChild)
//     .concat(postorderTraversal(root.rightChild))
//     .concat([root.val]);
// };

// 2.非递归
var postorderTraversal = function(root) {
    let res = []
    let stack = []
  
    if (!root) {
      return []
    }
  
    stack.push(root)
    while (stack.length) {
      let tmp = stack.pop()
      if (!tmp.leftChild && !tmp.rightChild) {
        res.push(tmp.val)
        continue
      }
      stack.push(tmp)
      if (tmp.rightChild) {
        stack.push(tmp.rightChild)
        tmp.rightChild = null
      }
      if (tmp.leftChild) {
        stack.push(tmp.leftChild)
        tmp.leftChild = null
      }
    }
    return res
  };


console.log(postorderTraversal(tree.root))