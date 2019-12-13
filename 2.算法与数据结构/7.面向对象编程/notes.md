## 1.创建一个基本的 JavaScript 对象
想想我们在生活中每天都可见到的事物：比如汽车、商店以及小鸟等。它们都是物体：即人们可以观察和与之互动的实体事物。

那么这些物体都有哪些特征呢？比如汽车的特征是有轮子，商店是用来出售商品的，而小鸟的特征是有翅膀。

这些特征，或者说是属性定义了一个物体由什么构成的。需要注意的是：那些相似的物体可以拥有相同的属性，但是这些属性可能会有不同的值。举个例子：所有的汽车都有轮子，但并不是所有汽车的轮子个数都是一样的。

JavaScript 中的对象可以用来描述现实世界中的物体，并赋予他们属性和行为，就像它们在现实世界中的对应物一样。下面是使用这些概念来创建一个duck 对象的示例：
```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```
这个duck 对象有两组键值对：一个是name属性，它的值是 "Aflac"；另一个是numLegs属性，它的值是 2。
## 2.使用点符号来访问对象的属性

在上一个挑战中，我们创建了一个拥有不同属性的对象，现在我们来看看该如何访问这些属性：
```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
// 这段代码会在控制台中输出 "Aflac"
```
我们可以用“点号表示法”来访问对象的属性，只需要在对象名称后面加上.以及属性名即可。比如，duck.name就可以访问到 "Aflac"。

## 3.在对象上创建方法

对象可以有一个叫做方法的特殊属性。

方法其实是一个值为函数的属性，它可以为一个对象添加不同的行为。以下就是一个带有方法属性的duck示例：
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
// 返回了: "The name of this duck is Aflac."
```
这个例子给duck对象添加了一个sayName 方法，这个方法返回一个包含duck名字的句子。

注意：这个方法在返回语句中使用duck.name的方式来获取name的属性值。在下一个挑战中我们将会使用另外一种方法来实现。
## 4.使用 this 关键字使代码更加可重用

在上一个挑战中我们了解了该如何给duck对象设置一个方法属性。然后我们通过使用“点号表示法”duck.name来获取name的属性值而不需要使用return语句：
```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```
虽然这是访问对象属性的有效方法，但是这里有一个陷阱。如果变量名发生了改变，那么引用了原始名称的任何代码都需要更新。在一个简短的对象定义中这并不是问题，但是如果对象有很多对其属性的引用，那么发生错误的可能性就更大了。

我们可以使用this关键字这个方法来避免这一问题：
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
this是一个很复杂的知识点，而上面那个例子也只是使用this的一种方法而已。在当前的上下文环境中，this指向的就是与这个方法有关联的duck对象。

如果把对象的变量名改为mallard，那使用this就没有必要在代码中找到所有指向duck的部分，这样可以使得代码更具有可读性和复用性。



## 5.定义构造函数

构造函数用以创建一个新对象，并给这个新对象定义属性和行为。因此这是创建新对象的一个最基本的方式。

以下就是一个构造函数的示例：
```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```
这个构造函数定义了一个Bird对象，其属性name、color和numLegs的值分别被设置为Albert、blue和 2。

构造函数遵循一些惯例规则：

构造函数函数名的首字母最好大写，这是为了方便我们区分构造函数和其他非构造函数。
构造函数使用this关键字来给它将创建的这个对象设置新的属性。在构造函数里面，this指向的就是它新创建的这个对象。
构造函数定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。

## 6.使用构造函数创建对象

在上一个挑战中，我们用所学到的知识创建了一个Bird构造函数：
```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
  // 构造函数里面的 "this" 总是指向新创建的实例。
}

