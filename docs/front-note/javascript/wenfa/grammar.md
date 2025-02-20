# 语法

## javascript的两种源文件  

脚本：具有主动性的代码段，是控制宿主完成一定任务的代码。  

模块：被动性的代码段，是等待被调用的库  

现代浏览器可以支持使用script标签引入模块或脚本。如果引入模块，必须给script标签添加type=“module”；如果引入脚本，则不需要添加。  

脚本中包含语句，模块中包含import声明、export声明和语句三部分。  

函数体其实也是一个语句的列表。跟脚本和模块比起来，函数体中的语句列表中多了 return 语句可以用。

## 预处理  

javascript执行前，会对脚本、模块和函数体中的语句进行预处理。预处理将会提前处理var、函数声明、class、let和const这些语句，以确定其中变量的意义。

### var声明

var声明永远作用于在脚本、模块和函数体这个级别，在预处理阶段，不管赋值部分，只管在当前作用域声明这个变量。  

我们知道 if(false) 中的代码永远不会被执行，但是预处理阶段并不管这个，var 的作用能够穿透一切语句结构，它只认脚本、模块和函数体三种语法结构。  

### function声明

在全局（脚本、模块和函数体），function 声明表现跟 var 相似，不同之处在于，function 声明不但在作用域中加入变量，还会给它赋值。  

function 声明出现在 if 等语句中的情况有点复杂，它仍然作用于脚本、模块和函数体级别，在预处理阶段，仍然会产生变量，它不再被提前赋值，赋值行为发生在了执行阶段。
### class声明

class 声明也是会被预处理的，它会在作用域中创建变量，并且要求访问它时抛出错误。  

class 的声明作用不会穿透 if 等语句结构，所以只有写在全局环境才会有声明作用
### 指令序言

脚本和模块都支持一种特别的语法，叫做指令序言（Directive Prologs）。  

"use strict"是 JavaScript 标准中规定的唯一一种指令序言，但是设计指令序言的目的是，留给 JavaScript 的引擎和实现者一些统一的表达方式，在静态扫描时指定 JavaScript 代码的一些特性。