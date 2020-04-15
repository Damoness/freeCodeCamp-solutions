## 1.使用 display: flex 定位两个盒子

这节会使用一种不同的挑战方式来学习一下如何更灵活地使用 CSS 布局元素。首先，我们会先用一个挑战解释原理，然后使用“弹性盒子”（flexbox）调整一个推文组件的样式来完成挑战。

只要在一个元素的 CSS 中添加display: flex;，就可以使用其他 flex 属性来构建响应式页面了。

## 2.在推文中添加弹性盒子布局

我们以右边的内嵌推文为基础开始实践。一些元素换一个布局方式或许更好看。上一个挑战演示了display: flex，现在你需要把它添加到推文内嵌的多个组件中，调整它们的位置。

## 3.使用 flex-direction 属性创建一行

添加了display: flex的元素会成为 flex 容器。只要把flex-direction属性添加到父元素，并设置其为 row 或 column 即可轻易横或竖排列它的子元素。设为 row 可以让子元素水平排列，column 可以让子元素垂直排列。

flex-direction的其他可选值还有 row-reverse 和 column-reverse。

注意
flex-direction的默认值为 row。

## 4.在推文中使用 flex-direction 创建多行

内嵌推文样例中的header和footer有自己的子元素，使用flex-direction属性可以把这些子元素排列成一行。这个属性告诉 CSS 需要将这个元素的子元素水平排列。

## 5.使用 flex-direction 属性创建一列

之前两项挑战把flex-direction设为 row。这个属性还能创建一个列，让子元素垂直排列在 flex 容器中。

## 6.在推文中使用 flex-direction 创建多列

上面，内嵌推文的header和footer把flex-direction属性设为 row。相似地，.profile-name里的元素或许竖着排列会好看一点。

## 7.使用 justify-content 属性对齐元素

flex 容器里的 flex 子元素有时不能充满整个容器，所以我们需要告诉 CSS 如何以特定方案排列和调整 flex 子元素。幸运的是，我们有justify-content属性处理这个问题。但在介绍justify-content的可选值之前，我们要先理解一些重要术语。

这张图片的元素横着排列，很好地描述了下面的概念。

回忆一下，把 flex 容器设为一个行，它的子元素会从左到右逐个排列，把 flex 容器设为一个列，它的子元素会从上到下逐个排列。子元素排列的方向被称为 main axis（主轴）。对于行，主轴水平贯穿每一个项目；对于列，主轴垂直贯穿每一个项目。

关于 flex 子元素在主轴排列方式，可以选择以下值：其中一个很常用的是justify-content: center;，可以让 flex 子元素排列在 flex 容器中间。其他可选值还有：

flex-start：从 flex 容器的前端开始排列项目。对行来说是把项目都靠左放，对于列是把项目都靠顶部放。
flex-end：从 flex 容器的后端开始排列项目。对行来说是把项目都靠右放，对于列是把项目都靠底部放。
space-between：项目间保留一定间距地在主轴排列。第一个和最后一个项目会被挤到容器边沿。例如，在行中第一个项目会紧贴着容器左侧，最后一个项目会紧贴着容器右侧，然后其他项目均匀排布。
space-around：与space-between相似，但头尾两个项目不会紧贴容器边缘，空间会均匀分布在所有项目两边

## 8.在推文中使用 justify-content 属性

上一项挑战展示了justify-content属性的作用。如果我们想对齐推文内的子元素，可以把justify-content应用在.profile-name上。

## 9.使用 align-items 属性对齐元素

align-items属性与justify-content类似。回忆一下，justify-content属性使 flex 子元素沿主轴排列。行的主轴是水平线，列的主轴是垂直线。

Flex 容器中，与主轴垂直的叫做 cross axis（交叉轴）。行的交叉轴是垂直的，列的交叉轴是水平的。

CSS 提供了align-items属性，可以用于在交叉轴调整 flex 子元素。对于行，它规定了项目在容器中应该靠上还是靠下，而对于列，就是靠左或靠右。