let blueBird = new Bird();
```
注意：通过构造函数创建对象的时候要使用new操作符。因为只有这样，JavaScript 才知道要给Bird这个构造函数创建一个新的实例：blueBird。如果不使用new操作符来新建对象，那么构造函数里面的this就无法指向新创建的这个对象实例，从而产生不可预见的错误。

现在blueBird这个实例就继承了Bird这个构造函数的所有属性，如下：
```js
blueBird.name; // => Albert
blueBird.color; // => blue
blueBird.numLegs; // => 2
```
由构造函数创建的实例也和其他对象一样，它的属性可以被访问和修改：
```js
blueBird.name = 'Elvira';
blueBird.name; // => Elvira
```

## 7.扩展构造函数以接收参数

上一个挑战中Bird和Dog构造函数运行得不错。但是，注意到没有：所有通过Bird构造函数创建出来的实例Birds都自动的取名为 Albert，颜色都是蓝色，还都有两条腿。如果你想要新创建出来的小鸟们拥有不同的名字和颜色要怎么办呢？当然，手动的去修改每一个小鸟实例自己的属性也是可以实现的，只是会增加很多无谓的工作量：
```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```
假如你写了一个程序来追踪一个鸟舍里面的几百只甚至几千只不同的小鸟，你将会花费很多时间去创建所有的小鸟实例并给它们的属性一一修改为不同的值。

为了减轻创建不同Bird对象的工作量，你可以给你的Bird设置为可以接收参数的构造函数：
```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```
然后将值通过参数的方式传递给Bird构造函数来定义每一个唯一的小鸟实例：
```js
let cardinal = new Bird("Bruce", "red");
```
这给Bird的名字和颜色属性分别赋值为 Bruce 和红色提供了另外一种方法。但numLegs属性被默认赋值为 2。

cardinal有以下这些属性：
```js
cardinal.name // => Bruce
cardinal.color // => red
cardinal.numLegs // => 2
```
这样一来构造函数就变得很灵活了。现在可以直接定义每个Bird实例在创建时的属性，这是 JavaScript 构造函数非常实用的用法之一。它们根据共同或相似的属性和行为将对象归纳为一组，并能够自动的创建各自实例。

## 8.使用 instance of 验证对象的构造函数

凡是通过构造函数创建出的新对象，都叫做这个构造函数的实例。JavaScript 提供了一种很简便的方法来验证这个事实，那就是通过instanceof操作符。instanceof允许你将对象与构造函数之间进行比较，根据对象是否由这个构造函数创建的返回true或者false。以下是一个示例：
```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true
```
如果一个对象不是使用构造函数创建的，那么instanceof将会验证这个对象不是构造函数的实例：
```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird; // => false
```
## 9.了解自己的属性

请看下面的实例，Bird构造函数定义了两个属性：name和numLegs：
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```
name和numLegs被叫做自身属性，因为他们是直接在实例对象上定义的。这就意味着duck和canary这两个对象分别拥有这些属性的独立副本。

事实上，Bird的这些实例都将拥有这些属性的独立副本。

以下的代码将duck里面所有的自身属性都存到一个叫ownProps的数组里面：
```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]
```
## 10.使用原型属性来减少重复代码

所有Bird实例可能会有相同的numLegs值，所以在每一个Bird的实例中本质上都有一个重复的变量numLegs。

当只有两个实例时可能并不是什么问题，但想象一下如果有数百万个实例，这将会产生许许多多重复的变量。

这里有一个更好的方法可以解决上述问题，那就是使用Bird的原型。原型是一个可以在所有Bird实例之间共享的对象。以下是一个在Bird prototype中添加numLegs属性的示例：
```js
Bird.prototype.numLegs = 2;
```
现在所有的Bird实例都拥有了共同的numLegs属性值。
```js
console.log(duck.numLegs); // 在控制台输出 2
console.log(canary.numLegs); // 在控制台输出 2
```
由于所有的实例都可以继承原型上的属性，所以可以把原型看作是创建对象的 "配方"。

请注意：duck和canary的原型是Bird构造函数原型Bird.prototype的一部分。JavaScript 中几乎所有的对象都有一个原型属性，这个属性是属于它所在的构造函数的一部分。

## 11.迭代所有属性

现在你已经了解了两种属性: 自身属性和原型属性。自身属性是直接在对象上定义的。而原型属性是定义在prototype上的：
```js
function Bird(name) {
  this.name = name; // 自身属性
}

Bird.prototype.numLegs = 2; // 原型属性

let duck = new Bird("Donald");
```
这个示例会告诉你如何将duck的自身属性和原型属性分别添加到ownProps数组和prototypeProps数组里面：
```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // 输出 ["name"]
console.log(prototypeProps); // 输出 ["numLegs"]
```

## 12.了解构造函数属性

在上一个挑战中创建的实例对象duck和beagle都有一个特殊的constructor属性：
```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); //输出 true
console.log(beagle.constructor === Dog); //输出 true
```
需要注意到的是这个constructor属性是对创建这个实例的构造函数的一个引用。

constructor属性存在的一个优势是，我们可以通过检查这个属性来找出它是一个什么样的对象。下面是一个例子，来看看是怎么使用的：
```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```
注意：
由于constructor属性可以被重写（在下面两节挑战中将会遇到），所以使用instanceof方法来检查对象的类型会更好。


## 13.将原型更改为新对象

