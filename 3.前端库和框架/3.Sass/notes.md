
Sass 完全兼容 CSS，因为它是一个预处理器。它用 Sass 语法写代码，然后转换成标准的 CSS。它允许你使用变量、嵌套规则、导入等众多功能。有助于保持大型样式表结构良好，让 CSS 语言更强大，优雅。

Sass 有两种语法。第一种被称为 SCSS（Sassy CSS），也是我们接下来的挑战采用的语法，它是 CSS 语法的扩充版本。也就是说，CSS 样式表也是合法的 SCSS 文件。这种语法的样式表文件以 .scss 为扩展名。

第二种比较古老的语法，就是所说的缩排语法（或者直接就称为“Sass”），它不使用花括号，而是通过缩排的方式来表达选择符的嵌套层级，它也不使用分号，而是用换行符来分隔属性。此种语法的样式表文件需要以 .sass 作为扩展名。

这一章节介绍 Sass 的基本特性。

## 1.用 Sass 变量存储数据

Sass 不同于 CSS 的一个特点是它允许使用变量。我们可以在 Sass 中声明变量，并为它赋值，就像我们在 JavaScript 中一样。

在 JavaScript 中，变量是使用let和const关键字定义的。在 Sass 中，变量以$开头的，后跟变量名。

这里有几个例子：

$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
当需要把多个元素设置成相同颜色时，变量就会很有用。一旦我们需要更改颜色，只需要改变这个变量的值就好。


创建一个变量$text-color并将其设置为红色。然后更改.blog-post和h2的color属性的值为$text-color变量。

## 2.用 Sass 嵌套 CSS

Sass 允许 CSS 规则的嵌套，这在写样式表的时候会很有用。

在 CSS 里，每个元素的样式都需要写在独立的代码块中，如下所示：

nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
对于一个大型项目，CSS 规则会很复杂。这时，引入嵌套功能（即在对应的父元素中写子元素的样式）可以有效地简化代码：

nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}

根据上面关于嵌套的例子，来简化.blog-post中两个子元素的 CSS 代码。出于测试目的，h1应该出现在p元素之前。

## 3.用 Mixins 创建可重用 CSS

在 Sass 中，mixin是一组 CSS 声明，可以在整个样式表中重复使用。

CSS 的新功能需要一段时间适配后，所有浏览器后才能完全使用。随着浏览器的不断升级，使用这些 CSS 规则时可能需要添加浏览器前缀。比如 "box-shadow":

div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
对于所有具有box-shadow属性的元素重写此规则，或者更改每个值以测试不同的效果，需要花费大量的精力。

Mixins就像 CSS 的函数。以下是一个例子：

@mixin box-shadow($x, $y, $blur, $c){
  -webkit-box-shadow: $x, $y, $blur, $c;
  -moz-box-shadow: $x, $y, $blur, $c;
  -ms-box-shadow: $x, $y, $blur, $c;
  box-shadow: $x, $y, $blur, $c;
}
定义以@mixin开头，后跟自定义名称。参数（$x，$y，$blur，以及上例中的$c是可选的。

现在，只要在需要的地方使用@include调用上面定义的mixin，就可以自动添加好所有的浏览器前缀：mixin使用@include指令调用：

div {
  @include box-shadow(0px, 0px, 4px, #fff);
}

为border-radius写一个mixin，并给它一个$radius参数。它应该使用示例中的所有浏览器前缀，然后使用border-radius mixin为#awesome元素提供 15px 的边框半径。

## 4.使用 @if 和 @else 为你的样式添加逻辑

Sass：使用 @if 和 @else 为你的样式添加逻辑
Sass 中的@if指令对于测试特定情况非常有用--它的工作方式与 JavaScript中的if语句类似。

@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
类似 JavaScript，你可以在 Sass 中使用@else if和@else添加更多条件：

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}

创建一个名为border-stroke的mixin，它接受一个参数$val。mixin应使用@if，@else if和@else检查以下条件：

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
none - no border

