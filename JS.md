



# JS

ECMAScript		标准定义javascript语法（ES）

DOM					页面文档对象模型

BOM					浏览器对象模型

---

## *琐碎知识点

---

字符串自变量

```
格式： `(content)`
```

```
${(content)}   表示使用content下的值
```

---

### *标签特性

```
tag1: for(let i = 1; i <= 10; i++) {
            tag2: for (let t = 1; t <= 10; t++) {
                if(t % 2 ==0) {
                    console.log(i,t)
                }
                if(i + t > 16) {
                    break tag2;
                }
            }
        }
```

---

### *console

```js
console.table
console.dir
```

---

*return

```js
return终止函数执行
```

### *{}()

```js
包起来有两种形式：
包小的： ();
包大的： {};
```

---

## 第一章 简述

### 总体逻辑

1 存储数据

2 调出数据

编程语言是用合适的结构来储存数据和合适的算法来管理数据。



浏览器：

1 解析

2 执行



提前声明完，达到先声明后赋值。

---

### 规范

1 js一般放在下边，以免造成后边的代码加载不出来

2 分号要加。很多语言，工具不加分号是会报错的。

3 函数体内需要声明，便于调用协作。

---

### 特性

1 多端同时运行，切换端到端只需要进行相对小的调整。

2 前后台js都可以，前台使用js，后台使用node.js。

3 js每年更新发布。

---

### 插件

1 liveserver--提供实时更新

2 chrome--浏览器  con+shift+i 调控制台

---

### 加载方式

嵌入 外联 内联

---

### 注释

1注释的效果是让一段代码失效，并且是暂时失效。

2所以灵活使用注释非常好用，方便调试。

3对晦涩的代码进行声明，在后期维护非常有用。

---

### ★变量声明

**声明本质上也是一种接收**

1 var      *变量提升*

2 let     *TDZ √临时锁区，必须在声明后使用*   建议使用

3 const	*TDZ √临时锁区，必须在声明后使用*    建议使用

​	const定义常量，常量名为大写。

​	const定以后在同作用域内不可修改变量内存地址的引用。

使用let 和 const 有利于代码思维养成，即先声明后赋值。

包括两部分： 声明 和 赋值

规范：*字母数字下划线*

共同点: 1 函数体内均可访问外部变量/全局变量

​				2 内部变量和全局变量名称一致但未声明的，会重新改变全局变量。(造成全局污染)。

​				3 函数体内部声明后，即为函数体私有变量，不影响全局变量。

未声明变量直接使用会直接污染全局，尽管可以使用。

每次声明变量，js会在内存中开辟一段空间来储存数据。

js可一次声明并定义多个变量。

通过变量名，js可以从内存中调用其数据。

js中，变量类型根据变量值的不同而不同(弱类型)。

解析器在执行代码前会对代码进行分析，将一些代码变量提升。

---

### 调试代码

console.log

typeof

---

### 块作用域//关于var

1 花括号：｛｝   一个花括号内部即一个块

​	如果｛｝内部使用了var定义，那么在｛｝外部依然可以访问。

​	如果｛｝内部使用let/const定义，在｛｝外部访问不到。

2 闭包内部开放接口。

​	通过使用接口来减少冲突。

---

### window对象

普通声明变量会直接影响window，其结果是有可能会人为污染已定义的方法

var声明会将其放入window属性，和window连接

let声明的值不会影响到window，是分离开来的。

var的重复声明不会提示和报错、

let/const 在同一作用域内重复声明会发出提示

---

### 引用

在对象中，创建一个引用会在内存地址中开辟一个较大的内存空间。

修改对象中的值是在已有内存空间内进行修改，不会改变内存地址。

---

### 变量冻结

（可使用）"use strict"; 开启严格模式，当使用object.freeze锁定变量而代码中尝试修改的时候会在console里报错。

Object.freeze() 锁定变量

---

### 引用类型

传址： var a = b；

传值： var a = 1；

---

### null与undefined

null是null

undefined是undefined

---

### 严格模式

作用域：当前作用域和下级作用域

一句话，写代码的时候使用严格模式。

---

## 第二章 流程控制

---

### ★前加与后加

![image-20220417184346271](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220417184346271.png)

++1和1++不参与其它运算的时候结果对我们来说是一样的。

赋值与自加的顺序不同。

若参与表达式：

​		++1：   

```html
let a = b + ++n
相当于:
let a = b + (n = n + 1)
```

​		1++：

```
let a = b + n++
相当于：
let a = b + n, n = n + 1
```

### 三元表达式

三层结构：

第一层：   问号之前

第二层： 问号后（结果1）；

第三层：冒号后（结果2）；

---

### switch

```js
switch () {
	case ():
	xxx
	break;
	
	default:
	xxx
}
```

需要注意的是，当主判断为true时，即无条件执行switch语句。相当于if

```
switch(true) {
	case():
	xxx
	break;
	
	default: 
	xxx
} 
```

---

### while

判断表达式可以为多个条件！

```
while (i-- !=0) {
	xxx
}
```

do while:

```
do{
	xxx
} while() {
	
}
```

先执行do里的程序再执行while循坏里的语句。

do里的语句很多为赋值语句。

---

### continue

continue是跳过当前循环，直接进入下一个循环。

---

### ★label标签

任何语句中都可以添加label标签，标签起到定向的作用。

![image-20220403182956495](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220403182956495.png)

（蛮有用的）

---

### for in & for of

for in遍历，取索引。

​			取索引的时候，通过方法调取的话需要用[]的形式

```js
for (const key in grade) {
        console.log(grade[key]);
    }
```

for of 遍历，取值。

---

## 第三章 基础知识

变量不存在时打印会出现undefined

抛出错误：

```javascript
if (typeof variable == "undefined") {
throw new Error("content")
}
```

instanceof（判断prototype）：当判断object对象时使用

```js
console.log(variable instanceof Array/Object)
```

字符串简写&字符串自变量

```js
        let text_document = "\"内容1\"\"内容2\"\"内容3\"";
        console.log(text_document);
```

---

### 转换符

\xxx

在html里中，\t只能显示一个，若显示多个空格，使用：

```javascript
"&nbsp;"
```

### 字面量

```javascript
       let obj = [
            {title:"RGB"},
            {title : "GRC"},
            {title : "CMD"}
        ];
        function show() {
            return `
            <ul>${obj.map(item => "<li>"+ item.title +"</li>").join("")}</ul>
            `
        }
        document.body.innerHTML = show()

```

基本形式： 

```javascript
${}
```

可以添加基本上所有的表达式。

字面量里可以套字面量

---

### ★字符串

```javascript
toUpperCase()  	大写模式
toLowerCase()	小写模式

去除空白： trim()
取编号：charAt(num)
截取 .slice(num)
    .substring(num)
	.substr(num)   用这个.    第二个参数选择截取数量
num指从哪里截取
检索：indexOf("str")    返回数字
	 lastIndexOf("str") 				从后向前查找
	 includes("str")   返回布尔类型
     
     starsWith("str")    是否以str为开始
     endsWith("str")
替换： replace(替换对象，替换内容)
重复: repeat(num)
转换： ①隐式转换  参与其它数的运算   转数字： *1 转str：+"“
	  ②直接转换
      parseInt/String/toString()
		parseint只能转换以数字开头并且添加其它类型的数据
        string只能字符串数字转换成数字
        string无小数位数
        toString()是方法
连接：(array) .join("")  以“”形式进行连接
返回原型： valueOf()

连接数组：join()
```

**通过 new方法建立的variable都是object类型**

标准： 声明对象     ==》 调用(类/构造函数)方法

---

### ★布尔

object在boolean中是true（【】和｛｝转换过来都是真）

boolean对象中转换为数值类型时，true为1 false为0.

判断中会转换为数值类型，而表达式中不会转换

字符串中的数字转换为数值，就是数值...

空数组转换为数值也是0

逻辑：(xxx  == ooo)   ==>   (xxx=>数值    000==>数值， x数值与0数值比较)

比较和转换是两件事。

```javascript
数值类型： 	0为假  		！0为真
字符串类型：  	 空字符串为假   ！空字符串为真
引用类型：		[]和｛｝为真
```

boolean转换：

1：Boolean()

2：variable = !!variable;

```javascript
let number = 0;
number = !number ==>干了两件事： 1 number转换为boolean类								   型，
							   2 将其取反
console里输出为：true

而大多数时候我们只是将其转换为boolean，所以:
number = !!number 
console里输出为：false
```

用.语法调方法时会先转换为对象再调用，也就是说非引用类型是不能直接调用方法的。

```javascript
判断是否为整数： Number.isInteger(num)  【构造函数的静态方法
四舍五入:toFixed(num_s) num_s表示小数留多少位 (0时即取整)
```

---

### 其它

NAN不可与NAN比较

```javascript
判断是否为NAN：Number.isNaN(num);
			Object.is(num,type)   type为检验的类型
```

表单类型设置为只能输入数字，可以减少后续转换数据的麻烦。

---

数字转换：

```javascript
parse系列转换
```

***JS是很开放的语言***

---

### ★Math库

```javascript
取最大：Math.max()
取整： ~.ceil() 向上取整
	  ~.floor()向下取整
舍入：~.round()
随机：~.random()     0-1间的数    向下取整取到的是(a,b-1)

不能转换数组，所以需要转换。简单的转换通过展开语法：
let arr = [1,5,48,79,5,13,2,1];
console.log(Math.max(...arr));
或者通过apply方法：
console.log(Math.max.apply(Math,arr))
```

取0开始到某个数：![image-20220409154228118](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220409154228118.png)



取区间（包含右边）![image-20220409154501795](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220409154501795.png)

```javascript
取区间的时候，比如我要取
let students = ["第一", "第二", "第三", "第四", "第五"];
中的第三到第五，那么换成索引，区间为：
(2,4)

转换算法：(2,4+1) ==> [2,5]
let index = 2 + Math.floor(Math.random() * (students.length - 2));

console.log(studens[index]);
```

随机获取：

```javascript
function ran_get(array, start = 1, end) {
        //     start--;
        //     end = end || array.length;
        //     const index = start + Math.floor(Math.random() * (end - start));
        //     return array[index];
        // }
```

---

### ★时间戳

1 使用new date() 方法创建objcet(而不是date()创建字符串)，让其*1：

2 number(date)

3 date.valueof

4 date.getTime



1:

```javascript
let time = new Date(); ==>对象
let time = Date(); ==>字符串

time * 1  ==>返回时间戳(只能是new Date()创建)
```

时间戳是1970年到现在经历的毫秒数

通过字符串：

```javascript
const time = new Date("1990-9-22 3:22:22")
const time = new Date(1990,2,22,13,22,19)

const param = [1990,2,22,13,22,19]
const time = new Date(...param)
```

---

时间戳转换为ISO日期：

```javascript
直接把时间戳扔到Date里: 
let time = new Date(timestamp)
```

日期获取：

```javascript
function timeFormat(date,format="YYYY-MM-DD HH:mm:ss") {
            const config = {
                YYYY:date.getFullYear(),
                MM:date.getMonth() + 1,
                DD:date.getDate(),
                HH:date.getHours(),
                mm:date.getMinutes(),
                ss:date.getSeconds()
            }
            for (const key in config) {
                format = format.replace(key,config[key]);
            }
            return format;
        }
```

---

## 第四章 Array

后台数据转为前台通过数组进行处理

引用类型是传址操作

一般数组操作是在封装内定义一个新数组，把需求数组的值复制/把地址传给新数组，然后在新数组的基础上进行修改。

对{}操作可以使用  variable['xxx'] 或者variable.xxx都可

---

### ★定义

```JavaScript
数组创建
new Arry(obj1,obj2,obj3);	对象形式
const array = [];			字面量形式
Array.of();					数组只有单个数据时创建
操作超过数组长度的数据时，会使用undefined去填写间隔数据。

多堆数组
[[],[],[],[],];				多堆数组（嵌套）
{{a1:"v1"},{a2:"v2"},{a3:"v3"},{a4:"v4"}]
array[n][m];				多堆数组提取：
```

### ★方法：添连改检

```javascript
添加元素：push()        			(使用forof迭代后追加）
连接数组：join("")；
修改数组：array[n] = "***";
检测是否为数组：~.isArray();

(通过table调用Array更加直观)

追加数组中元素：
数组一般追加有两种：单个增加和数组增加（多个）增加。					 array[array.length] = ''
			 点语法追加数组
             array.push(array2)追加数组
             array.unshift()
push和unshift返回值是其在数组中的位置（而不是索引）

删除数组中数据：array.pop()从后边弹出
			 array,shift()从前边移出

清空数组:array.length = 0;|| array = [];||arr.splice(0)

例：
		let yz = [1,2,3,4,5];
		let arr = yz;

		两种清空的区别：array.length = 0是改变yz数组的值，
					 yz = [] 是改变了yz的引用，而arr里的地址仍然指向[1,2,3,4,5]


填充数组中元素：array.fill

灵活的方法；array.slice(start,end) 截取的是value，end取不到
				若slice方法不规定参数，则相当于复制了数组
                可以是负值
                不修改原数组
		  array.splice方法
				这个方法是修改原数组
                可实现增删改所有操作
          增加：~.splice(0,0,"content") 前增
          	   ~.splice(~.length,0,"content") 后增
               ~.splice(start,end,"content1",...)
                    end为0时在其索引为start位置追加内容
          截取：~.splice(start,how many) 
          移除：~.splice(start,how many)
		  更换：~.splice(start,how many,"fixed con")
```

```javascript
new Array 和 Array.of()创建的区别：
new Array(n)创建会创建n个undefined，
Array.of(n)会创建一个value为n的数。

 const array = [1,2];
 此时改变数组中的值并不会报错，因为其内存地址没有变化，变化的是内存地址中的值
```

js中的数组和其它语言是不能通用的，通用的是字符串、json、xml。

**String()   是在前使用的构造函数方法    .toString是在后使用的**

---

### ★拆分与合并

```javascript
拆分字符串：split("")		返回字符，括号内填的是拆分对象标准
合并：join()
	.concat() 			在原来数组增加数组，可传多个参数
复制；.copywithin(loaction,from,to)    改变原数组
	let array = [1,2,3,5,6];
        let arr = array.copyWithin(2,0,2)
        console.log(arr)   结果为12126
      
        核心编程就是数据处理
        
```

---

### ★查找

```javascript
let arr = [1,2,3,4];

1 indexOf()    返回索引位置   查找不到时返回-1  从左查找
2 lastIndexOf()  						    从右查找

3 includes()    返回布尔    对引用类型不适合查找
includes实现：
function includes(array, find) {
            for (const value of array)
                if (value === find) return true;
            return false;
        }
4 find()     遍历元素  非贪婪，找到后返回true就会返回最近的值
			 返回的是值，找到值后返回值
             适合引用类型
5findIndex()   返回索引
	let obj = [{ name: "ggg" }, { name: "asdasd" }];
        let status = obj.find(function(obj) {
            return obj.name == "ggg";
        })
```

---

### ★字符串与数组的转化

```
字符串转换为数组：
拆分：str.split("")	按双引号拆分
	 str.split(",")	  按逗号拆分
	 
数组转换为字符串：
	 arr.from(str)   只要str中有length属性就可以使用，如果是｛｝转换需要加上length:n 属性
	 
```

---

### Dom节点与数组

```
Dom节点用数组方式进行操作：
数组里可以是字符串，数值，对象，当然也可以是Dom文档元素
let elements = [];
Array.from(elements,function() {})  第二个参数对数组中元素进行操作
这样做就不用使用循环
过滤器，map，from等等很多方法都可以进行二次处理
```

### 展开语法(扩展运算符)

使用场景：转换（数组、对象...），传参

