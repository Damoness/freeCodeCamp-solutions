## 1.使用 Fluid 容器实现响应式设计

之前，在 freeCodeCamp 的 HTML5 和 CSS 章节中我们构建了一个 Cat Photo App。这次我们将会使用最受欢迎的响应式 CSS 框架 Bootstrap 来美化它。

Bootstrap 会根据你的屏幕大小来调节 HTML 元素的大小————因此称为 响应式设计( Responsive Design )。

通过响应式设计，我们将无需额外设计一个手机版的网页，因为它在任何尺寸的屏幕上看起来都还不错。

无论开发什么应用，你都可以通过将以下代码添加到你的 HTML 顶部来引入 Bootstrap 。

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

在该案例中，我们已经帮你把相应代码添加到页面中。记住使用 >和 />闭合 link标签来保证引入成功。

首先，我们应该把所有 HTML 标签放在 class 为 container-fluid的 div元素下（除了 link标签和 style标签）。

## 2.使图片自适应移动端

首先，在已有的图片下面添加一张新的图片. 设置 src属性为 https://bit.ly/fcc-running-cats。

如果图片的大小恰恰和我们手机屏幕尺寸大小一样自然是最好的。

幸运的是现在通过 Bootstrap，我们仅仅只需要为 image 标签上设置 class 属性为 img-responsive就可以让它完美的适应你页面的宽度了。

## 3.用 Bootstrap 居中文本


正在使用 Bootstrap 的我们可以将顶部的元素居中来美化页面。而这仅仅只需为 h2元素设置 class 属性 text-center就可以做到。

记住：我们通过空格分隔不同的 class 可以为一个元素添加多个 class ，就像这样：

<h2 class="red-text text-center">your text</h2>

## 4.创建一个 Bootstrap 按钮
Bootstrap 的 button元素有着独有的、比默认 HTML 按钮更好的样式风格。

在较大的小猫图片下方创建新的 button元素。 为它添加 btn与 btn-default两个 class 和 "Like" 文本。

## 5.创建一个 Bootstrap 块级元素

一般情况下，具有 btn和 btn-default两个 class 的 button元素宽度与它包含的文本相同，举个例子：

<button class="btn btn-default">Submit</button>

这个按钮的宽度应该和文本 "Submit" 相同


通过为按钮添加 class 属性 btn-block使其成为块级元素，按钮会伸展并填满页面整个水平空间，后续的元素会流到这个块级元素的下方，即 "新开一行"。

<button class="btn btn-default btn-block">Submit</button>

这个按钮会 100% 占满所有的可用宽度。


记住这些按钮仍然需要 btn这个 class。

添加 Bootstrap 的 btn-blockclass 到你 Bootstrap 按钮上吧

## 6.体验 Bootstrap 彩虹色的按钮

btn-primaryclass 的颜色是你在应用中的主题色。这样 “突出显示” 是引导用户按步就班进行操作的有效办法。

将按钮的 class 从 Bootstrap 的 btn-default替换为 btn-primary。

记住：你的按钮仍然需要 btn和 btn-blockclass。

## 7.使用 btn-info 调出可选操作

Bootstrap 有着丰富的预定义按钮颜色。浅蓝色 btn-infoclass 通常用在用户可能采取的操作上。

在你的 "Like" 按钮下方创建包含文本 "Info" 的块级 Bootstrap 按钮， 然后为该按钮添加 Bootstrap 的 btn-info和 btn-blockclass。

记住：你的这些按钮仍然需要 btn和 btn-blockclass。

## 8.使用 btn-danger 警告你的用户，这是危险操作。

Bootstrap 有着丰富的预定义按钮颜色。 红色 btn-dangerclass 用来提醒用户此行为具有破坏性，比如删除一张猫的图片。

创建一个包含文本 "Delete" 的按钮并为它设置 class 为 btn-danger。

记住：你的这些按钮仍然需要 btn和 btn-blockclass。

## 9.使用 Bootstrap 网格并排放置元素

Bootstrap 具有一套基于 12 列的响应式栅格系统————可以轻松实现将多个元素放入一行并指定它们的相对宽度。 Bootstrap 的大部分 class 属性都可以应用在 div元素上。

Bootstrap 的列宽度属性取决于用户的屏幕宽度。 比如，手机有着窄屏幕而笔记本电脑有者更大的屏幕.

就拿 Bootstrap 的 col-md-*class 来说。 在这里， md表示 medium （中等的）， 而 *是一个数字，说明了这个元素占有多少个列宽度。这个例子就是指定了中等大小屏幕（例如笔记本电脑）下元素所占的列宽度。

在我们创建的 Cat Photo App 中，我们将使用 col-xs-*， 其中 xs是 extra small 的缩写 (应用于较小的屏幕，比如手机屏幕)， *是你填写的数字，代表一行中，你的元素该占多少列宽。

