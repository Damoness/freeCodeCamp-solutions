React，由 FaceBook 普及，是一个用于构建用户界面的开源 JavaScript 库。通过 JSX 创建组件，处理 state 和 props，利用事件监听和指定的生命周期钩子动态更新数据。

React 混合了 HTML 和 JavaScript 的函数性创建了一个新的标签语言，JSX。这章将介绍所有的这些概念以及如何在项目中使用它们。

## 1.创建一个简单的 JSX 元素

简介：React 是由 Facebook 创建和维护的开源视图库。它是渲染当代 Web 应用程序用户界面（UI）的绝佳工具。

React 使用名为 JSX 的 JavaScript 语法扩展，允许你直接在 JavaScript 中编写 HTML。这有几个好处。它允许你在 HTML 中使用 JavaScript 的完整程序功能，并有助于保持代码的可读性。在大多数情况下，JSX 类似于你已经学过的 HTML，但是在这些挑战中将会涉及一些关键差异。

例如，因为 JSX 是 JavaScript 的语法扩展，所以你实际上可以直接在 JSX 中编写 JavaScript。要做到这一点，你只需在花括号中包含你希望被视为 JavaScript 的代码：{“这被视为 JavaScript 代码”}。请牢记这个写法，你将会在接下来的挑战中使用。

但是，由于浏览器不能解析 JSX，因此必须将 JSX 代码编译为 JavaScript。在这个过程中，转换器 Babel 是一个很受欢迎的工具。后续挑战已经在后台引入了 Babel，你可以直接写 JSX 代码。如果你的代码不符合 JSX 语法，那么挑战中的第一个测试就不会通过。

值得注意的是，这些挑战在底层调用ReactDOM.render(JSX, document.getElementById('root'))。这个函数调用是将你的 JSX 置于 React 自己的轻量级 DOM 中。然后，React 使用自己的 DOM 快照来优化更新实际 DOM 的特定部分。

## 2.创建一个复杂的 JSX 元素

上一个挑战是 JSX 的一个简单示例，但 JSX 也可以表示更复杂的 HTML。

关于嵌套的 JSX，你需要知道的一件重要的事情，那就是它必须返回单个元素。

这个父元素将包裹所有其他级别的嵌套元素。

例如，几个作为兄弟元素而编写的JSX元素没有父元素包裹将不会被转换。

这里是一个示例：

有效的 JSX：

<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
无效的 JSX：

<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>




## 3.在 JSX 中添加注释

JSX 是一种可以编译成有效 JavaScript 的语法。有时，为了便于阅读，你可能需要在代码中添加注释。像大多数编程语言一样，JSX 也有自己的方法来实现这一点。

要将注释放在 JSX 中，可以使用{/* */}语法来包裹注释文本。

## 4.渲染 HTML 元素为 DOM 树

现在你已经习惯了编写 JSX，你可能想知道它与 HTML 有什么不同。

到目前为止，HTML 和 JSX 似乎完全相同。

JSX 的一个关键区别是你不能再使用class这个单词来定义 HTML 的 class 名。这是因为class是 JavaScript 中的关键字。JSX 使用className代替。

事实上，JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。例如，JSX 中的单击事件是 onClick，而不是 onclick。同样，onchange变成了onChange。虽然这是一个微妙的差异，但请你一定要记住。

## 5.在 JSX 中定义一个 HTML Class

现在你已经习惯了编写 JSX，你可能想知道它与 HTML 有什么不同。

到目前为止，HTML 和 JSX 似乎完全相同。

JSX 的一个关键区别是你不能再使用class这个单词来定义 HTML 的 class 名。这是因为class是 JavaScript 中的关键字。JSX 使用className代替。

事实上，JSX 中所有 HTML 属性和事件引用的命名约定都变成了驼峰式。例如，JSX 中的单击事件是 onClick，而不是 onclick。同样，onchange变成了onChange。虽然这是一个微妙的差异，但请你一定要记住。

## 6.了解自动闭合的 JSX 标记

到目前为止，你已经看到 JSX 与 HTML 的不同之处在于使用className和使用class来定义 HTML 的 class。

JSX 不同于 HTML 的另一个重要方面是自闭合标签。

在HTML中，几乎所有的标签都有一个开始和结束标签：<div></div>，结束标签在你要关闭的标签名之前始终具有正斜杠。但是，HTML 中有一些称为“自闭合标签”的特殊实例，它们在另一个标签开始之前，不需要开始和结束标签都存在。

例如，换行标签可以写成<br>或者<br />，但是不应该写成<br></br>，因为它不包含任何内容。

在 JSX 中，规则略有不同。任何 JSX 元素都可以使用自闭合标签编写，并且每个元素都必须关闭。例如，换行标签必须始终编写为<br />。另一方面<div>可以写成<div />或者<div></div>。不同之处在于，在第一个语法版本中，无法在<div />中包含任何内容。在后面的挑战中你会发现，这种语法在渲染 React 组件时非常有用。

## 7.创建一个无状态的函数组件

组件是 React 的核心。React 中的所有内容都是一个组件，在这里你将学习如何创建一个组件。

有两种方法可以创建 React 组件。第一种方法是使用 JavaScript 函数。以这种方式定义组件会创建无状态功能组件。应用程序中的状态概念将在以后的挑战中介绍。目前，可以将无状态组件视为可以接收数据并对其进行渲染的组件，但是它不管理或跟踪对数据的更改，我们将在下一次挑战中介绍创建 React 组件的第二种方法。

要用函数创建组件，只需编写一个返回 JSX 或null的 JavaScript 函数。需要注意的一点是，React 要求你的函数名以大写字母开头。下面是一个无状态功能组件的示例，该组件在 JSX 中分配一个 HTML 的 class：
```js
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```
因为 JSX 组件代表 HTML，所以你可以将几个组件放在一起以创建更复杂的 HTML 页面，这是 React 提供的组件架构的关键优势之一，它允许你用许多独立的组件组成 UI。这使得构建和维护复杂的用户界面变得更加容易。

## 8.创建一个 React 组件

