在 JavaScript 和其他编程语言中，我们都可以以多种方式存储和访问数据。本节将教你如何使用数组（array），以及如何访问和复制数组中的信息。本节还将教你如何用点符号和方括号符号来操作和访问 JavaScript 对象（object）中的信息。在你完成本节之后，你应该掌握数组和对象的基本属性以及它们之间的区别，并且掌握如何选择它们来实现给定的目标。

## 1.使用数组存储数据集合

以下是数组（Array）数据结构的最简单的实现例子。这是一个一维数组（one-dimensional array），它只有一层，或者说在它里面没有包含其它的数组结构。你可以看到它里面包含了布尔值（booleans）、字符串（strings）、数字（numbers）以及一些其他的 JavaScript 语言中合法的数据类型：
```js
let simpleArray = ['one', 2, 'three’, true, false, undefined, null];
console.log(simpleArray.length);
// 输出 7
```
你可以在上述例子中看到，所有数组都有一个长度（length）属性。你可以简单地使用Array.length方法来访问它。

下面是一个关于数组的更复杂的例子。这是一个多维数组（multi-dimensional Array），或者说是一个包含了其他数组的数组。你可以注意到，在它的内部还包含了 JavaScript 中的对象（objects）结构。我们会在后面的小节中讨论该数据结构，但现在你只需要知道数组能够存储复杂的对象类型数据。
```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: “d”
    }
  ]
];
```
## 2.使用方括号访问数组的内容

所有数据结构的基本特性是，它们不仅能够存储数据，我们还能够按照需求来访问存放在其中的数据。我们已经学习了如何创建一个数组结构，现在让我们开始学习如何访问这个数组结构中的数据。

我们先定义一个包含 3 个元素的数组：
```js
let ourArray = ["a", "b", "c"];
```
在一个数组结构中，其内部的每个元素都有一个与之对应的索引（index）。索引是该元素在数组中的位置，可被用于引用该元素。但需要注意的是，JavaScript 数组的索引是从0开始的（zero-indexed），即一个数组的第一个元素是在数组中的第 0 个位置，而不是第 1 个位置。

要从一个数组中获取一个元素，我们可以在一个数组变量名的后面加一个使用“方括号”括起来的索引。这叫做方括号符号（bracket notation）。

例如我们要从ourArray数组变量中获取数据元素"a"并将其赋值给一个变量，我们可以编写如下所示的代码：
```js
let ourVariable = ourArray[0];
// ourVariable 的值为 "a"
```
除了使用 “索引” 来获取某个元素值以外，你还可以通过类似的方法来设置一个索引位置所对应的元素值：
```js
ourArray[1] = "not b anymore";
// ourArray 现在的值为 ["a", "not b anymore", "c"];
```
我们现在已经利用方括号将索引为 1 的元素从"b"设置为了"not b anymore"。

## 3.使用 push() 和 unshift() 添加项目到数组中
一个数组的长度与其包含的数据类型一样，是不固定的。数组可以包含任意数量的元素，你可以不限次数地往数组中添加元素或者从中移除元素，或者说数组是可变的（mutable）。在本挑战中，我们要学习两个以编程方式修改数组的方法：Array.push()和Array.unshift()。

这两个方法都接收一个或多个元素作为参数；对一个数组调用这两个方法都可以将输入的元素插入到该数组中；push()方法将元素插入到一个数组的末尾，而unshift()方法将元素插入到一个数组的开头。请看以下例子：
```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// 数组现在为 ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
```
注意，我们还可以输入变量，这允许我们很灵活地动态改变我们数组中的数据。
## 4.使用 pop() 和 shift() 从数组中删除项目

push()和unshift()都分别有一个作用基本与之相反的函数：pop()和shift()。你现在或许已经猜到，与插入元素相反，pop()从数组的末尾移除一个元素，而shift()从数组的开头移除一个元素。pop()和shift()与对应的push()和unshift()的关键区别在于，前者不能接受输入参数，而且每次只能修改数组中的一个元素。