将我们的 Like, Info和 Delete三个按钮并排放入一个 <div class="row">元素中，然后每个按钮都各用一个 <div class="col-xs-4">元素包裹起来。

当 div元素设置了 rowclass 之后，那几个按钮便会嵌入其中了。

## 10.用 Bootstrap 来取代我们之前的自定义样式

现在我们可以清理一下之前代码，用 Bootstrap 的内置样式来替换我们之前定义的样式，这样会让我们的 Cat Photo App 看起来更简洁些。

别担心————以后我们会有大把时间来自定义我们的 CSS 样式的。

删除 style元素里的 .red-text, p, 和 .smaller-imageCSS 声明，使 style元素留下的声明只有 h2和 thick-green-border.

删除包含死链接的 p元素。 然后将 h2的 red-textclass 替换为 Bootstrap 的 text-primaryclass.

最后, 将你第一个 img元素的 "smaller-image" class 替换为 img-responsiveclass.

## 11.使用 span 创建行内元素

你可以使用 span 标签来创建行内元素。还记得我们怎么使用 btn-blockclass 来创建填满整行的按钮吗？



上面的例子就是 "inline" （行内）元素和 "block" （块级）元素的区别。

通过使用行内元素 span，你可以把不同的元素放在同一行，甚至能为一个元素的不同部分指定样式。

把 "Things cats love" 中的 "love" 放入 span标签。然后为其添加 text-dangerclass 来使其文字变成红色。

"Top 3 things cats hate" 元素的写法如下：

<p>Top 3 things cats <span class="text-danger">hate:</span></p>

## 12.创建自定义标题

让我们来为 Cat Photo App 做一个导航吧，把标题和惬意的猫咪图片放在同一行。

记住，由于 Bootstrap 使用了响应式栅格系统，使得我们可以很方便的放置元素并为元素指定相对的宽度。大部分的 Bootstrap 的 class 都能用在 div元素上。

把我们的第一张图片和 h2元素用一个简单的 <div class="row">元素包裹起来。再用 <div class="col-xs-8">包裹我们的 h2元素，用 <div class="col-xs-4">包裹我们的图片，这样它们就能位于同一行了。

注意现在图片是否与文字大小一致呢？
## 13.将字体图标添加到我们的按钮中

Font Awesome 是一个非常便利的图标库。这些图标都是被保存在 .svg的文件格式中的矢量图。这些图标就和字体一样，不仅能通过像素单位指定他们的大小，它们也同样会继承父级 HTML 元素的字体大小。

你可以将 Font Awesome 图标库添加至任何一个 app 中，方法很简单，只需要在你的 HTML 头部增加下列代码即可：

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha384-XdYbMnZ/QjLh6iI4ogqCTaIjrFk87ip+ekIjefZch0Y+PvJ8CDYtEs1ipDmPorQ+" crossorigin="anonymous">

不过在这里，我们已经预先为此页面添加了上述代码。

i元素起初用于让其它元素具有斜体（italic）的效果，不过现在一般用于指代图标。你可以把 Font Awesome 中的 class 属性添加到 i 元素中，让它变成一个图标，比如：

<i class="fa fa-info-circle"></i>

记住 span元素也一样可以用于指代图标。

你可以通过 Font Awesome 库增加一个 thumbs-up图标到你的 like 按钮上，具体方法是给 i 元素添加 class 属性 fa和 fa-thumbs-up；确保你的 "Like" 文本在图标旁边。

## 14.将字体图标添加到我们所有的按钮上

Font Awesome 是一个非常便利的图标库。这些图标都是被保存在 .svg的文件格式中的矢量图。这些图标就和字体一样，不仅能通过像素单位指定他们的大小，它们也同样会继承父级 HTML 元素的字体大小。

使用 Font Awesome 分别为你的 info 按钮添加 info-circle图标，为你的 delete 按钮添加 trash图标。

记住：下述要求中的 i元素可以用 span元素代替。

## 15.响应式风格的单选按钮

你还可以将 Bootstrap 的 col-xs-*class 用在 form元素上！这样我们就可以在不关心屏幕大小的情况下，将我们的单选按钮均匀的平铺在页面上。

将你的所有单选按钮放入 <div class="row">元素。再用 <div class="col-xs-6">元素包裹每一个单选按钮。

记住： 提醒一句，单选按钮是 type 为 radio的 input元素。

## 16.响应式风格的复选框

你还可以将 Bootstrap 的 col-xs-*用在 form元素上!这样我们就可以在不关心屏幕大小的情况下，将我们的复选框均匀的放在页面上了。

将所有复选框都放置于一个 <div class="row">元素中。然后分别把每个复选框都放置于一个 <div class="col-xs-4">元素中。

## 17.给表单控件的输入框添加样式
你可以通过在 submit button内加上 <i class="fa fa-paper-plane"></i>来添加 Font Awesome 的 fa-paper-plane图标。

