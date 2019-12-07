## 1.给代码添加注释
被注释的代码块在 JavaScript 之中是不会执行的。在代码中写注释是一个非常好的方式让你自己和其他人理解代码。

JavaScript 中的注释方式有以下两种：

使用//注释掉当前行的代码

// 这是一条单行注释。
你也可以使用多行注释来注释你的代码，以/*开始，用*/来结束，就像下面这样：

/* 这是一个
多行注释 */
最佳实践
写代码的时候，要定期添加注释对部分代码块进行解释。适当的注释能让别人和你自己更容易看懂代码。
## 2.声明变量

在计算机科学中，数据就是一切，它对于计算机意义重大。JavaScript 提供七种不同的数据类型，它们是undefined（未定义）， null（空），boolean（布尔型），string（字符串），symbol(符号)，number（数字），和object（对象）。

例如，计算机区分数字和字符集合的字符串，例如数字12和字符串"12"，"dog"或"123 cats"。计算机可以对数字执行数学运算，但不能对字符串执行数学运算。

变量允许计算机以一种动态的形式来存储和操作数据，通过操作指向数据的指针而不是数据本身来避免了内存泄露，以上的七种数据类型都可以存储到一个变量中。

变量非常类似于你在数学中使用的 x，y 变量，都是以一个简单命名的名称来代替我们赋值给它的数据。计算机中的变量与数学中的变量不同的是，计算机可以在不同的时间存储不同类型的变量。

通过在变量的前面使用关键字var，声明一个变量，例如：

var ourName;
上面代码的意思是创建一个名为ourName的变量，在 JavaScript 中我们以分号结束语句。

变量名称可以由数字、字母、美元符号$或者 下划线_组成，但是不能包含空格或者以数字为开头。

## 3.使用赋值运算符存储值
在 JavaScript 中，你可以使用赋值运算符将值存储在变量中。

myVariable = 5;

这条语句把Number类型的值5赋给变量myVariable。

赋值过程是从右到左进行的。在将值分配给运算符左侧的变量之前，将解析=运算符右侧的所有内容。

myVar = 5;
myNum = myVar;
数值5被赋给变量myVar中，然后再次将变量myVar解析为5并将其赋给myNum变量。

## 4.使用赋值运算符初始化变量
通常在声明变量的时候会给变量初始化一个初始值。

var myVar = 0;

创建一个名为myVar的变量并指定一个初始值0。

## 5.理解未初始化的变量
当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值undefined。当你对一个值为undefined的变量进行运算操作的时候，算出来的结果将会是NaN，NaN的意思是"Not a Number"。当你用一个值是undefined的变量来做字符串拼接操作的时候，它会输出字符串"undefined"。
## 6.了解变量名区分大小写
在 JavaScript 中所有的变量和函数名都是大小写敏感的。要区别对待大写字母和小写字母。

MYVAR与MyVar和myvar是截然不同的变量。这有可能导致出现多个相似名字的的变量。所以强烈地建议你，为了保持代码清晰不要使用这一特性。

最佳实践
使用驼峰命名法来书写一个 Javascript 变量，在驼峰命名法中，变量名的第一个单词的首写字母小写，后面的单词的第一个字母大写。

示例：

var someVariable;
var anotherVariableName;
var thisVariableNameIsTooLong;
## 7.加法运算
Number是 JavaScript 中的一种数据类型，表示数值。

现在让我们来尝试在 JavaScript 中做加法运算。

JavaScript 中使用+号进行加法运算。

示例

myVar = 5 + 10; // 赋值为 15

## 8.减法运算
我们也可以在 JavaScript 中进行减法运算。

JavaScript 中使用-来做减法运算。

示例

myVar = 12 - 6; // 赋值为 6
## 9.乘法运算
我们也可在 JavaScript 中使用乘法运算。

JavaScript 使用*符号表示两数相乘。

示例

myVar = 13 * 13; // 赋值为169
## 10.除法运算
我们可以在 JavaScript 中做除法运算。

