# 类型
## Undefined

Undefined类型表示未定义，只有一个值，就是undefined。  

任何变量在没赋值之前都是Undefined类型，值为undefined，一般我们可以使用全局变量undefined（就是值为undefined的这个变量）来表达这个值，或者用void运算（let result = void(0) // undefined）来把任意一个表达式变成undefined。  

在javascript中，undefined是一个变量而不是关键字，可以被改变（如果有人在全局中写了var undefined = 1，那么以后用undefined赋值就会变成1），所以建议使用void(0)来获取undefined值。

## Null

表示定义了但是为空，是javascript中的关键字，可以放心使用null。

## String

表示文本数据，最大长度是2的53次方-1，但是这个最大长度指的不是理解中的字符数，因为String不是“字符串”，而是字符串的UTF16编码，所以字符串的实际长度是受编码影响的（也就是说length获取的长度并不是理解上的长度，而是编码码点长度）。

## Number

符合双精度浮点数的规则，非整数的Number类型不能用==或者===来比较，而是需要用javascript提供的最小精度值（Number.EPSILON）来比较：console.log(Number.abs(0.1+0.2-0.3)<=Number.EPSILON) // true

## Symbol
是一切非字符串的对象key的集合，在ES6系统中，整个对象系统被用Symbol重塑。

## Object

定义是“属性的集合”，属性分为数据属性和访问器属性，二者都是key-value结构，key可以是字符串或Symbol类型。

Number、String、Boolean，三个构造器是两用的，直接调用会强制转换类型，用new调用会返回一个对象类型，所以Number(3)和new Number(3)完全不是同一个值，一个是Number类型，一个是对象类型。  

Symbol对象比较特殊，使用new调用Symbol函数会报错，但他也是Symbol对象上的构造器。  

.运算符提供了一个装箱操作，他会根据基本数据类型构造一个临时对象，使得我们能在基本数据类型上调用对应对象的方法。  

## 装箱转换

将基本数据类型转换为对应的对象，使用内置的Object函数，可以显式的调用装箱能力：var symbol = Object(Symbol(‘a’))。

## 拆箱转换

将对象类型转换为基本数据类型，遵循先拆箱再进行基本数据类型内部的转换。  

拆箱转换会调用valueOf和toString两个方法，如果两个方法都不存在或者没有返回基本数据类型，就会报错。