```javascript
let arr = ["a","b","c","d","e","f"];
arr = [...arr];

展开操作包括添加，所以用来在原有数组上添加新数组十分方便

let arr2 = [1,2,3,4,5];
arr = [...arr,...arr2]
```

```JavaScript
多个元素赋值给一个变量：
“放”的含义是将*内容*放进去，内容的数据类型是什么就传什么。
function sum(...vars){
  	console.table(vars);
}
sum(1,2,3,4)
这里是指将1,2,3,4全部赋值给vars

计算器：
function sum(...vars){
            return vars.reduce((s,v)=>{
                return s += v;
            },0);
        }
console.log(sum(35,567,7,567,51))
```

### 点语法 

```javascript
[...item]  点语法
		作用：
			1 释放
            2 收集
            *一般是放在参数列后边*
```

类数组转换为数字：

```javascript
方法1
const div = document.querySelectorAll("div");
Array.from(div).map((item)=>{
    console.log(item);
})
方法2）(点语法)
console.log([...div]);
方法3
Array.prototype.map.call(div,(item)=>{
    console.log(item);
})

```

### ★解构语法

含义：将数组里的值批量赋值给变量,平均分布到变量当中。

​			将右侧数组中的值平均分配给左侧，若右侧的值比左侧的多，可以					使用点语法。

若无默认值可以设置默认值

Tips：**对象里用到的比数组多** 

```javascript
原始:
let arr = ["a","b"];
let attribute1 = arr[0];
let attribute2 = arr[1];
console.log(attribute1,attribute2) ==>{"a" "b"}
解构:
let arr = ["a","b"];
let [attribute1,attribute2] = arr;
优化：
function get() {
    return["a","b"];
}
let [attribute1,attribute2] = get()

```

```javascript
不建议使用以下情况：
[attribute1,attribute2] = ["a","b"]
因为：在"use strict"中不能使用（未定义）
```

```javascript
console.log(..."abcd") <===>
    
    const [...args] = "abcd"
	[...args] = ["a","b","c","d"];
```

```javascript
使用逗号占位以便赋值给想要的变量
let [,year] = [ac,2010];
```

```javascript
解构+展开

*放在变量位置时：吸收
let [name,...args] = ["给第一个","给第二个","给第二个"]
*放在赋值位置时：打散
let a = ["text",...args]
console.log(a)
```

```javascript
深入理解

function show([name,year]) {
    console.log(name,year);
}
show(["想要传的参数1","想要传的参数2"])

这样就通过调用时传参将参数传送到函数里，进而让函数调用，达到数组传参的意义。

```

---

### 移动数组位置

```javascript
移动数组位置
let array = [1, 2, 3, 4];
        function move(array, bg, ed) {
            if (bg < 0 || bg > array.length) {
                console.error("参数错误");
            }
            const newArray = [...array];
            let item = newArray.splice(bg, 1);
            newArray.splice(ed, 0, ...item);
            console.log(item)
            return newArray;
        }
        console.table(move(array, 1, 3))
```

---

### 排序

```javascript
arr.sort(function(a,b) {
    return a-b;//升序
    return b-a;//降序
})//系统提供的原始sort方法
所谓的体验就是让人感觉舒适

冒泡：
let array = [5,345,34,63,214,2,34]
        function sort(array,callback) {
            for (const n in array) {
                for (const m in array) {
                    if(callback(array[n],array[m]) < 0) {
                        const temp = array[n];
                        array[n] = array[m];
                        array[m] = temp;
                    }
                }
            }
            return array;
        }
        array = sort(array,function(a,b) {
            return b-a;
        });
        console.table(array);
```

---

### 传址与传值

```js
遍历之后的引用类型和值类型不同，
（遍历后是）引用类型在遍历之后会改变原有定义的引用类型，
[{},{},{}]这样的引用类型遍历，修改的是一个个的{}，所以会改变原有数组
而值类型[1,2,3,4]（遍历后是值），在遍历之后
for (let value of arr) {
    value += 10;
}
会在内存地址中新开辟一个地方，原有的数组不变。
```

```js
for in
    [
    0{},
    1{},
    2{},
    3{},
    4{},
    ]
for of 
	[
    {value},
	{value},
	{value},
	{value},
]
```

---

### ★forEach

```js
语法：
忘了自己搜去
.forEcah(value,index,arr){
    
}
操作DOM元素
let lis = document.querySelectorAll("li");
        lis.forEach(function(item) {
            item.addEventListener('click',function () {
                this.style.color = "red";
            })
        });

```

---

### ★迭代器

```js
.keys 取索引
	.keys.next() 取值
	返回的value是索引，done情况是是否迭代完成

.values 取值
	返回的value是值done情况是是否迭代完成```
```

```js
数组可用迭代器进行操作：
while ({value,done} = values.next()) {
}相当于while true

while (({value,done} = values.next())&&done===false)
    console.log(value)
```

---

### ★判断&过滤

```
统一判断的时候：
1 every
.every(function(value,index,arr){
	
	return true;
})
全为真返回真

2 some
.some(function(value,index),arr) {

	return true;
}
有一个为真就是真

```

```js
过滤
使用场景：获取某个区间里的数据
.filter(item,index,arr) {
    return true
}
只返回为真，过滤调掉其它的数据

自写过滤练习：（列表）
let array = [1, 2, 3, 4]
        function filter(array, callback) {
            let newArray = [];
            for (const value of array) {
                if (callback(value) == true) {
                    newArray.push(value);
                }
            }
            return newArray;
        }
        console.log(filter(array, function (value) {
            return value > 1;
        }));
```

---

### ★map

```javascript
对数组进行二次操作，返回新数组
let arr = [];
.map(function(item,index,arr) {
    return 
})
```

---

### ★reduce

```javascript
let arr = [];
使用场景：统计

arr.reduce(function(pre,cur,index,arr){
    
},pre初始值)
不设定初始值：第一次和第二次分别执行pre和cur，剩下的值为返回值
设定初始值，比如为0，那么pre=0，其它的值按顺序走

查找最大值
let arr = [1, 235, 645, 75, 2134, 74];
        function max(arr) {
            return arr.reduce(function (pre, cur) {
                return pre > cur ? pre : cur;
            })
        }
        console.log(max(arr))
```

---



### 查看元素内文本

element.textContent()

利用此方式，结合展开语法，将其变为数组

判断语句：

A == B &&C;   判断A是否等于B ，若等于就执行C

---

### 小案例

```javascript
结合css和js

<div name="demo">text file</div>