JavaScript 中使用/符号做除法运算。

示例

myVar = 16 / 2; // 赋值为8
## 11.数字递增
使用++，我们可以很容易地对变量进行自增或者+1运算。

i++;

等效于

i = i + 1;

注意
i++;这种写法，省去了书写=符号的必要。
## 12.数字递减
使用自减符号--，你可以很方便地对一个变量执行自减或者-1运算。

i--;

等效于

i = i - 1;

提示
i--;这种写法，省去了书写=符号的必要。
## 13.创建一个小数
我们也可以把小数存储到变量中。小数也被称作浮点数 。

提示
不是所有的实数都可以用 浮点数 来表示。因为可能存在四舍五入的错误
## 14.两个小数相乘
在 JavaScript 中，你也可以用小数进行计算，就像整数一样。

把两个小数相乘，并得到它们乘积。
## 15.两个小数相除
现在让我们将一个小数除以另一个小数。

## 16.求余运算
remainder求余运算符%返回两个数相除得到的余数

示例

5 % 2 = 1 因为
Math.floor(5 / 2) = 2 （商）
2 * 2 = 4
5 - 4 = 1 （余数）
用法
在数学中，判断一个数是奇数还是偶数，只需要判断这个数除以 2 得到的余数是 0 还是 1。

17 % 2 = 1（17 是奇数）
48 % 2 = 0（48 是偶数）
## 17.复合赋值之 +=
在编程当中，通常通过赋值来修改变量的内容。记住，赋值时 Javascript 会先计算=右边的内容，所以我们可以写这样的语句：

myVar = myVar + 5;

以上是最常见的运算赋值语句，即先运算、再赋值。还有一类操作符是一步到位既做运算也赋值的。

其中一种就是+=运算符。

var myVar = 1;
myVar += 5;
console.log(myVar); // 返回 6
## 18.复合赋值之 -=
与+=操作符类似，-=操作符用来对一个变量进行减法赋值操作。

myVar = myVar - 5;

变量myVar等于自身减去5的值。也可以写成这种形式：

myVar -= 5;
## 19.复合赋值之 *=
*=操作符是让变量与一个数相乘并赋值。

myVar = myVar * 5;

变量myVar等于自身与数值5相乘的值。也可以写作这样的形式:

myVar *= 5;
## 20.复合赋值之 /=
/=操作符是让变量与另一个数相除并赋值。

myVar = myVar / 5;

变量myVar等于自身除以5的值。等价于:

myVar /= 5;
## 21.声明字符串变量
之前我们写过这样的代码：

var myName = "your name";

"your name"被称作字符串变量。字符串是用单引号或双引号包裹起来的一连串的零个或多个字符

## 22.转义字符串中的引号
定义一个字符串必须要用单引号或双引号来包裹它。那么当你的字符串里面包含："或者'时该怎么办呢?

在 JavaScript 中，你可以通过在引号前面使用反斜杠（\）来转义引号。

var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

有了转义符号，JavaScript 就知道这个单引号或双引号并不是字符串的结尾，而是字符串内的字符。所以，上面的字符串打印到控制台的结果为：

Alan said, "Peter is learning JavaScript".
## 23.用单引号引用字符串
JavaScript 中的字符串可以使用开始和结束都是同类型的单引号或双引号表示，与其他一些编程语言不同的是，单引号和双引号的功能在 JavaScript 中是相同的。

doubleQuoteStr = "This is a string";
singleQuoteStr = 'This is also a string';
当你需要在一个字符串中使用多个引号的时候，你可以使用单引号包裹双引号或者相反。常见的场景比如在字符串中包含对话的句子需要用引号包裹。另外比如在一个包含有 a标签的字符串中，a 标签的属性值需要用引号包裹。

conversation = 'Finn exclaims to Jake, "Algebraic!"';
但是，如果你想在字符串中使用与最外层相同的引号，会有一些问题。要知道，字符串在开头和结尾都有相同的引号，如果在中间使用了相同的引号，字符串会提前中止并抛出错误。
```javascript
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
badStr = 'Finn responds, "Let's go!"'; // 抛出错误
```
在上面的goodStr中，通过使用反斜杠\转义字符可以安全地使用两种引号

