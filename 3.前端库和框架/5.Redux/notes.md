## 1.创建一个 Redux Store

Redux 是一个状态管理框架，可以与包括 React 在内的许多不同的 Web 技术一起使用。

在 Redux 中，有一个状态对象负责应用程序的整个状态，这意味着如果你有一个包含十个组件且每个组件都有自己的本地状态的 React 项目，那么这个项目的整个状态将通过 Reduxstore被定义为单个状态对象，这是学习 Redux 时要理解的第一个重要原则：Redux store 是应用程序状态的唯一真实来源。

这也意味着，如果你的应用程序想要更新状态，只能通过 Redux store 执行，单向数据流可以更轻松地对应用程序中的状态进行监测管理。

***

Redux store是一个保存和管理应用程序状态的state，你可以使用 Redux 对象中的createStore()来创建一个 reduxstore，此方法将reducer函数作为必需参数，reducer函数将在后面的挑战中介绍。该函数已在代码编辑器中为你定义，它只需将state作为参数并返回一个state即可。

声明一个store变量并把它分配给createStore()方法，然后把reducer作为一个参数传入即可。

注意: 编辑器中的代码使用 ES6 默认参数语法将 state 的值初始化为5， 如果你不熟悉默认参数，你可以参考 ES6 全部课程，它里面涵盖了这个内容。

## 2.从 Redux Store 获取状态

Redux store 对象提供了几种允许你与之交互的方法，你可以使用getState()方法检索 Redux store 对象中保存的当前的state。

在代码编辑器中可以将上一个挑战中的代码更简洁地重写，在store中使用store.getState()检索state，并将其分配给新变量currentState。

## 3.定义一个 Redux Action

由于 Redux 是一个状态管理框架，因此更新状态是其核心任务之一。在 Redux 中，所有状态更新都由 dispatch action 触发，action 只是一个 JavaScript 对象，其中包含有关已发生的 action 事件的信息。Redux store 接收这些 action 对象，然后更新相应的状态。有时，Redux action 也会携带一些数据。例如，在用户登录后携带用户名，虽然数据是可选的，但 action 必须带有type属性，该属性表示此 action 的类型。

我们可以将 Redux action 视为信使，将有关应用程序中发生的事件信息提供给 Redux store，然后 store 根据发生的 action 进行状态的更新。

***

编写 Redux action 就像声明具有 type 属性的对象一样简单，声明一个对象action并为它设置一个属性type，并将他的值设置成字符串'LOGIN'。

## 4.定义一个 Action Creator

创建 action 后要将 action 发送到 Redux store，以便它可以更新其状态。在 Redux 中，你可以定义动作创建器来完成此任务，action creator 只是一个返回动作的 JavaScript 函数，换句话说，action creator 创建表示动作事件的对象。


定义名为actionCreator()的函数，该函数在调用时返回action对象。

## 5.分发 Action Event

dispatch方法用于将 action 分派给 Redux store，调用store.dispatch()将从 action creator 返回的值发送回 store。

action creator 返回一个具有 type 属性的对象，该属性指定已发生的 action，然后，该方法将 action 对象 dispatch 到 Redux store，根据之前的挑战示例，以下内容是等效的，并且都 dispatch 类型为LOGIN的 action：

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

***

代码编辑器中的 Redux store 具有初始化状态对象{login:'false'}，还有一个名为loginAction()的 action creator，它返回类型为LOGIN的 action，然后通过调用dispatch方法将LOGIN的 action dispatch 给 Redux store，并传递loginAction()创建的 action。

## 6.在 Store 里处理 Action

在一个 action 被创建并 dispatch 之后，Redux store 需要知道如何响应该操作。这就是reducer函数存在的意义。Redux 中的 Reducers 负责响应 action 然后进行状态的修改。reducer将state和action作为参数，并且它总是返回一个新的state。我们要知道这是 reducer 的唯一的作用。它不应有任何其他的作用：比如它不应调用 API 接口，也不应存在任何潜在的副作用。`reducer 只是一个接受状态和动作，然后返回新状态的纯函数`。