body {
            display: flex;
            justify-content: center;
            text-align: center;
            width: 100vw;
            height: 100vh;
            color: #2980b9;
        }
        div {
            font-size: 5em;
            font-weight: bold;
            text-transform: uppercase;
            color: #16a085;
        }
        div>span {
            position: relative;
            display: inline-block;
        }
        .color{
            animation-name: color;
            animation-duration: 1s;
            animation-iteration-count: 2;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
        @keyframes color{
            50%{
                color:#81ecec;
                transform: scale(2);
            }
            to{
                color:#00cec9;
                transform: scale(.5);
            }
        }








const div = document.querySelector('[name="demo"]');
        [...div.textContent].reduce(function (pre, cur, arr) {
            pre == 0 && (div.innerHTML = '');
            let span = document.createElement("span");
            span.innerHTML = cur;
            div.appendChild(span);
            span.addEventListener("mouseover",function(){
                this.classList.add('color');
            })
            span.addEventListener("animationend",function(){
                this.classList.remove('color');
            })
            
        }, 0)
```

---

## 第五章 Symbol

### Symbol

相当于设置一个唯一的标识，来确认不同的数据。

定义Symbol之后，绝对不会有重复。

使用场景类似与字符串



生成一个永远不重复的数字或字符串

```js
定义： let varibale = Symbol();
特性： 不可添加属性

方法： 1 Symbol()
let varibale = Symbol("content");
		console.log(varibale.description);
		打印出来是"content"
	  2 Symbol.for()
		核心是在内存中开辟一块新空间，在全局进行保存，将其content输入进内存空间内，使其唯一。 之后再次定义Symbol后会事先查找其内容在内存空间中是否有，如果有，传址。
        适用于Symbol反复被使用的场景。
        
      3查看内容： Symbol.keyFor(已被定义的Symbol变量)

```

---

### Symbol使用场景

```js

let user1 = "张三";
let user2 = "李四";
let grade = {
    张三:{js:100,css:99},
    张三:{js:22,css:15}
}
console.log(grade);

	 	*****对象里使用变量需要中括号*****
            
打印结果是user1:xxxx user2:xxxx,而我们想要的是将上边定义的变量传递过去。

类似这种情况下，后边会覆盖原先的内容，即出现相同部分数据但并非不同的时候，使用引用类型进行数据存放会导致数据丢失。这样的情况下，需要Symbol()这种唯一定义的数据类型。

修改以上代码：
let user1 = {
    name: "张三",
    key:Symbol();
}
let user2 = {
    name:"张三",
    key:Symbol();
}
let grade = {
    [user1.key] : {js:100,css:99},
    [user2.key] : {js:22,css:15}
}
console.log(grade)
此时将不会发生覆盖情况。

```

---

### 缓存

共享数据与模块：

​	前端中分成各种不同的功能模块，每个模块会有各自获取到的数据，而这些数据在其它模块中也需要使用，所以需要把所有模块中获取的数据进行统一存放，而这个统一存放的地区就是缓存，用于存放所有数据，并进行共享。

```js
情景2：用户数据被购物车数据覆盖（发生重复）
class Cache {
            static data = {};
            static set(name,value) {
                return (this.data[name] = value);
            }
            static get(name) {
                return this.data[name];
            }
        }
let user = {
    name:"apple",
    desc:"用户资料"
};
let cart = {
    name:"apple",
    desc:"购物车"
}
Cache.set("apple",user);
Cache.set("apple",cart);

此时后边的购物车里的apple会覆盖上边user的apple

修改方法1：添加时，在名称前添加前缀Cache.set("user-apple",user);
Cache.set("cart-apple",cart);

修改方法2：(Symbol())
let user = {
    name:"apple",
    desc:"用户资料",
    key:Symbol("会员资料")
};
let cart = {
    name:"apple",
    desc:"购物车",
    key:Symbol("购物车数据")
}
Cache.set(user.key,user);
Cache.set(user.key,cart);
```

----

### 遍历

引用对象里包含Symbol，使用以往的forof和forin是无法遍历key值的

遍历Symbol类型需要用特殊方法：

```js
方法1：只遍历Symbol属性
for (const key of Object.getOwnPropertySymbols())P{
    console.log(key)
}
方法2：遍历所有属性
for(const key of Reflect.ownKeys()){
    console.log(key)
}
```

```js
let site = Symbol("a symbol")
        class User {
            constructor(name){
                this.name = name;
            this[site] = "yzh";
            }
            getName(){
                return `${this[site]} ${this.name}`;
            }
        }
        let user = new User("李四");
        console.log(user.getName())
小案例告诉我们，不想要公布的属性(不被普通方法就遍历到的属性)可以使用Symbol()对其唯一定位和隐藏。
```

---

## 第六章 Set

### 基础

set 集合类型，包含了集合的性质。

​	*唯一性*				不可放重复数据

```js
set是类型严格约束
声明语句： let set = new Set();
追加：　set.add()
set无key和索引，所以使用数组和对象的key和索引方法的时候都是针对set的值
与对象的区别：
		对象中的属性都会转化为字符串，类似
		let obj = {
		1: "abc",
		"1":"cde"
		}

这样子是相同的东西，后边的"1"会覆盖掉前边的。
对象里使用变量需要加上[]，是key加上[]。
比如：
let new_obj = {
    [obj]: "content"
}
而对象是不能变成属性的，所以这一部分js内部实现机制是：
obj.toString  =>  添加属性

小结：
类型不同的时候可以存在多个，类型相同不能同时存在
```

```js
数量判断： ~.size()
判断是否有： ~.has()
删除： ~.delete()
清空：~.clear()
当传参为字符串时，会将字符串展开
例如： let set = new Set("abc") =>("a","b","c")
```

---

### 使用场景

去重，直接去重

```js
let arr = [1,23,352,412,4,1,4,23,352]
        array = [...new Set(arr)];
```



---

### 转换

```js
使用.from 转换为数组
```

---

### 遍历

```js
~.keys()或者~.values()或者~.entries    取值
 
关键词处理
let obj = {
            data: new Set(),
            set keyword(word) {
                this.data.add(word);
            },
            show() {
                let ul = document.querySelector('[name="dem"]')
                ul.innerHTML = '';
                this.data.forEach(function (value) {
                    ul.innerHTML += `<li>${value}</li>`;
                })
            }
        }
        let input = document.querySelector("[name='dem2']");
        input.addEventListener("blur", function () {
            obj.keyword = this.value;
            obj.show();
        })



```

---

### 并集交集补集

```js
let A = [1,2,3,4,55,512,123,2]
        let B = [55,4,1,4,234,5,]
        let a = new Set(A);
        let b = new Set(B);
        console.log(new Set([...a,...b]))

let A = new Set([1, 2, 3, 4, 55, 512, 123, 2,5]);
        let B = new Set([55, 4, 1, 4, 234, 5,]);
        // let a = new Set(A);
        // let b = new Set(B);
        // console.log(new Set([...a,...b]))
        console.log(new Set([...A].filter(function (item) {
            return B.has(item);
        })))
```

---

### WeakSet

```javascript
与Set类型一样，不能有重复的值（针对引用类型）。
let set = new WeakSet(["a","b"]);这样是报错的，因为[]内无论多少个值，都会被当称字符串
键必须为对象
需要改成：
let set = WeakSet();
set.add([blabla]);

Dom元素&节点对象，
```

---

### 引用类型垃圾回收

```js
赋值为空&删除：
let variable = null;

引用类型的垃圾回收机制就是根据引用次数是否为0，而进行是否在内存中所删除或者继续留着varibale
每当引用类型进行传址时，都会计算+1

```

---

WeakSet特性

```JavaScript
对弱引用有影响的都不能使用的都用不了。
只用来保存对象数据，没有其它特殊功能。
弱引用类型，keys，values等都无法使用
```

---

## 第七章 Map

----

对象类型只有字符串才能作为键

而Map类型无论什么类型都可以作为键

```js
定义： let map = new Map();(构造函数创建map)

使用： arr.map(function(value,index,arr){obj},{})
第二个参数赋值的话，function里的this会指向*map函数里*的对象。 
```

---

### 链式操作

```js
let map = new Map([]);
map.set("a").set("b").set("c")

map.set("a");
map.set
```

---

### 增删改查

```js
获取值： ~.get()
增加：~.set(key,value);
删除：~。delete(); 		删除成功返回true
	全部删除：~.clear();
查看是否存在：~.has();
```

---

### 遍历

```js
获取键： ~.keys()
获取值： ~.values();
获取键值对: ~.entries();
```

---

### 转换

有时候我们想对数据进行处理，A为想要处理的数据，但是对此方法不能适用于A的数据类型，只能适用于B的数据类型，所以我们的方法是将A的数据类型转换为B的数据类型，进而使用我们想用的方法去操作，最后输出转换回A的数据类型。

```js
转数组
[...map]///[...map.entries()]
单独转换键：
[...map.keys()];
单独转换值：
[...map,values()];
注：以上均为数组 
```

---

### Map优势

```js
获取元素属性:
~.getAttribute("")

使用Map类型进行操作：
	可以根原有属性隔离开来，不对原有属性进行破坏
```

----

### 表单提交

```js
HTML部分
<form action="https://www.bing.com" onsubmit="post()">
        接受协议
        <input type="checkbox" name="first_input" error="Please accept the protocol">
        学生
        <input type="checkbox" name="second_input" error="Only open for students">yep
        <input type="submit">
    </form>


js部分
function post() {
            let map = new Map();
            let inputs = document.querySelectorAll("[error]");
            inputs.forEach(item => {
                map.set(item, {
                    error: item.getAttribute('error'),
                    status: item.checked
                })
            })
            // console.log(map)
            return [...map].every(([element, config]) => {
                config.status || alert(config.error);
                return config.status;
            })
            return false;
        }
```

---

### WeakMap

用于课程表等保存受外部影响的数据

```js
与set的WeakSet相似，WeakMap类型不支持字符串添加。
键必须为对象

弱引用类型，语法较少

.set()
.delete()
.has()
```

```js
特性：
使用引用类型不增加计时器，即不触发垃圾回收机制
数据不准确，所以用不了类似与keys,values等方法

只是有大括号，没有值。
```

---

### 箭头函数

箭头函数不被this所搜索。

---

### WeakMap课程表

```js
//html部分
<ul>
        <li><span>www.bing.com</span><a href="#">+</a></li>
        <li><span>www.bilibili.com</span><a href="#">+</a></li>
        <li><span>www.houdunren.com</span><a href="#">+</a></li>
    </ul>

    <ul>
        <p id="ct">共选了2门课程</p>
        <p id="lists"></p>
    </ul>
//css部分
body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .remove {
            background-color: gray;
        }

        ul {
            list-style: none;
            position: relative;
            width: 300px;
            height: 300px;
            border: 1px solid #5fa2c5;

        }

        li {
            padding-top: 20px;
            padding-left: 20px;
            margin: 20px;
            width: 220px;
            height: 40px;
            border: 3px solid #5fa2c5;
        }

        ul>li>a {
            position: absolute;
            width: 20px;
            height: 20px;
            background: rgb(119, 250, 186);
            right: 30px;
            border-radius: 50%;
        }

        span {
            background: #5fa2c5;
            border-radius: 20%;
            margin-left: 20px;
        }
//js部分
class Lesson {
            constructor() {
                this.lis = document.querySelectorAll("li");
                this.countElement = document.getElementById("ct");
                this.listsElement = document.getElementById("lists");
                this.map = new WeakMap();
            }
            run() {
                this.lis.forEach(li => {
                    li.querySelector("a").addEventListener('click', (event) => {
                        // console.log(event.target.parentElement)
                        const a = event.target;
                        // console.log(a)

                        const state = li.getAttribute("select");
                        if (state) {
                            li.removeAttribute('select');
                            this.map.delete(li);
                            a.innerHTMl = '+';
                            a.style.backgroundColor = "green";
                        }
                        else {
                            this.map.set(li);
                            li.setAttribute('select', true);
                            a.innerHTMl = '-';
                            a.style.backgroundColor = 'red';
                        }
                        this.render();
                    })
                })
            }
            render() {
                this.countElement.innerHTML = `共选了${this.count()}门课程`;
                this.listsElement.innerHTML = this.lists();
            }
            lists() {
                return [...this.lis].filter(li => {
                    return this.map.has(li);
                })
                    .map(li => {
                        return `<span>${li.querySelector('span').innerHTML}</span>`
                    })
                    .join('');
                console.log(lis)
            }
            count() {
                return [...this.lis].reduce((count, lis) => {
                    return count += (this.map.has(lis) ? 1 : 0);
                }, 0)
            }
        }
        new Lesson().run()
```

---

## 第八章 函数

### 基础

引号定义能够使用类方法是因为执行时会将其转换为对象的形式来调用方法。

函数也是对象

对象中的函数成为*方法*

```js
函数定义

对象形式定义：
let func = new Function(参数，函数体)
func()
字面量形式定义：
funtion yz(){
    
};     //后边要有分号，不然有时候会出问题
yz();

函数的价值就是减少你反复造轮子。
```

```js
赋值：
表达式赋值：
let user = {
    userNmae:function(name) {
        this.name = name;
    },//将匿名函数赋值给属性
    getUserName:function(){
        return this.name;
    }
}

简写表达式赋值：
let user = {
    userNmae(name) {
        this.name = name;
    },
    getUserName(){
        return this.name;
    }
}
```

---

### 全局函数

```js
调用特点：
1 定义完成一个函数后，使用window来调用也可以执行。
	创建完之后默认会放在window对象之中。
	这样会有一个问题，就是如果定义的函数名和window下的方法相同，就会冲突，定义的函数会覆盖掉方法。
2 var定义的函数方法会压到window里，let不会

建议： 函数不要独立存放，要使用类，使用模块进行存放
```

----

### 匿名函数

```js
定义：未声明名字的函数
function(){}

(a,b)=>a+b   <==>  funtion(a,b){return a+b}
```

```js
函数提升：
function() {} 这类直接定义在script里的会提升
而使用var let定义的不会
```

---

### 立即执行函数&作用域冲突

```js
当调用了多个js库时，并且库与库之间有相同的命名冲突，在调用时后边的依旧会覆盖掉前边的。
以往的方法是使用立即执行函数，立即执行函数的函数体内的方法在执行之后就无法调用。
解决1 ：
立即执行函数
(function(window) {
            function yz1() {
                console.log('yz111');
            }
            function yz2() {
                console.log('yz222');
            }
            window.yz = { yz1, yz2 };
        })(window)
        window.yz.yz1();
解决2：
使用模块
{
    let yz1 = function() {
                console.log('yz111');
            }
    let yz2 = function() {
                console.log('yz222');
            }
    window.yz = {yz1,yz2};
}
```

### 形参与实参

```js

function (a,b){
    return a+b;
}
console.log(1,2);
形： a,b
实： 1,2

一般来讲 形参数量与实参数量是相对应的，不对应的话：
	实参>形参 ：多传了没有用，被忽略，不影响函数体。
	形参>实参 ：形参无数据，undefined，影响函数运行。
```

---

### 默认参数

```js
传递默认值：
1 使用短路运算。
 variable = variable || n;
2 形参定义：
function (a,b=1){}
传递了，b改变；不传递，b为默认值。

		**默认参数位置放在必须传递的参数之后**
```

---

### 函数参数

```js
普通变量可以接收任何类型，包括函数。
这样的思想，可以精进代码，优化代码结构。

优化场景：
	匿名函数
			***函数传参不受类型约束***
```

---

### Arguments

```js
arguments:传参的数量
		 性质是类数组
将传递的参数放在arguments里
传递的参数数量不确定，所以使用了arguments


方法：
.length()   获取了多少参数

运用在求和：
 function sum() {
            let total = 0;
            for (let i = 0; i <= arguments.length; i++) {
                total += arguments[i];
            }
            return total;
            // console.log(arguments)
            
            return [...arguments].reduce((a,b)=>a+b);
        }
	古老的语法。

适用场景： 配合点语法收集和释放参数
	1 function ([...args]){}
	2 console.log(func([...args])
```

---

### ★箭头函数

```js
箭头函数是函数的简写形式。
function () {}     <==>  	()=>{}
	():传递参数
	=>:胖箭头
    {}:函数表达式

与标准写法不同的是，箭头函数会直接return出来
不需要return 也不需要加分号
一个参数时可以省去括号
let yz = array.filter(item=>value<3);

！！不适用于：
	递归，构造，事件处理，
```

---

### ★递归

```js
不断重复一件事，所以需要设定一个合适的时机去退出循环。
使用场景： 重复次数不定的时候使用递归。

递归有两层顺序：
		1.取值
        2.回返

		let num = 6
        function irator(num) {
            if (num == 1) {
                return 1;
            }
            return num*irator(num - 1);
        }
        console.log(irator(num))
	简写：
	return num == 1 ? 1 : num * irator(--num);	
关键因素：
1 考虑两层
2 考虑返回时机

递归传递数据的维度不变，一维依旧是一维，二维依旧是二维
```

```js
递归练习
,{name:"english",click:325},{name:"pe",click:58}];
        function show(lesson,num=100,i=1){
            if(lesson.length == 100){
                return lesson
            }
            lesson[i].click += num;
            return show(lesson,num,++i);
        }
        console.log(show(lessons))

通过迭代+setTimeout操作++i
    let i = 1;
    function irator() {
        return setTimeout(() => {
            console.log(++i)
            irator();
        }, 1);
    }
    irator()
```

----

### CallBack

在其它函数中调用的函数，没别的。

```js
let num = [55, 4, 1, 4, 234, 5];
        num = num.map((value, index, arr) => {
            value += 100;
            return value;
        })
        console.table(num)
简单的不写了
```

---

### ★this

1 全局中的this指向为window

​		2 在函数中，this指的是作*用域内的***主体**，而不是方法

3 如果指向类方法或者属性，this指的是当前的对象；

在引用的时候需要加();

4 如果是普通函数，那就是全局的对象(即window)

```js
场景问题：
let obj = {
            name:"yang",
            show:function(){
                return obj.name;
            }
        }
        console.log(obj.show());
当对象指向发生变化(名字变了)的时候，其内部的show方法也需要改变，以此类推，如果一个大项目中需要后期维护，修改的时候会极大增加维护量和修改量，所以这时候需要一个相对的指向：
			return this.name;



this指的是当前对象的引用。
let demo = {
                name: "yang",
                paly: function(){
                    //第一层函数为属性
                    function render(){
                        //第二层函数为普通函数，在this指针中指向window
                    }
                }
            }
```

```js
问题：
name = 'window 属性的name'
        function User(){
            this.name = name;
            this.show = function(){
                return this.name;
            }
        }
        let lisi = new User();
        console.log(lisi.show());
结果为：'sss';

问题在于 这一行：
				this.name = name;
因为函数体内没有定义name，所以按照作用域链，会向上查找为name的变量。
因为定义在script里，所以此方法向上查找会查找到window。
最上方的 name = 'sss'; 储存在window中，所以最后打印的是window 的name。

解决：
		function User(name){}//传递名称为name的参数即可
此时	this.name = name;  指向的就是构造函数User中的name。


在P125集，遗忘了再去看看，this很重要
```

```js
(1)map+this 理解
let demo = {
                name: "yang",
                lists :["example1","example2","example3"],
                paly: function(){
                    return this.lists.map(value=>console.log(value));
                }
            }
            demo.paly();
关键点:this指向demo，所以this.lists就是使用lists。


(2)箭头函数和函数的区别 + this + map
let demo = {
                name: "yang",
                lists :["example1","example2","example3"],
                paly: function(){
                    return this.lists.map(function(value){
                        console.log(this)
                    });
                    
                }
            }


解决方法：在属性和属性内嵌的方法之间定义一个常量：
let demo = {
                name: "yang",
                lists :["example1","example2","example3"],
                paly: function(){
                    const self = this;  		 ***
                    return this.lists.map(function(value){
                        console.log(self)		 ***
                    });
                    
                }
            }
这种方法相当于找了个中介，把this传递给中介，后续函数在使用时找到中介。
                                         
```

```js
箭头函数和函数&this:

1 在this定义的时候，使用function会当做普通函数对待，其内部this指向都为window

2 而箭头函数的this指向则为函数体，即父级作用域的this；也可以说是上下文，是一回事

addeventlistener实际上是添加属性，所以this指向的就是主体本身


let Dom = {
            site:"abcd",
            bind:function(){
                const button = document.querySelectorAll("div")[0];
                button.addEventListener('click',()=>{
                    console.log(this);
                })
            }
        }
        console.log(Dom.bind());
*此时的this指向的是父级的this。
其父级function也是一个属性==>继续指向function的父级=>Dom
所以这时候this就嵌套了，
逻辑表示为：
bind属性的事件this（为属性） => bind属性的this => 对象this

*当为button.addEventListener('click',function(){})时，
因为使用标准函数添加属性的时候，其本质上为：
 button.onclick = function(){}
即给button添加属性，所以function是一个属性，所以this指向当前的对象，即button。
```

```js
同时操作当前对象和父级对象：
1 使用箭头函数
evetn=>{
    event.target()当前对象
    this:父级对象
}
2 使用普通函数
const self = this;
function(){
    this 当前对象
    self 父级对象
}
```

```js
简单总结：
如果是：
	箭头函数   this是父级的this
如果是：
	普通函数   this是当前对象
    
++理解：
function User(){
    this.name = name;
    this.age = age;
}
这句话我学完this之后才理解，this.name = name这句话相当于是在User()构造函数中添加了name方法，然后将name赋值给它。
也就是说，在调用的时候就多了一个方法:
let user = new User();
user.name() 和user.age() 就可以调用 。
调用的时候不要忘记调用的是方法，要加括号()。
```

---

### ★构造函数

构造函数是用来生产函数的。

而构造函数的方法就是数据加工。

这里写了三种： call方法、apply方法、bind方法。

三种方法不仅限于构造函数。

因为是通过构造函数加工数据，所以数据是传入到工厂里的。

```js
call方法

构造函数.call(obj,value)
	1 第一个参数为this指针
    2 第二参数为value值
call方法会立即执行
function Home(location){
            this.location = location;
        }

        let newLoaction = {
            where:"8"
        }
        Home.call(newLoaction,"604")
        console.log(newLoaction)
call方法解释：
	通过构造函数的call方法，可以在目标对象的基础上改变目标对象，比如该例子就是在newLocation上添加了一个value为传递的"604"的location属性。
    
```

```js
apply方法
	特性：第二个参数为数组。
.apply(obj,arr)

call方法：
function Factory(value,index){
            this.value = value;
            this.index = index;
            console.log(value + index)
        }
        let st = {name:"yang"}
        Factory.call(st,"here are value","here are index");
apply方法：
function Factory(value,index){
            this.value = value;
            this.index = index;
            console.log(value + index)
        }
        let st = {name:"yang"}
        Factory.apply(st,["here are value","here are index"]);

区别不大，只在最后使用构造函数改变的时候有传参的区别。

```

```js
bind方法
	特性：
    	1：不立即执行
        2：创建新的函数==>可以在绑定的时候传参，也可以在调用的时候传参
	情景：
    	改变函数体内的this指向的时候
        具体：
        
 document.querySelectorAll("div")[0].addEventListener('click',function(event){
        alert(`${this.yang}`);
    }.bind({yang:"change this director"}))


与call和apply不同的是，bind方法不会立即执行。
bind()()这样子是立即执行

let zh = function(a,b){
        console.log(a+b,this.f)
        return this.f + a + b;
    }
    let new_zh = zh.bind({f:"fff"},2,3);
    new_zh()
```



---

### 继承

```js
说白了就是复用
        function Factor(){
            this.get = function(param){
                let res = Object.keys(param).map(k=>`${k}=${param[k]}`).join("&");
                let url = `https://www.bing.com?${this.url}` + res;
                console.log(url);
            }
        }
        let dx = {
            id:1,
            cat:"js"
        }
        let de = {
            id:2,
            cat:"css"
        }
        let df = {
            id:3,
            cat:"html"
        }
        function Obj1(){
            this.url = "article/lists";
            Factor.call(this)
        }
        function Obj2(){
            this.url = "lasjfklsajf";
            Factor.call(this);
        }
        function User(){
            this.url = "user/use";
            Factor.call(this)
        }
        let o1 = new Obj1();
        let us = new User();
        let o2 = new Obj2();
        o1.get(dx);
        o2.get(de);
        us.get(df);
这里 Obj1、Obj2和User都是继承了Factor()。
```

### *案例

```javascript
改变背景颜色/ bind + 继承
function ChangeColor(element) {
        this.element = element
        this.color = ['#2ecc71', '#2980b9', '#e67e22', '#f39c12'];
        this.run = function () {
            setInterval(function () {
                let i = Math.floor(Math.random() * this.color.length);

                this.element.style.backgroundColor = this.color[i]
            }.bind(this), 1000);
        }
    }
    let change = new ChangeColor(document.body);
    change.run();
    let div_change_color = new ChangeColor(document.getElementById("demo"));
    div_change_color.run();
```

---

## 第九章 作用域与闭包

### 基础

环境存在的价值是被需要 ，并且不同环境有其作用范围

​	关键：

​				1 是否被使用

​				2 作用的范围

​	特性： 

​			1 js的全局的环境不会被回收。是真正的全局，渗透到各个作用域

​			2  除全局变量外，作用域与作用域不靠接口的话不相关联

```js
<script></script>   /				全局环境		1级
function(){} 						函数环境		2级
									块作用域		2级
	function在每次调用的时候都会重新配置一回环境，相当于玩游戏重新开了一局，局与局之间无关。
如：
function show(){console.log('a')};
show();show();show();show();
执行多次会开辟相应次数的内存地址：

执行一次之后，继续执行第二次，第二次开辟新的内存地址并访问第二次的内存地址，所以第一次的内存永远不会被再次访问，触发垃圾回收。
```

---

### ★生命周期

总结：

​	如果环境定义的数据被使用，不删。

![image-20220418164200305](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220418164200305.png)

```js
内存未被接收的情况：
1：定义完成函数，不开辟内存(因为没有调用)，处于计划阶段。
function plan(){
    let n = 1;
    function sum(){
        console.log(++n);
    }
}
2：调用函数，动工，开辟出内存空间
plan()     开辟出来的空间包括了n和sum()函数，但是sum()的环境空间没有被创建，因为sum()没有被调用
```

```js
内存被接收（延长生命周期）：
1 定义函数，并设置接收
function plan(){
    let n = 1;
    return function sum (){
        console.log(++n);
    }
}
let variable = plan();
2 相同变量接收函数
variable();
variable();
variable();
计算机中只要是被用到的程序都不会被清空。
在此基础上，因为已经定义了变量variable接收plan()函数，所以
variable指向唯一的plan()。
此时调用variable()，改变唯一plan();
再次调用的variable()则是在上次调用的基础上再次调用plan()（因为指向的环境是唯一的）

如果函数体为:
function plan(){
    return function sum (){
		let n = 1;
        function show(){
            console.log(++n);
        }
    }
}
那么情况就会不一样，无论同此调用了多少回，因为show()函数没有返回，所以会一直再重复创建sum()函数（而没有++n的返回值）。
修改的话，将show()返回即可。
let variable = plan();
3 不同变量接收函数
let variable2 = plan();
let variable3 = plan();
let variable4 = plan();
此时就是不同变量接收，那么就是开辟新的内存地址
```

*构造函数与此类似

---

### 块作用域

```js
块级作用域只适用于 let 和 const
var没有块级作用域
	{
        let a = 1;
    }
    {
        let a = 1;
    }
```

```js
var let const 在for循环的差别
for(var i = 1;i <= 3; i++){
    console.log(i);
} 
console.log(i);
//最后的结果是i = 4。
而var 没有块作用域这个性质，所以i就定义到了全局里。
而let 定义就只限于for循环体内部。

function time_between() {
        for (var i = 1; i <= 5; i++) {
            setInterval(() => {
                console.log(i)
            }, 1000)
        }
    }
    time_between();
var定义的i会显示到6
而let定义的i会显示到5
一般来说用let。
```

---

### var伪块作用域

```js
var虽然没有块作用域，但是有函数作用域。
如果想让通过var声明的变量在块里使用，需要进行转换。
```

---

### 嵌套区域

```js
let arr = [];
    for(let i = 1;i <= 4;i++){
        arr.push(function(){
            return i;
        });
    }
结合前边的生命周期，此时每次循环都会想arr里传递一个函数，所以匿名函数得以被保留。
因为实际上是一个函数，所以这种写法：
console.log(arr[0])返回的是函数体
而想得到值，需要：
console.log(arr[0]())

但是如果使用var来定义i的时候，var因为没有块作用域，所以最后无论指向arr的哪个索引，返回结果都是最后的值。
解决这个问题需要看透原因：
因为返回的是i的值，没有i本身，所以会依次向上查找。所以解决这个问题，只需要在push函数体的上方套上一层函数。且这个函数需要传递i的参数。所以要嵌套一个传参为i的立即执行函数且包裹一个function
let arr = [];
    for(var i = 1;i <= 4;i++){
        (function(i){
            return arr.push(function(){
                return i;
            });
        })(i)
    }
```

---

### ★闭包

子函数可以访问到其它函数作用域的数据。

```js
通过闭包优化filter函数，获取价格区间
let arr = [1,23,43,54,534,12,43,32,55,34]
    function select(a, b) {
        return function (v) {
            return v >= a && v <= b;
        }
    }
    console.log(arr.filter(select(1,100)))
```

```js
闭包+sort 自定义排序模块
let tb = [{ name: "car", price: 800 }, { name: "food", price: 20 }, { name: "gun", price: 300 }, { name: "computer", price: 1000 }, { name: "paper", price: 3 }];
    function st(filed,type="desc") {
        return function(a, b){
            if(type == "desc"){
            return a[filed] > b[filed] ? 1 : -1;
            }else{
            return a[filed] > b[filed] ? -1 : 1;
        }
        }
    }
    let res = tb.sort(st("price",""))
    console.table(res)

通过闭包访问上级作用域的数据。
```

```js
内存泄漏-闭包的问题：
释放内存： 将元素设置为null
解决：设置null  既可以对元素进行使用，又释放内存
let divs = document.querySelectorAll("div");
    divs.forEach(function(element){
        let item = element.getAttribute("desc");
        element.addEventListener("click",function(){
            console.log(item);
            console.log(element)
        })
        element = null;
    })
```

```js
闭包在this里的使用
函数闭包中包含的this是特殊指针。
普通函数this指向window
箭头函数this按照闭包特性访问：即父级this。
```

### 窗口抖动



我们大多时候只关注了闭包，而缺少了对环境的重复考虑。

```js
以下代码会产生抖动：
let buttons = document.querySelectorAll("button");
buttons.forEach(function(item){
        item.addEventListener('click',function(){
            let left = 1;
            setInterval(function(){
                item.style.left = left++ + "px";
            }, 1);
        })
    })

解决方案：
原先基础视频课程学到的是设置结束计时器来达到这个效果。
而通过环境分析，实际上每次点击都会创造出来一个环境，核心是
left=1 这条语句会在不同环境被引用。
所以只需要让let left = 1 放在计时器之外。
但是会出现新的问题：多个setinterval共同作用，速度不断变快。


加上条件判断：
let buttons = document.querySelectorAll("button");
    buttons.forEach(function (item) {
        let left = 1;
        let status = false;
        item.addEventListener('click', function () {
            if (!status) {
                status = true;
                setInterval(function () {
                    item.style.left = left++ + "px";
                }, 1);
            }
        })
    })
```

---

## 第十章 面向对象

### 基础

函数编程与面向对象编程

面向对象在复杂情况下>函数式编程

实际上是对象中封装了所有功能需要，以降低理解难度(某种意义上)。

```js
let search = {
        grade: [{ lesson: "math", score: 80 }, { lesson: "english", score: 99 }, { lesson: "japanese", score: 50 }],
        user: "yang",
        average() {
            let total = this.grade.reduce((a, b) =>  a + b.score , 0)
            // return `${typeof this.grade}
            return `${this.user}的平均成绩是${total / this.grade.length}`
        }
    }
    console.log(search.average());
类似于以上代码即为面向对象的编程思想。
减少意大利面式的流水账代码。
```

---

### 属性操作

```js
读取
1 通过点语法： 读取---对象.属性 
2 通过中括号： 读取---对象.["属性名"]
	3比如:
	let user = {
        name : "yang",
        "my age" : 18
    }
    读取的时候无法通过点语法读取。用于中括号读取

删除
	delete obj.arrtribute.
```

---

### ★对象引用传址

```js
function show(change){
        change.attirbute1 = "text"
        return change;
    }
    let pro_change = {name:'yang'};
    console.log(show(pro_change))
传址操作会改变唯一的地址指向
```

---

### 展开语法参数合并

```js
function upload(param){
            let data = {
                type : "*.jpeg,*.png",
                size : 800
            }
            data = {...data,...param};
            console.log(data);
        }
        console.log(upload({type:"*.wav"}))
```

---

### 解构语法

应用场景：复制&赋值

对元素的解构处理

后期配合源码深入理解。

误区：

​		不一定非要把全部参数都使用结构来接收和释放，我们往往忽视了使用对部分进行解构，具体问题具体分析地灵活运用结构。

需要说明的是，一般对数据进行解构，我们往往是想要其中的值，所以进行输出的时候是对值输出而不是索引或关键字。

```js
解构赋值不太一样，是前边的数据赋值给后边的变量
let demo = {name:"yang",age:30};
let {name:name,age:age} = demo;
此句子是将右边的demo调用给name，前边的name赋值给右边新生成的变量name。前方的age赋值给右边新生成的age。

复合结构语法：
let defined = {
        name:"pre",
    lesson:{
        l1:"math",
        l2:"english"
    }};
    let {name,lesson:{l1,l2}} = defined;
    console.log(name,l1,l2)
```



```js
特性：
拆分赋值：
let data = {name:"new name",age : "new age"};
            let {name : m,age:n} = data;
            console.log(m,n)
	简写：
    let data = {name:"new name",age : "new age"};
            let {name,age} = data;
            console.log(m,n)
使用这种特性，应用在函数里：
	function show2 ({name,age}){
        console.log(name,age);
    }
    show2({name:"yang",age:80});
传参和形参需要一致。

问题：只能在拥有数据的前提下才能使用。
```

---

### 严格模式下的解构

```js
"use strict"
    let user = { lang: "ch", price: "none" };
    ({lang,price} = user);
    console.log(lang,price)
使用严格模式下，{lang,price}未定义，报错。
声明即可。
```

---

### ★标准与简写

```js
规则：
在js中，如果属性和值相同，可以简写。

标准：
let defined = {name:"pre",price:80};
    let {name:name,price:price} = defined;
简写：
let defined = {name:"pre",price:80};
    let {name,price} = defined;
```

---

### 对象与数组的解构

```js
两周使用方法都类似
对象：
	let defined = {name:"pre",price:80};
    let {name:name,price:price} = defined;
数组解构：
    let arr=  ["one","two","three"];
    let [a,b,c,d="default"] = arr;
    console.log(a,b,c,d)
```

---

### 小案例：默认值合并

```js
使用结构语法进行默认值合并：
let div = document.getElementById("demo");
    function change_element(options){
        let {width=300,height=300,backgroundColor="red"} = options;
        div.style.width = width + "px";
        div.style.height = height+ "px";
        div.style.backgroundColor = backgroundColor;
    }
    change_element({width:80});
```

---

### ★对象属性

```js
添加：
	obj.attribute = blablabla;
let user = {};
    user.name= "yang";
    user["age"] = 80;
    console.log(user)
需要说明的是，使用中括号添加属性的时候里边的属性名必须为字符串。
因为如果是类似这种：user[age] = num;中括号里的不是字符串的时候，js会寻找age变量进行赋值。这时候就不是添加属性了。

删除：
	delete.obj.attribute;

    delete user.name;
    delete user.age;
    console.log(user)


```

面向对象中的继承，在js中即原型链

---

### ★原型与原型链

简单理解，某个数据的原型就是其数据的父亲。

```js
数组本身的固有属性只有length,而数组的原型里拥有多种方法。

检测：（检测是否含有某种属性）
	obj.hasOwnProperty("attribute");

检测某种属性存在于数组中：(检测自身和原型中是否存在属性)
	attribute in arr
使用这种方式检测不仅检测本身，还会检测原型中的方法

设置某个对象的原型：
	Object.setPrototypeOf(a,b) 将b设置为a的原型
    
练习：使用原型检测进行判断查询
function set_proto(obj,proto){
        return Object.setPrototypeOf(obj,proto);
    }
    let obj = {name:"yang"};
    let proto = {pre_name:"yo"}
    console.log(set_proto(obj,proto));
    function test(obj,attr){
        if (!obj.hasOwnProperty(attr) == true) {
            throw new Error(`you must contain ${attr}`);
        }else{
            return obj.hasOwnProperty(attr);
        }
    }
    console.log(test(obj,"name"))
```

----

### 计算属性

通过计算属性的方式动态改变属性：

```js
练习：1 将数组转化为对象
	2 将对象中的key值添加范式后缀
    
    //场景模拟： 从后台抓取数据，全部为数组。
    //业务需求：需要转换为对象，并且重新命名所有数据的key值。
    //思路实现：1 数据获取 2 reduce处理 3 字面量转化key值
    let data = [{lesson:"math",Math:"hard"},{lesson:"english",English:"easy"},{lesson:"Video",Video:"normal"},{lesson:"Code",Code:"hard"}];
    let change_obj= data.reduce((item,cur,index)=>{
            item[`${cur["lesson"]}-${index + 1}`] = cur;   //这里忽视了字符和字符串的问题，导致前缀无法正常显示
            return item;
        },{})
    let res = JSON.stringify(change_obj,null,2);
    console.log(res);
```

数据合并：

```js
Object.assign({obj1},{obj2})
==>{obj1:obj1.value,obj2.key:obj2.value...}
```



```js
练习:属性添加
//需求分析：创建一个函数，函数体内有一些类型为{}的数据，通过对象参数传递将参数属性添加到数据中。最后通过JSON方法进行字符串转义
    function add_attribute(param){
        let data = {
            name:"yang"
        }
        data = JSON.stringify(Object.assign(data,param),null,2);
        return data;
    }
    console.log(add_attribute({age:80}))
```

---

### ★Objcet方法

```js
合并属性
Object.assign(a,b);	

获取键
Object.keys();	

获取值
Objcet.values();

获取键+值
Object.entries();

获取原型
Object.getPrototypeOf()

判断属性：
Object.hasOwnProperty() 内部为string

获取某个对象属性特征(多个对象语句末尾加s)
getOwnPropertyDescriptor(obj,value)

修改对象属性：
Objcet.defineProperty(obj,value,options{})

批量修改属性：
Object.defineProperties(obj,{
    name:{
        value
        writable
        enumerable
        configuarble
    }
    age:{
    ...
}
})
使用批量修改，属性赋予就会更加灵活。


返回的JSON字符串为：
value 			属性值
writable		是否可写
enumerable		是否可遍历(通过object.keys是否能遍历)
configurable	是否可删除/是否可重新配置
相对应的，for in 与 for of 也可以用来操作。其中，for of用来操作可迭代对象。
```

*一定有变通的方法*

```js
一看到数组，就应该想到可以遍历
DOM for of 练习：
let data = [{lesson:"math",Math:"hard"},{lesson:"english",English:"easy"},{lesson:"Video",Video:"normal"},{lesson:"Code",Code:"hard"}];
    let ul = document.createElement("ul");
    for (const v of data) {
        let li = document.createElement("li");
        li.innerHTML = `课程名为${v.lesson}`
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
```

---

### 浅拷贝

```js
对单一层次的对象进行拷贝：
1. 通过普通调用完成浅拷贝
let resource_data = {
        name:"yang"
    }
    let rechange_data = {
        name:resource_data.name
    }
    console.log(rechange_data);

这样就通过调用的形式进行了一次浅拷贝

2.通过for in 循环数据进行浅拷贝
let resource_data = {
        name:"yang"
    }
let rechange_data2 = {}
    for (const key in resource_data) {
        rechange_data2[key] = resource_data[key];
    }
    console.log(rechange_data2
这样就通过for in对原数据循环，进行了全部的拷贝。
                
3.通过Object.assign()进行浅拷贝
let rechange_data3 = Object.assign({},resource_data)
4.通过点语法进行浅拷贝
    let rechange_data4 = {...resource_data};
```

---

### ★深拷贝

```js
基础理解：深拷贝就是完完全全将数据拷贝出来，赋值到一个变量上，且对引用类型修改的时候，彼此独立不受影响。
	所以深拷贝的重点是对对象进行迭代操作。
    进行判断：如果为object，则将object重新传入函数中重新进行拷贝。如果不是object，直接进行浅拷贝。
let data1 = {
        name: "yang",
        user: {
            name:"young"
        }
    }
    let data2 = {
        name : data1.name,
        user: data1.user
    }
    data1.name = "nope"
    data1.user.name = "yes"
    console.log(data1);
    console.log(data2);

data1中的name为值类型，data2引用data1的值，传递值。
data1中的user为引用类型，data2和data1共享一个内存。
```

```js
迭代实现深拷贝（单纯对象操作）
let data = {
        name: "yang",
        user: {
            name:"young"
        }
    }
    function copy(element) {
        let res = {};
        for (const key in element) {
            res[key] = 
            typeof(element[key]) == "object"? copy(element[key]) : element[key];
        }
        return res;
    }
    let result = copy(data);
    data.name = "new name";
    data.user.name = "new user name";
    console.log(JSON.stringify(data,null,2))
    console.log(JSON.stringify(result,null,2));

因为是单纯的对象操作，所以当有数组数据在原数据中时，数组会被改成对象类型。
解决方法：
part1: 通过instanceof == Array /Object进行原型判断
part2: 通过.entries将循环中数据赋值结构化

let complex_data = {
        name: "yang",
        user: {
            name:"young"
        },
        apply:[1,2,3]
    }
    function deep_copy(element) {
        let fixed_data = element instanceof Array ? [] : {};
        for (const [k, v] of Object.entries(element)) {
            fixed_data[k]=
                typeof v == "object" ? deep_copy(v) : v;
        }
        return fixed_data;
    }
    let res = JSON.stringify(deep_copy(complex_data,null,2));
    console.log(complex_data);
    console.log(res);
实现深拷贝
```

---

### 函数“工厂”

```js
通过构造函数创建数据，重要的是搞明白return在函数中的意义。
简单练习：
function pet_name(){
        return {
            name:"demo_name",
            age:80,
            random_rename(){
                const name_list = ["doggie","pappi","siilsy","conly"];
                console.log(name_list[Math.round(Math.random()*(name_list.length-1))]);
            },
            show(){
                console.log(`${this.name}的年龄为${this.age}`)
            },
            all() {
                this.random_rename();
                this.show();
            }
        }
    }
    let text = pet_name();
    console.log(text.name,text.age);
    console.log(text.all());
```

---

### ★数据的构造函数创建

对象在使用构造函数创建时，会立刻指向到构造函数的原型对象。

```js
数据实际上都是通过构造函数生产出来的。
通过构造函数创建：
new Object()
new Number()
new String()
new Boolean()
new Date()
new RegExp()
.valueOf()

let User = new Function("name","age=1",`
        this.name = name;
        this.age = age;
        this.show = function(){
            console.log(this.name);
        }
    `)
    let yh = new User("yang");
    yh.show();
```

---

```js
封装：
let complex_data = {
        name: "yang",
        user: {
            name:"young"
        },
        apply:[1,2,3],
        show(){
            return `${this.name},${this.user.name},${this.apply}`
        }
    }
```

```js
抽象：
内部的方法和属性不希望被外部改变的时候
function User(name,age) {
        let user = {name,age};
        let info = function () {
            return user.age > 40?"old":"young";
        }
        this.go = function () {
            console.log(user.name,info());
        }
    }
    let yang = new User("yang",19);
    yang.info = function(){
        return "";
    }
    yang.go();
对函数进行抽象，目的是增强安全性和健壮性。让代码在内部循环，在外调用的基础上实现内封闭。

```

---

### ★属性

```js
长度是不能进行遍历的操作。
	所以一些属性也是可以进行隐藏。
    通过设置属性特征对属性进行控制
获取属性特征Object.getOwnPropertyDescriptor(obj,value)
设置新属性：
Object.defineProperty(new_variable,new_atribute,{
    value				修改值
    writable			修改boolean
    enumerable			修改boolean
    configurable		修改boolean
})
当enumerable为false时，无法遍历。即一些通过迭代遍历的对象都无法显示。
在严格模式下，设置false的时候再次引用赋值会报错。
	所以严格模式下练习效果是比较好的。
	练习：
    let data = {
        name: "yang",
        age : 30
    }
    console.log(
        JSON.stringify(data,null,2)
    )
    Object.defineProperty(data,"name",{
        value:"ggg"
    });
    console.log(data.name)
	
```

```js
禁止添加属性API：
	Object.prventExtensions(obj)
使用之后形如：obj.name= 'xxx'等属性添加就不会生效。
在严格模式下，使用了preventExtensions后，仍然有添加属性的代码来添加属性会报错。
```

---

封闭对象的API

```js
Objcet.seal(obj)				封闭对象
Object.isSealed(obj)		判断是否处于封闭状态
封闭就是：
		不能添加属性
		不能删除对象
		不能修改特征
使用场景：
		对数据进行保护，禁止数据修改。
以常量const命名的对象例：
	const attr = {
            name: "yang",
            age: 19
        };
        Object.seal(attr);
        console.log(JSON.stringify(Object.getOwnPropertyDescriptors(attr),null,2));

```

```js
冻结：
Object.freeze(obj)
会将对象里的writable和configurable都变为false
判断是否冻结：
Object.isFrozen()
```

---

### ★访问器

对数据进行把关。如果满足条件->使用；不满足条件->不使用。

类似于门卫监察，更形象地说，是低压手术室的入口。

优先级最高，只要使用了对象，首先会执行set里的语句。

```js
使用访问器的目的是对条件进行筛选。
对单一对象进行访问设置。
使用方式：
	set function(){}	设置入
	get function(){}	设置出
使用之后在区域外可以使用设置属性的方式设置。

const resource = {
        data: { name: "yang", age: 60 },
        set age(value) {
            if (value > 100 || value < 10 || typeof (value) != 'number') {
                throw new Error("请输入正确的年龄")
            }
            this.data.age = value;
        },
        get age(){
            return this.data.age + "岁";
        }
    }
    resource.age = 50;
    console.log(resource.age)
```

```js
使用访问器伪造属性：
	将属性绑定到函数上，调取伪属性。
const M_resource = {
        lesson: [
            { name: "english", price: 800 },
            { name: "math", price: 1500 },
            { name: "computer", price: 5000 }
        ],
        get total() {
            return this.lesson.reduce((pre,cur)=>
                pre + cur.price
            ,0)
        }
    }
    console.log(M_resource.total);
这样相当于通过访问器创建了一个属性，成为伪属性。
在调用的时候和对属性调用是一样的
```

```js
批量设置属性：
const r_data = {
        name: "yang",
        age: 80,
        set in_data(value) {
            // [this.name,this.age] = res;
            [this.name, this.age] = value.split(",");
        },
        get in_data() {
            return `${this.name}-${this.age}`
        }
    }
    r_data.in_data = "young,23";
    r_data.in_data = "any,58"
    console.log(r_data.in_data);
需要注意的是，不同对象需要不同的批量处理。这里的批量是指对一个对象下的多个属性处理。
```

```js
token 读写处理
    /*
        核心步骤：
            1 set token   =》本地电脑上储存数据 
            2 get token   =》获取本地数据   如果本地无数据，弹窗通知
        
            localStorage.setItem
            localStorage.getItem
    */
    let Request = {
        set token(content) {
            localStorage.setItem("token", content);
        },
        get token() {
            let token = localStorage.getItem("token");
            if (!token) {
                alert("Back to login");
            }
            return token;
        }
    };
    Request.token = "65asf12as1f32";
    console.log(Request.token);

与前边的练习不同的是，token不是在对象里放数据，而是在磁盘里放数据。直接在磁盘里读取。
```

***要善于利用这些小特性，让自己的代码变得更加优雅***

```js
优先级：
	访问器>传统属性赋值
	const nv = {
        name : "yang",
        age : 38,
        set in_data(value){
            this.data.name = value;
        },
        get in_data(){
            return this.data.name;
        }
    }
    nv.name = "young";
    console.log(nv.name)
解决(暂时不完全理解)
const DATA = Symbol();
    const nv = {
        [DATA] : {name},
        age : 38,
        set in_data(value){
            this[DATA].name = value;
        },
        get in_data(){
            return this[DATA].name;
        }
    }
    nv.name = "young";
    nv[Symbol()].name = "young"
外界无法通过获取Symbol函数来修改Symbol里的值。
**不明白为什么nv[DATA].name = xxx可以修改** 
```

```js
构造函数使用访问器
//构造函数定义
    //1 function 参数2:user,age 
    //2 set get 
    //3 Object.defineProperties(obj,{})
    function text(name,age){
        let vairable = {name,age};
        Object.defineProperties(this,{
            name:{
                set(value){
                    if(value.trim() == "" || value.length == 0){
                        throw new Error("error");
                    };
                    data.name = value;
                },
                get(){
                    return vairable.name
                }
            },
            age: {
                set(value){
                    if(value <10 || value > 100 || typeof value != 'number'){
                        throw new Error("error");
                    };
                    data.age = value;
                },
                get(){
                    return vairable.age;
                }
            }
        })
    };
    let user = new  text("yang",20);
    console.log(user.name,user.age)

类方法使用构造函数
语法糖
const DATA = Symbol();
    class Factor {
        constructor(name, age) {
            this[DATA] = { name, age };
        }
        set name(value) {
            if (value.trim() == "" || value.length == 0) {
                throw new Error("error");
            };
            this[DATA].name = value;
        }
        get name() {
            return this[DATA].name
        }

        set age(value) {
            if (value < 10 || value > 100 || typeof value != 'number') {
                throw new Error("error");
            };
            this[DATA].age = value;
        }
        get age() {
            return this[DATA].age;
        }
    };
    let us = new Factor("yang",80);
    console.log(us.name,us.age)
```

---

### ★proxy

访问器是对单个属性控制

对象代理对整个对象进行控制

​		不直接访问数据，通过代理访问数据

```js
基本语法：
	let proxy = new Proxy(obj,{
        get(obj,property){},
        set(obj,property,value){}
    })
    obj为原始对象，property为属性名
    value为传输的值
```

```js
get和set拦截对象
const data = {name:"yang",age:18};
    const proxy = new Proxy(data,{
        set (obj,property,value){
            obj[property] = value;
            return true;
        },
        get (obj,property) {
            return obj[property];
        }
    });
    console.log(proxy.name)
    proxy.name = "yangyang"
    console.log(proxy.name)
```

```js
proxy+apply函数拦截
apply拦截函数
function factorial(num) {
        return num = 1 ? 1 : num * factorial(num - 1);
    }
    let t_proxy = new Proxy(factorial, {
        apply(func, obj, args) {
            console.time("run");
            func.apply(this, args);
            console.timeEnd("run");
        }
    })
    t_proxy.apply({}, [5])
    console.log(t_proxy);
```

```js
数组拦截：
const arr = [{lesson:"english",catagory:"fir"},{lesson:"math",catagory:"sec"},{lesson:"management",catagory:"thi"},{lesson:"japanese",catagory:"fou"}];
    let pro = new Proxy(arr,{
        get(arr,key){
            const lesson = arr[key].lesson;
            const len = 3;
            arr[key].lesson = 
                lesson.length > len? lesson.substr(0,len) + ".".repeat(3):lesson;
            return arr[key];
        }
    })
    console.log(JSON.stringify(pro[2],null,2));
```

---

### 双向绑定

```js
Vuejs数据绑定容器更新
//双向代理
//html部分
 <input type="text" name="text">
    <input type="text" name="text">
    <h3 n_bind="text">there</h3>
    <br>
    <br>
    <input type="text" name="demo">
    <input type="text" name="demo">
    <h3 n_bind="demo">here</h3>
//js部分
    function View() {
        let proxy = new Proxy({}, {
            get(obj, property) {

            },
            set(obj, property, value) {
                document.querySelectorAll(`[name="${property}"]`)
                .forEach(function(item){
                    item.value = value;
                });
                document.querySelectorAll(`[n_bind="${property}"]`)
                .forEach(function(item){
                    item.innerHTML = value;
                })
                return true;
            },
        })
        this.init = function () {
            const inputs = document.querySelectorAll("[name]");
            inputs.forEach((item) => {
                item.addEventListener("keyup", function () {
                    proxy[this.getAttribute("name")] = this.value;
                })
            })
        }
    };
    new View().init();
使用代理实现数据绑定。
```

```js
 //自定义验证组件  //逻辑太乱了跳过
    class Validate{
        max(value,len){
            return value.length < len;
        }
        min(value,len){
            return value.length>len;
        }
        isNumber(value){
            return value == "number"
        }
        
    }
    function ProxyFactory(target) {
        return new Proxy(target, {
            get(obj, key) {
                return target[key];
            },
            set(obj, key, el) {
                const rule = el.getAttribute("rule");
                const validate = new Validate();
                let state = rule.split(",").every(rule=>{
                    const info = rule.split(":").every(rule=>{return true});
                    console.log(info)
                    return validate[info[0]](el.value,info[1])
                    return true;
                })
                console.log(rule)
                return true;
            }
        })
    }
    const obj = ProxyFactory(document.querySelectorAll("[name]"));
    obj.forEach((item,i)=>{
        item.addEventListener('keyup',function(){
            obj[i] = this;
        })
    });
```

---

### ★JSON

不同语言与不同语言，不同网络与不同网络，不同主机与不同主机之间的数据连接通用格式。

​						原有XML ==>现使用JSON

```js
JSON格式：
键也要有双引号
{
    "key":"value",
    "key":"value",
    "key":"value",
    "key":"value",
    "key":"value"
}
```

```js
转换：
数组与对象均可转换为JSON对象

1、js转JSON :
		JSON.stringify(obj,保存的属性null的话选择全部用数组表示且内容为字符串，制表位长度);	//为字符串类型

2、JSON转js:
	//两种转换
		JSON.parse(obj,(key,value)=>{});
    let data = {
        name:"yang",
        age: 50,
        location: "hz",
    }
    let JSON_data = JSON.stringify(data,null,2);
    console.log(JSON_data)

    
    let js_data = JSON.parse(JSON_data,(key,value)=>{
        if(key == "name"){
            value = "[咕咕]" + value;
        }
        return value
    })
    console.log(js_data)
3、定制序列化：
	自定义返回需求
	在传参的时候传递toJSON:function(){}方法
    let data = {
        name:"yang",
        age: 50,
        location: "hz",
        toJSON(){
            return {};
        }
    }
    let JSON_data = JSON.stringify(data);
    console.log(JSON_data)
此时返回{}
```

---

## 第十一章原型

实现继承，方法接用。

先学做饭，再学订外卖。

Class类根本上还是原型。



---

### ★原型链

```js
将构造函数作为对象调用时，使用__proto__原型，服务于对象自身
通过构造函数new 出来对象的时候，使用prototype。
```

原型链的核心是能够通过原型链中的一个来获取与原型链中其它元素的关系。

原型链相当于家谱。

```js
__proto__对应父级    在chrome里显示为[[Prototype]]
prototype对应本级
```

```js
所有对象原型链中的最顶层&原型链天花板（对象）
	Object.prototype
```



原型链：

​		obj===>obj父亲===>obj爷爷 					三级原型链

​		判断：使用Object.getPrototypeOf()判断原型

并非所有对象都有原型。

通过Object.creat(null,{})等方法自定义出来的变量是没有原型的。原型方法也全部无法使用。

---

当obj本身和父级拥有相同的方法时，优先使用obj本身方法。

自己有钱了就不要啃老了。就近原则。

```js
console展开详细结构：
console.dir()
向父级添加属性(向指定原型添加数据)：
obj.__proto__.render = function(){}

__proto__是每一个对象都具有的属性

```

---

函数拥有多个原型。

人拥有多个长辈。

```js
构造函数具有.prototype 方法，指向的是构造函数的原型
当构造函数执行new操作，会把变量的__proto__重定向为构造函数的.prototype
构造函数里有prototype和__proto__两个属性，前者服务于new方法创建的示例；后者服务于构造函数本身。
```

---

通过构造函数构建的函数都指向Object下的prototype。

通过字面量形式创建的变量，原型也最终指向Objcet.prototype。

```js
let str = "";
let bool = true;
let reg = /a/i;
let obj = {};
let arr = [];

	obj.prototype.__proto__ ==Object.prototype
```

----

### 原型设置

```js
自定义对象：
	let yz = {};
	let zh = {};

 自定义使用方法：Object.setPrototypeOf(son,parent);
原型设置：Object.setPrototypeOf(a,b) 将a的原型设置为b
原型获取：Object.getPrototypeOf(obj);
```

---

### 原型检测

```js
构造函数检测：
obj1.instanceof(obj2)     
如果返回true，说明obj1的上方链条存在obj2

对象检测：
a.isPrototypeOf(b)
如果返回true,说明a是b原型链上侧的一份子
    obj.__proto__ == Object.prototype
```

---

对象属性检测

```js
1：obj.hasOwnProperty(attribute)  检测自身是否有该属性
2: a in b	使用in检测，不仅会检测b，还会检测b的原型链上是否有a属性

在forin遍历的时候，自动添加if(obj.hasOwnProperty(key))一行是出于只遍历当前属性的考虑。删去后说明for in 遍历 
```

---

### DOM节点借用

```js
<div class="demo"name = "d" class>this is first </div>
    <div class="demo"name = "d2" class="">this is second</div>
    <div class="demo" name = "d"> this is third</div>

let divs = document.querySelectorAll("[name]");
    let res = Array.prototype.filter.call(divs,(item)=>{
        return item.hasAttribute("class");
    });
    console.log(res[0].innerHTML);
这里的Array.prototype 可以换为[]

```

---

### 构造函数的原型设置

对于同类型的数据，在对象的原型中添加方法而不是创建新的对象，这样可以减少不必要的内存消耗。

对原型设置属性而不是对对象设置属性

```js
    {
        function User(name) {
            this.name = name;
        }
        User.prototype = {
            constructor: User,
            get() {
                console.log(this.name);
            },
            set(attr) {
                let obj = { attr: String(attr) };
                User.call(obj);
            }
        }
        let yang = new User("yh");
        let zhao = new User("zk");
        yang.get()
        zhao.get()
        console.dir(User)
    }
```

---

### this与原型

没什么关系。

```js
{
            let hd = {
                name :"yang",
                show(){
                    console.log(this.age);
                }
            }
            let yh = {
                age :80
            }
            Object.setPrototypeOf(yh,hd);
            yh.show();
}
this永远指向调用属性的对象
```

---

### 原型滥用

不建议在原型中追加其它方法。

因为需要引用其它人写的库，容易造成方法污染。只执行后加载的代码。

### 对象设置

```js
设置对象的原型：
	1 Object.creat();  参数为设置的原型   创建的时候设置
    对于原型，是设置原型的原型。
    2 .__proto__ = xxx;
	3 Object.setPrototypeOf(); 创建后设置
    
强制设置属性；
	改变对象原型为null，通过Object.creat()方法。
```

---

### 继承

继承是原型的继承，而不是改变构造函数的原型。

1 对祖级继承。继承是父级的继承，设置的是祖级。

2 设置新的父级。父级的父级指向继承对象。

如果改变了构造函数的原型，那么原型里将删除constructor属性，所以在对构造函数原型设置的时候需要加上constructor属性。而此时打印出的原型实际上是继承的原型中的constructor

对于新增对象，继承设置的作用：

​		新增对象原型指向于初次创建时的原型设置。

​		在对象设置完毕后，改变其构造函数的设置对象原型不会改变新增的设置对象原型。即原有原型并不消失，而是继续被该新增对象所指定



当原型同时具有原型和对象两种身份，那么这个原型还有原型。

---

Constructor需要禁止被遍历。当定义constructor被定义的时候，可遍历为true。如果此时进行遍历，则会打印出原型链中其它的值。

父类方法不够使用时，可以重写方法，为子集定义方法。

子类当中有时也需要父类方法进行调用来完成需求。



练习：

```js

```



---

### 多态

```js
面向对象的多态继承
父类==父级==基类
1、先定义，再改变原型使用继承
2、一个父级，多个子集
3、使用this来进行相对判断
{
        function User() { };
        User.prototype.show = function () {
            console.log(this.description());
        }

        function Admin() { };
        Admin.prototype = Object.create(User.prototype);
        Admin.prototype.description = function () {
            return "管理人员账户"
        }

        function Enterprise() { };
        Enterprise.prototype = Object.create(User.prototype);
        Enterprise.prototype.description = function () {
            return "企业账户"
        }

        function Member() { };
        Member.prototype = Object.create(User.prototype);
        Member.prototype.description = function () {
            return "员工账户"
        }

        for (const obj of [new Admin, new Member, new Enterprise]) {
            obj.show();
        }
    }
```

```js
使用父类构造函数初始属性
	调用父级方法，使用apply/call改变this指向
{
        function father(name, age) {
            this.name = name;
            this.age = age;
        }
        function son(...args) {
            father.apply(this, args);
        }
        let demo = new son("yang", 18);
        console.log(demo.name, demo.age);
    }

封装原型继承函数：
    {
        function Factor(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, "constructor", {
                value: sub,
                emumerable: false
            })
        }
        function father(name, age) {
            this.name = name;
            this.age = age;
        }

        function son(...args) {
            father.apply(this, args)
        }
        Factor(son, father);
        let demo = new son("yang", "asdas");
        console.log(demo.name, demo.age)
    }


----------------------------------------------------

```

JS无多继承，实现多继承本质上是堆叠原型。

```js
多继承实现(堆叠原型)
function Factor(sub, sup) {
        sub.prototype = Object.create(sup.prototype);
        Object.defineProperty(sub.prototype, "constructor", {
            value: sub,
            emumerable: false
        })
    }

    function address() {};
    address.prototype.addd = function () {
        console.log("请求地址")
    };

    function request() { };
    Factor(request, address);
    request.prototype.ajax = function () {
        console.log("请求后台");
    };
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    Factor(User, request);
    function Admin(name, age) {
        User.call(this, name, age);
    }
    Factor(Admin, User);
    let demo = new Admin("yang", 14);
    demo.ajax();
    demo.addd();
    console.log(demo.name, demo.age);
```



```js
mixin方法
	原理：定义多个功能对象，当使用时通过assign合并到一起。
    {
        function Factor(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, "constructor", {
                value: sub,
                emumerable: false
            })
        }
        const address = {
            get_add() {
                console.log("get_add");
            }
        }
        const request = {
            get_request() {
                console.log("get_reque");
            }
        }

        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype = Object.assign(User.prototype, address, request);
        function Admin(name, age) {
            User.call(this, name, age);
        }
        Factor(Admin, User);
        let demo = new Admin("yang", 14);
        demo.get_add();
        demo.get_request();
        console.log(demo.name, demo.age);
    }
```

---

### super

```js
super = this.__proto__;

super指的是本质上调用this的对象。
```

```js
{
        function Factor(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, "constructor", {
                value: sub,
                emumerable: false
            })
        }
        const request = {
            get_request() {
                return "get request!";
            },

        };
        const address = {
            __proto__: request,
            get_address() {
                console.log("get_address");
            },
            show(){
                console.log(super.get_request());
            }
        };
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        Object.assign(User.prototype, address, request);

        function Admin(name, age) {
            User.call(this, name, age);
        }
        Factor(Admin, User);
        let user = new Admin("yang", 14);
        user.show();
    }