提示
不要把反斜杠\和斜杠/搞混，它们不是一回事。
## 24.字符串中的转义序列

引号不是字符串中唯一可以被转义的字符。使用转义字符有两个原因：首先是可以让你使用无法输入的字符，例如退格。其次是可以让你在一个字符串中表示多个引号，而不会出错。我们在之前的挑战中学到了这个。

```
代码	输出
\'	单引号
\"	双引号
\\	反斜杠
\n	换行符
\r	回车符
\t	制表符
\b	退格
\f	换页符
```
请注意，必须对反斜杠本身进行转义才能显示为反斜杠。

## 25.用加号运算符连接字符串
在 JavaScript 中，当对一个String类型的值使用+操作符的时候，它被称作 concatenation 操作符。你可以通过和其他字符串concatenation来创建一个新的字符串。

示例

'My name is Alan,' + ' I concatenate.'
提示
注意空格。拼接操作不会在两个字符串之间添加空格，所以想加上空格的话，你需要自己在字符串里面添加。
## 26.用 += 运算符连接字符串
我们还可以使用+=运算符来concatenate（拼接）字符串到现有字符串的结尾。对于那些被分割成几段的长的字符串来说，这一操作是非常有用的。

提示
注意空格。连接操作不会添加两个字符串外面的空格，所以如果想要加上空格的话，你需要自己在字符串里面添加。
## 27.用变量构造字符串
有时候你需要创建一个类似Mad Libs(填词游戏）风格的字符串。通过使用连接运算符+ ，你可以插入一个或多个变量来组成一个字符串。
## 28.将变量附加到字符串
我们不仅可以创建出多行的字符串，还可以使用加等号(+=)运算符来追加变量到字符串上。
## 29.查找字符串的长度
你可以通过在字符串变量或字符串后面写上.length来获得字符串变量字符串值的长度。

"Alan Peter".length; // 10

例如，我们创建了一个变量var firstName = "Charles"，我们就可以通过使用firstName.length来获得"Charles"字符串的长度
## 30.使用方括号查找字符串中的第一个字符
方括号表示法是一种在字符串中的特定index（索引）处获取字符的方法。

大多数现代编程语言，如JavaScript，不同于人类从 1 开始计数。它们是从 0 开始计数，这被称为 基于零 的索引。

例如, 在单词 "Charles" 中索引 0 上的字符为 "C"，所以在var firstName = "Charles"中，你可以使用firstName[0]来获得第一个位置上的字符。
## 31.了解字符串的不变性
在 JavaScript 中，字符串的值是 不可变的，这意味着一旦字符串被创建就不能被改变。

例如，下面的代码：
```javascript
var myStr = "Bob";
myStr[0] = "J";
```
是不会把变量myStr的值改变成 "Job" 的，因为变量myStr是不可变的。注意，这并不意味着myStr永远不能被改变，只是字符串字面量 string literal 的各个字符不能被改变。改变myStr中的唯一方法是重新给它赋一个值，例如：
```javascript
var myStr = "Bob";
myStr = "Job";
```
## 32.使用方括号查找字符串中的第N个字符
你也可以使用方括号来获得一个字符串中的其他位置的字符。

请记住，程序是从0开始计数，所以获取第一个字符实际上是[0]。
## 33.使用方括号查找字符串中的最后一个字符
要获取字符串的最后一个字符，可以用字符串的长度减 1 的索引值。

例如，在var firstName = "Charles"中，你可以这样操作firstName[firstName.length - 1]来得到字符串的最后的一个字符。

## 34.使用方括号查找字符串中的第N个字符到最后一个字符
我们既可以获取字符串的最后一个字符，也可以用获取字符串的倒数第N个字符。

例如，你可以这样firstName[firstName.length - 3]操作来获得var firstName = "Charles"字符串中的倒数第三个字符。

## 35.填词造句
现在，我们来用字符串的相关知识实现一个 "Mad Libs" 类的文字游戏，称为 "Word Blanks"。 你将创建一个（可选幽默的）“填空”样式句子。

在 "Mad Libs" 游戏中，提供一个缺少一些单词的句子，缺少的单词包括名词，动词，形容词和副词等。然后，你选择一些单词填写句子缺失的地方，使句子完整并且有意义。

思考一下这句话 - "It was really ____, and we ____ ourselves ____"。这句话有三个缺失的部分 - 形容词，动词和副词，选择合适单词填入完成它。然后将完成的句子赋值给变量，如下所示：
```javascript
var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
```
## 36.使用 JavaScript 数组将多个值存储在一个变量中
使用数组，我们可以在一个地方存储多个数据。

以左方括号[开始定义一个数组，以右方括号]结束，里面每个元素之间用逗号隔开，例如：

var sandwich = ["peanut butter", "jelly", "bread"].
## 37.将一个数组嵌套在另一个数组中
你也可以在数组中包含其他数组，例如：[["Bulls", 23], ["White Sox", 45]]。这被称为一个多维数组。

## 38.通过索引访问数组中的数据
我们可以像操作字符串一样通过数组索引[index]来访问数组中的数据。

数组索引的使用与字符串索引一样，不同的是，通过字符串的索引得到的是一个字符，通过数组索引得到的是一个元素。与字符串类似，数组也是基于零的索引，因此数组的第一个元素的索引是0。

示例
```javascript
var array = [50,60,70];
array[0]; // 值为 50
var data = array[1]; // 值为 60
```
提示
数组名称和方括号之间不应有任何空格，如array [0]尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑


## 39.通过索引修改数组中的数据
与字符串的数据不可变不同，数组的数据是可变的，并且可以自由地改变。

示例

var ourArray = [50,40,30];
ourArray[0] = 15; // 等于 [15,40,30]
提示
数组名称和方括号之间不应有任何空格，如array [0]尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑。
## 40.使用索引访问多维数组
可以把 多维 数组看作成是一个 数组中的数组。当使用方括号去访问数组的时候，第一个[index]访问的是第 N 个子数组，第二个[index]访问的是第 N 个子数组的第N个元素。

示例
```javascript
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // 等于 [[10,11,12], 13, 14]
arr[3][0]; // 等于 [10,11,12]
arr[3][0][1]; // 等于 11
```
提示
数组名称和方括号之间不应该有任何空格，如array [0][0]甚至是这样array [0] [0]尽管 JavaScript 能够正确处理，但可能会让看你代码的其他程序员感到困惑。
## 41.使用 push() 操作数组
一个简单的方法将数据添加到一个数组的末尾是通过push()函数。

.push()接受把一个或多个参数，并把它“推”入到数组的末尾。
```javascript
var arr = [1,2,3];
arr.push(4);
// 现在arr的值为 [1,2,3,4]
```
## 42.使用 pop() 操作数组
改变数组中数据的另一种方法是用.pop()函数。

.pop()函数用来“抛出”一个数组末尾的值。我们可以把这个“抛出”的值赋给一个变量存储起来。换句话说就是.pop()函数移除数组末尾的元素并返回这个元素。

数组中任何类型的元素（数值，字符串，甚至是数组）可以被“抛出来” 。
```javascript
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // 输出 6
console.log(threeArr); // 输出 [1, 4]
```
## 43.使用 shift() 操作数组
pop()函数用来移出数组中最后一个元素。如果想要移出第一个元素要怎么办呢？

这就是.shift()的用武之地。它的工作原理就像.pop()，但它移除的是第一个元素，而不是最后一个。
## 44.使用 unshift() 操作数组
你不仅可以shift（移出）数组中的第一个元素，你也可以unshift（移入）一个元素到数组的头部。

.unshift()函数用起来就像.push()函数一样, 但不是在数组的末尾添加元素，而是在数组的头部添加元素。
## 45.购物清单
创建一个名叫myList的购物清单，清单的数据格式就是多维数组。

每个子数组中的第一个元素应该是购买的物品名称，第二个元素应该是物品的数量，类似于：

["Chocolate Bar", 15]

任务：你的购物清单至少应该有 5 个子数组。
## 46.用函数编写可重用代码
在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个函数中。

举个例子：
```javascript
function functionName() {
  console.log("Hello World");
}
```
你可以通过函数名functionName加上后面的小括号来调用这个函数，就像这样：

functionName();

每次调用函数时，它都会在控制台上打印消息"Hello World"。每次调用函数时，大括号之间的所有代码都将被执行。
## 47.将值传递给带有参数的函数
函数的参数parameters在函数中充当占位符(也叫形参)的作用，参数可以为一个或多个。调用一个函数时所传入的参数为实参，实参决定着形参真正的值。简单理解：形参即形式、实参即内容。

这是带有两个参数的函数，param1和param2：
```javascript
function testFun(param1, param2) {
  console.log(param1, param2);
}
```
接着我们调用testFun：

testFun("Hello", "World");

我们传递了两个参数，"Hello"和"World"。在函数内部，param1等于“Hello”，param2等于“World”。请注意，testFun函数可以多次调用，每次调用时传递的参数会决定形参的实际值。
## 48.全局作用域和函数
在 JavaScript 中，作用域涉及到变量的作用范围。在函数外定义的变量具有 全局 作用域。这意味着，具有全局作用域的变量可以在代码的任何地方被调用。

这些没有使用var关键字定义的变量，会被自动创建在全局作用域中，形成全局变量。当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。因此你应该总是使用var关键字来声明你的变量。
## 49.局部作用域和函数
在一个函数内声明的变量，以及该函数的参数都是局部变量，意味着它们只在该函数内可见。

这是在函数myTest内声明局部变量loc的例子：
```javascript
function myTest() {
    var loc = "foo";
    console.log(loc);
}
myTest(); // 打印出 "foo"
console.log(loc); // loc 没有定义
```
在函数外，loc是未定义的。
## 50.函数中的全局作用域和局部作用域
一个程序中有可能具有相同名称的局部变量 和全局变量。在这种情况下，局部变量将会优先于全局变量。

下面为例：
```javascript

var someVar = "Hat";
function myFun() {
    var someVar = "Head";
    return someVar;   
}

```
函数myFun将会返回"Head"，因为局部变量优先级更高。

## 51.函数可以返回某个值
我们可以通过函数的参数把值传入函数，也可以使用return语句把数据从一个函数中传出来。

示例
```javascript
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5); // 8
```
plusThree带有一个num的参数并且返回（returns）一个等于num + 3的值。
## 52.函数也可以返回 undefined
函数一般用return语句来返回值，但这不是必须的。在函数没有return语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是undefined。

示例
```javascript
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
var returnedValue = addSum(3); // sum 会改变，但函数的返回值仍为 undefined
addSum是一个没有return语句的函数。该函数将更改全局变量sum，函数的返回值为undefined。
```
## 53.用返回值来赋值
如果你还记得我们在这一节 Storing Values with the Assignment Operator,的讨论，赋值之前，先完成等号右边的操作。这意味着我们可把一个函数的返回值，赋值给一个变量。

假设我们预先定义的函数sum其功能就是将两个数字相加，那么：

ourSum = sum(5, 12);

将调用sum函数，返回return了一个数值17，然后把它赋值给了ourSum变量。
## 54.排队
在计算机科学中队列（queue）是一个抽象的数据结构，队列中的条目都是有秩序的。新的条目会被加到队列的末尾，旧的条目会从队列的头部被移出。

写一个函数nextInLine，用一个数组(arr)和一个数字(item)作为参数。

把数字添加到数组的结尾，然后移出数组的第一个元素。

最后nextInLine函数应该返回被删除的元素。
## 55.理解布尔值
另一种数据类型是布尔（Boolean）。布尔值要么是true要么是false。它非常像电路开关，true是“开”，false是“关”。这两种状态是互斥的。

注意
布尔值是不带引号的，"true"和"false"是字符串而不是布尔值，在 JavaScript 中也没有特殊含义。

## 56.用 if 语句来表达条件逻辑
If语句用于在代码中做条件判断。关键字if告诉 JavaScript 在小括号中的条件为真的情况下去执行定义在大括号里面的代码。这种条件被称为Boolean条件，因为他们只可能是true（真）或false（假）。

当条件的计算结果为true，程序执行大括号内的语句。当布尔条件的计算结果为false，大括号内的代码将不会执行。

伪代码
```javascript
if(条件为真){
    语句被执行
}
```
示例
```javascript
function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
        return "It was false";
}
test(true); // 返回 "It was true"
test(false); // 返回 "It was false"
```
当test被调用，并且传递进来的参数值为true，if语句会计算myCondition的结果，看它是真还是假。如果条件为true，函数会返回"It was true"。当test被调用，并且传递进来的参数值为false，myCondition不 为true，并且不执行大括号后面的语句，函数返回"It was false"。
## 57.相等运算符
在 JavaScript 中，有很多相互比较的操作。所有这些操作符都返回一个true或false值。

最基本的运算符是相等运算符：==。相等运算符比较两个值，如果它们是同等，返回true，如果它们不等，返回false。值得注意的是相等运算符不同于赋值运算符（=），赋值运算符是把等号右边的值赋给左边的变量。
```javascript
function equalityTest(myVal) {
if (myVal == 10) {
return "Equal";
}
return "Not Equal";
}
```
如果myVal等于10，相等运算符会返回true，因此大括号里面的代码会被执行，函数将返回"Equal"。否则，函数返回"Not Equal"。

在 JavaScript 中，为了让两个不同的数据类型（例如数字和字符串）的值可以作比较，它必须把一种类型转换为另一种类型。然而一旦这样做，它可以像下面这样来比较：
```javascript
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true
```
## 58.严格相等运算符
严格相等运算符（===）是相对相等操作符（==）的另一种比较操作符。与相等操作符不同的是，它会同时比较元素的值和数据类型。

示例

3 === 3 // true
3 === '3' // false
3是一个数字类型的，而'3'是一个字符串类型的，所以 3 不全等于 '3'。
## 59.比较不同值
在上两个挑战中，我们学习了相等运算符 (==) 和严格相等运算符 (===)。现在让我们快速回顾并实践一下。

如果要比较的值不是同一类型，相等运算符会先执行数据类型转换，然后比较值。而严格相等运算符只比较值，不会进行数据类型转换。

由此可见，相等运算符和严格相等运算符的区别是：前者会执行隐式类型转换，后者不会。

示例
```javascript
3 == '3' // 返回 true，因为 JavaScript 会执行类型转换把字符串 '3' 转化成数字
3 === '3' // 返回 false，因为类型不同，而这里不会进行类型转换
```
提示
在JavaScript中，你可以使用typeof运算符确定变量的类型或值，如下所示：
```javascript
typeof 3 // 返回 'number'
typeof '3' // 返回 'string'
```
## 60.不等运算符
不相等运算符（!=）与相等运算符是相反的。这意味着不相等运算符中，如果“不为真”并且返回false的地方，在相等运算符中会返回true，反之亦然。与相等运算符类似，不相等运算符在比较的时候也会转换值的数据类型。

例如
```javascript
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false
```
## 61.严格不等运算符
严格不相等运算符（!==）与全等运算符是相反的。这意味着严格不相等并返回false的地方，用严格相等运算符会返回true，反之亦然。严格相等运算符不会转换值的数据类型。

示例
```javascript
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true
```
## 62.大于运算符
使用大于运算符（>）来比较两个数字。如果大于运算符左边的数字大于右边的数字，将会返回true。否则，它返回false。

与相等运算符一样，大于运算符在比较的时候，会转换值的数据类型。

例如
```javascript
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false
```
## 63.大于或等于运算符

使用大于等于运算符（>=）来比较两个数字的大小。如果大于等于运算符左边的数字比右边的数字大或者相等，它会返回true。否则，它会返回false。

与相等运算符相似，大于等于运算符在比较的时候会转换值的数据类型。

例如
```javascript
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false
```
## 64.小于运算符
使用小于运算符（<）比较两个数字的大小。如果小于运算符左边的数字比右边的数字小，它会返回true。否则会返回false。与相等运算符类似，小于 运算符在做比较的时候会转换值的数据类型。

例如
```javascript
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false
```
## 65.小于或等于运算符
使用小于等于运算符（<=）比较两个数字的大小。如果在小于等于运算符，左边的数字小于或者等于右边的数字，它会返回true。如果在小于等于运算符，左边的数字大于或者等于右边的数字，它会返回false。与相等运算符类似，小于等于运算符会转换数据类型。

例如

4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false
## 66.逻辑与运算符
有时你需要在一次判断中做多个操作。当且仅当运算符的左边和右边都是true，逻辑与 运算符（&&）才会返回true。

同样的效果可以通过 if 语句的嵌套来实现：
```javascript
if (num > 5) {
    if (num < 10) {
    return "Yes";
    }
}
return "No";
```
只有当num的值在 6 和 9 之间（包括 6 和 9）才会返回 "Yes"。相同的逻辑可被写为：

if (num > 5 && num < 10) {
return "Yes";
}
return "No";
## 67.逻辑或运算符
只要逻辑或运算符||两边任何一个为true，那么它就返回true；否则返回false。

逻辑或运算符由两个管道符号（|）组成。这个按键位于退格键和回车键之间。

下面这样的语句你应该很熟悉：
```javascript
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```
只有当num大于等于 5 或小于等于 10 时，函数返回"Yes"。相同的逻辑可以简写成：
```javascript
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```
## 68.介绍 else 语句
当if语句的条件为真，大括号里的代码执行，那如果条件为假呢？正常情况下什么也不会发生。使用else语句，可以执行当条件为假时相应的代码。
```javascript
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```
## 69.介绍 else if 语句

如果你有多个条件语句，你可以通过else if语句把if语句链起来。
```javascript
if (num > 15) {
return "Bigger than 15";
} else if (num < 5) {
return "Smaller than 5";
} else {
return "Between 5 and 15";
}
```
## 70.if else 语句中的逻辑顺序
if、else if语句中代码的执行顺序是很重要的。

在条件判断语句中，代码的执行顺序是从上到下，所以你需要考虑清楚先执行哪一句，后执行哪一句。

这有两个例子。

第一个例子：
```javascript
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```
第二个例子更改了代码的执行顺序：
```javascript
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```
这两个函数看起来几乎一模一样，我们传一个值进去看看它们有什么区别。

foo(0) // "Less than one"
bar(0) // "Less than two"
## 71.多个 if else 语句

if/else语句串联在一起可以实现复杂的逻辑，这是多个if/else if语句串联在一起的伪代码：
```javascript
if (条件 1) {
  语句 1
} else if (条件 2) {
  语句 2
} else if (条件 3) {
  语句 3
. . .
} else {
  语句 N
}
```
把if/else if语句串联起来实现下面的逻辑：

num < 5- return "Tiny"
num < 10- return "Small"
num < 15- return "Medium"
num < 20- return "Large"
num >= 20- return "Huge"

## 72.高尔夫代码

在高尔夫golf游戏中，每个洞都有自己的标准杆数par，代表着距离。根据你把球打进洞所挥杆的次数strokes，可以计算出你的高尔夫水平。

函数将会传送 2 个参数，分别是标准杆数par和挥杆次数strokes，根据下面的表格返回正确的水平段位。
```
Strokes	    Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
```
par和strokes必须是数字而且是正数。

## 73.使用 Switch 语句从许多选项中进行选择
如果你有非常多的选项需要选择，可以使用 switch 语句。根据不同的参数值会匹配上不同的 case 分支，语句会从第一个匹配的 case 分支开始执行，直到碰到 break 就结束。

这是一个伪代码案例：
```
switch(num) {
  case value1:
    statement1;
    break;
  case value2:
  statement2;
    break;
...
  case valueN:
    statementN;
    break;
}
```
测试case值使用严格相等运算符进行比较，break 关键字告诉 JavaScript 停止执行语句。如果没有 break 关键字，下一个语句会继续执行。
## 74.在 Switch 语句中添加默认选项
在switch语句中你可能无法用 case 来指定所有情况，这时你可以添加 default 语句。当再也找不到 case 匹配的时候 default 语句会执行，非常类似于 if/else 组合中的 else 语句。

default语句应该是最后一个 case。
```
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
```
写一个根据下面的条件来设置answer的switch语句：
"a"- "apple"
"b"- "bird"
"c"- "cat"
default- "stuff"

## 75.在 Switch 语句添加多个相同选项
如果你忘了给switch的每一条case添加break，那么直到遇见break为止，后续的case会一直执行。如果你想为多个不同的输入设置相同的结果，可以这样写：
```javascript
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
这样，1、2、3 都会有相同的结果。
## 76.用一个 Switch 语句来替代多个 if else 语句
如果你有多个选项需要选择，switch语句写起来会比多个串联的if/if else语句容易些，譬如:
```javascript
if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
```
可以被下面替代：
```javascript
switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}
```
## 77.从函数返回布尔值
你应该还记得相等运算符这道挑战题。在那里我们提到，所有比较操作符都会返回 boolean：要么是true要么是false。

有时人们通过 if/else 语句来做比较然后返回true或false。
```javascript
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
有一个更好的方法，因为===总是返回true或false，所以我们可以直接返回比较的结果：
```javascript
function isEqual(a,b) {
  return a === b;
}
```
## 78.函数执行到 return 语句就结束
当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。