让我们来看以下的例子：
```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// 数组现在等于 ['whats up?', 'hello']

greetings.shift();
// 数组现在等于 ['hello']
```
对于上述两个方法中的任意一个，我们都可以返回被其移除的元素：
```js
let popped = greetings.pop();
// 返回 'hello'
// greetings 现在等于 []
```
## 5.使用 splice() 删除项目
在上面的挑战中，我们已经学到了如何利用shift()和pop()从数组的开头或者末尾移除元素，但如果我们想移除数组中间的一个元素呢？或者想一次移除多个元素呢？这时候我们就需要splice()了。splice()让我们可以从数组中的任意位置移除任意数量的连续的元素。

splice()最多可以接受 3 个参数，但现在我们先关注前两个。splice()接收的前两个参数基于调用splice()数组中元素的索引。记住，数组的索引是从 0 开始的（zero-indexed），所以我们要用0来指示数组中的第一个元素。splice()的第一个参数代表从数组中的哪个索引开始移除元素，而第二个参数指示要从数组中删除多少个元素。例如：
```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// 从第 3 个元素开始，删除 2 个元素
// 现在该数组等于 ['today', 'was', 'great']
```
splice()不仅从被调用的数组中移除元素，还会返回一个包含被移除元素的数组：
```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
// newArray 等于 ['really', 'happy']
```
## 6.使用 splice() 增加项目

你还记得在上个挑战中我们提到`splice()`方法可以接受最多 3 个参数吗？我们现在可以进一步了解splice()—。除了移除元素，我们还可以利用它的第三个参数来向数组中添加元素。第三个参数可以是一个或多个元素，这些元素会被添加到数组中。这使我们能够便捷地将数组中的一个或一系列元素换成其他的元素。例如你在一个数组中存储了一系列 DOM 元素的配色，并希望基于某些行为动态地改变一个颜色：
```js
function colorChange(arr, index, newColor) {
  arr.splice(index, 1, newColor);
  return arr;
}

let colorScheme = ['#878787', '#a08794', '#bb7e8c', '#c9b6be', '#d1becf'];

colorScheme = colorChange(colorScheme, 2, '#332327');
// 我们移除了 '#bb7e8c' 并在其位置上添加了 '#332327'
// colorScheme 现在等于 ['#878787', '#a08794', '#332327', '#c9b6be', '#d1becf']
```
这个函数接受一个十六进制值（hex value）的数组、要被移除的元素的索引以及要替换旧元素的新颜色作为输入参数。它的返回值是一个含有被修改的新的配色的数组。虽然这个例子可能过于简单，但我们还是能从中感受到充分利用splice()方法的价值。


## 7.使用 slice() 拷贝数组项目

接下来我们要介绍slice()方法。slice()并不修改数组，而是复制或者说提取（extract）给定数量的元素到一个新数组里，而调用方法的数组则保持不变。slice()只接受 2 个输入参数—第一个是开始提取元素的位置（索引），第二个是结束提取元素的位置（索引）。slice 方法会提取直到该索引的元素，但被提取的元素不包括该索引对应的元素。请看以下例子：
```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather 等于 ['snow', 'sleet'];
// weatherConditions 仍然等于 ['rain', 'snow', 'sleet', 'hail', 'clear']
```
现在我们从一个已有的数组中提取了一些元素，并用这些元素创建了一个新数组。
## 8.使用扩展运算符复制数组
`slice()`已经能让我们从一个数组中选择一些元素来复制到新数组中了，而 ES6 中又新引入了一个简洁且可读性强的语法展开运算符（spread operator），它能让我们方便地复制数组中的所有元素。展开语法是这样的：...

