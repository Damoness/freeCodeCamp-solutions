计算机算法是产生特定结果的一系列步骤。要写一个算法，你必须先理解一个特定的问题，然后编写代码去解决它。

将问题化整为零会让你更容易地解决问题。然后你就可以逐一解决这些子问题。例如，如果你要开发一个计算器，不要试图一下子解决整个问题，而是首先考虑怎样获取用户的输入，然后一个一个地实现每一种算术运算，最后实现运算结果的展示。

在本节中，我们将会学习使用 JavaScript 来解决一些基础的算法问题。这会帮助你提升解决问题的能力，并为你接下来解决更复杂的问题打下基础。

提示
如果你遇到了一些困难，你可以尝试用 console.log() 来将一些变量的值输出到控制台。这会帮助你调试问题。

## 1.将摄氏温度转换成华氏温度
将摄氏度转换为华氏度的算法为：摄氏度 × 9/5 + 32

输入参数 celsius代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 fahrenheit变量赋值为对应的华氏温度的值。

你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。

## 2.翻转字符串

反转给出的字符串。

你在反转字符串前可能需要将其切分成字符的数组。

你的结果必须是一个字符串。

## 3.数字的阶乘

返回一个给定整数的阶乘。

若 n 是一个整数，n 的阶乘就是所有小于等于 n 的正整数的乘积。

n 的阶乘通常用符号 n!来表示。

例如： 5! = 1 * 2 * 3 * 4 * 5 = 120

只有非负整数会被作为函数的输入参数。

## 4.查找字符串中最长的单词

返回给出的句子中最长的单词的长度。

你的返回应该是一个数字。


## 5.返回数组中最大的数字
返回一个数组，它要由给出的所有子数组中的最大值组成。简单起见，给出的数组总会包含4个子数组。

记得你可以在一个简单的 for 循环中遍历一个数组，并用 arr[i]这样的语法来访问数组中的元素。

## 6.检查字符串的结尾

检查一个字符串（第一个参数， str）是否以给定的字符串（第二个参数 target）结束。

本题目可以用 ES2015 引入的 .endsWith()方法来解决。但本挑战的目的是让你使用 JavaScript 的一个 substring 方法。

## 7.重复字符串

将一个给定的字符串（第一个参数， str)重复 num（第二个参数）次。如果 num不是一个正数，返回一个空字符串。

## 8.截断字符串

如果一个字符串（第一个参数）的长度大于给出的值（第二个参数），则截断它并在其后加上 ...。返回被截断的字符串。

## 9.发现者与看护者
请写一个函数来检查一个数组（第一个参数）中的元素，并返回数组中第一个通过校验测试（第二个参数，一个接受一个参数并返回一个布尔值的函数）的元素。如果没有元素通过测试，则返回 undefined。
## 10.真假测试

检查一个值是否是原始的布尔值（boolean）类型。返回 true 或者 false。

布尔值原始类型为 true 或者 false。

## 11.单词的首字母大写

将给出的字符串中所有单词的第一个字母变成大写，并返回得到的字符串。请确保其余的字母是小写的。

出于练习的目的，“ the ”“ of ”等虚词的首字母也要大写。

## 12.slice 和 splice
本挑战的输入参数为：两个数组和一个索引值。

请利用数组的 slice和 splice方法，将第一个数组中的所有元素依次复制到第二个数组中。

请从第二个数组中索引值为 n的地方开始插入。

返回插入元素后的数组。输入的两个数组在函数执行前后要保持不变。
## 13.去除数组中的假值
从一个数组中移除所有假值（falsy values）。

JavaScript 中的假值有 false、null、0、""、undefined和 NaN。

提示：请尝试将每一个值转换为一个布尔值（boolean）。
## 14.我身在何处
返回数组（第一个参数）被排序后，将一个值（第二个参数）插入到该数组中而使数组保持有序的最小的索引。返回的值应该是一个数字。

例如，getIndexToIns([1,2,3,4], 1.5)应该返回 1因为 1.5 大于 1（索引为 0），但小于 2（索引为 1）。

同样地，getIndexToIns([20,3,5], 19)应该返回 2因为数组被排序后会变成 [3,5,20]，而 19小于 20（索引为 2）且大于 5（索引为 1）。
## 15.集合之间的关系

输入参数是一个有两个字符串元素的数组。如果第一个字符串中包含了第二个字符串中的所有字母，则返回 true。

例如，["hello", "Hello"]应该返回 true 因为第一个字符串中包含了第二个字符串中出现的所有字母（忽略大小写）。

而 ["hello", "hey"]应该返回 false 因为第一个字符串 "hello" 没有包含字母 "y"。

最后，["Alien", "line"], 应该返回 true，因为 "line" 中的所有字母都被包含在 "Alien" 中。

## 16.猴子吃香蕉

请写一个函数，将一个数组（第一个参数）分割成一组长度为 size（第二个参数）的数组，然后在一个二维数组中返回这些结果。
