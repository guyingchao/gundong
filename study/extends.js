function Fun(){
	//私有属性
	var val = 1;//私有属性
	var arr = [1];//私有引用属性
	function fun(){}  //私有函数（引用属性）
	//实例属性
	this.val = 1;  //实例基本属性
	this.arr = [1];  //实例引用属性
	this.fun = function(){};//实例函数（引用属性）
	}
	//原型属性
	Fun.prototype.val = 1;//原型基本属性
	Fun.prototypr.arr = [1];//原型引用属性
	Fun.prototype.fun = function(){};//原型函数（引用类型）
	//在这个原型函数中，可以使用它所定义的所有属性

	// 1.原型链继承
	function Super(){
		this.val = 1;
		this.arr = [1];
	}
	function Sub(){
	}
	Sub.prototype = new Super();//核心代码
	var sub1 = new Sub();
	var sub2 = new Sub();//用构造函数创建了两个对象
	sub1.val = 2;
	sub1.arr.push(2);
	alert(sub1.val);//2
	alert(sub2.val);//1
	alert(sub1.arr);//1,2
	alert(sub2.arr);//1,2

// 2.借用构造函数
function Super(val){
  this.val = val;//可以传递参数
  this.arr = [1];
  this.fun = function(){
 }
}
function Sub(val){
    Super.call(this,val);//核心代码
    //通过call()和apply()方法在新创建的对象上执行构造函数
}
var sub1 = new Sub(1);
var sub2 = new Sub(2);
sub1.arr.push(2);
alert(sub1.val);//1
alert(sub2.val);//2
alert(sub1.arr);//1,2
alert(sub2.arr);//1
console.log(sub1.fun === sub2.fun);//false
console.log(sub1.arr === sub2.arr);//false

// 组合继承