`Redux 的另一个关键原则是state是只读的。换句话说，reducer函数必须始终返回一个新的state，并且永远不会直接修改状态.`Redux 不强制改变状态，但是你需要在你的 reducer 函数的代码中强制执行它，你将在以后的挑战中练习这一点。

***

代码编辑器中具有前面的示例以及一个reducer函数。你需要完善reducer函数的内容，使得它如果收到类型为'LOGIN'的action，它将返回一个将login设置为true的 state 对象。否则，它就返回当前的state。请注意，当前state和dispatch的action将被传递给reducer，因此你可以使用action.type直接获取 action 的类型。

## 7.使用 Switch 语句处理多个 Actions

你可以定义 Redux store 如何处理多种 action 类型。比如你正在 Redux store 中进行用户身份验证，如果你希望用户在登录和注销时具有状态的响应，你可以使用具有authenticated属性的单个的 state 对象。你还需要使用 action creators 创建与用户登录和用户注销相对应的 action，以及 action 对象本身。

***

代码编辑器为你创建了 store、actions、action creators。通过编写reducer函数来处理多个身份验证操作。可以在reducer通过使用 JavaScript 的switch来响应不同的 action 事件。这是编写 Redux reducer 时的标准模式，switch 语句选择action.type中的一个值并返回相应的身份验证状态。

注意： 此时，不要担心 state 的不变性，因为在这个示例中它很小而且很简单。所以对于每个操作你都可以返回一个新对象，比如{authenticated:true}。另外，不要忘记在 switch 语句中写一个defaultcase，返回当前的state。这是很重要的，因为一旦你的程序有多个 reducer，当一个 action 被 dispatch 时它们都会运行，即使 action 与该 reducer 无关。在这种情况下，你要确保返回当前的state

## 8.使用 const 声明 Action Types

在使用 Redux 时的一个常见做法是将操作类型指定为只读，然后在任何使用它们的地方引用这些常量。你可以通过将 action types 使用const声明重构你正在使用的代码。

***

将LOGIN和LOGOUT声明为const类型的值，并为它们分别分配字符串'LOGIN'和'LOGOUT'。然后，编辑authReducer()和 action creators 来引用这些常量而不是字符串值。

注意： 通常以全部大写形式写出常量，这也是 Redux 的标准做法。


## 9.注册 Store 监听器

在 Redux store对象上访问数据的另一种方法是store.subscribe()。这允许你将监听器函数订阅到 store，只要一个 action 被 dispatch 就会调用它们。这个方法的一个简单用途是为你的 store 订阅一个函数，它只是在每次收到一个 action 并且更新 store 时记录一条消息。

***

编写一个回调函数，每次 store 收到一个 action 时，它会递增全局变量count，并将此函数传递给store.subscribe()方法。你将会看到store.dispatch()连续三次被调用，每次都直接传入一个 action 对象。观察 dispatch action 之间的控制台输出，看看是否发生了更新。

## 10.组合多个 Reduces


当你应用程序的状态开始变得越来越复杂时，将状态划分为多个部分可能是个更好的选择。相反，请记住 Redux 的第一个原则：所有应用程序状态都保存在 store 中的一个简单的 state 对象中。因此，Redux 提供 reducer 组合作为复杂状态模型的解决方案。定义多个 reducer 来处理应用程序状态的不同部分，然后将这些 reducer 组合成一个 root reducer。然后将 root reducer 传递给 Redux createStore()方法。

为了让我们将可以将多个 reducer 组合在一起，Redux 提供了combineReducers()方法。该方法接受一个对象作为参数，在该参数中定义一个将键与特定 reducer 函数关联的属性。Redux 将使用你给的键值作为关联状态的名称。