```

---

过难，跳过了本章最后两个视频。

---

## 第十二章 类

类是封装继承和多态的脚手架。拥有更加方便的功能，避免造原始的轮子。

其内部使用原型和继承的方式，本质上是函数，拥有函数的特性。

相对于函数来说，更加清晰。

类的类型为函数

```js
声明：
class XXX{}
let obj = new lass();
```

```js
添加方法
class obj{
    func1(){}
	func2(){}
    func3(){}
}
let sm = new obj();
sm.func1();
sm.func2();
sm.func3();
```

```js
初始化
class obj{
    constructor(){

    }
}
constructor会被自动执行。
```

```js
练手
    {
        class My {
            constructor() {
                this.name = "yang";
                this.age = 19;
                this.spirit = "right";
            }
            get() {
                console.log(this.name, this.age)
            }
        }
        let my = new My();
        my.get();
    }
```

---

### 工作机制

```js
1、继承机制
class obj{
    show(){}
}
obj.prototype.show = function(){}
两种本质上是一样的。
类方法更加清晰

2、初始化机制
class obj{
    constructor(name){
        this.name = name
    }
}
function obj(name){
    this..name = name
}
```

---

### 属性定义

加上this指的是对对象的声明，而不是class本身的声明

```js
class obj{
    func1 = xxx
    constructor(){}
}
前者定义是固定定义，在constructor里定义是接受参数定义
```

---

### 特征声明

使用class时会自动设置好特征。

在函数中使用forin循环会默认遍历出原型的方法。而这不是我们想要的，本质上是因为函数在创建的时候特征里的enumerable为true。

class声明时，会自动修改为不可遍历。所以遍历出来的为对象的属性，而不会遍历出原型的方法。



----

### 严格模式

class自带严格模式。

class中添加方法时，this默认为undefined，实际上就是严格模式

```js
    class User{
        constructor(){
            
        }
        show(){
            function test(){
                console.log(this);
            }
            test();
        }
    }
    let user = new User();
    user.show();
