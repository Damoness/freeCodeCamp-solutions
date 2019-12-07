function sequentialSizes(val) {
    var answer = "";
    // 请把你的代码写在这条注释以下
    
    switch(val){
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    
    // 请把你的代码写在这条注释以上  
    return answer;  
  }
  
  // 你可以修改这一行来测试你的代码
  sequentialSizes(1);
  