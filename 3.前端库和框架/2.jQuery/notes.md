## 1.了解 Script 和 Document 是如何工作的

现在我们已经准备好学习有史以来最受欢迎的 JavaScript 框架——jQuery 了。

在使用 jQuery 之前，我们需要在 HTML 页面中添加一些东西。

首先，在页面顶部添加script标签，记得在后面为script标签添加结束标签。

浏览器在script标签中运行所有的 JavaScript 脚本包括 jQuery。

在script标签中添加代码$(document).ready(function() {。然后在后面（仍在该script标签内）用});闭合它。

稍后我们将详细介绍functions，现在需要知道的是，只要浏览器加载页面，function中放入的代码就会运行。

有一点很重要，如果没有document ready function，你的代码将在 HTML 页面呈现之前运行，这将导致错误。

## 2.使用 jQuery 配合元素选择器选择元素

接下来我们学习document ready function。

首先，我们完成第一个 jQuery 语句。所有的 jQuery 函数以$开头，这个符号通常被称为美元符号（dollar sign operator）或bling。

jQuery 通常选取并操作带有选择器（selector）的 HTML 标签。

例如，如果要所有button有弹性的动画效果，只需在document ready function中添加如下代码即可：

$("button").addClass("animated bounce");

请注意，为了能在编辑器里直接使用，我们已经为你在后台引入了 jQuery 库和 Animate.css 库。因此，你只需要通过 jQuery 给button元素添加bounce类就可以了。

## 3.使用 jQuery 配合 class 选择器选择元素

我们如何使所有的button标签有弹性的动画效果？我们用$("button")选取所有的button标签，并用.addClass("animated bounce");给其添加一些 CSS 属性。

jQuery 的.addClass()方法用来给标签添加类。

首先，我们使用$(".well")选取类为well的div标签。

值得注意的是，和 CSS 声明一样，在类名前需要添加.。

然后，用 jQuery 的.addClass()方法添加animated和shake类。

例如，在document ready function中添加下面的代码，能使所有类为text-primary的标签抖动：

$(".text-primary").addClass("animated shake");

## 4.使用 jQuery 配合 id 选择器选择元素

你也能通过 id 属性选取标签。

首先，用$("#target3")选择器选取 id 为target3的button标签。

注意，和 CSS 属性一样，在 id 名前需要添加#。

然后，用 jQuery 的.addClass()方法添加animated和fadeOut类。

下面的代码的效果是使 id 为target6的button标签淡出：

$("#target6").addClass("animated fadeOut").

## 5.删除 jQuery 函数

这些动画开始看起来很酷，但是有时可能会让用户分心。

请删除document ready function内的三个 jQuery 函数，但保留document ready function本身。

## 6.用多个 jQuery 选择器瞄准同一个元素

现在你知道三种选取标签的方法：用标签选择器，如$("button")；用类选择器，$(".btn")以及用 id 选择器，$("#target1")。

虽然可以在单个.addClass()内添加多个类，但是我们可以用三种不同的方式给一种标签添加类。

以三种不同的方式用.addClass()方法每次只给一种标签添加一个类：

给所有的button标签添加animated类。

给所有类为.btn的button标签添加shake类。

给所有 id 为#target1的button标签添加btn-primary类。

注意：
虽然三个选择器最终给 id 为#target1的button标签添加shake、animated和btn-primary等三个类，但是你需要用且仅用三种不同的选择器给三种标签各添加一个类（译者注：所谓的“一种标签”是指他们有某种共同的特点，如包含同一个 class）。

## 7.使用 jQuery 从元素中移除 class

和用 jQuery 的addClass()方法给标签添加类一样，也可以利用 jQuery 的removeClass()方法移除他们。

下面的代码效果是为特定的按钮执行上面的操作：

$("#target2").removeClass("btn-default");

请把所有button标签的btn-default类移除。

## 8.使用 jQuery 更改元素的 CSS

我们也能用 jQuery 直接改变 HTML 标签的 CSS。

jQuery 有一个.css()方法，其能改变标签的 CSS。

下面的代码效果是把颜色变蓝：

$("#target1").css("color", "blue");

这与通常的 CSS 声明略有不同，因为这个 CSS 属性和它的值在英文引号里，并且它们用逗号而不是冒号间隔开。

删除你的jQuery选择器，并留下空的document ready function。

请选择target1并将其颜色变为红色（red）。

## 9.使用 jQuery 禁用元素

你还能用 jQuery 改变 HTML 标签的非 CSS 属性,例如:能禁用按钮。

当你禁用按钮时，它将变成灰色并无法点击。

jQuery 有一个.prop()方法，你可以用其调整标签的属性。

下面的代码效果是禁用所有的按钮：

$("button").prop("disabled", true);

