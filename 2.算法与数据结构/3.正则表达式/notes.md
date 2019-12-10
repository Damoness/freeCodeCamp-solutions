
正则表达式是表示搜索模式的特殊字符串。也被称为“regex”或“regexp”，它们可以帮助程序员匹配、搜索和替换文本。由于一些字符具有特殊的含义，正则表达式可能会显得晦涩难懂。我们的目标是将这些符号和文本组合成一个你想要的匹配模式，但这只是你想要的。本节将介绍字符、一些快捷方式以及编写正则表达式的常用用法

## 1.使用测试方法
在编程语言中，正则表达式用于匹配指定的字符串。通过正则表达式创建匹配模式（规则）可以帮你完成指定匹配。

如果你想要在字符串"The dog chased the cat"中匹配到"the"这个单词，你可以使用如下正则表达式：/the/。注意，正则表达式中不需要引号。

JavaScript 中有多种使用正则表达式的方法。测试正则表达式的一种方法是使用.test()方法。.test()方法会把你编写的正则表达式应用到一个字符串（即括号内的内容），如果你的匹配模式成功匹配到字符，则返回true，反之，返回false。
```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```
## 2.匹配文字字符串
在上一个挑战中，你使用正则表达式/Hello/搜索到了字符串"Hello"。那个正则表达式在字符串中搜寻"Hello"的文字匹配。下面是另一个在字符串中搜寻"Kevin"的示例：
```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// Returns true
```
任何其他形式的"Kevin"都不会被匹配。例如，正则表达式/Kevin/不会匹配"kevin"或者"KEVIN"。
```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// Returns false
```
后续的挑战将为你展示如何匹配其他形式的字符串。
## 3.同时用多种模式匹配文字字符串
使用正则表达式/coding/，你可以在其他字符串中查找"coding"。

这对于搜寻单个字符串非常有用，但仅限于一种匹配模式。你可以使用|操作符来匹配多个规则。

此操作符匹配在它之前或之后的匹配模式。例如，如果你想匹配"yes"或"no"，你需要的正则表达式是/yes|no/。

你还可以匹配多个规则，这可以通过添加更多的匹配模式来实现。这些匹配模式将包含更多的|操作符来分隔它们，比如/yes|no|maybe/。
## 4.匹配时忽略大小写
到目前为止，你已经了解了如何用正则表达式来执行字符串的文字匹配。但有时候，你可能也想匹配不同的英文字母大小写。

大小写（或者字母大小写）是大写字母和小写字母的区别。大写字母的例子有`"A"`、`"B"`和`"C"`。小写字母的例子有"a"、"b"和"c"。

你可以使用标志（flag）来匹配这两种情况。标志有很多，不过这里我们只关注忽略大小写的标志——i。你可以通过将它附加到正则表达式之后来使用它。这里给出使用该标志的一个实例/ignorecase/i。这个字符串可以匹配字符串"ignorecase"、"igNoreCase"和"IgnoreCase"。
## 5.提取匹配项
到目前为止，你只是检查了一个匹配模式是否存在于字符串中。你还可以使用.match()方法来提取你找到的实际匹配项。

请使用字符串来调用.match()方法，并在括号内传入正则表达式。以下是一个示例：
```js
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```
## 6.全局匹配
到目前为止，你只能提取或搜寻一次匹配模式。
```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
```
若要多次搜寻或提取匹配模式，你可以使用g标志。
```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
```
## 7.用通配符.匹配任何内容
有时你不会（或不需要）知道匹配模式中的确切字符。如果要精确匹配到完整的单词，那出现一个拼写错误就会匹配不到。幸运的是，你可以使用通配符.来处理这种情况。

通配符.将匹配任何一个字符。通配符也叫dot或period。你可以像使用正则表达式中任何其他字符一样使用通配符。例如，如果你想匹配"hug"、"huh"、"hut"和"hum"，你可以使用正则表达式/hu./匹配以上四个单词。
```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
```
## 8.将单个字符与多种可能性匹配
你已经了解了如何匹配文字匹配模式（/literal/）和通配符（/./）。这是正则表达式的两种极端情况，一种是精确匹配，而另一种则是匹配所有。在这两种极端情况之间有一个平衡选项。

你可以使用字符集搜寻具有一定灵活性的文字匹配模式。字符集允许你通过把它们放在方括号（[和]）之间的方式来定义一组你需要匹配的字符串。

例如，你想要匹配"bag"、"big"和"bug"，但是不想匹配"bog"。你可以创建正则表达式/b[aiu]g/来执行此操作。[aiu]是只匹配字符"a"、"i"或者"u"的字符集。
```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```
使用元音字符集（a、e、i、o、u）在你的正则表达式vowelRegex中匹配到字符串quoteSample中的所有元音。

