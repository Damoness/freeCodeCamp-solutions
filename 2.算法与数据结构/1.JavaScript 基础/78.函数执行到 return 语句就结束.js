// 初始化变量
function abTest(a, b) {
    // 请把你的代码写在这条注释以下
    if(a < 0 || b < 0 ){
      return undefined;
    }
    
    
    // 请把你的代码写在这条注释以上
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // 你可以修改这一行来测试你的代码
  abTest(2,2);