定义 React 组件的另一种方法是使用 ES6 的class语法。在以下示例中，Kitten扩展了React.Component：
```js
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```
这将创建一个 ES6 类Kitten，它扩展了React.Component类。因此，Kitten类现在可以访问许多有用的 React 功能，例如本地状态和生命周期钩子。如果你还不熟悉这些术语，请不要担心，在以后的挑战中我们将更详细地介绍它们。

另请注意，Kitten类中定义了一个调用super()方法的constructor。它使用super()调用父类的构造函数，即本例中的React.Component。构造函数是使用class关键字创建的特殊方法，它用在实例初始化之前。最佳做法是在组件的constructor里调用super，并将props传递给它们，这样可以保证组件能够正确地初始化。现在，你只需要知道这是标准的做法。很快你会看到构造函数的其他用途以及props。


## 9.用组合的方式创建一个 React 组件

React：用组合的方式创建一个 React 组件
现在我们来看看如何组合多个 React 组件。想象一下，你正在构建一个应用程序，并创建了三个组件：Navbar、Dashboard和Footer。

要将这些组件组合在一起，你可以创建一个App父组件，将这三个组件分别渲染成为子组件。要在 React 组件中渲染一个子组件，你需要在 JSX 中包含作为自定义 HTML 标签编写的组件名称。例如，在render方法中，你可以这样编写：
```js
return (
<App>
  <Navbar />
  <Dashboard />
  <Footer />
</App>
)
```
当 React 遇到引用另一个组件的自定义 HTML 标签时（如本例所示，组件名称包含在< />中），它在标签的位置渲染该组件的标签。这可以说明App组件和Navbar、Dashboard以及Footer之间的父子关系。

***

在代码编辑器中，有一个名为ChildComponent的简单功能组件和一个名为ParentComponent的 React 组件。通过在ParentComponent中渲染ChildComponent来将两者组合在一起。确保使用正斜杠关闭ChildComponent标签。

注意： ChildComponent是使用 ES6 的箭头函数定义的，因为这是使用 React 时非常常见的做法。但是，要知道这只是一个函数。如果你不熟悉箭头函数语法，请参阅 JavaScript 部分。

## 10.使用 React 渲染嵌套组件


上一个挑战显示了组合两个组件的简单方法，但是有许多不同的方法可以把 React 组件组合在一起。

组件组合是 React 的强大功能之一。当你使用 React 时，应当先用组件的思路考虑清楚用户界面的结构（如上一个挑战中的 App 示例）。可以将 UI 分解为基本的构建块，这些构建块就是组件。这样做有助于将负责 UI 的代码与负责处理应用程序逻辑的代码分开，并可以大大简化复杂项目的开发和维护。


代码编辑器中定义了两个功能组件，分别是TypesOfFruit和Fruits。请把TypesOfFruit组件放到Fruits组件中，然后把Fruits组件放到TypesOfFood组件中。结果应该是子组件嵌套在父组件中，父组件嵌套在它本身的父组件中！

## 11.组合 React 组件

随着挑战继续，我们将组合使用更复杂的 React 组件和 JSX，有一点需要注意。在其他组件中渲染 ES6 风格的类组件和渲染你在过去几个挑战中使用的简单组件没有什么不同。你可以在其他组件中渲染 JSX 元素、无状态功能组件和 ES6 类组件。

## 12.渲染 class 组件为 Dom 树

你可能还记得在早期挑战中使用 ReactDOM API 将 JSX 元素渲染到 DOM，这与渲染 React 组件的过程十分相似。过去的几个挑战主要针对组件和组合，因此渲染是在幕后为你完成的。但是，如果不调用 ReactDOM API，你编写的任何 React 代码都不会渲染到 DOM。

以下是语法的复习：ReactDOM.render(componentToRender, targetNode)。第一个参数是要渲染的 React 组件。第二个参数是要在其中渲染该组件的 DOM 节点。

React 组件传递到ReactDOM.render()与 JSX 元素略有不同。对于 JSX 元素，你传入的是要渲染的元素的名称。但是，对于 React 组件，你需要使用与渲染嵌套组件相同的语法，例如ReactDOM.render(<ComponentToRender />, targetNode)。你可以将此语法用于ES6类组件和函数组件。

## 13.从零开始写一个 React 组件

现在你已经了解了 JSX 和 React 组件的基础知识，现在是时候自己编写一个组件了。React 组件是 React 应用程序的核心组成部分，因此熟练编写它们是非常重要的。记住，典型的 React 组件是 ES6class，它扩展了React.Component。它有一个返回 HTML（从 JSX 返回）或null的渲染方法，这是 React 组件的基本形式。一旦你深刻地理解了这一点，你就可以开始构建更复杂的 React 项目了。

***

定义一个MyComponent类，它是React.Component的扩展。它的渲染方法应该返回一个div，其中包含一个h1标签，标签文本为：My First React Component!。请确保文本内容、大小写和标点符号正确，以及调用了组件的构造函数。

使用ReactDOM.render()把该组件渲染到 DOM 中。有一个id='challenge-node'的div可供你使用。


## 14.将 Props 传递给无状态函数组件

之前的挑战涵盖了关于在 React 中创建和组合 JSX 元素、函数组件和 ES6 风格的类组件的很多内容。有了这个基础，现在是时候看看 React 中的另一个常见特性 props 了。在 React 中，你可以将属性传递给子组件。假设你有一个App组件，该组件渲染了一个名为Welcome的子组件，它是一个无状态函数组件。你可以通过以下方式给Welcome传递一个user属性：
```js
<App>
  <Welcome user='Mark' />
</App>
```
使用自定义 HTML 属性，React 支持将属性user传递给组件Welcome。由于Welcome是一个无状态函数组件，它可以像这样访问该值：
```js
const Welcome = (props) => <h1>Hello, {props.user}!</h1>
```
调用props这个值是常见做法，当处理无状态函数组件时，你基本上可以将其视为返回 JSX 的函数的参数。这样，你就可以在函数体中访问该值。但对于类组件，访问方式会略有不同。

***