到目前为止，你已经可以单独给prototype添加属性了：
```js
Bird.prototype.numLegs = 2;
```
这将在添加许多属性的时候变得单调乏味。
```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```
一种更有效的方法就是给对象的prototype设置为一个已经包含了属性的新对象。这样一来，所有属性都可以一次性添加进来：
```js
Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

## 14.更改原型时，记得设置构造函数属性
手动给新对象重新设置原型对象，会产生一个重要的副作用：删除了constructor属性！我们来看一下，上一个挑战中duck的constructor属性输出到控制台的结果：
```js
console.log(duck.constructor)
// 哎呀，控制台中输出了 undefined！
```
为了解决这个问题，凡是手动给新对象重新设置过原型对象的，都别忘记在原型对象中定义一个constructor属性：
```js
Bird.prototype = {
  constructor: Bird, // 定义 constructor 属性
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
## 15.了解对象的原型来自哪里
就像人们从父母那里继承基因一样，对象也可直接从创建它的构造函数那里继承其原型。请看下面的例子：Bird构造函数创建了一个duck对象：
```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```
duck从Bird构造函数那里继承了它的原型，你可以使用isPrototypeOf方法来验证他们之间的关系：
```js
Bird.prototype.isPrototypeOf(duck);
// 返回 true
```

## 16.了解原型链

JavaScript 中所有的对象（除了少数例外）都有自己的`原型`。而且，对象的`原型`本身也是一个对象。
```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object
```
正因为原型是一个对象，所以原型对象也有它自己的原型！这样看来的话，Bird.prototype的原型就是Object.prototype：
```js
Object.prototype.isPrototypeOf(Bird.prototype);
// 返回 true
```
这有什么作用呢？你可能还记得我们在上一个挑战中学到的hasOwnProperty方法：
```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // => true
```
hasOwnProperty是定义在Object.prototype上的一个方法，尽管在Bird.prototype和duck上并没有定义该方法，但是我们依然可以在这两个对象上访问到。这就是一个原型链。

在这个原型链中，Bird构造函数是父级，duck是子级。Object则是Bird构造函数和duck实例共同的父级。

Object是 JavaScript 中所有对象的父级，也就是原型链的最顶层。因此，所有对象都可以访问hasOwnProperty方法。

## 17.使用继承避免重复
有一条原则叫做：`Don't Repeat Yourself`，常以缩写形式DRY出现，意思是“不要自己重复”。编写重复代码会产生的问题是：任何改变都需要去多个地方修复所有重复的代码。这通常意味着我们需要做更多的工作，会产生更高的出错率。

请观察下面的示例，Bird和Dog共享describe方法：
```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
我们可以看到describe方法在两个地方重复定义了。根据以上所说的DRY原则，我们可以通过创建一个Animal 超类（或者父类）来重写这段代码：
```js
function Animal() { };

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
Animal构造函数中定义了describe方法，可将Bird和Dog这两个构造函数的方法删除掉：
```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

## 18.从超类继承行为

在上一个挑战中，我们创建了一个Animal 超类，用来定义所有动物共有的行为：
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```
在这一节以及下一节挑战中我们将学习如何给Bird、Dog重写Animal中的方法，而无需重新定义它们。这里我们会用到构造函数的继承特性。

这一节挑战中我们学习第一步：创建一个超类（或者叫父类）的实例。

你已经学会了一种创建Animal实例的方法，即使用new操作符：
```js
let animal = new Animal();
```
此语法用于继承时会存在一些缺点，这些缺点对于当前我们这个挑战来说太复杂了。相反，我们学习另外一种没有这些缺点的方法来替代new操作：
```js
let animal = Object.create(Animal.prototype);
```
Object.create(obj)创建了一个新对象，并指定了obj作为新对象的原型。回忆一下，我们之前说过原型就像是创建对象的“配方”。如果我们把animal的原型设置为与Animal构造函数的原型一样，那么就相当于让animal这个实例的配方与Animal其他实例的配方一样了。
```js
animal.eat(); // 输出 "nom nom nom"
animal instanceof Animal; // => true
```
## 19.将子辈的原型设置为父辈的实例

在上一个挑战中，我们学习了从超类（或者叫父类） Animal继承其行为的第一个步骤：创建一个Animal的实例。

这一节挑战我们将学习第二个步骤：给子类型（或者子类）设置原型。这样一来，Bird就是Animal的一个实例了。
```js
Bird.prototype = Object.create(Animal.prototype);
```
请记住，原型类似于创建对象的“配方”。从某种意义上来说，Bird对象的配方包含了Animal构造函数的所有关键“成分”。
```js
let duck = new Bird("Donald");
duck.eat(); // 输出 "nom nom nom"
```
duck继承了Animal构造函数的所有属性，其中包括了eat方法。

## 20.重置一个继承的构造函数属性

当一个对象从另一个对象那里继承了其原型，那它也继承了父类的 constructor 属性。

请看下面的举例：
```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}
```
但是duck和其他所有Bird的实例都应该表明它们是由Bird创建的，而不是由Animal创建的。为此，你可以手动把Bird的 constructor 属性设置为Bird对象：
```js
Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}
```

## 21.继承后添加方法

从父类继承其原型对象的构造函数除了继承的方法之外，还可以有自己的方法。

请看举例：Bird是一个构造函数，它继承了Animal构造函数的原型：
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```
除了从Animal构造函数继承的行为之外，还需要给Bird对象添加它独有的行为。这里，我们给Bird对象添加一个fly()函数。函数会以一种与其他构造函数相同的方式添加到Bird的原型中：
```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```
现在Bird的实例中就有了eat()和fly()这两个方法：
```js
let duck = new Bird();
duck.eat(); // 输出 "nom nom nom"
duck.fly(); // 输出 "I'm flying!"
```


## 22.重写继承的方法

在上一个挑战中，我们学习了一个对象可以通过复制另一个对象的原型来继承其属性和行为（或方法）：
```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```
然后，ChildObject将自己的方法链接到它的原型中，我们可以像这样访问：
```js
ChildObject.prototype.methodName = function() {...};
```
我们还可以重写继承的方法。以同样的方式——通过使用一个与需要重写的方法相同的方法名，向ChildObject.prototype中添加方法。

请看下面的举例：Bird重写了从Animal继承来的eat()方法：
```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// 继承了 Animal 的所有方法
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() 重写了 Animal.eat() 方法
Bird.prototype.eat = function() {
  return "peck peck peck";
};
```
如果你有一个实例：let duck = new Bird();，然后你调用了duck.eat()，以下就是 JavaScript 在duck的原型链上寻找方法的过程：

1. duck => 这里定义了 eat() 方法吗？没有。

2. Bird => 这里定义了 eat() 方法吗？=> 是的。执行它并停止往上搜索。

3. Animal => 这里也定义了 eat() 方法，但是 JavaScript 在到达这层原型链之前已停止了搜索。

4. Object => JavaScript 在到达这层原型链之前也已经停止了搜索。



## 23.使用 Mixin 在不相关对象之间添加共同行为

正如你所见，行为是可以通过继承来共享的。然而，在有些情况下，继承不是最好的解决方案。继承不适用于不相关的对象，比如Bird和Airplane。虽然它们都可以飞行，但是Bird并不是一种Airplane，反之亦然。

对于不相关的对象，更好的方法是使用mixins。mixin允许其他对象使用函数集合。
```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```
flyMixin能接受任何对象，并为其提供fly方法。
```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```
这里的flyMixin接收了bird和plane对象，然后将fly方法分配给了每一个对象。现在bird和plane都可以飞行了：
```js
bird.fly(); // 输出 "Flying, wooosh!"
plane.fly(); // 输出 "Flying, wooosh!"
```
注意观察mixin是如何允许相同的fly方法被不相关的对象bird和plane重用的。


## 24.使用闭包保护对象内的属性不被外部修改

在上一次挑战中，bird有一个公共属性name。公共属性的定义就是：它可以在bird的定义范围之外被访问和更改。
```js
bird.name = "Duffy";
```
因此，代码的任何地方都可以轻松地将bird的 name 属性更改为任意值。想想密码和银行账户之类的东西，如果代码库的任何部分都可以轻易改变，那么将会引起很多问题。

使属性私有化最简单的方法就是在构造函数中创建变量。可以将该变量范围限定在构造函数中，而不是全局可用。这样，属性只能由构造函数中的方法访问和更改。
```js
function Bird() {
  let hatchedEgg = 10; // 私有属性

  this.getHatchedEggCount = function() { // bird 对象可以是使用的公有方法
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); // 返回 10
```
这里的getHachedEggCount是一种特权方法，因为它可以访问私有属性hatchedEgg。这是因为hatchedEgg是在与getHachedEggCount相同的上下文中声明的。在 JavaScript 中，函数总是可以访问创建它的上下文。这就叫做闭包。

## 25.了解立即调用函数表达（IIFE）

JavaScript 中的一个常见模式就是，函数在声明后立刻执行：
```js
(function () {
  console.log("Chirp, chirp!");
})(); // 这是一个立即执行的匿名函数表达式
// 立即输出 "Chirp, chirp!"
```
请注意，函数没有名称，也不存储在变量中。函数表达式末尾的两个括号（）导致它被立即执行或调用。这种模式被叫做`自执行函数表达式`或者`IIFE`。



## 26.使用 IIFE 创建一个模块

一个`自执行函数表达式（IIFE）`通常用于将相关功能分组到单个对象或者是`模块`中。例如，先前的挑战中定义了一个混合类：
```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```
我们可以将这些`mixins`分成以下模块：
```js
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
}) (); // 末尾的两个括号导致函数被立即调用
```
注意：一个自执行函数表达式（IIFE）返回了一个motionModule对象。返回的这个对象包含了作为对象属性的所有mixin行为。

模块模式的优点是，所有的运动行为都可以打包成一个对象，然后由代码的其他部分使用。下面是一个使用它的例子：

motionModule.glideMixin(duck);
duck.glide();