```



---

### 静态属性

通过prototype为示例添加的为普通方法， 通过对对象/class/函数本身/原型添加的为静态方法

分配给构造函数的为静态属性。区分静态属性和对象属性。

静态属性属于class类。

使用场景：设置静态属性会给所有的对象使用。

```js
class obj = {
    static xxx = xxx;
    static xxx = xxx;
    static xxx = xxx;
}
```

通过构造函数创建的对象自动指向原型

函数有三种用途：1、普通函数 2、构造函数 3、对象

---

### 静态方法实现原理

```js
    {
        class User {
            show() {
                console.log("对象调用的普通方法");
            }
            static show() {
                console.log("类调用的静态方法")
            }
        }
        User.show();
        let usr = new User();
        usr.show();
    }


    {
        class Usr {
            constructor(name, age, gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
            static create(...args) {
                return new this(...args);
            }
        }
        console.log(Usr.create("yang", 18, "男"));
    }
```

```js
使用静态方法的多数据处理

	const data = [
        { name: "js", price: 100 },
        { name: "mysql", price: 212 },
        { name: "vue.js", price: 98 }
    ];
    class lesson {
        constructor(data) {
            this.model = data;
        }
        name (){
            return this.model.name;
        }
        price() {
            return this.model.price;
        }
        static sum(data){
            return data.reduce((a,b)=>{ return a + b.price()},0)
        }
        static createBatch(data) {
            return data.map(item => new lesson(item))
        }
        static maxPrice(data) {
            return data.sort((a, b) => b.price() - a.price())[0];
        }
    }
    let all = lesson.createBatch(data);
    console.log(lesson.maxPrice(all).name());
    console.log(lesson.sum(all));
```

---

### 访问器(类)

对属性的控制通过函数控制。

```js
    class Request {
        constructor() {
            this.data = {};
            this.host = {};
        }
        set host(url) {
            if (!/^https?:\/\//i.test(url)) {
                throw new Error("address error");
            }
            this.data.host = url;
        }
        get host() {
            return this.data["host"];
        }
    }
    let user = new Request("https://www.baidu.com");
    console.log(user.host);
```

---

### 属性保护

开放属性可修改，有时候我们不希望发生这种情况。

```js
名义约定：
以下划线开始命名为私有属性

    class User{
        _url = "https://www.baidu.com";
        constructor(name){
            this.name = name;
        }
        set url(url){
            if(!/^https?:/i.test(url)){ throw new Error("address abnormal")}
            this._url = url;
        }
    }
    let usr = new User("yyyyyyyyyyy")
    usr.name ="yang";
    usr.url = "https:"
    console.log(usr)
```

```js
Symbol()约定   （子类可访问）
    const protectes = Symbol();
    class Common {
        constructor() {
            this[protectes] = {};
            this[protectes].host = "https://www.baidu.com"
        }
    }
    class User extends Common {
        constructor(name) {
            super();
            this.name = name;
        }
        set url(url) {
            if (!/^https?:/i.test(url)) { throw new Error("address abnormal") }
            this[protectes].host = url;
        }
        get url(){
            return this[protectes].host;
        }
    }
    let usr = new User("yyyyyyyyyyy")
    usr.name = "yang";
    usr.url = "https://"
    console.log(usr[Symbol()]);
```

```js
WeakMap设置 （子类可访问）
	const protecteds = new WeakMap();
    class Common {
        constructor() {
            protecteds.set(this, {
                host: "https://www.baidu.com"
            });
        }
        set url(url) {
            if (!/^https?:/i.test(url)) { throw new Error("address abnormal") }
            protecteds.set(this, { ...protecteds.get(this), url });
        }
        get url() {
            return protecteds.get(this)["host"];
        }
    }
    class User extends Common {
        constructor(name) {
            super();
            this.name = name;
        }
        set name(name) {
            protecteds.set(this, { ...protecteds.get(this), name });
        }
        get name(){
            return protecteds.get(this)["name"];
        }
    }
    let usr = new User("yyyyyyyyyyy");
    usr.name = "ya"
    console.log(usr.name);
    console.log(usr);
    let usr2 = new User("zzzzzzzzz");
    usr.protecteds = "https://jlsakjdl"
    console.log(usr.protecteds);
    console.log(usr2.protecteds);
```

```js
私有属性					（子类不可访问，仅当前类中访问）
	语法:#
    场景：属性私有化，方法私有化
    
    class Usr {
        #host = "https://www.baidu.com"
        constructor(name) {
            this.name = name
            this.check(name);
        }
        set(url) {
            if (!/^http?:/i.test(url)) { throw new Error("wrong") }
            this.#host = url;
        }
        check (){
            if(this.name.length < 5){throw new Error ("your name is too short")};
        }
    }
    let user = new Usr("aaaaaa");
```

---

### 继承

```js
*extend方法

普通继承：
	1、原型继承
        function User(name){
        this.name = name;
    }
    function Admin(name){
        this.name = name;
    }
    Admin.prototype = Object.create(User.prototype);
    console.dir(Admin);
	2、属性继承
        function User(name){
        this.name = name;
    }
    function Admin(name){
        this.name = name;
        User.call(this,name);
    }
    Admin.prototype = Object.create(User.prototype);
    console.dir(Admin);
	3、方法继承（对象的原型上设置方法达成继承）
        function User(name){
        this.name = name;
    }
    function Admin(name){
        User.call(this,name);
    }
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.show = function(){}
    console.dir(Admin);

class继承
        class User{
            constructor(name){
                console.log("run")
                this.name = name;
            }
        }
        class Admin extends User{
            constructor(name){
                super(name);
            }
        }
        let adm = new Admin("demo_name")
        console.dir(adm)
被继承对象调用super方法，使用extends继承父类，父类constructor自动调入。
```

```js
函数继承：
    function user() { }
    user.prototype.show = function () {
        console.log("user's show")
    }
    function admin() { }
    admin.prototype = Object.create(user.prototype);
    let yz = new admin();
    yz.show();
语法糖继承：
    class usr{
        show(){
            console.log("usr's show")
        }
    }
    class admin extends usr{}
    let yz = new admin();
    yz.show();
本质上是一样的
class不过是简写的自带便捷继承的function函数罢了。

补充：call方法在对象继承的中的应用
    let yz = {
        name:"yz___",
        show() {
            console.log("yz's show");
            console.log(this.name)
        }
    };
    let zh = {
        name:"zh____",
        __proto__: yz,
        show() {
            this.__proto__.show()
            console.log("zh's show");
        }
    };
    zh.show()
本来的意愿是使用zh里的数据调用yz的方法。因为yz里的show方法永远是yz调用的，所以this永远指向yz。结果是调用的数据来源是yz的数据(name)。
解决方法：call 改变this指向
    let yz = {
        name:"yz___",
        show() {
            console.log("yz's show");
            console.log(this.name)
        }
    };
    let zh = {
        name:"zh____",
        __proto__: yz,
        show() {
            this.__proto__.show.call(this,name);
            console.log("zh's show");
        }
    };
    zh.show()

所以super是调用父级的方法，而使用当前的数据(this指向自己)。
```

```js
上述的对象继承只适用于两层。
 this.__proto__.show.call(this)对多继承将发生死循环
 
 this还是指对象，super只是做原型攀升与方法调用
super可以解决多重继承的问题，在此super仅做为原型攀升的功能。

在function(){} 
```

```js
使用super方法必须放在constuctor的首位书写，逻辑上优先级需要是自身>父类，所以需要先调用父类方法然后再进行覆盖以达到优先级的排序。
```

---

### 静态继承原理

属性和方法在皮上没有不同，只是值不同。

class内部实现原理就是原型。

prototype 是函数作为构造函数的原型

__proto__是函数做为对象的原型。

```js
class中的static属性是为class(本质上是函数)作为对象时写入的属性/方法。
class中的非static属性是class作为构造函数时为实例化对象添加的方法。
```

---

### 继承判断

```js
a为原型对象：
a.isPrototypeOf(b)   a是否能实现b   b是否被a实现

a为对象：
a instanceOf b 		a的原型链上(对象为__proto__)是否存在b的prototype

```

### 内置类继承

```js
    class number extends Array {
        constructor(...args) {
            super(...args)
        }
        max() {
            return this.sort((a, b) => b - a)[0];
        }
        add(item) {
            return this.push(item);
        }
        remove(value) {
            let post = this.findIndex(item => item == value);
            this.splice(post,1);
        }
    }
    let demo = new number(5,61,65,16,13,546,123,321);
    demo.add(555)
    console.log(demo.max());
    demo.remove(555);
    console.log(demo.max());
```

---

### 多继承mixn

```js
通过Object.assign方法添加多个属性

	const data = [
        {click:156,name:"abc"},
        {click:6541,name:"english"},
        {click:520,name:"law"}
    ]
    class Lesson{
        constructor(lessons){
            this.lessons = lessons;
        }
        get data(){
            return this.lessons
        }
    }
    let tool = {
        max(key){
            return this.data.sort((a,b)=>b[key]-a[key])[0];
        }
    }
    let arr = {
        count(key){
            return this.data.reduce((a,b)=> a + b[key],0)
        }
    }
    Object.assign(Lesson.prototype,tool,arr);
    let demo = new Lesson(data);
    console.dir(Lesson)
    console.log(demo.count("click"));
```

---

## 第十三章 模块化

将功能分割成不同独立的文件

划分独立作用域

### 历史演变

AMD require.js =>CMD sea.js=>COMMONJS =>NODE.JS=>UMD

### 模块练习

模块分导出部分和导入部分

```js
向外部提供数据，称之为导出
moudle.define(a,b,function(){
    return {
        xxx
    }
})

写入新方法，成为导入。
moulde.define(c,d,function(){})

```

```js
模块只有在初始化的时候才会执行
后续使用的时候是使用初始化之后的结果
初始化过程也是按顺序执行，如果拥有多个存在依赖的模块，那么会按照先后顺序共用一个模块。相当于传址共用一片内存地址。
```

```js
		let demo = (function () {
        const mouduleList = {};
        function define(name, modules, action) {
            modules.map((m, i) => {
                modules[i] = mouduleList[m]
            })
            mouduleList[name] = action.apply(null, modules);
        }

        return { define };
    })()
    demo.define("yang", [], function () {
        return {
            first(arr) {
                return arr[0];
            },
            max(arr, key) {
                return arr.sort((a, b) => b[key] - a[key])[0];
            }
        }
    });
    demo.define("lesson", ["yang"], function (yang) {
        let data = [{ lesson: "english", price: 50 }, { lesson: "math", price: 250 }, { lesson: "arts", price: 75 }];;
        let res = yang.max(data, 'price');
        console.log(res);
    });
```

属性名，函数依赖，主体功能

---

### 模块使用

```js
前提：script标签添加 module属性
<script></script type="module">
导入：
import{obj1} from '文件路径&文件名'
导出：
export{obj1,obj2,obj3...}

tips:导入中路径必须有./ ../等严格遵循规范

    import {demo} from "./jsPracticeCode.js"
    demo.show()
想要使用的前提是：1、scirpt拥有module标签 2、属性设置导出 3、属性导入
```

---

### 模块延迟解析与严格模式

```js
模块延迟解析：
	放哪都行，后解析。
使用模块时，默认为严格模式
```

---

### 作用域

```js
*模块具有其独立作用域
```

---

### 预解析

```js
无论输出/调用多少次，只解析一次。
file1：
<script type="module">
    import { obj } from "./ts.js"
    console.log(obj.get());
</script>

file2：
class lesson {
    data = [];
    init() {
        this.data = [
            { name: "js" }, { name: "vue.js" }
        ]
    }
    get() {
        return this.data;
    }
}
let obj = new lesson();
obj.init();
export { obj };

```

---

### 导入与导出

```js
具名导出:
func_file:
export let text = "text file";
export function get_a() {
    return "a";
}
export class Render {
    static render() {
        return "user render"
    }
}
main_file:
<script type="module">
    import { text,get_a,Render} from "./ts.js"
    console.log(get_a());
    console.log(text);
    console.log(Render.render())
<_/script>
```

```js
批量导入
import * as obj from "address"
导出的是address文件所有导出的接口
```

```js
别名使用
	导入别名：
	import {obj} as xxx from "";

	导出别名：
    export {obj} as xxx from ""
```

```js
默认导出
	export default xxxxxx
	export {xxx as default } from ""
接收时可以随便使用变量来接收
	import whatever from ""

```

```sj
混合导出：
	具名与默认混合
import 默认,{具名} from "xxx"
不带花括号是默认导出，加上花括号为具名导出
	全部与默认混合：
	import * as api from "xxx"
	api.default()为调用默认
	
	
```

```js
独立模块*n=>模块包=>导入模块包

批量导出：
tool_file
import * as a1 from "";
import * as a2 from "";

use_file
import * as api
api.a1.xxx
api.a2.xxx
```



### 规范

```js
一般是文件名与模块相关联
公司有要求必须要根据公司的
一般为醒目易懂的英文名称
```

---

### 按需加载

```js
按需加载是动态加载
import()函数可以按需加载(判断条件)
```

---

### WebPack打包

```js
将写好的es6+代码转换为兼容es5的代码。
需要下载node.js
记得先配置完再重启 
```

```js
webpack打包工具
```

---

## 第十四章 RegExp

1、依赖于数组环境

2、对字符串进行增删改查

3、原始的内置查找功能是老人机，正则是智能机

```js
匹配是用对象来匹配，测试是用正则来测试
3
1:正向使用
let reg = /[123]/;
let obj = "xxx"
obj.match(reg);
2:逆向使用
let reg = new RegExp("data","g");
let obj = "xxx";
reg.test(obj);
```

### 特殊考虑情况

```js
1、空白
2、换行
3、大小写
4、需不需要限制范围
默认范围为一个，需不需要贪婪
```

---

### 基础语法

```js
reg.test(data);
reg.exec(str);

srt.match(reg)



正则的重点是边界限定
总的有两种思路：
1、我要什么
2、我不要什么
```

```js
正则范围内添上空格也会纳入！
-在原子表里为特殊字符，需要转义。
-原子表的括号是普通括号，不是原子组
-放原子表里的.和+均为普通意义的.和+
```



.   除换行外任意字符   普通点                        无法匹配换行符

\w字母数字下划线											无法匹配特殊字符

\d数字       															只有数字

\s空白   可匹配到空格，换行符，制表符

()原子组		表示一组，拥有两种编号模式：自动编号和别名编号/([1-6]) /    定义后 后续使用组名：\1

Array()里的属性：0:匹配完整  123456..原子组号和值  index：从哪里开始匹配  input：原始数组(操作的字符串)  groups：组别名

 []原子表-可选-不完全匹配-多情况匹配 			放里边的都匹配上去，原子表表示或的意思[123456]表示1或2或3或4或5或6    在原子表中使用^表示取反    [^]表示除了xxx都匹配

{}位数限制=>{1,2}表示1到2位

^ 以开始

$以结束    $&:匹配内容    $`：匹配内容前边的一个字符 $'匹配内容后边的一个字符

起始结束限制:^xxx$

[1-9]表示数字

[a-z]表示26个字母

[\s\S] [\d\D]   等自身+自身取反在原子表内部的 表示所有字符

/g 匹配全局，扫描到结尾

区间匹配：[0-9]只能升序，不能降序，

​					[a-z]只能升序，不能降序，

选择符：

​		| 或者        选择符左右表示整体满足一个即可

​		(大写)取反

修正符：

​		/i  不区分大小写

​		/s  视为单行，忽略换行符

​		/g 全部匹配(大文件时效率低)   显示信息较少

​		/y 全部匹配且连续满足条件，不满足立即退出

​		/m 单独当作一行处理

​		/u 匹配汉字(UTF-8) /宽字符/字节

​		组合使用： /ig  /sg /si /is

---

### 方法

```js
1、字面量形式创建正则
/xxx/.test(obj) 检测obj中是否包含xxx  查找字面量
eval()将字符串转为正则=>eval(`/${variable}/`).test()
2、对象创建：
let exp = new Regexp("obj","g")  参数二为检测模式

在对象中创建正则，因为前边的参数必须为字符串，所以输入"/d"代表的是"d" 再转义也没有用。需要为"\\d"


```

```js
字符串方法：
match
matchAll  					要求为g模式
search
replace

正则：
test()
exec
```

---

### 转义

当字符有多个含义，使用某个含义的时候进行转换

转义基本符号：\

+匹配一个或者多个数值

*表示匹配0个或多个

?代表0个或1个，有没有都行     表示禁止贪婪

??表示0个

---

### 字符属性与中文匹配

```js
[L]具有L属性：字母
/\p{sc=Han}/gu:匹配中文
{P}匹配标点符号

lastIndex:控制开始搜索的属性(必须在/g全局模式中才会生效)
可以通过修改reg里的lastIndex值来改变
regexp.exec(str):每一个字符都获取属性
使用while((res = reg.exec(str))){
    console.log(res)
}

while (res=reg.exec(str)) arr.push(res)[1]
res[0]为原数据，所以上述方法为拷贝
```

---

### 表单验证

```js
严格验证:/^$/
```

### 排除匹配

```js
/[^abcd]/ 除了abcd都匹配
```

### 正则库

```js
`匹配所有内容`/[\s\S]/
```

---

### 不记录组与嵌套分组

```js
不记录组：
(?:xxx)   连接使用，表示不记录，即不能使用\1 $1等方法使用
xxx?      表示有没有都行


    let data = `
        https://www.bing.com
        https://bing.com
    `;
    let reg = /https:\/\/\w+\.\w+\.(com|cn|org|gov|edu)/gi;
    let reg2 = /https?:\/\/((?:\w+\.)?\w+\.(?:com|cn|gov))/gi;
    let res   = [];
    let urls = [];
    while((res = reg2.exec(data))) {
        urls.push(res[1]);
    }
    console.log(urls);

https? 表示s有没有都行
```



---

### 多条件验证

```js
let reg = [//,//,//,//]  使用数组的形式
    
    
    const input = document.querySelector("[name='test']");
    input.addEventListener("keyup", e => {
        const value = e.target.value;
        const regs = [/^[a-z0-9]{5,10}$/i, /[A-Z]/, /[0-9]/];
        let state = regs.every(e => 
            e.test(value)
        )
        console.log(state ? "正确" : "错误");
    })
```

---

MathAll全局匹配

```js
    let reg = /<(h[1-6])>([\s\S]+?)<\/\1>/gi
    let obj = document.body.innerHTML.matchAll(reg);
    let res = [];
    for (const value of obj) {
        res.push(value[2])
    }
    console.log(res)
```

---

### 字符串方法

```js
search:搜索
let str = "";
str.search(reg) 返回索引位置

match:匹配结果

全局匹配，没有细节
单个匹配包含细节
```

### 别名

```js
别名是对原子组的别名
(?<>) 				<>内部为别名，使用时即\<> $<>
 
     const data = document.querySelector("body main");
    console.log(data)
    const reg = /<a.*?href=(['"])(?<link>.*?)\1>(?<title>.*?)<\/a>/gi;
    let res = [];
    for (const iterator of data.innerHTML.matchAll(reg)) {
        res.push(iterator["groups"]);
    }
    console.log(res);
 
```

---

### 断言匹配

断言只是条件，不做内

这里的括号不是组，只是条件

结构：我要的东西+条件

```js
后边是什么：		(?=)
后边不是什么:		(?!)
前边是什么：		(?<=)
前边不是什么：		(?<!)
```



```js
    let data = "lkSIJGFLajg12356jlaksj";
    let reg = /(?<!\d+)[a-z]+/i
    let res = data.match(reg);
    console.log(res);1、零宽先行断言
简单理解：后边是什么
let reg = /obj(?=测试)/  后边为"测试"的obj
    let data = `
            js,200元,300次
            php,300.00元,100次
            node.js,180元,260次
        `;
    let reg = /(\d+)(.00)?(?=元)/gsi
    let res = data.replace(reg, (v, ...args) => {
        args[1] = args[1] || '.00';
        
        return args.splice(0,2).join('');
    })
    console.log(res)
2、零宽负向先行断言
let reg = /obj(?！测试)/  后边不是"测试"的obj
简单理解：后边不是什么
    let text = "yangzehang16102345weibo";
    let reg = /[a-z]+(?!\d)$/i
    let res = text.replace(reg,v=>{
        console.log(v)
    })

3、零宽后行断言
简单理解：前边是什么
let reg = /obj(?<=测试)/  前边为"测试"的obj

    let main = document.querySelector("main");
    const reg = /(?<=href=(['"])).+(?=\1)/gi;
    main.innerHTML  = main.innerHTML.replace(reg,(v,p)=>{
        return `https://bilibili.com`
    })
    console.log(main.innerHTML);