通常情况下，当它们在某种程度上是独一无二的，为每个应用程序的 state 创建一个减少器是一个很好的做法。例如，在一个带有用户身份验证的记笔记应用程序中，一个 reducer 可以处理身份验证而另一个处理用户提交的文本和注释。对于这样的应用程序，我们可能会编写combineReducers()方法，如下所示：
```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```
现在，notes键将包含与我们的注释相关联的所有状态，并由我们的notesReducer处理。这就是如何组合多个 reducer 来管理更复杂的应用程序状态，在此示例中，Redux store 中保存的状态将是一个包含auth和notes属性的简单对象。

***

代码编辑器中提供了counterReducer()和authReducer()函数以及 Redux store。使用Redux.combineReducers()方法编写完成rootReducer()函数。将counterReducer分配给一个叫做count的键，将authReducer分配给一个叫做auth的键。

## 11.发送 Action Data 给 Store

到目前为止，你已经学会了如何将 action dispatch 给 Redux store，但到目前为止，这些 action 并未包含除 type之外的任何信息。你还可以发送特定数据和 action 一起。事实上，这是非常常见的，因为 action 通常源于一些用户交互，并且往往会携带一些数据，Redux store 经常需要知道这些数据。

***

在代码编辑器中定义了一个基础的notesReducer()和addNoteText()action creator。完成addNoteText()函数的主体，这样它就会返回一个action对象。该对象应该包含一个type属性，其值为ADD_NOTE，还有一个text属性通过 action creator 将值设置为note。当你调用 action creator 时，你需要传入可以访问该对象的特定注释信息。

接下来，完成在notesReducer()中编写的switch语句。你需要添加一个处理addNoteText()操作的选项。只要存在ADD_NOTE类型的 action，就应该触发 case，并且它应该在传入的action上返回text属性作为新的state

这个 action 将在代码底部发送。一旦完成后，运行代码并观察控制台。这就是将特定于 action 的数据发送到 store 并在更新 store state时使用它所需的全部内容。

## 12.使用中间件处理异步操作

目前为止的挑战都在避免讨论异步操作，但它们是 Web 开发中不可避免的一部分。在某些时候，你需要在 Redux 应用程序中使用异步请求，那么如何处理这些类型的请求？Redux 中间件专为此目的而设计，称为 Redux Thunk 中间件。这里简要介绍如何在 Redux 中使用它。

如果要使用 Redux Thunk 中间件，请将其作为参数传递给Redux.applyMiddleware()。然后将此函数作为第二个可选参数提供给createStore()函数，看一下编辑器底部的代码，然后，要创建一个异步的 action，你需要在 action creator 中返回一个以dispatch为参数的函数。在这个函数中，你可以 dispatch action 并执行异步请求。

在此示例中，使用setTimeout()调用模拟异步请求。通常在执行异步行为之前 dispatch action，以便应用程序状态知道正在请求某些数据（例如，这个状态可以显示加载图标）。然后，一旦收到数据，就会发送另一个 action，这个 action 完成的时间将作为数据的一个有效值。

请记住，你正在通过将dispatch作为参数传递给这个特殊的 action creator。你用于 dispatch 你的 action 时只需将 action 直接传递给 dispatch，中间件就可以处理其余的部分。

***

在handleAsync()的 action creator 中编写两个 dispatch 事件。在setTimeout()（模拟 API 调用）之前 dispatchrequestingData()。然后在收到（模拟）数据后，dispatchreceivedData()action，传入这些数据。现在你知道如何处理 Redux 中的异步操作，其他所有操作都继续像以前一样。


## 13.用 Redux 写一个计数器

现在你已经了解了 Redux 的所有核心原则！你已经了解了如何创建 action 和 action creator，创建 Redux store，通过 store dispatch action，以及使用纯粹的 reducer 设计状态更新。你甚至已经看到过如何使用 reducer 组合管理复杂状态并处理异步操作。这些例子很简单，但这些概念是 Redux 的核心原则。如果你理解它们，你就可以开始构建自己的 Redux 应用了。接下来的挑战包括关于state不变性的一些细节，但是，这里是对你到目前为止学到的所有内容的回顾。

