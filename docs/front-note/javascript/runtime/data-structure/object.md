# 对象

要想理解 JavaScript 对象，必须清空我们脑子里“基于类的面向对象”相关的知识，回到人类对对象的朴素认知和面向对象的语言无关基础理论，我们就能够理解 JavaScript 面向对象设计的思路。

## 具体设计

具有高度动态性的属性集合。

## 对象的分类

### 宿主对象

由javascript宿主环境提供的对象，他们的行为完全由宿主环境决定。浏览器环境下的window和node环境下的global。

### 内置对象

固有对象：由标准规定，随着javascript运行时创建而自动创建的对象。  

原生对象：可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对象。  

普通对象：由{}语法、Object构造器或者Class关键字定义类创建的对象，它能够被原型继承。
## 对象的特征
对象具有唯一标识性：即使完全相同的两个对象，也不是同一个对象。  

对象有状态：对象具有状态，同一对象可能处于不同状态。  

对象有行为：对象的状态可能因为它的行为产生变迁。  

## 对象的标识性

使用内存地址来体现，对象具有唯一的内存地址，所以具有唯一标识性。

## 对象的状态和行为

在c++中叫成员变量和成员函数，在java中叫属性和方法，在javascript中统一被称为属性。

## javascript对象独有的特色

对象具有高度动态性，这是因为javascript赋予了使用者在运行时改变对象状态和行为的能力，而其他面向对象的语言在运行时是不能改变对象的。

## javascript对象的两类属性

数据属性和访问器属性。

## 数据属性的4个特征值

value：就是属性的值。  

writeable：决定属性是否可以被赋值。  

enumerable：决定for in能否枚举该属性。  

configurable：决定该属性能否被删除或改变特征值(value、writeable、enumerable、configurable）。

## 访问器属性的4个特征值

getter：函数或者undefined，在取属性值时被调用。  

setter：函数或者undefined，在设置属性值时被调用。  

enumerable：决定for in能否枚举该属性。  

configurable：决定该属性能否被删除或改变特征值(value、writeable、enumerable、configurable）。  

eg. var o = {get a() {return 1}} console.log(o.a) // 1