代码编辑器中有Calendar和CurrentDate组件。从Calendar组件渲染CurrentDate时，从 JavaScript 的Date对象分配当前日期，并将其作为date属性传入。然后访问CurrentDate组件的prop，并在p标签中显示其值。请注意，要将prop的值视为 JavaScript，必须将它们括在花括号中，例如date={Date()}。

## 15.传递一个数组作为 Props

上一个挑战演示了如何将来自父组件的信息作为props传递给子组件。这个挑战着眼于如何将数组作为props传递。要将数组传递给 JSX 元素，必须将其视为 JavaScript 并用花括号括起来。
```js
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
```
这样，子组件就可以访问数组属性colors。访问属性时可以使用join()等数组方法。

const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>

这将把所有colors数组项连接成一个逗号分隔的字符串并生成：

<p>green, blue, red</p>

稍后，我们将了解在 React 中渲染数组数据的其他常用方法。


代码编辑器中有List和ToDo组件。在ToDo组件中渲染每个List时，传入tasks属性并将其分配给待办任务数组，例如["walk dog", "workout"]。然后访问List组件中的tasks数组，在p元素中显示其值。使用join(", ")把props.tasks数组作为逗号分隔列表显示在p元素中。今天的列表应该至少有 2 个任务，明天应该至少有 3 个任务。


## 16.使用默认的 Props

React 还有一个设置默认 props 的选项。你可以将默认 props 作为组件本身的属性分配给组件，React 会在必要时分配默认 prop。如果没有显式的提供任何值，这允许你指定 prop 值应该是什么。例如，如果你声明MyComponent.defaultProps = { location: 'San Francisco' }，即定义一个 location 属性，并且其值在没有另行制定的情况下被设置为字符串San Francisco。如果 props 未定义，则 React 会分配默认 props，但如果你将null作为 prop 的值，它将保持null。



## 17.覆盖默认的 Props

在 React 中，设置默认的 props 是一个很有用的特性，显式设置组件的 prop 值即可覆盖默认 props。


ShoppingCart组件现在渲染了一个子组件Items。该Items组件有一个默认quantityprop，其值被设置为整数0。通过传入数值10来覆盖quantity的默认 prop。

注意： 请记住，向组件添加 prop 的语法与添加 HTML 属性类似。但是，由于quantity的值是整数，所以它不会加引号，但应该用花括号括起来，例如{100}。这个语法告诉 JSX 直接将花括号中的值解释为 JavaScript。

## 18.使用 PropTypes 来定义你期望的 Props

React 提供了有用的类型检查特性，以验证组件是否接收了正确类型的 props。例如，你的应用程序调用 API 来检索你希望在数组中的数据，然后将数据作为 prop 传递给组件。你可以在组件上设置propTypes，以要求数据的类型为array。当数据是任何其他类型时，都会抛出警告。

当你提前知道 prop 的类型时，最好的做法是设置propTypes。可以为组件定义propTypes属性，方法与定义defaultProps相同。这样做将检查给定键的 prop 是否是给定类型。这里有一个示例，名为handleClick的 prop 应为function类型：

MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

在上面的示例中，PropTypes.func部分检查handleClick是否为函数。添加isRequired是为了告诉 ReacthandleClick是该组件的必需属性。如果未提供该 prop，你将看到警告信息。另请注意，func表示function。在 7 种 JavaScript 基本类型中，function和boolean（写为bool）是仅有的使用异常拼写的两种类型。除了基本类型，还有其他类型可用。例如，你可以检查 prop 是否为 React 组件，请参阅文档以获取所有选项。

注意：在 React v15.5.0 版本中, PropTypes可以从 React 中单独引入，如下所示：

import React, { PropTypes } from 'react';

***

为Items组件定义propTypes，要求quantity作为 prop，并验证它是number类型。

## 19.使用 this.props 访问 Props

前几项挑战涵盖了将 props 传递给子组件的基本方法。但是，倘若接收 prop 的子组件不是无状态函数组件，而是一个 ES6 类组件又当如何呢？ES6 类组件访问 props 的方法略有不同。

任何时候，只要引用类组件本身，就要使用this关键字。要访问类组件中的 props，你需要在在访问它的代码前面添加this。例如，如果 ES6 类组件有一个名为data的 prop，你可以在 JSX 中这样写：{this.props.data}。


## 20.复习如何使用 Props 和无状态函数组件

除了上一个挑战，你一直在将 props 传递给无状态的函数组件。这些组件就像纯函数，它们接收 props 作为输入，并在每次传递相同 props 时返回相同的视图。你可能会想知道什么是状态，下一个挑战将会更详细地讲述它。在此之前，我们先来回顾一下组件的术语。

无状态函数组件是一个函数，它接收 props 作为输入并返回 JSX。另一方面，无状态组件是一个类，它扩展了React.Component，但是不使用内部状态（下一个挑战中讨论）。最后，状态组件是指维护其自身内部状态的组件，它简称组件或 React 组件。

一种常见的应用模式是尽可能减少状态组件并创建无状态的函数组件。这有助于将状态管理包含到应用程序的特定区域。反过来，通过更容易地跟踪状态变化如何影响其行为，可以改进应用程序的开发和维护。

***

在代码编辑器中有一个CampSite组件，它把Camper组件渲染为自己的子组件。定义Camper组件，并为其分配默认 props{ name: 'CamperBot' }。你可以在Camper组件内部渲染任何你想要的代码，但是要确保有一个p元素，它只包含作为prop传递的name值。最后，在Camper组件上定义propTypes，要求提供name作为 prop，并验证它是string类型。

## 21.创建一个有状态的组件
React中最重要的主题之一是state。 state 包含应用程序需要了解的任何数据，这些数据可能会随时间而变化。你希望应用程序能够响应 state 的变更，并在必要时显示更新后的 UI。React 为现代 Web 应用程序的状态管理提供了一个很好的解决方案。

你可以通过在constructor中的组件类上声明state属性来在 React 组件中创建 state，它在创建时使用state初始化组件。state属性必须设置为 JavaScript对象。声明如下：

this.state = {
  // describe your state here
}
你可以在组件的整个生命周期内访问state对象，你可以更新它、在 UI 中渲染它，也可以将其作为 props 传递给子组件。state对象的使用可以很简单，亦可以很复杂，就看你怎么用了。请注意，你必须通过扩展React.Component来创建类组件，以便像这样创建state。