4、零宽负向后行断言
简单啊理解：前边不是什么
    let data = "lkSIJGFLajg12356jlaksj";
    let reg = /(?<!\d+)[a-z]+/i
    let res = data.match(reg);
    console.log(res);
```

```js
断言模糊案例
    let phone_numbers = `
        12345678901
        09876543210
    `
    let reg = /(?<=\d{7})(\d{4})/ig;
    let res = phone_numbers.replace(reg,(v)=>{
        return "*".repeat(4);
    });
    console.log(res);
```

 ```js
 限制用户名关键词
     let obj = document.querySelector("[name='demo']");
     obj.addEventListener("keyup",function(){
         const reg = /^(?!.*abc.*)/i
         let status = this.value.match(reg);
         console.log(status);
     })
     console.log(obj);
 ```

```js
练习
    const obj = document.querySelector("main");
    const reg = /https?:\/\/([a-z]+)?(?<!oss)\..+?/ig
    obj.innerHTML = obj.innerHTML.match(reg,v=>{
        return v
    })
    console.log(obj.innerHTML)
```

---

## 第十五章 异步

任务先后执行的问题

js为单线程语言

单线程问题是阻塞，按顺序执行即前边必须执行完。

解决的是执行顺序的问题。

```js
function img(src){
	let img = new Img();
	img.src = src
}
img("iaklsjflk/zsdlkn/121sd");
console.log("alett");
可以知道，控制台输出会在图片加载之前就进行，产生报错。
```

```js
主任务完成后，轮询任务队列。

