# CSS

CSS顶层样式表由两种规则组成的规则列表组成：@-rule（@规则）和qualified rule（普通规则）
## @-rule

-	@charset：用于提示CSS文件使用的字符编码方式，如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。
-	@import：用于引入一个CSS文件，除了@charset规则不会被引入，@import可以引入另外一个文件的全部内容。
-	@media：media query使用的规则，它能够对设备的类型进行一些判断，在media区块内，是普通规则列表。
-	@page：用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型，除了页面本身，还可以设置它周围的盒。
-	@counter-style：产生一种数据，用于定义列表项的表现。
-	@key-frames：产生一种数据，用于定义动画关键帧。
-	@fontface：用于定义一种字体，icon font技术就是用这个特效来实现的。
-	@support：检查环境的特性，与media比较类似。
-	@namespace：用于跟XML命名空间配合的一个规则，表示内部的CSS选择器全部带上特定的命名空间。
-	@viewport：用于设置视口的一些特性，因为兼容性不是很好，多数时候被HTML的meta代替。
## qualified rule

### 选择器
任何选择器，都是由几个符号结构连接的：空格（后代选择器）、大于号（直接子代选择器）、加号（紧邻兄弟选择器）、波浪线（一般兄弟选择器）、双竖线（列组合器）。  

对每一个选择器来说，如果它不是伪元素的话，由几个可选的部分组成，标签类型选择器，id、class、属性和伪类，它们中只要出现一个，就构成了选择器。  

如果它是伪元素，则在这个结构之后追加伪元素。只有伪类可以出现在伪元素之后。
### 声明列表

声明部分是一个由“属性: 值”组成的序列。

#### 属性

由中划线、下划线、字母等组成的标识符。
#### 值

根据每个 CSS 属性可以取到不同的值，这里的值可能是字符串、标识符。  

函数类型
- calc()：基本的表达式计算，允许不同单位混合运算
- max()：取两数中较大的数
- min()：取两数中较小的数
- clamp()：给一个值限定一个范围，超出范围外则使用范围的最大或者最小值
- toggle()：规则选中多于一个元素时生效，它会在几个值之间来回切（比如我们要让一个列表项的样式圆点和方点间隔出现：ul { list-style-type: toggle(circle, square); }）
- attr()：允许 CSS 接受属性值的控制

	