***

代码编辑器中有一个组件试图从其state中渲染一个name属性，但是state还没有定义。在constructor中使用state初始化组件，并将你的名字赋给name属性。

## 22.在用户界面中渲染状态

一旦定义了组件的初始 state，你就可以在要渲染的 UI 中显示它的任何部分。如果组件是有状态的，它将始终可以访问render()方法中state的数据。你就可以使用this.state访问数据。

如果你想在 render 方法的return中访问 state 值，你必须把这个值用花括号括起来。

state是 React 组件中最强大的特性之一，它允许你跟踪应用程序中的重要数据，并根据数据的变化渲染 UI。如果你的数据发生变化，你的 UI 也会随之改变。React 使用所谓的虚拟 DOM 来跟踪幕后的变化。当 state 数据更新时，它会使用该数据触发组件的重新渲染--包括接收 prop 数据的子组件。React 只在必要的时候更新实际的DOM，这意味着你不必担心 DOM 的变更，只需声明 UI 的外观即可。

注意，如果组件有状态，则没有其他组件知道它的state。它的state是完全封装的，或者是局限于组件本身的，除非你将 state 数据作为props传递给子组件。封装state的概念非常重要，因为它允许你编写特定的逻辑，然后将该逻辑包含并隔离在代码中的某个位置。


在代码编辑器中，MyComponent是一个有状态组件，在组件的 render 方法中定义一个h1标签，该方法从组件的 state 渲染name的值。

注意： h1应该只渲染来自state的值。在 JSX 中，使用花括号{ }编写的任何代码都将被视为 JavaScript。因此，要访问state中的值，只需将引用括在花括号中即可。

## 23.以另一种方式在用户界面中渲染状态

还有另一种方法可以访问组件中的state。在render()方法中，在return语句之前，你可以直接编写 JavaScript。例如，你可以声明函数、从state或props访问数据、对此数据执行计算等。然后，你可以将任何数据赋值给你在return语句中可以访问的变量。


在MyComponent的 render 方法中，定义一个名为name的常量，并将其设置为组件state中的 name 值。因为可以直接在代码部分编写 JavaScript，所以不需要用大括号括起来。

接下来，在 return 语句中，在h1标签中渲染变量name的值。记住，在 return 语句中需要使用 JSX 语法（用到 JavaScript 的花括号）。

## 24.用 this.setState 设置状态

前面的挑战涵盖了组件的state以及如何在constructor中初始化 state。还有一种方法可以更改组件的state，React 提供了setState方法来更新组件的state。在组件类中调用setState方法如下所示：this.setState()，传入键值对的对象，其中键是 state 属性，值是更新后的 state 数据。例如，如果我们在 state 中存储username，并想要更新它，代码如下所示：
```js
this.setState({
  username: 'Lewis'
});
```
React 希望你永远不要直接修改state，而是在 state 发生改变时始终使用this.setState()。此外，你应该注意，React 可以批量处理多个 state 更新以提高性能。这意味着通过setState方法进行的 state 更新可以是异步的。setState方法有一种替代语法可以解决异步问题，虽然这很少用到，但是最好还是记住它！有关详细信息，请参阅React 文档。

***

代码编辑器中有一个button元素，它有一个onClick()处理程序。当button在浏览器中接收到单击事件时触发此处理程序，并运行MyComponent中定义的handleClick方法。在handleClick方法中，使用this.setState()更新组件的state。设置state中的name属性为字符串React Rocks!。

单击按钮查看渲染的 state 的更新。如果你不完全理解单击处理程序代码在此时的工作方式，请不要担心。在接下来的挑战中会有讲述。
## 25.将 this 绑定到 Class 方法

除了设置和更新state之外，你还可以为组件类定义方法。类方法通常需要使用this关键字，以便它可以访问方法中类的属性（例如state和props ）。有几种方法可以让你的类方法访问this。

一种常见的方法是在构造函数中显式地绑定this，这样当组件初始化时，this就会绑定到类方法。你可能已经注意到上一个挑战使用了this.handleClick = this.handleClick.bind(this)用于其在构造函数中的handleClick方法。然后，当你在类方法中调用像this.setState()这样的函数时，this指的是这个类，而不是undefined。

注意： this关键字是 JavaScript 中最令人困惑的方面之一，但它在 React 中扮演着重要的角色。虽然它的行为在这里是完全正常的，但是这些课程并不深入研究this，所以如果以上内容令你感到困惑，请参考其他课程！


代码编辑器有一个带有state的组件，用于跟踪项目计数。它还有一个方法，允许你增加此项目计数。但是，该方法不起作用，因为它使用了未定义的this关键字。可以通过将this显式绑定到组件构造函数中的addItem()方法来修复它。

接下来，向 render 方法中的button元素添加一个单击处理程序。当按钮接收到单击事件时，它应该触发addItem()方法。记住，传递给onClick处理程序的方法需要使用花括号，因为它应该直接被解释为 JavaScript。

完成上述步骤后，你应该可以单击按钮并查看 HTML 中的项目计数增量。

## 26.使用 State 切换元素

你可以用比你目前所见的更复杂的方式在 React 应用程序中使用state。例如，监视值的状态，然后根据此值有条件地渲染 UI。有几种不同的方法可以实现这一点，代码编辑器展示了其中一种。

***

MyComponent有一个初始值为false的visibility属性。如果visibility的值为 true，render 方法返回一个视图，如果为 false，返回另一个视图。

目前，无法更新组件的state中的visibility属性，该值应在 true 和 false 之间来回切换。按钮上有一个单击处理程序，它触发一个名为toggleVisibility()的类方法。定义此方法，以便visibility的state在调用方法时切换到相反的值。如果visibility是false，则该方法将其设置为true，反之亦然。

最后，单击按钮以查看基于其state的组件的条件渲染。

提示： 不要忘记将this关键字绑定到构造函数中的方法上！

## 27.写一个简单的计数器

