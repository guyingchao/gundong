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
//2.2(这是一个通用的非递归算法。中序遍历和后续都可以通过他稍微改一下实现)
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

//前序非递归（和中序遍历一样）
function preorderTraversal (root) {
    var result=[];
    var stack=[];
    while(stack.length||root){
            if(root){
                stack.push(root);
                result.push(root.val);
                root = root.leftChild
            }else{
                root=stack.pop();
                root = root.rightChild;
            }
        }
    return result;
}

// 中序遍历
// 1.递归
/**
 * 这个是递归通用的方法
 */
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


console.log(preorderTraversal(tree.root))