***

在本课程中，你将从头开始使用 Redux 实现一个简单的计数器。基本知识在代码编辑器中提供，但你必须完成详细的内容！使用提供给你的名称并定义incAction和decActioaction creator counterReducer()，INCREMENT和DECREMENTaction 类型，最后是 Redux store。一旦完成，你应该能够 dispatch INCREMENT或DECREMENT动作来增加或减少store中保存的状态。开始构建你的第一个 Redux 应用程序吧，祝你好运！

## 14.永不改变状态


这些最后的挑战描述了在 Redux 中强制执行状态不变性关键原则的几种方法。不可变状态意味着你永远不会直接修改状态，而是返回一个新的状态副本。

如果你拍摄 Redux 应用程序状态的快照，你会看到类似state 1，state 2，state 3，state 4，...等等，每个状态可能与最后一个状态相似，但每个状态都是一个独特的数据。事实上，这种不变性是什么提供了你可能听说过的时间旅行调试等功能。

Redux 并没有积极地在其 store 或者 reducer 中强制执行状态不变性，责任落在程序员身上。幸运的是，JavaScript（尤其是 ES6）提供了一些有用的工具，可以用来强制执行状态的不变性，无论是string，number，array或object。请注意，字符串和数字是原始值，并且本质上是不可变的。换句话说，3 总是 3，你不能改变数字 3 的值。然而，array或object是可变的。实际上，你的状态可能包括array或object，因为它们在表示许多类型信息的数据结构时非常有用。

***

代码编辑器中有一个store和reducer，用于管理待办事项。完成在 reducer 中编写ADD_TO_DO的情况，使用标准 JavaScript 或 ES6 可以通过几种方法来实现这一目标。看看是否可以找到一种方法来返回一个新数组，其中来自action.todo的项目添加到数组的末尾。

## 15.在数组中使用扩展运算符

ES6 中有助于在 Redux 中强制执行状态不变性的一个解决方案是扩展运算符：...。扩展运算符具有很多的应用，其中一种非常适合通过一个已有的数组生成一个新数组。这是相对较新的，但常用的语法。例如，如果你有一个数组myArray并写：

let newArray = [...myArray];

newArray现在是myArray的克隆。两个数组仍然在内存中单独存在。如果你执行像newArray.push(5)这样的突变，myArray不会改变。...有效将myArray中的值传播到新数组中。要克隆数组但在新数组中添加其他值，可以编写[... myArray，'new value']。这将返回一个由中的值组成的新数组。myArray和字符串'new value'作为最后一个值。扩展语法可以像这样在数组组合中多次使用，但重要的是要注意它只做一个浅拷贝这就是说，它只为一维数组提供了不可变的数组操作。


添加待办事项时，使用 spread 运算符返回新的状态副本。

## 16.从数组中删除项目

是时候练习从数组中删除项目了。扩展运算符也可以在这里使用。其他有用的JavaScript方法包括slice()和concat()。

***

reducer 和 action creator 被修改为根据项目的索引从数组中删除一个项目。完成编写 reducer 以便返回一个新的状态数组，并删除特定索引处的项目。

## 17.使用 Object.assign 拷贝对象

最后几个挑战适用于数组，但是当状态是object时，有一些方法可以帮助强制执行状态不变性。处理对象的一个方法是Object.assign()。Object.assign()获取目标对象和源对象，并将源对象中的属性映射到目标对象。任何匹配的属性都会被源对象中的属性覆盖。通常用于通过传递一个空对象作为第一个参数，然后是要用复制的对象来制作对象的浅表副本。这是一个例子：

const newObject = Object.assign({}, obj1, obj2);

这会创建newObject作为新的object，其中包含obj1和obj2中当前存在的属性。

***

Redux 状态和 action 被修改为处理state的对象。编辑代码以返回一个新的state对象，用于类型的 actionONLINE，它将status属性设置为字符串online。尝试使用Object.assign()来完成挑战。