你可以结合目前为止所涵盖的概念来设计更复杂的有状态组件。这包括初始化state，编写设置state的方法，以及指定单击处理程序来触发这些方法。

***

Counter组件跟踪state中的count值。有两个按钮分别调用increment()和decrement()方法。编写这些方法，使计数器值在单击相应按钮时增加或减少 1。另外，创建一个reset()方法，当单击 reset 按钮时，把计数设置为 0。

注意： 确保你没有修改按钮的classNames。另外，请记住在构造函数中为新创建的方法添加必要的绑定。

## 28.创建一个可以控制的输入框

你的应用程序可能在state和渲染的 UI 之间有更复杂的交互。例如，用于文本输入的表单控件元素（如input和textarea）在用户键入时在 DOM 中维护自己的 state。通过 React，你可以将这种可变 state 转移到 React 组件的state中。用户的输入变成了应用程序state的一部分，因此 React 控制该输入字段的值。通常，如果你的 React 组件具有用户可以键入的输入字段，那么它将是一个受控的输入表单。

***

代码编辑器具有一个名为ControlledInput的组件框架，用于创建受控的input元素。组件的state已经被包含空字符串的input属性初始化。此值表示用户在input字段中键入的文本。

首先，创建一个名为handleChange()的方法，该方法具有一个名为event的参数。方法被调用时，它接收一个event对象，该对象包含一个来自input元素的字符串文本。你可以使用方法内的event.target.value来访问这个字符串。用这个新字符串更新组件的state的input属性。

在 render 方法中，在h4标签之上创建input元素。添加一个value属性，它等于组件的state的input属性。然后将onChange()事件处理程序设置到handleChange()方法。

在输入框中键入时，该文本由handleChange()方法处理，该文本被设置为本地state中的input属性，并渲染在页面上的input框中。组件state是输入数据的唯一真实来源。

最后也是最重要的，不要忘记在构造函数中添加必要的绑定。

## 29.创建一个可以控制的表单

上一个挑战展示了 React 能控制某些元素的内部 state，比如input和textarea，这使得这些元素成为受控组件。这也适用于其他表单元素，包括常规的 HTML 表单form元素。

***

MyForm组件中是一个带有提交处理程序的空form元素，提交处理程序将在提交表单时被调用。

我们增加了一个提交表单的按钮。你可以看到它的type被设置为submit，表明它是控制表单的按钮。在表单中添加input元素，并像上次挑战一样设置其value和onChange()属性。然后，你应该完成handleSubmit方法，以便将组件 state 属性submit设置为本地state下的当前输入值。

注意：  你还必须在提交处理程序中调用event.preventDefault()，以防止默认的表单提交行为刷新网页。

最后，在form元素之后创建一个h1标签，该标签从组件的state渲染submit的值。然后，你可以在表单中键入任何内容，然后单击按钮（或按 enter 键），你的输入会渲染到页面上。

## 30.将 State 作为 Props 传递给子组件

在之前的挑战中，你看到了很多将 props 传递给子 JSX 元素和子 React 组件的例子。你可能想知道那些 props 是从哪里来的。一个常见的模式是：有状态组件中包含对应用程序很重要的state，然后用它渲染子组件。你希望这些组件能够访问该state的某些部分，就把这些部分作为 props 传入。

例如，也许你有一个App组件可以渲染Navbar以及其他组件。在你的App中，你的state中包含大量用户信息，但是Navbar只需要访问用户的用户名就可以显示出来，这时你将该state作为一个 prop 传递给Navbar组件即可。

这个模式说明了 React 中的一些重要范例。第一个是单向数据流，state 沿着应用程序组件树的一个方向流动，从有状态父组件到子组件，子组件只接收它们需要的 state 数据。第二，复杂的有状态应用程序可以分解成几个，或者可能是一个单一的有状态组件。其余组件只是从父组件简单的接收 state 作为 props，并从该 state 渲染 UI。它开始创建一种分离，在这种分离中，state 管理在代码的一部分中处理，而 UI 渲染在另一部分中处理。将 state 逻辑与 UI 逻辑分离是 React 的关键原则之一。当它被正确使用时，它使得复杂的、有状态的应用程序的设计变得更容易管理。


MyApp组件是有状态的，它将Navbar组件渲染成它的为子组件。将MyApp组件state中的name属性向下传递给子组件，然后在h1标签中显示name，name是Navbarrender 方法的一部分。

## 31.传递回调作为 Props

你可以将state作为 props 传递给子组件，但不仅限于传递数据。你也可以将处理函数或在 React 组件中定义的任何方法传递给子组件。这就是允许子组件与父组件交互的方式。你可以把方法像普通 prop 一样传递给子组件，它会被分配一个名字，你可以在子组件中的this.props下访问该方法的名字。

***

代码编辑器中列出了三个组件。MyApp是父组件，GetInput和RenderInput是它的子组件。将GetInput组件添加到MyApp的 render 方法，然后将一个名为input的 prop 传给MyApp的state中的inputValue。还要创建一个名为handleChange的 prop，并将输入处理程序handleChange传递给它。

接下来，将RenderInput添加到MyApp中的 render 方法中，然后创建一个名为input的 prop，并将state中的inputValue传递给它。完成后，你将能够在GetInput组件中的input字段中键入内容，然后该组件通过 props 调用其父组件中的处理函数方法。这将更新处于父组件state中的 input，该 input 将作为 props 传递给两个子组件。观察数据如何在组件之间流动，以及单一数据源如何保持父组件state。诚然，这个示例有点做作，但是应该能用来说明数据和回调是如何在 React 组件之间传递的。

## 32.使用生命周期方法：componentWillMount

React 组件有几种特殊方法，可以在组件生命周期的特定点执行操作。这些称为生命周期方法或生命周期钩子，允许你在特定时间点捕获组件。这可以在渲染之前、更新之前、接收 props 之前、卸载之前等等。以下是一些主要生命周期方法的列表：

componentWillMount()

componentDidMount()

componentWillReceiveProps()

shouldComponentUpdate()

componentWillUpdate()

componentDidUpdate()

componentWillUnmount()

接下来的几节课将讲述这些生命周期方法的一些基本用例。