为表单的文本输入框（text input）设置 form-controlclass。为表单的提交（submit）按钮设置 btn btn-primaryclass，并为它加上 Font Awesome 的 fa-paper-plane图标。

所有文本输入类的元素如 <input>，<textarea>和 <select>只要设置 .form-controlclass 就会占满100%的宽度。

## 18.使用 Bootstrap 响应式排列表单元素

现在让我们把你表单里的 input元素和 submit button（提交按钮）放在同一行。跟着之前的做法来就行：准备好一个具有 rowclass 的 div元素还有几个具有 col-xs-*class 的 div元素。

先把你表单的 text input（文本输入框）和 submit button（提交按钮）放进具有 rowclass 的 div中。再用 col-xs-7class 的 div 包裹表单的 text input（文本输入框），col-xs-5class 的 div 包裹表单的 submit button（提交按钮）。

这是我们到目前为止 Cat Photo App 的最后一个挑战了。我希望你能喜欢 Font Awesome， Bootstrap，和响应式设计！

## 19.创建一个 Bootstrap 标题
现在，让我们运用 HTML，CSS 和 Bootstrap 从零开始做点东西。

我们将会搭建一个 jQuery playground，以便在后续的 jQuery 课程中使用它。

首先，创建一个包含 jQuery Playground文本内容的 h3元素。

通过给你的 h3元素设置 Bootstrap 的 class 属性 text-primary来为其上色，然后添加 Bootstrap 的 class 属性 text-center使其文本居中显示。

## 20.将我们的页面放在 Fluid 容器中

现在让我们确保页面所有内容应该都是响应式的。

将我们的 h3元素内嵌进一个具有 container-fluidclass 的div元素中。

## 21.创建一个 Bootstrap Row

这次让我们为内联元素创建一个 Bootstrap 栅格系统的 Row（行）。

在 h3标签下方创建一个 class 属性为 row的 div元素。

## 22.分割你的 Bootstrap Row
既然我们已经有了一个 Bootstrap Row，就让我们把它分成两列来放置我们的元素。

在行内创建两个 class 属性为 col-xs-6的 div元素。

## 23.创建 Bootstrap Wells

Bootstrap 有一个叫做 well的 class，作用是赋予列一种视觉上的深度感（视觉上的效果）。

在每一个 class 属性为 col-xs-6的 div元素中都嵌入一个带有 well的 div元素。


## 24.在 Bootstrap Wells 中添加元素

现在我们的每一行的每一列都已经有了 div元素。这已经足够了，现在让我们添加 button元素吧。

在每一个 welldiv元素下放置三个 button元素。

## 25.给 Bootstrap 按钮添加默认样式

Bootstrap 还有另外一种属于按钮的 class 属性叫做 btn-default。

为 button元素增加两个 class： btn和 btn-default。

## 26.分别给每个目标元素的 class 属性添加一个 target 值

并不是所有 class 属性都需要有对应的 CSS 样式。有时候我们设置 class 只是为了更方便地在 jQuery 中选中这些元素。

为每一个 button元素添加 targetclass。

## 27.给 Bootstrap 元素添加id属性

回忆一下，除了可以给元素添加 class 属性，我们还可以给元素设置 id属性。

每个指定元素的 id 都是唯一的，并且在每个页面中都只能使用一次。

让我们为每个 class 为 well的 div元素添加一个唯一的 id。

记住，你可以这样给一个元素设置 ID。

<div class="well" id="center-well">

把左边 well 的 ID 设置为 left-well。右边的 well 的 ID 设置为 right-well。

## 28.给 Bootstrap Wells 贴标签

为了让我们页面逻辑更清晰，让我们为 wells 都标上它们的 id 吧。

在 left-well 的上一层，class 属性为 col-xs-6的 div元素里面，增加一个文本为 #left-well的 h4元素。

在 right-well 的上一层，class 属性为 col-xs-6的 div元素里面，增加一个文本为 #right-well的 h4元素。

## 29.给每个元素一个唯一的 id
我们也可以通过 jQuery 根据每个按钮唯一的 id 来标识出它们。

给你的每一个按钮设置唯一的 id，以 target1开始，target6结束。

确保 target1到 target3在 #left-well之中，target4到 target6在 #right-well之中。


## 30.给 Bootstrap 按钮贴标签

正如我们标注了每个 wells 一样，我们同样想要标注每一个按钮。

为每一个 button元素设置与其 id选择器相同的文本。

## 31.使用注释来说明代码

当我们开始使用 jQuery，我们将修改HTML元素，但是实际上我们并不是直接在 HTML 文本中修改。

我们必须确保让每个人都知道，他们不应该直接修改此页面上这些代码。

记住，你可以在 <!--为开始，-->为结束的地方进行评论注释（像这样，<!-- 我是一段注释 -->）。

请你在你的 HTML 顶部加如下一段注释： Only change code above this line.