在实践中，我们可以这样用展开运算符来复制一个数组：
```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray 等于 [true, true, undefined, false, null]
// thisArray 保持不变，并等于 thatArray
```
我们已经定义了一个copyMachine函数，它接受arr（一个数组）和num（一个数字）作为输入参数。该函数应该返回一个由num个arr组成的新数组。我们已经为你写好了大部分的代码，但它还不能正确地工作。请修改这个函数，使用展开语法，使该函数正确工作（提示：我们已经学到过的一个方法很适合用在这里！）
## 9.组合使用数组和扩展运算符
展开运算符的另一个大用处是合并数组，或者将某个数组的所有元素插入到另一个数组的任意位置。用传统的语法我们也可以连接两个数组，但只能两个数组首尾相接。而展开语法能使下面的操作变得极其简单：
```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray 现在等于 ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```
使用展开语法，我们这样就实现了一个用传统方法要写得很复杂冗长的操作。
## 10.使用 indexOf() 检查元素是否存在
由于数组可以在任意时间被修改或者说被改变（mutated），我们不能保证某个数据在一个给定数组中的位置，甚至不能保证该元素还存在于该数组中。幸运的是，JavaScript 给我们提供了另一个内置方法indexOf()。这个方法让我们可以便捷地检查某个元素是否存在于一个数组中。indexOf()方法接受一个元素作为输入参数，并返回该元素在数组中的位置（索引）；若该元素不存在于数组中则返回-1。

例如：
```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates') // 返回 -1
fruits.indexOf('oranges') // 返回 2
fruits.indexOf('pears') // 返回 1，即第一个出现的 'pears' 元素在数组中的索引为 1
```
## 11.使用 For 循环迭代数组的所有项
在进行与数组有关的编程时，我们有时需要遍历数组的所有元素来找出我们需要的元素，或者对数组执行特定的操作。JavaScript 提供了几个内置的方法，它们以不同的方式遍历数组来获得不同的结果（如`every()、forEach()、map()`等等）。而简单的for循环不仅能实现这些功能，而且相比之下也更灵活。

请看以下例子：
```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// 返回 [12, 14, 80]
```
这个函数使用一个for循环来遍历一个数组，逐一对其中的元素进行测试。我们用这个方法简单地以编程的方式找出了数组中大于10的元素，并返回了一个包含这些元素的数组。


## 12.创建复杂的多维数组
很好！你已经学到很多关于数组的知识了！但这些只是一个开始，你将在接下来的小节中学习到与数组相关的更多知识。但在你继续去学习对象（Objects）之前，让我们再花一点时间看一看，数组怎样能够变得比之前的挑战中更复杂一点。

数组的一个强大的特性是，它可以包含其他数组，甚至完全由其他数组组成。我们已经在上一个挑战中看到了包含数组的数组，但它还算是比较简单的。数组中的数组还可以包含其他数组，数组中是可以嵌套任意层的数组的。从而数组可以被用来实现非常复杂的叫做多维（multi-dimensional）或嵌套（nested）数组。请看如下例子：
```js
let nestedArray = [ // 顶层，或第 1 层——最外层的数组
  ['deep'], // 数组中的数组，第 2 层
  [
    ['deeper'], ['deeper'] // 第 3 层嵌套的两个数组
  ],
  [
    [
      ['deepest'], ['deepest'] // 第 4 层嵌套的两个数组
    ],
    [
      [
        ['deepest-est?'] // 第 5 层嵌套的一个数组
      ]
    ]
  ]
];
```
虽然这个例子看起来错综复杂，但这样复杂的数组并不算罕见，尤其是在处理大量数据的时候。

但我们仍能简单地用方括号符号来访问到嵌套得最深的数组：
```js
console.log(nestedArray[2][1][0][0][0]);
// 输出：deepest-est?
```
既然我们知道数据在哪里，我们就能修改它：
```js
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// 现在输出：deeper still
```
## 13.将键值对添加到对象中
对象（object）本质上是键值对（key-value pair）的集合，或者说，一系列被映射到唯一标识符（叫做属性（property）或者键（key））的数据。让我们来看一个很简单的例子：
```js
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
};
```
上面的代码定义了一个叫做FCC_User的对象，它有 4 个属性，每个属性映射一个特定的值。如果我们想知道FCC_User有多少followers，我们可以这样访问其followers属性：
```js
let userData = FCC_User.followers;
// userData 等于 572
```
这叫做点符号（dot notation）。我们还可以用方括号符号来访问对象中的属性：
```js
let userData = FCC_User['followers']
// userData 等于 572
```
注意，在用方括号符号时，我们在括号里写的是字符串followers（用引号括起）。方括号符号让我们能用一个变量作为属性名来访问对象的属性（请记住）。若我们在方括号中不写引号而直接写followers，JavaScript 引擎会将其看作一个变量，并抛出一个ReferenceError: followers is not defined的错误。
## 14.修改嵌套在对象中的对象