当组件被挂载到 DOM 时，componentWillMount()方法在render()方法之前被调用。在componentWillMount()中将一些内容记录到控制台--你需要打开浏览器控制台以查看输出。

## 33.使用生命周期方法：componentDidMount

某些时候，大多数 web 开发人员需要调用 API 端点来检索数据。如果你正在使用 React，知道在哪里执行这个动作是很重要的。

React 的最佳实践是在生命周期方法componentDidMount()中对服务器进行 API 调用或任何其他调用。将组件装载到 DOM 后会调用此方法。此处对setState()的任何调用都将触发组件的重新渲染。在此方法中调用 API 并使用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。


componentDidMount()中有一个模拟 API 调用。它在 2.5 秒后设置 state，以模拟调用服务器检索数据。本示例请求站点的当前活动用户总数。在 render 方法中，把activeUsers渲染到h1标签中。观看预览中发生的事情，随意更改超时时间以查看不同的效果。

## 34.添加事件侦听器

componentDidMount()方法也是添加特定功能所需的任何事件监听器的最佳位置。React 提供了一个合成事件系统，它将本地事件系统封装在浏览器中。这意味着，不管用户的浏览器如何，合成事件系统的行为都完全相同--即使不同浏览器之间的本地事件的行为可能不同。

你已经使用了一些合成事件处理程序，如onClick()。React 的合成事件系统非常适合用于你在 DOM 元素上管理的大多数交互。但是，如果要将事件处理程序附加到 document 或 window 对象，则必须直接执行此操作。

***

在componentDidMount()方法中为keydown事件添加事件监听器，并让这些事件触发回调handleKeyPress()。你可以使用document.addEventListener()，它将事件（用引号括起来）作为第一个参数，将回调作为第二个参数。

然后，在componentWillUnmount()中移除相同的事件监听器。你可以把相同的参数传递给document.removeEventListener()。在卸载和销毁 React 组件之前，最好使用这种生命周期方法对它们进行清理。移除事件监听器就是这样一个清理操作的例子。

## 35.使用生命周期方法管理更新

另一个生命周期方法是componentWillReceiveProps()，只要组件将要接收新的 props 就会调用它。此方法接收新的 props（通常写为nextProps）作为参数。你可以使用此参数并与this.props进行比较，并在组件更新之前执行操作。例如，你可以在处理更新之前在本地调用setState()。

还有一个方法是componentDidUpdate()，它在组件重新渲染后立即调用。请注意，渲染和装载在组件生命周期中是不同的。当页面第一次加载时，所有组件都被装载，这就是调用componentWillMount()和componentDidMount()等方法的地方。此后，随着 state 的变化，组件会重新渲染自己。下一个挑战将更详细地讨论这一点。

***

子组件Dialog从其父组件Controller接收messageprops。在Dialog组件中编写componentWillReceiveProps()方法，并将this.props和nextProps记录到控制台。你需要将nextProps作为参数传递给此方法，虽然可以将其命名为任何名称，但请将其命名为nextProps。

接下来，在Dialog组件中添加componentDidUpdate()，并记录一条说明组件已更新的语句。此方法的工作方式类似于为你提供的componentWillUpdate()。现在单击按钮更改消息并观察浏览器控制台。控制台语句的顺序显示了调用方法的顺序。

注意： 为了通过测试，你需要将生命周期方法编写为普通函数，而不是箭头函数（将生命周期方法编写为箭头函数也没有好处）。

## 36.使用 shouldComponentUpdate 优化重新渲染

到目前为止，如果任何组件接收到新的state或新的props，它会重新渲染自己及其所有子组件。这通常是好的。但是 React 提供了一种生命周期方法，当子组件接收到新的state或props时，你可以调用该方法，并特别声明组件是否应该更新。方法是shouldComponentUpdate()，它将nextProps和nextState作为参数。

这种方法是优化性能的有效方法。例如，默认行为是，当组件接收到新的props时，即使props没有改变，它也会重新渲染。你可以通过使用shouldComponentUpdate()比较props来防止这种情况。该方法必须返回一个布尔值，该值告诉 React 是否更新组件。你可以比较当前的 props（this.props）和下一个 props（nextProps），以确定你是否需要更新，并相应地返回true或false。

***

shouldComponentUpdate()方法添加到名为OnlyEvens的组件中。目前，该方法返回true，因此每次收到新的props时，OnlyEvens都会重新渲染。修改该方法，以便OnlyEvens仅在其新 props 的value为偶数时更新。单击Add按钮，在触发其他生命周期钩子时，在浏览器控制台中查看事件的顺序。

## 37.介绍内联样式

还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于将 class 应用于 JSX 元素的方式与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。使用className属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用内联样式，这在 ReactJS 开发中非常常见。

你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

JSX 元素使用style属性，但是由于 JSX 的传输方式，你不能将值设置为字符串。相反，你应将其设置为 JavaScript对象。这里有一个例子：

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。


在代码编辑器的div中添加一个style属性，使文本颜色为红色，字体大小为 72px。

请注意，你可以选择将字体大小设置为数字，省略单位 "px"，或者将其写为 "72px"。

## 38.在 React 中添加内联样式

还有其他复杂的概念可以为你的 React 代码增加强大的功能。但是，你可能会想知道更简单的问题，比如：如何对在 React 中创建的 JSX 元素进行风格化。你可能知道，由于将 class 应用于 JSX 元素的方式与 HTML 中的使用并不完全相同。

如果从样式表导入样式，它就没有太大的不同。使用className属性将 class 应用于 JSX 元素，并将样式应用于样式表中的 class。另一种选择是使用内联样式，这在 ReactJS 开发中非常常见。

你将内联样式应用于 JSX 元素，类似于你在 HTML 中的操作方式，但有一些 JSX 差异。以下是 HTML 中内联样式的示例：

<div style="color: yellow; font-size: 16px">Mellow Yellow</div>

JSX 元素使用style属性，但是由于 JSX 的传输方式，你不能将值设置为字符串。相反，你应将其设置为 JavaScript对象。这里有一个例子：

<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

