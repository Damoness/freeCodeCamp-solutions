function popShift(arr) {
    let popped = arr.pop(); // 请修改这一行
    let shifted = arr.shift() ; // 请修改这一行
    return [shifted, popped];
  }
  
  // 请不要修改本行以下的代码
  console.log(popShift(['challenge', 'is', 'not', 'complete']));