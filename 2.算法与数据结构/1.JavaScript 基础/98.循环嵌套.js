function multiplyAll(arr) {
    var product = 1;
    // 请把你的代码写在这条注释以下
    for(var i = 0;i < arr.length;i++){
      for(var j = 0; j < arr[i].length;j++){
        product *= arr[i][j];
      }
    }
    
    // 请把你的代码写在这条注释以上
    return product;
  }
  
  // 你可以修改这一行来测试你的代码
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  