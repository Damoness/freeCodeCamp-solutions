// 声明变量
var myGlobal = 10;

function fun1() {
  // 把 5 赋给 oopsGlobal
  oopsGlobal = 5;
}



// 请把你的代码写在这条注释以上
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