注意
一定要同时匹配大小写元音。
## 9.匹配字母表中的字母
你了解了如何使用字符集来指定要匹配的一组字符串，但是当你需要匹配大量字符（例如，字母表中的每个字母）时，有一种写法可以让实现这个功能变得简短。

在字符集中，你可以使用连字符（-）来定义要匹配的字符范围。

例如，要匹配小写字母a到e，你可以使用[a-e]。
```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```
## 10.匹配字母表中的数字和字母
使用连字符（-）匹配字符范围并不仅限于字母。它还可以匹配一系列数字。

例如，/[0-5]/匹配0和5之间的任意数字，包含0和5。

此外，还可以在单个字符集中组合一系列字母和数字。
```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```
## 11.匹配单个未指定的字符
到目前为止，你已创建了一个你想要匹配的字符集合，但你也可以创建一个你不想匹配的字符集合。这些类型的字符集称为否定字符集。

要创建否定字符集，你需要在开始括号后面和不想匹配的字符前面放置插入字符（即^）。

例如，/[^aeiou]/gi匹配所有非元音字符。注意，字符.、!、[、@、/和空白字符等也会被匹配，该否定字符集仅排除元音字符。

***
创建一个匹配所有非数字或元音字符的正则表达式。请记得在正则表达式中包含恰当的标志。

## 12.匹配出现一次或多次的字符

有时，你需要匹配出现一次或者连续多次的的字符（或字符组）。这意味着它至少出现一次，并且可能重复出现。

你可以使用+符号来检查情况是否如此。记住，字符或匹配模式必须一个接一个地连续出现。

例如，/a+/g会在"abc"中匹配到一个匹配项，并且返回["a"]。因为+的存在，它也会在"aabc"中匹配到一个匹配项，然后返回["aa"]。

如果它是检查字符串"abab"，它将匹配到两个匹配项并且返回["a", "a"]，因为a字符不连续，在它们之间有一个b字符。最后，因为在字符串"bcd"中没有"a"，因此找不到匹配项。

## 13.匹配出现零次或多次的字符
上一次的挑战中使用了加号+来查找出现一次或多次的字符。还有一个选项可以匹配出现零次或多次的字符。

执行该操作的字符叫做asterisk或star，即*。
```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```
## 14.用惰性匹配来查找字符

在正则表达式中，`贪婪`匹配会匹配到符合正则表达式匹配模式的字符串的最长可能部分，并将其作为匹配项返回。另一种方案称为`懒惰`匹配，它会匹配到满足正则表达式的字符串的最小可能部分。

你可以将正则表达式`/t[a-z]*i/`应用于字符串`"titanic"`。这个正则表达式是一个以t开始，以i结束，并且中间有一些字母的匹配模式。

正则表达式默认是`贪婪`匹配，因此匹配返回为`["titani"]`。它会匹配到适合该匹配模式的最大子字符串。

但是，你可以使用`?`字符来将其变成`懒惰`匹配。调整后的正则表达式`/t[a-z]*?i/`匹配字符串"titanic"返回`["ti"]`。

## 15.在狩猎中找到一个或多个罪犯
是时候暂停和测试你的新正则表达式写作技巧了。一群罪犯逃出监狱逃跑，但你不知道有多少人。但是，你知道他们和其他人在一起时会保持紧密联系。你有责任立刻找到所有的罪犯。

这里有一个示例来回顾如何做到这一点：

当字母z在一行中出现一次或连续多次时，正则表达式/z+/会匹配到它。它会在以下所有字符串中找到匹配项：
```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```
但是它不会在以下字符串中找到匹配项，因为它们中没有字母z：
```js
""
"ABC"
"abcabc"
```
编写一个贪婪正则表达式，在一组其他人中匹配到一个或多个罪犯。罪犯由大写字母C表示。
## 16.匹配字符串的开头
先前的挑战表明，正则表达式可以用于查找许多匹配项。它们还用于搜寻字符串中特定位置的匹配模式。

在之前的挑战中，你使用`字符集`中的`插入`符号（^）来创建一个`否定字符集`，形如`[^thingsThatWillNotBeMatched]`。在`字符集`之外，`插入`符号用于字符串的开头搜寻匹配模式。
```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```
## 17.匹配字符串的末尾

在上一个挑战中，你学习了使用^符号来搜寻字符串开头的匹配模式。还有一种方法可以搜寻字符串末尾的匹配模式。

你可以使用正则表达式的`美元`符号`$`来搜寻字符串的结尾。
```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```
## 18.匹配所有的字母和数字
使用字符类，你可以使用[a-z]搜寻字母表中的所有字母。这种字符类是很常见的，它有一个缩写，但这个缩写也包含额外的字符。

JavaScript 中与字母表匹配的最接近的字符类是\w，这个缩写等同于[A-Za-z0-9_]。它不仅可以匹配大小写字母和数字，注意，它还会匹配下划线字符（_）。
```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```
## 19.匹配除了字母和数字的所有符号
你已经了解到可以使用缩写\w来匹配字母和数字[A-Za-z0-9_]。不过，有可能你想要搜寻的匹配模式与字母数字相反。

你可以使用\W搜寻和\w相反的匹配模式。注意，相反匹配模式使用大写字母。此缩写与[^A-Za-z0-9_]是一样的。
```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```
## 20.匹配所有数字
你已经了解了常见字符串匹配模式和缩写，如字母数字。另一个常见的匹配模式是只寻找数字。

查找数字字符的缩写是`\d`，注意是小写的`d`。这等同于字符类`[0-9]`，它查找 0 到 9 之间任意数字的单个字符。
## 21.匹配所有非数字
上一项挑战中展示了如何使用带有小写`d`的缩写`\d`来搜寻数字。你也可以使用类似的缩写来搜寻非数字，该缩写使用大写的`D`。

查找非数字字符的缩写是`\D`。这等同于字符串`[^0-9]`，它查找不是 0 - 9 之间数字的单个字符。
## 22.限制可能的用户名
用户名在互联网上随处可见。它们是用户在自己喜欢的网站上的唯一身份。

你需要检查数据库中的所有用户名。以下是用户在创建用户名时必须遵守的一些简单规则。

1) 用户名中的数字必须在最后，且数字可以有零个或多个。