示例
```javascript
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```
上面的代码输出"Hello"到控制台、返回 "World"，但没有输出"byebye"，因为函数遇到 return 语句就退出了。
## 79.21点游戏
在赌场 21 点游戏中，玩家可以通过计算牌桌上已经发放的卡牌的高低值来让自己在游戏中保持优势，这就叫 21 点算法。

根据下面的表格，每张卡牌都分配了一个值。如果卡牌的值大于 0，那么玩家应该追加赌注。反之，追加少许赌注甚至不追加赌注。
```
Count Change	Cards
+1	            2, 3, 4, 5, 6
0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'
```
你需要写一个函数实现 21 点算法，它根据参数card的值来递增或递减变量count，函数返回一个由当前count和Bet(count>0)或Hold(count<=0) 拼接的字符串。注意count和"Bet"或Hold应该用空格分开。

例如：
-3 Hold
5 Bet

提示
既然 card 的值为 7、8、9 时，count 值不变，那我们就可以忽略这种情况。
## 80.新建 JavaScript 对象
## 81.通过点符号访问对象属性
## 82.通过方括号访问对象属性
## 83.通过变量访问对象属性
## 84.更新对象属性
## 85.给对象添加新属性
## 86.删除对象的属性
## 87.使用对象进行查找
## 88.测试对象的属性
## 89.操作复杂对象
## 90.访问嵌套对象
## 91.访问嵌套数组
## 92.记录集合
## 93.while 循环
## 94.for 循环
## 95.使用 For 循环遍历数组的奇数
## 96.使用 For 循环反向遍历数组
## 97.使用 For 循环遍历数组
## 98.循环嵌套
## 99. do...while 循环
## 100.资料查找
## 101.使用 JavaScript 生成随机分数
## 102.使用 JavaScript 生成随机整数
## 103.生成某个范围内的随机整数
## 104.使用 parseInt 函数
## 105.使用 parseInt 函数并传入一个基数
## 106.使用三元运算符
## 107.使用多个三元运算符
