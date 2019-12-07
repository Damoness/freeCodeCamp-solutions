// 初始化变量
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // 请把你的代码写在这条注释以下
    if(myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
    }else{
      return "Not Found"
    }
  }
  
  // 你可以修改这一行来测试你的代码
  checkObj("gift");