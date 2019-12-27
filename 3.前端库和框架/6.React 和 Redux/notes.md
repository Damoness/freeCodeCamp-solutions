
这个系列的挑战介绍怎样在 React 里使用 Redux。

在一个 React Redux 应用里，创建一个 Redux store 管理 app 的所有状态。React 组件仅订阅 store 中与其角色相关的数据。接着，直接从 React 组件分发 action，触发 store 更新。

## 1.React 和 Redux 入门

这一系列挑战介绍的是 Redux 和 React 的配合，我们先来回顾一下这两种技术的关键原则是什么。React 是提供数据的视图库，能以高效、可预测的方式渲染视图。Redux 是状态管理框架，可用于简化 APP 应用状态的管理。在 React Redux app 应用中，通常可创建单一的 Redux store 来管理整个应用的状态。React 组件仅订阅 store 中与其角色相关的数据，你可直接从 React 组件中分发 actions 以触发 store 对象的更新。

React 组件可以在本地管理自己的状态，但是对于复杂的应用来说，它的状态最好是用 Redux 保存在单一位置，有特定本地状态的独立组件例外。最后一点是，Redux 没有内置的 React，需要安装react-redux包，通过这个方式把 Redux 的state和dispatch作为props传给组件。

在接下来的挑战中，先要创建一个可输入新文本消息的 React 组件，添加这些消息到数组里，在视图上显示数组。接着，创建 Redux store 和 actions 来管理消息数组的状态。最后，使用react-redux连接 Redux store 和组件，从而将本地状态提取到 Redux store 中。

***

创建DisplayMessages组件，把构造函数添加到此组件中，使用含两个属性的状态初始化该组件，这两个属性为：input（设置为空字符串），messages（设置为空数组）。


## 2.首先在本地管理状态

这一关的任务是完成DisplayMessages组件的创建。

***

首先，在render()方法中，让组件渲染input、button、ul三个元素。input元素的改变会触发handleChange()方法。此外，input元素会渲染组件状态中input的值。点击按钮button需触发submitMessage()方法。

接着，写出这两种方法。handleChange()方法会更新input为用户正在输入的内容。submitMessage()方法把当前存储在input的消息与本地状态的messages数组连接起来，并清除input的值。

最后，在ul中展示messages数组，其中每个元素内容需放到li元素内.

## 3.提取状态逻辑给 Redux

完成 React 组件后，我们需要把在本地状态执行的逻辑移到 Redux 中，这是为小规模 React 应用添加 Redux 的第一步。该应用的唯一功能是把用户的新消息添加到无序列表中。下面我们用简单的示例来演示 React 和 Redux 之间的配合。

***

首先，定义 action 的类型 'ADD'，将其设置为常量ADD。接着，定义创建 action 的函数addMessage()，用该函数创建添加消息的 action，把message传给创建 action 的函数并返回包含该消息的action

接着，创建名为messageReducer()的 reducer 方法，为这些消息处理状态。初始状态应为空数组。reducer 向状态中的消息数组添加消息，或返回当前状态。最后，创建 Redux store 并传给 reducer。

## 4.使用 Provider 连接 Redux 和 React

React 和 Redux：使用 Provider 连接 Redux 和 React
在上一挑战中，你创建了 Redux store 和 action，分别用于处理消息数组和添加新消息。下一步要为 React 提供访问 Redux store 及发起更新所需的 actions。react-redux包可帮助我们完成这些任务。

React Redux 提供的 API 有两个关键的功能：Provider和connect。你会在另一个挑战中学connect。Provider是 React Redux 包装 React 应用的 wrapper 组件，它允许你访问整个组件树中的 Reduxstore及dispatch（分发）方法。Provider需要两个 props：Redux store 和 APP 应用的子组件。用于 APP 组件的Provider可这样定义：
```js
<Provider store={store}>
  <App/>
</Provider>
```

***

此时，编辑器上显示的是过去几个挑战中所有代码，包括 Redux store、actions、DisplayMessages组件。新出现的代码是底部的AppWrapper组件，这个顶级组件可用于渲染ReactRedux的Provider，并把 Redux 的 store 作为 props 传入。接着，渲染DisplayMessages为子组件。完成这些任务后，你会看到 React 组件渲染到页面上。

注意： React Redux 在此可作全局变量，因此你可通过点号表示法访问 Provider。利用这一点，编辑器上的代码把Provider设置为常量，便于你在AppWrapper渲染方法中使用。

## 5.映射 State 到 Props

Provider可向 React 组件提供state和dispatch，但你必须确切地指定所需要的 state 和 actions，以确保每个组件只能访问所需的 state。完成这个任务，你需要创建两个函数：mapStateToProps()、mapDispatchToProps()。

在这两个函数中，声明 state 中函数所要访问的部分及需要 dispatch 的创建 action 的函数。完成这些，我们就可以迎接下一个挑战，学习如何使用 React Redux 的connect方法来把函数连接到组件了。

注意： 在幕后，React Redux 用store.subscribe()方法来实现mapStateToProps()。

***

创建mapStateToProps()函数，以state为参数，然后返回一个对象，该对象把 state 映射到特定属性名上，这些属性能通过props访问组件。由于此示例把 app 应用的整个状态保存在单一数组中，你可把整个状态传给组件。在返回的对象中创建messages属性，并设置为state。

## 6.映射 Dispatch 到 Props