加载与执行
loading&excusing
先加载不一定先执行。
先执行不一定先加载
```

```js
定时器练习
setTimeOut()		单次执行
setInterval()		反复执行
```

### 任务排序

```js
函数模块永远是在主进程加载完毕后执行。
主进程再慢也得等主进程加载完毕。
    function loading(src,resolve){
        let script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
    }
    loading("first.js",()=>{
        first();
    })
    loading("second.js",()=>{
        second();
    })
    console.log("main programs")
非主进程谁加载的快谁优先放入任务队列中，先进先出。
异步线程的数据可以使用主线程数据
```

---

### 任务请求

```js
1、通过http模块请求后台数据
2、任务队列中添加任务
3、主程序执行任务，主程序执行完毕后执行任务队列中的任务
对于有文件依赖的任务，容易产生多层次回调嵌套。
产生了promise
```

---

### promise

通知

```js
Part1:准备阶段

new Promise((a,b)=>{}) //Promise{<pending>}  准备阶段
准备成功，用a函数通知；准备失败，用b函数通知。
```

```js
Part2:处理阶段
~.then(a,b)
a,处理成功的回调；b，处理失败的回调
```

```js
以微任务队列为主
如果微任务队列有任务，会优先执行微任务队列
Promise产出微任务队列。
微任务队列执行完毕后执行宏任务。