注意我们使用驼峰式命名的 "fontSize" 属性，这是因为 React 不会接受样式对象中的连字符。React 将在 HTML 中为我们应用正确的属性名称。


在代码编辑器的div中添加一个style属性，使文本颜色为红色，字体大小为 72px。

请注意，你可以选择将字体大小设置为数字，省略单位 "px"，或者将其写为 "72px"。

## 39.在 React Render 方法中使用 JavaScript

在之前的挑战中，你学习了如何使用大括号{ }将 JavaScript 代码插入到 JSX 代码中，用于访问 props、传递 props、访问 state、在代码中插入注释以及最近学习的定制组件样式等任务。这些都是将 JavaScript 放在 JSX 中的常见用例，但是在 React 组件中使用 JavaScript 代码还有其他方式。

在render方法中编写 JavaScript，你可以把 JavaScript 直接放在return语句之前，而不必将其插入大括号中。这是因为它还不在 JSX 代码中。当你稍后想在return语句中的 JSX 代码中使用变量时，可以将变量名放在大括号中。


在提供的代码中，render方法中有一个包含 20 个短语的数组，用于表示 20 世纪 80 年代经典魔术八球玩具中的答案。绑定ask方法到按钮的单击事件，每次单击该按钮时，将生成随机数并将其存储为 state 中的randomIndex。在第 52 行，删除字符串"change me!"并重新分配answer常量，以便每次组件更新时，你的代码随机访问possibleAnswers数组的不同索引。最后，在p标签内插入answer常量。

## 40.使用 If Else 条件进行渲染

使用 JavaScript 控制渲染视图的另一个应用是将渲染的元素绑定到一个条件。当条件为真时，将呈现一个视图，反之，则呈现另一种视图。你可以在 React 组件的render()方法中使用的标准if/else语句来实现这一点。


MyComponent 的 state 中包含一个布尔值，用于跟踪是否要在 UI 中显示某个元素。按钮切换此值的状态。目前，它每次都呈现相同的 UI。用if/else语句重写render()方法，如果display为true则返回当前标记。否则，返回不带h1元素的标记。

注意： 写if/else语句才能通过测试，使用三元运算符是不会通过的。

## 41.使用 && 获得更简洁的条件

if/else 语句在上一次挑战中是有效的，但是有一种更简洁的方法可以达到同样的结果。假设你正在跟踪组件中的几个条件，并且希望根据这些条件中的每一个来渲染不同的元素。如果你写了很多else if语句来返回稍微不同的 UI，你可能会写很多重复代码，这就留下了出错的空间。相反，你可以使用&&逻辑运算符以更简洁的方式执行条件逻辑。这是完全可行的，因为你希望检查条件是否为真，如果为真，则返回一些标记。这里有一个例子：

{condition && <p>markup</p>}

如果condition为 true，则返回标记。如果 condition 为 false，操作将在判断condition后立即返回false，并且不返回任何内容。你可以将这些语句直接包含在 JSX 中，并通过在每个条件后面写&&来将多个条件串在一起。这允许你在render()方法中处理更复杂的条件逻辑，而无需重复大量代码。


再来看看前面的示例，h1还是在display为true时被渲染，但使用&&逻辑运算符代替if/else语句。

## 42.使用三元表达式进行条件渲染

在继续使用动态渲染技术之前，还有最后一种方法可以渲染你想要的东西，它使用内置的 JavaScript 条件：三元运算符。三元运算符经常被用作 JavaScript 中if/else语句的缩写。它们不像传统的if/else语句那样健壮，但是在 React 开发人员中非常流行，原因之一就是 JSX 的编译原理，if/else语句不能直接插入到 JSX 代码中。你可能在前几个挑战就注意到了这一点--当需要if/else语句时，它总是在return语句外面。如果你想在 JSX 中实现条件逻辑，三元表达式是一个很好的选择。回想一下，三元运算符有三个部分，但是你可以将多个三元表达式组合在一起。以下是基本语法：

condition ? expressionIfTrue : expressionIfFalse

***

代码编辑器在CheckUserAge组件的render()方法中定义了三个常量，它们分别是buttonOne、buttonTwo和buttonThree。每个都分配了一个表示按钮元素的简单 JSX 表达式。首先，使用input和userAge初始化CheckUserAge的 state，并将其值设置为空字符串。

一旦组件将信息渲染给页面，用户应该有一种方法与之交互。在组件的return语句中，设置一个实现以下逻辑的三元表达式：当页面首次加载时，将提交按钮buttonOne渲染到页面。然后，当用户输入年龄并点击该按钮时，根据年龄渲染不同的按钮。如果用户输入的数字小于18，则渲染buttonThree。如果用户输入的数字大于或等于18，则渲染buttonTwo

## 43.根据 Props 有条件地渲染

到目前为止，你已经看到了如何使用if/else、&&,、null和三元运算符（condition ? expressionIfTrue : expressionIfFalse）对渲染什么和何时渲染做出有条件的判定。然而，还有一个重要的话题需要讨论，让你将这些概念中的任何一个或所有概念与另一个强大的 React 功能结合起来：props。使用 props 有条件地渲染代码在 React 开发人员中很常见--也就是说：他们使用给定 prop 的值来自动决定渲染什么。

在这个挑战中，你将设置一个子组件来根据 props 做出渲染决定。你可以使用三元运算符，但是你可以看到过去几个挑战中涵盖的其他几个概念在这种情况下可能同样有用。

***

代码编辑器有两个部分为你定义的组件：一个名为GameOfChance的父组件和一个名为Results的子组件。他们被用来创建一个简单的游戏，用户按下按钮来看他们是赢还是输。

首先，你需要一个简单的表达式，每次运行时都会随机返回一个不同的值。你可以使用Math.random()。每次调用此方法时，此方法返回0（包括）和1（不包括）之间的值。因此，对于50/50的几率，请在表达式中使用Math.random() > .5。从统计学上讲，这个表达式有 50％ 的几率返回true，另外 50％ 返回false。在第 30 行，用此表达式替换注释以完成变量声明。