现在我们来看一个稍微复杂一点的对象。对象中也可以嵌套任意层的对象。对象的属性值可以是 JavaScript 支持的任意类型，包括数组和其他对象。请看以下例子：
```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13
    }
  }
};
```
nestedObject有 3 个唯一的键：值为一个数字的id、值为一个字符串的date和值为一个嵌套了其他对象的对象的data。虽然对象中的数据可能很复杂，我们仍能使用上一个挑战中讲的符号来访问我们需要的信息。

## 15.使用方括号访问属性名称

在关于对象的第一个挑战中，我们提到可以在方括号符号中用一个变量作为属性名来访问属性值。假设一个超市的收银台的程序中使用了一个foods对象，并且有一些程序逻辑会设置selectedFood，我们需要查询foods对象来检查某种食物是否存在，我们可以这样写检查逻辑：
```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```
上述代码会先计算selectedFood变量的值，并返回foods对象中以该值命名的属性对应的值，若没有以该值命名的属性则会返回undefined。有时候对象的属性名在运行之前是不确定的，或者我们需要动态地访问对象的属性，这时方括号符号就会很有用。

## 16.使用 delete 关键字删除对象属性

现在你已经知道什么是对象以及对象的基本特性和用途。总之，对象是以键值对的形式，灵活、直观地存储结构化数据的一种方式，并且查找对象属性的速度是很快的。在本章剩下的挑战中，我们会讲对象的几种常用操作，这样你能更好地在你的程序中使用这种有用的数据结构。

在之前的挑战中，我们已经试过新增和修改对象中的键值对。现在我们来看如何从一个对象中移除一个键值对。

我们再来看上一个挑战中的foods对象。如果我们想移除apples属性，我们可以使用delete关键字：
```js
delete foods.apples;
```
## 17.检查对象是否具有某个属性

现在我们可以新增、修改和移除对象中的属性。但如果我们想知道一个对象中是否含有某个属性呢？JavaScript 为我们提供了两种不同的方式来实现这个功能，一个是`hasOwnProperty()`方法，另一个是`in`关键字。如果我们有一个users对象，它有一个Alan属性，我们可以用以下两种方式之一来检查该属性在对象中是否存在：
```js
users.hasOwnProperty('Alan');
'Alan' in users;
// 都返回 true
```
## 18.使用 for...in 语句迭代对象

有时候你需要遍历一个对象中的所有键。这需要 JavaScript 中的一个特殊语法：for...in 语句。以遍历 users对象的键为例：
```js
for (let user in users) {
  console.log(user);
};

// 输出：
Alan
Jeff
Sarah
Ryan
```
在这个语句中，我们定义了一个user变量，你可以看到，这个变量在 for...in 语句对对象的每一个键的遍历中都会被重置。

注意：
跟数组不同，对象中的键是无序的，因此一个对象中某个键的位置，或者说它出现的相对顺序，在引用或访问该键时是不确定的。



## 19.使用 Object.keys() 生成对象所有键组成的数组

我们还可以输入一个对象作为参数来调用Object.keys()方法，使其生成一个包含对象中所有键的数组。这会返回一个由对象中所有键的名称（字符串）组成的数组。再次说明，这个数组中的项的顺序是不确定的。



## 20.修改存储在对象中的数组

现在你已经接触到 JavaScript 对象的所有运算。你可以增加、修改和移除键值对，检查某个键是否存在，并且遍历一个对象中的所有键。在你继续学习 JavaScript 的过程中，你会看到对象的更多用法。另外，后续的《高级数据结构》课程还会介绍 ES6 的 Map 和 Set 对象。这两种对象都跟一般的对象相似，但它们提供了一些额外的特性。现在你已经学到了数组和对象的基础知识，你已经可以继续用 JavaScript 来解决更加复杂的问题了！
