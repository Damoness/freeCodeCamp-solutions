function myLocalScope() {
    'use strict'; // 请不要修改这一行
    var myVar = "Damoness"
    console.log(myVar);
  }
  myLocalScope();
  
  // 请先运行这段代码，并在输出区域或浏览器的控制台中查看输出
  // 由于 myVar 在 myLocalScope 内外均没有定义，因此才会有报错
  //console.log(myVar);
  
  // 现在，在 myLocalScope 中定义 myVar，并删掉 myLocalScope 外面的 console.log 以通过测试
  