现在你有了一个表达式，可以用来在代码中做出随机决定，接下来你需要实现以下功能：将Results组件渲染为GameOfChance的子组件，并将expression作为 prop 传递出去，prop 的名字是fiftyFifty。在Results组件中，编写一个三元表达式基于从GameOfChance传来的 propfiftyFifty来渲染文本"You win!"或者"You lose!"。最后，确保handleClick()方法正确计算每个回合，以便用户知道他们玩过多少次。这也可以让用户知道组件实际上已经更新，以防他们连续赢两次或输两次时自己不知道。

## 44.根据组件状态有条件地更改内联 CSS

此时，你已经看到了一些条件渲染的应用程序和内联样式的使用。这里还有一个将这两个主题结合在一起的例子。你也可以根据 React 组件的 state 有条件地渲染 CSS。要执行此操作，请检查条件，如果满足该条件，则修改在 render 方法中分配给 JSX 元素的样式对象。

这个范例对于更加容易理解，因为相比传统的通过直接修改 DOM 元素来应用样式的方法（这在 jQuery 中非常常见），这种方法是一个戏剧性的转变。在传统方法中，你必须跟踪元素何时发生变化，并直接处理实际操作，这使得跟踪变化变得很困难，也可能会让你的用户界面变得不可预测。当你根据一个条件设置一个样式对象时，你描述了 UI 作为应用程序的状态函数应当如何展现。如此便有一个清晰的单向流动的信息流。这是使用 React 编写应用程序时的首选方法。

***
代码编辑器有一个简单的带有边框样式的受控 input 组件。如果用户在输入框中键入超过 15 个字符的文本，你希望将此边框变成红色。添加一个条件来检查这一点，如果条件有效，则将 input 的边框样式设置为3px solid red。你可以通过在 input 中输入文本来尝试。

## 45.使用 Array.map() 动态渲染元素

条件渲染很有用，但是你可能需要组件来渲染未知数量的元素。通常在响应式编程中，程序员在应用程序运行时之前无法知道其 state，因为这在很大程度上取决于用户与该程序的交互。程序员需要提前编写代码来正确处理未知状态。在 React 中使用Array.map()阐明了这个概念。

例如，你创建一个简单的“To Do List”应用程序。作为程序员，你无法知道用户可能在其列表中有多少项。你需要设置组件，以便在使用该程序的人决定今天今日待办事项之前动态渲染正确数量的列表元素。

***

代码编辑器完成了MyToDoList组件的大部分设置。如果你完成了受控表单挑战，这些代码中的一些应该看起来很熟悉。你会注意到一个textarea和一个button，以及一些跟踪它们状态的方法，但是页面当前还没有任何东西被渲染。

在constructor中，创建一个this.state对象并定义两个 state：userInput应该初始化为空字符串，toDoList应该初始化为空数组。接下来，删除items变量旁边render()方法中的注释。取而代之的是，将存储在组件内部 state 中的toDoList数组一一映射并相应的动态呈现li元素。尝试在textarea中输入eat, code, sleep, repeat，然后点击按钮，看看会发生什么。

注意： 你可能知道，像这样的映射操作创建的所有兄弟子元素都需要提供唯一的key属性。别担心，这是下一个挑战的主题。
## 46.给同级元素一个唯一的键属性

上一个挑战展示了如何使用map方法根据用户输入动态渲染多个元素。然而，这个例子中缺少一个重要的部分。创建元素数组时，每个元素都需要一个设置为唯一值的key属性。React 使用这些键来跟踪哪些项目被添加、更改或删除。这有助于在以任何方式修改列表时提高重新渲染过程的效率。请注意，键只需要在同级元素之间是唯一的，它们不需要在应用程序中是全局唯一的。

***

代码编辑器有一个数组，它包含一些前端框架和一个名为Frameworks()的无状态函数组件。Frameworks()需要将数组映射到无序列表，就像上一个挑战一样。完成map回调，为frontEndFrameworks数组中的每个框架返回一个li元素。这次，确保给每个li的key属性设置一个唯一的值。

通常，你希望使 key 能唯一标识要渲染的元素。作为最后的手段，可以使用数组索引，但通常你应该尝试使用唯一标识。

## 47.使用 Array.Filter() 动态过滤数组

map数组方法是一个强大的工具，在使用 React 时经常使用。与map相关的另一种方法是filter，它根据条件过滤数组的内容，然后返回一个新数组。例如，如果你有一个 users 数组，每个数组元素都有一个可以设置为true或false的online属性，你可以只过滤那些在线的用户：

let onlineUsers = users.filter(user => user.online);

***

在代码编辑器中，MyComponent的state由一个 users 数组初始化。有些用户在线，有些则不在线。过滤数组，以便你只看到在线用户。为此，首先使用filter返回一个新数组，该数组只包含online属性为true的用户。然后，在renderOnline变量中，映射经过过滤的数组，并为每个用户返回一个包含它们username文本的li元素。确保像上一个挑战一样包含一个独特的key。
## 48.用 renderToString 在服务器上渲染 React

到目前为止，你已经能够在客户端上渲染 React 组件，一般来说我们都是这么做的。然而，在一些用例中，在服务器上渲染一个 React 组件是有意义的。由于 React 是一个 JavaScript 视图库，所以使用 Node 让 JavaScript 运行在服务器上是可行的。事实上，React 提供了一个可用于此目的的renderToString()方法。

有两个关键原因可以解释为什么服务器上的渲染可能会在真实世界的应用程序中使用。首先，如果不这样做，你的 React 应用程序将包含一个代码量很少的 HTML 文件和一大堆 JavaScript，当它最初加载到浏览器时。这对于搜索引擎来说可能不太理想，因为它们试图为你的网页内容生成索引，以便人们可以找到你。如果在服务器上渲染初始 HTML 标记并将其发送到客户端，则初始页面加载的内容包含搜索引擎可以抓取的所有页面标记。其次，这创造了更快的初始页面加载体验，因为渲染的 HTML 代码量要比整个应用程序的 JavaScript 代码小。React 仍然能够识别你的应用并在初始加载后进行管理。


renderToString()方法由ReactDOMServer提供，在这里已为你定义成全局变量。这个方法接受一个 React 元素作为参数。用它来把App渲染成字符串。