宏任务队列:
微任务队列:
	操作完毕后添加任务至微任务队列
	微任务队列进行排序
	微任务队列将排序好的任务放入放入主线程执行
    {
        new Promise((a, b) => {
            a("OK");
            b("No");
        }).then(a => {
            console.log("OK-OK")
        }, b => {
            console.log("No-No")
        })
    }
```

![image-20220514182958528](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220514182958528.png)

---

### 微任务与宏任务

```js
当Promise执行到处理的时候(下方的resolve())会产生微任务。
微任务在下一次轮询时会执行。需要主线程执行完毕后执行
	let promise = new Promise(resolve=>{
        setTimeout(()=>{
            console.log("third-running");
            resolve();
        },100)
        console.log("first-running")
    }).then(next=>{
        console.log("fourth-running")
    })
    console.log("second-running")
微任务中的主线任务=>宏任务中的主线任务=>宏任务中的微任务=>微任务中的微任务
```

---

### 单一状态与状态中转

```js
promise触发后状态不可逆
    let pro1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("post2");
        },2000)
    })
    let pro2 = new Promise((resolve, reject) => {
        resolve(pro1);
    }).then(r => { console.log('right' + r) }, w => { console.log('wrong' + w) })
```

---

### then

```js
1、多个then如果未处理，会继续顺着向下找寻处理的then
2、单处理时，可设置null

    let promise = new Promise((a, b) => {
        b("request rejected");
    }).then().then(null, reason => {
        console.log(`Request error ${reason}`);
    })
```

```js
Promise返回的也是个Promise
多个then连续时，会根据上一个处理是否存在来进行处理
    let p1 = new Promise((a, b) => {
        // a();
        b();
    })
    let p2 = p1.then(a => { console.log("right2") }, b => { console.log("error2") });
    let p3 = p2.then(a=>{console.log("right3")},b=>{console.log("error3")});
```

```js
返回值是成对出现的
	
这样也是一个promise，是内部封装的promise
.then(value=>{return {then(resolve,reject){
	
	}
}})
```

---

### 其它类型promise封装

```js
    let promise = new Promise((resolve, reject) => {
        resolve();
    }).then(run => {
        return class {
            static then(resolve, reject) {
                resolve("OK");
            }
        }
    }, stp => { console.log("stop in 2") }).then(value => {
        console.log(`${value} over`);
    })
```

### 

---

### catch接收

```js
    new Promise((resolve,reject)=>{
        resolve();
    })
    .then(resolve2=>{return new Promise((new_resoleve,new_reject)=>{
        new_reject("new_reject err");
    })},reject2=>{console.log("2 is err")})
    .catch(err=>{console.log(`${err}cath error`)});

```

---

### 错误处理

```js
    new Promise((resolve, reject) => {
        resolve("nope");
    })
        .then(value => {
            if (value != "yes") {
                return Promise.reject("no")//以上代码等同于throw new Error("no")
            }
        },null)
        .catch(value => {
            console.log(value + "---")
        })




自定义处理
class DIY_error extends Error{
        constructor(msg){
            super(msg);
            this.err_name = "address head error";
        }
    }
    function request(URL){
        let reg = /^https?/i;
        if(!reg.test(URL)){
            throw new DIY_error("address head error");
        }
    }
```

### finally

```js
无论陈工还是失败都会执行
用于发送完毕后关闭/结束某些功能
```

---

### 异步加载图片

```js
    function loading_img(src){
        return new Promise((resolve,reject)=>{
            let image = new Image();
            image.src = src;
            image.onload = ()=>{resolve(image)};
            image.onerror = reject;
            document.body.appendChild(image);
        })
    }
    loading_img("./demo.png").then(image=>{
        image.style.border = "solid 2px black"
    })
```

---

### 定时器封装

```js
    function timeout(delay = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => { resolve() }, delay);
        })
    }
    timeout(4000).then(re => {
        console.log("OK")
        return timeout(8000)
    })
        .then(a => { console.log("right") });
```

---

### all接口

```js
mesuare:
	Promise.all([p1,p2,p3...])
criteria:
	all are true is true
	全部返回的promise状态必须为已解决状态
    {
        const first = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("first is ok");
            }, 1000)
        }).catch(()=>{
            console.log("fitst is okk")
        })//catch 默认返回解决状态
        

        const second = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("second is ok")
            })
        })
        let all_promise = [first, second];
        Promise.all(all_promise).then(result => {
            console.log("全部成功");
        }).catch(() => {
            console.log("有至少一个不成功")
        })
    }
```

---

### allSettled

```js
都收集起来。 全部收起来之后再处理。
本身返回的值为成功状态

        let all_promises = [first, second];
        Promise.allSettled(all_promises).then(value => {
            let users = value.filter(user => {
                return user.status == "fulfiled";
            })
        })
```

---

### race

```js
接收多个promise，哪个快接收哪个
谁快用哪个，以快为准
```

---

### Promise队列

```js
    let res = Promise.resolve();
    res.then(value => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("1")
                resolve("errorL:value");
            }, 1000)
        })
    }).then(v=>{
        return new Promise(resolve=>{
            setTimeout(() => {
                console.log("2")
                resolve("ok");
            }, 1000);
        })
    })
上一个promise队列依赖下一个promise队列的改变
```

```js
    function queue(num) {
        let promise = Promise.resolve();
        num.map(v => {
            promise = promise.then(_ => {
                return v();
            })
        })
    }
    function p1() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("p1")
                resolve();
            }, 1000);
        })
    }
    function p2() {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("p2")
                resolve();
            }, 1000);
        })
    }
    queue([p1,p2]);
```

```js
    function return_promise(num) {
        num.reduce((promise, n) => {
            return promise.then(() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log(n)
                        resolve();
                    }, 1000)
                })
            })
        }, Promise.resolve())
    }
    return_promise([516, 516, 51, 651, 35])
```

---

### async&awiat

```js
async 相当于Promise
await 相当于 then
async---性质转化，如果function/class里需要先加载主进程，那么function/class需要进行async声明。
同样的，里边具体的执行代码块要用上 await方法。表示这个优先加载
```

----

### class

```js
 class user{
            constructor(name){
                this.name = name;
            }
            then(resolve,reject){
                let user = "yzh";
                resolve(user);
            }
        }
        async function usr(){
            let usr1 = await new user("yang");
            console.log(usr1)
        }
        usr() 


内部封装异步

class Demo {
        constructor(name) { this.name = name };
        async get() {
            let age = await new object();
            console.log
        }
    }
```

---

### 总结

```js
    //普通函数生声明
    function ajax(name) {
        return `this is the data ${name}`
    }
    async function get() {
        return await ajax("my");
    }
    get().then(v => {
        console.log(v);
    })

    //对象调用
    function ajax(name) {
        return `this is the data ${name}`
    }
    let yzh = {
        async get(name) {
            return await ajax("object api");
        }
    }
    yzh.get().then(v=>{
        console.log(v)
    })

    //类封装
    function ajax(name) {
        return `this is the data ${name}`
    }
    class Usr {
        constructor() { };
        async get() {
            return await ajax("this is the method by Object");
        }
    }
    let yz = new Usr();
    yz.get().then(v => {
        console.log(v);
    })
```

---

### 错误处理

```js
代码不应该只考虑正常，也要考虑异常
    //标准的Promise错误处理流程
    async function example() {
        try {
            let user = await "xxx";
            let lessons = await "xxx";
            return Data;
        } catch (args) {
            alert("error report")
        }
    };

对于函数类型，对象类型，类类型都可以使用.catch进行捕获
```

### await并行处理

```js
function new1_promise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("new1_value");
            }, 1000)
        })
    }
    function new2_promise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("new2_value");
            }, 1000)
        })
    }
    //fn1 并行处理
    async function yz() {
        let h1 = new1_promise();
        let h2 = new2_promise();
        let h1value = await h1;
        let h2value = await h2;
        console.log(h1value, h2value);
        setTimeout(() => {
            console.log(h1, h2);
        }, 2000)
    }
    yz()
    //fn2 all处理
    async function zh() {
        let res = await Promise.all([new1_promise(), new2_promise()]);
        console.log(res)
    }
    zh()
```

---

## 第十六章 任务队列

<img src="C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220522084738323.png" alt="image-20220522084738323" style="zoom:50%;" />

```js
必要的概念：
	1、同步
    2、异步
不同维度排队顺序：  主线程=>微任务队列=>宏任务队列
相同维度下：按执行速度排列
微任务队列优先级最高，大于宏任务
所以线程执行的时候是先去微任务再去宏任务

new构造函数是同步执行，所以new Promise(resolve=>{})类似的执行，属于主线程同步代码
    setTimeout(() => {
        console.log('2')
    }, 0)
    Promise.resolve().then(() => {
        console.log('1')
    })
    console.log("0")
```

```js
js单线程特点
某一时间只做一个任务

主线程：同一时间只能做一件事，除此之外不能做其它的事情
主线程中的任务做完再去其它队列里抓任务来做

干活=>看任务=> 


```



---

### 定时器

```js
定时器作为宏任务，在执行时，会先将定时器任务进行计时，待主线程运行完毕后，立即执行。
    setTimeout(() => {
        console.log("主任务队列，排列1，运行2");
    }, 2000)
    setTimeout(() => {
        console.log("主任务队列，排列2，运行1");
    }, 1000)
    Promise.resolve().then(() => {
        console.log("微任务队列")
    })
    console.log("主线程任务");
```

---

### Promise微任务执行逻辑

```js
Promise主体是主线程任务，Promise.then是微任务，
    setTimeout(() => {
        console.log("宏任务");
    }, 1000);
    new Promise(resolve => {
        console.log("立即执行，属于主线程任务");
        resolve();
    }).then(resolve => {
        console.log("then属于微任务");
    })
```

---

DOM渲染逻辑

```js
进行DOM渲染时，默认从上到下执行js代码，
如果将script标签放在头部，且js代码执行时间较长，会给用户造成一种页面有问题的感觉。
实际上执行主线程的时候是这样子的。

所以这就是为什么要将script标签放在body之后的原因。
```

---

### 同步

```
同步指的是队列顺序下的执行。
同步不等于同时。只是间隔时间比较小，最重要的是同步是有顺序的
    let i = 0; //主线程任务
    setTimeout(() => {
        console.log(++i);
    }, 1000)//宏任务队列1 使用主线程i=0,进行操作后，i=1
    setTimeout(() => {
        console.log(++i);
    }, 1000)//宏任务队列2 使用宏任务队列1 i=1，进行操作后i=2
```

---

### 任务轮询

```js
    <div class="demo">1%</div>

    <style>
        .demo {
            display: flex;
            align-items: center;
            justify-content: center;
            border: solid 2px #aaa;
            height: 50px;
            width: 1px;
            background: #a44f;
        }
    </style>

function handle() {
        let i = 0;
        let div = document.querySelector(".demo");
        (function run() {
            if (i < 100) {
                setTimeout(() => {
                    ++i;   //关键在这，即便是执行console.log(++i),i也会在任务队列里进行++i操作
                    div.innerHTML = i + "%";
                    div.style.width = i + "px";
                    run();
                }, 10)
            }
        })()
    }
    handle()
```

---

### 任务拆分

```js
机器的任务拆分和人相似。
当面对大量计算时，使用拆分效果会更好。

function question_exposed() {
        let num = 987654321;
        let res = 0;
        for (let i = 0; i <= num; i++) {
            res += num--
        }
        console.log(res)
    }
    question_exposed();
    console.log("this is main")


任务拆分并没有本质上减少任务量，只是对于人来说，我们能够知道进度。不过这一点十分重要
    let num = 98765;
    let res = 0;
    function question_exposed() {
        for (let i = 0; i <= num; i++) {
            if (num <= 0) break;
            res += num--
        }
        if (num > 0) {
            console.log(num)
            setTimeout(question_exposed)
        } else {
            console.log(res)
        }
    }
    question_exposed();
    console.log("this is main")
```

---

### Promise微任务处理

```js
有些数据需要在后台进行计算，而前台专注于任务显示。
在后台计算的数据，我们往往需要拿到数据的结果，进行后续的计算。

    async function get_res() {
        let res = await Promise.resolve().then(() => {
            let count = 0;
            for (let i = 0; i <= num; i++) {
                count += num--;
            }
            return count;
        })
        console.log(res);
    }
    let num = 9890000;
    get_res(num);
    console.log("main")
```

---

## 第十七章 DOM (simple)

- 经过浏览器处理，都会变成规范的代码

- 三种等待渲染后加载的方式

  ```
  window.onload = ()=>{}
  settimeout(()=>{})
  <script>  </script defer>
  ```

- # 节点

  - ## 节点

    - 文本节点	值为3 					注释节点    值为8
    - 标签节点    值为1          常用  文档节点     值为9
    - 属性节点    值为2
    - 语法
      - .childNodes 获取该节点下所有子节点
      - .nodetype 判断节点类型

  - ## 节点对象的原型继承 

    - ```js
      function proto(el) {
                  const prototypes = [];
                  prototypes.push(el.__proto__);
                  prototypes.push(...(el.__proto__ ? proto(el.__proto__) : []));
                  return prototypes;
              }
      ```

      ![image-20220816104711913](C:\Users\16193\AppData\Roaming\Typora\typora-user-images\image-20220816104711913.png)

    - 属性的节点ID

    - 

  - ## Objcet.assign 进行节点批量设置样式

    ```js
     HTMLElement.prototype = Object.assign(HTMLElement.prototype, {
                color(color) {
                    this.style.color = color;
                },
                hide() {
                    this.style.display = 'none';
    
                }
            })
    
    //原理：原型+assign进行复用，批量设置
    
    //像普通对象一样的属性和方法都可以在节点中使用
    ```

    

  - ## 常用DOM节点元素

    - document.nodeType

    - document.title

    - document.URL
    - document.domain
    - document.referrer'
    - document.documentElment

    - document.body

    - document.head

  - attributes输出标签属性的map映射

  - parentElement父节点

  - 获取所有能用tagName的节点，html可见节点，不包括textNode等