align-items的可选值包括：

flex-start：从 flex 容器的前端开始排列项目。对行来说是把项目都靠顶部放，对于列是把项目都靠左放。
flex-end：从 flex 容器的后端开始排列项目。对行来说是把项目都靠底部放，对于列是把项目都靠右放。
center：把项目的位置调整到中间。对于行，垂直居中（项目上下方空间相等）。对于列，水平居中（项目左右方空间相等）。
stretch：拉伸项目，填满 flex 容器。例如，排成行的项目从容器顶部拉伸到底部。
baseline：基线对齐地排列。基线是字体相关的概念，可以认为字体坐落在基线上。

## 10.在推文中使用 align-items 属性

上一个挑战介绍了align-items并给出了例子。这个属性可以应用在不少元素上，调整它们的子元素的位置。

## 11.使用 flex-wrap 属性包裹一行或一列

CSS flexbox 有一个把 flex 子元素拆分为多行（或多列）的特性。默认情况下，flex 容器会调整项目大小，把它们都塞到一起。如果是行的话，所有项目都会在一条直线上。

不过，使用flex-wrap属性可以使项目换行。这意味着多出来的项目会被移到新的行或列。换行发生的断点由项目和容器的大小决定。

换行方向的可选值有这些：

nowrap：默认值，不换行。
wrap：行从上到下排，列从左到右排。
wrap-reverse：行从下到上排，列从右到左排。

## 12.使用 flex-shrink 属性收缩项目

目前为止，挑战里的提到的属性都应用于 flex 容器（flex 子元素的父元素）。除此之外，flex 子元素也有很多实用属性。

首先介绍的是flex-shrink属性。使用之后，如果 flex 容器太小，该项目会自动缩小。当容器的宽度小于里面所有项目的宽度，项目就会自动压缩。

flex-shrink属性接受 number 类型的值。数值越大，与其他项目相比会被压缩得更厉害。例如，如果一个项目的flex-shrink为 1 ，另一个项目flex-shrink为 3，那么 3 的那个与另一个相比会受到 3 倍压缩。

## 13.使用 flex-grow 属性扩展项目

与flex-shrink相对的是flex-grow。你应该还记得，flex-shrink会在容器太小时对元素作出调整。相应地，flex-grow会在容器太大时对元素作出调整。
例子与上一个挑战相似，如果一个项目flex-grow属性的值为 1，另一个flex-grow为 3，那么 3 的会比 1 的扩大三倍。

## 14.使用 flex-basis 属性设置项目的初始大小

flex-basis属性指定了项目在 CSS 进行flex-shrink或flex-grow调整前的初始大小。
flex-basis属性的单位与其他 size 属性一致（px、em、%等）。如果值为auto，项目的大小依赖于自身内容。


## 15.使用 flex 短方法属性

上面几个 flex 属性有一个简写方式。flex-grow、flex-shrink和flex-basis属性可以在flex中一同设置。

例如，flex: 1 0 10px;会把项目属性设为flex-grow: 1;、flex-shrink: 0;以及flex-basis: 10px;。

属性的默认设置是flex: 0 1 auto;。


## 16.使用 order 属性重新排列项目

order属性告诉 CSS flex 容器里项目的顺序。默认情况下，项目排列顺序与源 HTML 文件中顺序相同。这个属性接受数字作为参数，可以使用负数。


## 17.使用 align-self 属性

flex 子元素的最后一个属性是align-self。这个属性允许你调整每个项目自己的对齐方式，而不是一次性设置全部项目。因为float、clear和vertical-align等调整使用的属性都不能应用在 flex 子元素，所以这个属性显得十分有用。

align-self的允许值与align-items一样，并且它会覆盖align-items的值。


# 教程
[CSS3 弹性盒子(Flex Box)](https://www.runoob.com/css3/css3-flexbox.html)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox布局详解](http://caibaojian.com/flexbox-guide.html)

[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)