mapDispatchToProps()函数可为 React 组件提供特定的创建 action 的函数，以便组件可 dispatch actions，从而更改 Redux store 中的数据。该函数的结构跟上一挑战中的mapStateToProps()函数相似，它返回一个对象，把 dispatch actions 映射到属性名上，该属性名成为props。然而，每个属性都返回一个用 action creator 及与 action 相关的所有数据调用dispatch的函数，而不是返回state的一部分。你可以访问dispatch，因为在定义函数时，我们以参数形式把它传入mapDispatchToProps()了，这跟state传入mapDispatchToProps()是一样的。在幕后，React Redux 用 Redux 的store.dispatch()来管理这些含mapDispatchToProps()的dispatches，这跟它使用store.subscribe()来订阅映射到state的组件的方式类似。

例如，创建 action 的函数loginUser()把username作为 action payload，mapDispatchToProps()返回给创建 action 的函数的对象如下：
```js
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```
***
编辑器上提供的是创建 action 的函数addMessage()。写出接收dispatch为参数的函数mapDispatchToProps()，返回一个 dispatch 函数对象，其属性为submitNewMessage。该函数在 dispatch addMessage()时为新消息提供一个参数。

## 7.连接 Redux 和 React

React 和 Redux：连接 Redux 和 React
既然写了mapStateToProps()、mapDispatchToProps()两个函数，现在你可以用它们来把state和dispatch映射到 React 组件的props了。React Redux 的connect方法可以完成这个任务。此方法有mapStateToProps()、mapDispatchToProps()两个可选参数，它们是可选的，原因是你的组件可能仅需要访问状态但不需要分发任何 actions，反之亦然。

为了使用此方法，需要传入函数参数并在调用时传入组件。这种语法有些不寻常，如下所示：

connect(mapStateToProps, mapDispatchToProps)(MyComponent)

注意： 如果要省略connect方法中的某个参数，则应当用null替换这个参数。

***

在编辑器上有两个函数：mapStateToProps()、mapDispatchToProps()，还有一个叫Presentational的 React 组件。用ReactRedux全局对象中的connect方法将此组件连接到 Redux，并立即在Presentational组件中调用，把结果赋值给一个名为ConnectedComponent的代表已连接组件的新常量。大功告成！你已成功把 React 连接到 Redux！尝试更改任何一个connect参数为null并观察测试结果。


## 8.将 Redux 连接到 Messages App

知道connect怎么实现 React 和 Redux 的连接后，我们可以在 React 组件中应用上面学到的内容。

在上一课，连接到 Redux 的组件命名为Presentational，这个命名不是任意的，这样的术语通常是指未直接连接到 Redux 的 React 组件，他们只负责执行接收 props 的函数来实现 UI 的呈现。与上一挑战相比，本挑战需要把容器组件连接到 Redux。这些组件通常负责把 actions 分派给 store，且经常给子组件传入 store state 属性。

***

到目前为止，我们的编辑器上已包含了整个章节的代码，唯一不同的是，React 组件被重新命名为Presentational，即展示层组件。创建一个新组件，保存在名为Container的常量中。这个常量用connect把Presentational组件和 Redux 连接起来。然后，在AppWrapper中渲染 React Redux 的Provider组件，给Provider传入 Reduxstore属性并渲染Container为子组件。完成这些，消息 app 应用会再次渲染页面。

## 9.将局部状态提取到 Redux 中

胜利就在眼前了！请回顾一下为管理 React messages app 的状态写的 Redux 代码。现在有了连接好的 Redux，你还要从Presentational组件中提取状态管理到 Redux，在Presentational组件内处理本地状态。

***

在Presentational组件中，先删除本地state中的messages属性，被删的 messages 将由 Redux 管理。接着，修改submitMessage()方法，使该方法从this.props那里分发submitNewMessage()；从本地state中传入当前消息输入作为参数。因本地状态删除了messages属性，所以在调用this.setState()时也要删除该属性。最后，修改render()方法，使其所映射的消息是从props接收的，而不是state

完成这些更改后，我们的应用会实现 Redux 管理应用的状态，但它继续运行着相同的功能。此示例还阐明了组件获得本地状态的方式，即在自己的状态中继续跟踪用户本地输入。由此可见，Redux 为 React 提供了很有用的状态管理框架。先前，你仅使用 React 的本地状态也实现了相同的结果，这在应付简单的应用时通常是可行的。但是，随着应用变得越来越大，越来越复杂，应用的状态管理也变得非常困难，Redux 就是为解决这样的问题而诞生的。

## 10.从这里前进

恭喜你完成了 React 和 Redux 的所有课程！在继续前进前，还有一点值得我们注意。通常，我们不会在这样的编辑器中编写 React 应用代码。如果你在自己的计算机上使用 npm 和文件系统，这个挑战可让你一瞥 React 应用的语法之貌。除了使用import语句（这些语句引入了各挑战中提供的所有依赖关系），其代码看起来类似。“管理包（含 npm）”这一节更详细地介绍了 npm。

最后，写 React 和 Redux 的代码通常需要一些配置，且很快会变得复杂起来。如果你想在自己的机器上尝试写代码，点击链接创建 React App 可获取已配置好的现成代码。

另一种做法是在 CodePen 中启用 Babel 作为 JavaScript 预处理器，将 React 和 ReactDOM 添加为外部 JavaScript 资源，在那里编写应用。

***

把'Now I know React and Redux!'这一消息输出到控制台。