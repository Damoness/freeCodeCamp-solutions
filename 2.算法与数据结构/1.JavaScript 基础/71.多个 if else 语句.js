function testSize(num) {
    // 请把你的代码写在这条注释以下
    if(num < 5){
      return "Tiny"
    }else if(num < 10){
      return "Small"
    }else if(num < 15){
      return "Medium"
    }else if(num < 20){
      return "Large"
    }else {
      return "Huge"
    }
    // 请把你的代码写在这条注释以上
  }
  
  // 你可以修改这一行来测试你的代码
  testSize(7);