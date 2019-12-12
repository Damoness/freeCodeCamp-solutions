function sumOfTen(arr) {
    // 请把你的代码写在这条注释以下
    arr.splice(3,1);
    arr.pop();
    // 请把你的代码写在这条注释以上
    return arr.reduce((a, b) => a + b);
  }
  
  // 请不要修改本行以下的代码
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));