请仅禁用target1按钮。

## 10.使用 jQuery 更改元素内部的文本

你能用 jQuery 改变起始标签和结束标签之间的文本，甚至改变 HTML 标签。

jQuery 有一个.html()函数，你能用其在标签里添加 HTML 标签和文本，函数提供的内容将完全替换之前标签的内容。

下面的代码效果是重写并强调标题文本：

$("h3").html("<em>jQuery Playground</em>");

类似的，jQuery 有一个.text()函数，其改变文本而不增加标签。换而言之，该函数会忽略所有传递过来的 HTML 标签，并将其视为用来替换原文本的文本。

请强调 id 为target4的按钮的文本。

请查看此链接来了解更多<i>和<em>的区别和用法。

注意，<i>标签虽然传统上用来强调文本，但此后常用作图标的标签；<em>标签作为强调标签现在已被广泛接受。两者都可以应对本次挑战。

## 11.使用 jQuery 删除元素

现在学习用 jQuery 从页面移除 HTML 标签。

jQuery 有一个.remove()方法，能完全移除 HTML 标签。

请用.remove()方法从页面移除target4标签。

## 12.使用 jQuery 的 appendTo 方法可以移动元素

现在我们学习把标签从一个div移动到另一个div。

jQuery 有一个appendTo()方法，可以选取 HTML 标签并将其添加到另一个标签里面。

例如，如果要把target4从右框移到左框，可以设置如下：

$("#target4").appendTo("#left-well");

请把target2标签从left-well移动到right-well。


## 13.使用 jQuery 克隆元素


除了移动标签，也可以把元素从一个地方复制到另一地方。

jQuery 有一个clone()方法，可以复制标签。

例如，如果想把target2从left-well复制到right-well，可以设置如下：

$("#target2").clone().appendTo("#right-well");

你是否注意到这两个 jQuery 方法连在一起了吗？这被称为链式调用（function chaining），是一种用 jQuery 实现效果的简便方法。

克隆target5标签并附加到left-well。

## 14.使用 jQuery 选择元素的父元素

每个 HTML 标签都默认`继承（inherits）`其`父标签（parent element）`的 CSS 属性。

例如，h3标签jQuery Playground的父标签是<div class="container-fluid">，<div class="container-fluid">的父标签是body。

jQuery 有一个parent()方法，可以访问被选取标签的父标签。

下面的代码展示了使用parent()方法把left-well标签的父标签背景色设置成蓝色（blue）的方式：

$("#left-well").parent().css("background-color", "blue")

请把#target1标签的父标签背景色设置成红色（red）。

## 15.使用 jQuery 选择元素的子元素

把 HTML 标签放到另一个级别的标签里，这些 HTML 标签被称为该标签的子标签（children element）。例如，本次挑战中文本为 "#target1"、"#target2" 和 "#target3" 的按钮都是<div class="well" id="left-well">标签的子标签。

jQuery 有一个children()方法，可以访问被选取标签的子标签。

下面的代码展示了用children()方法把left-well标签的子标签的颜色设置成蓝色（blue）：

$("#left-well").children().css("color", "blue")

## 16.使用 jQuery 选择元素的特定子元素

你已经看到了为什么 id 属性对于 jQuery 选择器选取标签非常方便，但这并不适用于所有情景。

幸运的是，jQuery 有一些其他的方法可以选取正确的标签。

jQuery 可以用CSS 选择器（CSS Selectors）选取标签。target:nth-child(n)CSS 选择器可以选取所有的第 n 个标签并设置目标属性和目标样式。

下面的代码展示了给每个区域（well）的第 3 个标签设置bounce类：

$(".target:nth-child(3)").addClass("animated bounce");

请给每个区域（well）的第 2 个标签设置bounce类，必须用target类选取标签。

## 17.使用 jQuery 选择偶数元素

你也可以用基于位置的:odd和:even选择器选取标签。

注意，jQuery 是零索引（zero-indexed）的，这意味着第 1 个标签的位置编号是0。这有点混乱和反常——:odd表示选择第 2 个标签（位置编号 1），第 4 个标签（位置编号 3）……等等，以此类推。

下面的代码展示了选取所有的奇标签并设置类：

$(".target:odd").addClass("animated shake");

请尝试选取所有target标签的偶标签并给他们设置animated和shake类。要考虑到偶（even）指的是标签位置编号基于0的系统。

## 18.使用 jQuery 修改整个页面

jQuery 的学习到这里就告一段落了，现在我们来试一试让元素消失的特效。

jQuery 也能选取body标签。

后面的代码效果是使整个body标签淡出：$("body").addClass("animated fadeOut");

接下来我们做一些更有戏剧性的事：给body标签添加animated和hinge类。