## 5.使用 @for 创建一个 Sass 循环

Sass：使用 @for 创建一个 Sass 循环
你可以在 Sass 中使用@for循环，它的表现类似与 JavaScript 中的for循环。

@for以两种方式使用："start through end" 或 "start to end"。主要区别在于“开始结束” 排除 结束号码，而“开始结束” 包括 结束号码。

这是一个开始 到 结束示例：

@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
#{$i}部分是将变量（i）与文本组合成字符串的语法。当 Sass 文件转换为 CSS 时，它看起来像这样：

.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

......

.col-12 {
  width: 100%;
}
这是创建网格布局的有效方法。现在，你有 12 个可用作 CSS classes 的列宽选项。


编写@for指令，使$j的值为从 1（包含）到 6（不包含）。

它应该创建 5 个名为.text-1的 classes 到.text-5，其中每个 class 的font-size设置为 2px+10px 乘以索引。

## 6.使用 @each 遍历列表中的项目

最后一个挑战显示了@for指令如何使用起始值和结束值循环一定次数。Sass 还提供@each指令，该指令循环遍历列表或映射中的每个项目。

在每次迭代时，变量将从列表映射赋值给当前值。

@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
map 的语法略有不同。这是一个例子：

$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
请注意，需要$key变量来引用 map 中的键。否则，编译后的 CSS 将包含color1，color2......

以上两个代码示例都转换为以下 CSS：

.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}

编写一个@each指令，通过一个列表：blue,black,red并将每个变量分配给.color-bgclass, 其中每个项目的“颜色”部分都会发生变化。

每个 class 都应该将background-color设置为相应的颜色。

## 7.使用 @while 当条件满足时样式生效

Sass 中的@while指令与 JavaScript 中的while类似。只要满足条件，它就会一直创建 CSS 代码。

@for挑战提供了一个创建简单网格系统的示例。这也适用于@while。

$x: 1;
@while $x< 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
首先，定义变量$x并将其设置为 1。接下来，使用@while指令，当$x小于 13 时创建网格系统 。

在设置width的 CSS 规则后，$x增加 1 以避免无限循环。


使用@while创建一系列具有不同font-sizes的 class。

从text-1到text-10应该有 10 个不同的 class。然后将font-size设置为 2px+10px 乘以当前索引号。注意不要写成死循环！

## 8.用 Partials 将你的样式分成小块


Sass 中的Partials是包含 CSS 代码段的单独文件。这些是在其他 Sass 文件中导入和使用的。我们可以把类似代码放到模块中，以保持代码结构规整且易于管理。

partials的名称以下划线（_）字符开头，告诉 Sass 它是 CSS 的一小部分，而不是将其转换为 CSS 文件。此外，Sass 文件以.scss文件扩展名结尾。要将partial中的代码放入另一个 Sass 文件中，请使用@import指令。

例如，如果所有mixins都保存在名为 "_mixins.scss " 的partial中，并且在"main.scss "文件中需要它们，这是如何在主文件中使用它们：

// In the main.scss file

@import 'mixins'
请注意，import语句中不需要下划线——Sass 知道它是partial。将partial导入文件后，可以使用所有变量mixins和其他代码。


编写@import语句，将名为_variables.scss的partial导入 main.scss 文件。


## 9.将一组CSS样式扩展到另一个元素

Sass 有一个名为extend的功能，可以很容易地从一个元素中借用 CSS 规则并在另一个元素上重用它们。

例如，下面的 CSS 规则块设置了.panelclass 的样式。它有background-color，height和border。

.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
现在你需要另一个名为.big-panel的面板。它具有与.panel相同的基本属性，但还需要width和font-size。

可以从.panel复制并粘贴初始 CSS 规则，但是当你添加更多类型的面板时，代码会变得重复。

extend指令是一种重用为一个元素编写的规则的简单方法，然后为另一个元素添加更多：

.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
除了新样式之外，.big-panel将具有与.panel相同的属性。


创建一个扩展.info的 class.info-important，并将background-color设置为洋红色。
