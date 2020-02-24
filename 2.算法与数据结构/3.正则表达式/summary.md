## 正则表达式
- 规则放在/ /

- test : 
    ```js
    /love/.test("I love you") 
    ```

- | : 多个规则 ;  [i|l|o|e] 

- match : 
    ```js 
    "I love you".match(/love/);
    ```

- i : 忽略大小写 ; ignorecase

- g : 全局 ; 匹配多个 /words/g 匹配多个words 

- . : 通配符 ; 默认匹配除换行符之外的任何单个字符 ; dot , period , wildcard character ;

- [] : 多种可能性匹配 ; [aeiou]: 匹配元音

- \- : 连接 ; [a-z] ,[0-9]

- ^ : 不想匹配的字符 ; [^aeiou] 非元音字符

- \+ : 匹配一次或多次字符 ; one or more times ; /Aa+/ 匹配"A"及其之后出现的一个或多个"a"

- \* : 匹配零次或多次字符 ;zero or more times; /Aa*/ 匹配"A"及其之后出现的零个或多个"a"

- ? :
  1. 匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}。
  2. 如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪（匹配尽量少的字符），和缺省使用的贪婪模式（匹配尽可能多的字符）正好相反。例如，对 "123abc" 使用 /\d+/ 将会匹配 "123"，而使用 /\d+?/ 则只会匹配到 "1"。

- ^ : 用于字符串的开头搜寻匹配模式 ; /^Cal/ 匹配开头出现Cal

- $ : 用于字符串的结尾搜索匹配模式 ; /love$/ 匹配结尾出现love

- \w : 匹配一个单字字符（字母、数字或者下划线）, 等于 [A-Za-z0-9_]

- \W : 匹配一个非单字字符 ,等于[^A-Za-z0-9_]

- \d : 匹配一个数字, 等于[0-9]

- \D : 匹配一个非数字, 等于[^0-9]

- \s : 匹配一个空白字符; 包括 空格(' '), 回车符 return('\r'), 制表符 tab('\t') , 换页符 form-feed ('\f'), 换行符 new line('\n'), 垂直制表符 vertical tab('\v'); 等于 [\r\t\f\n\v]

- \S : 匹配一个非空白字符 ;

- {} : 指定匹配模式的上下限 ; /a{3,5}h/ 要在字符串"ah"中匹配仅出现3到5次的字母a ; 可以只匹配下线, 如 /ha{3,}h/


- 正向断言 (Positive Lookahead) : 将会保证这个匹配在那里,但不会实际的匹配; (?...)

- 负向断言 (Negative Lookahead) : 将会保证这个匹配不在那里,但不会实际的匹配 ; (?!...)


- 捕获组 : 匹配模式的复用, 用()包起来, 用\数字 引用 ;
    ```js
        let repeatStr = "regex regex";
        let repeatRegex = /(\w+)\s\1/;
        repeatRegex.test(repeatStr); // Returns true
        repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
    ```