2) 用户名字母可以是小写字母和大写字母。

3) 用户名长度必须至少为两个字符。两位用户名只能使用字母。
## 23.匹配空白字符
迄今为止的挑战包括匹配的字母和数字。你还可以匹配字母之间的空格。

你可以使用`\s`搜寻空格，其中s是小写。此匹配模式不仅匹配空格，还匹配回车符、制表符、换页符和换行符，你可以将其视为与[\r\t\f\n\v]类似。
```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```
## 24.匹配非空白字符
你已经学会了如何使用带有小写s的缩写\s来搜寻空白字符。你也可以搜寻除了空格之外的所有内容。

使用\S搜寻非空白字符，其中S是大写。此匹配模式将不匹配空格、回车符、制表符、换页符和换行符。你可以认为这类似于字符类[^\r\t\f\n\v]。
```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32
```
## 25.指定匹配的上限和下限
回想一下，你使用加号`+`查找一个或多个字符，使用星号`*`查找零个或多个字符。这些都很方便，但有时你需要匹配一定范围的匹配模式。

你可以使用`数量说明符`指定匹配模式的上下限。数量说明符与花括号（`{`和`}`）一起使用。你可以在花括号之间放两个数字，这两个数字代表匹配模式的上限和下限。

例如，要在字符串"ah"中匹配仅出现3到5次的字母a，你的正则表达式应为`/a{3,5}h/`。
```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```
## 26.只指定匹配的下限
你可以使用带有花括号的`数量说明符`来指定匹配模式的上下限。但有时候你只想指定匹配模式的下限而不需要指定上限。

为此，在第一个数字后面跟一个逗号即可。

例如，要匹配至少出现`3`次字母a的字符串`"hah"`，你的正则表达式应该是`/ha{3,}h/`。
```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true
```
## 27.指定匹配的确切数量
你可以使用带有花括号的数量说明符来指定匹配模式的上下限。但有时你只需要特定数量的匹配。

要指定一定数量的匹配模式，只需在大括号之间放置一个数字。

例如，要只匹配字母a出现3次的单词"hah"，你的正则表达式应为/ha{3}h/。
```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /a{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false
```
## 28.检查全部或无
有时，你想要搜寻的匹配模式可能有不确定是否存在的部分。尽管如此，你还是想检查它们。

为此，你可以使用问号?指定可能存在的元素。这将检查前面的零个或一个元素。你可以将此符号视为前面的元素是可选的。

例如，美式英语和英式英语略有不同，你可以使用问号来匹配两种拼写。
```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```
## 29.正向先行断言和负向先行断言

## 30.使用捕获组重用模式
## 31.使用捕获组搜索和替换
## 32.删除开头和结尾的空白
