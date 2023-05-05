# 执行过程（算法）  

## 事件循环

一个javascript引擎会常驻在内存中，等待着我们（宿主）把javascript代码或者函数传递给他执行。  

宿主（浏览器或node）发起的任务称为宏观任务（宿主级任务），javascript引擎发起的任务称为微观任务（引擎级任务）。  

每次的执行过程其实都是一个宏观任务，所以宏观任务队列就相当于事件循环。在宏观任务中，javascript还会产生异步代码，javascript必须保证这些异步代码在一个宏观任务中完成，所以每个宏观任务又包含了一个微观任务队列。  

经典异步封装
```js{4}
function sleep(duration) { 
  return new Promise(function(resolve, reject) { 
    setTimeout(resolve,duration); 
  }) 
}
```

## 闭包

### 定义

闭包只是一个绑定了执行环境的函数。  

包含两个部分：  

- 环境部分：环境（函数的词法环境），标识符列表（函数中用到的未声明的变量）  

- 表达式部分（函数体）  

词法环境只是执行上下文的一部分。
### 执行上下文
javascript标准中把一段代码（包括函数），执行所需的所有信息定义为执行上下文。  

包含七个部分：  

- lexical environment：词法环境，当获取变量或this值时使用。  

- variable environment：变量环境，当声明变量时使用。  

- code evaluation state：用于恢复代码执行位置。  

- Function：执行的任务时函数时使用，表示正在执行的函数。  

- ScriptOrModule：执行的任务时脚本或模块时使用，表示正在执行的代码。  

- Realm：使用的基础库和内置对象实例。  

- Generator：仅生成器上下文有这个属性，表示当前生成器。  

### 立即执行函数的写法
```js{4}
void function() {
  var a = 1
}()
```

## 函数

在javascript标准中，为函数规定了用来保存定义时上下文的私有属性[[Environment]]。当一个函数执行时，会创建一条新的执行环境记录，记录中的外层词法环境会被设置成函数的[[Environment]]。也就是说，函数执行时的外层词法环境是根据函数定义时来确定的，比如查找变量时，如果变量不存在，就会根据定义时的上下文到外层进行查找。  

javascript使用一个栈来管理执行上下文，这个栈中的每一项又包含一个链表。当函数调用时，会入栈一个新的执行上下文，函数结束调用时，执行上下文会出栈。  

this是一个更为复杂的机制，javascript标准定义了[[thisMode]]私有属性。  

[[thisMode]]私有属性有3个取值  

-	lexical：表示从上下文中找this，对应了箭头函数（var a => () {console.log(this)}; a(); // window）。  

-	global：表示当this是undefined时，取全局对象，对应普通函数（function a() {console.log(this)}; a(); // window）。  

-	strict：当严格模式时使用，this严格按照调用时传入的值，可能为null或者undefined，对应Class中创建的方法。  

函数创建新的执行上下文的词法环境记录时，会根据[[thisMode]]来标记记录的[[ThisBindingStatus]]私有属性。代码执行遇到this时，会逐层检查当前词法环境记录中的[[ThisBindingStatus]]，当找到有this的环境记录时获取this的值。

## 语句

### 分类
- 普通语句
  - 表达式语句
  - 空语句
  - 语句块
  - if语句
  - switch语句
  - 循环型语句 
    - for循环
    - while循环
  - continue语句
  - break语句
  - return语句
  - throw语句
  - try语句
  - with语句
  - debugger语句
- 声明类语句
  - var声明
  - const声明
  - let声明
  - 函数声明
  - 类声明  

声明型语句跟普通语句最大区别就是声明型语句响应预处理过程，普通语句只有执行过程。
### Completion Record：
javascript语句执行机制的一种基础类型，用于描述异常、跳出等语句的执行过程，表示一个语句执行完后的结果。  

3个字段
- [[type]]表示完成的类型，有break、continue、return、throw和normal几种类型。
- [[value]]表示语句的返回值，如果没有，则是empty。
- [[target]]表示语句的目标，通常是一个javascript标签。  

### 语句块
-	就是用大括号括起来的一组语句，它是一种语句的复合结构，可以嵌套。
-	语句块内部的语句的Completion Record的[[type]]如果不为normal，会打断语句块后续语句的执行。  

正常normal语句
```js{4}
{
    var i = 1; // normal, empty, empty
    i ++; // normal, 1, empty
    console.log(i) //normal, undefined, empty
} // normal, undefined, empty
```

插入return语句打断
```js{4}
{
    var i = 1; // normal, empty, empty
    return i; // return, 1, empty
    i ++; 
    console.log(i)
} // return, 1, empty
```

如果在语句块中插入了一个return语句，产生了一个非normal记录，那么整个语句块都会成为非normal。这个结构就保证了非normal的完成类型可以穿透复杂的语句嵌套结构，产生控制效果。
	






