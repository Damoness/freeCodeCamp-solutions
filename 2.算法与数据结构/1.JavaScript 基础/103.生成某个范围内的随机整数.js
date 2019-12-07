// 示例
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);
  
  // 请把你的代码写在这条注释以下
  
  function randomRange(myMin, myMax) {
  
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin; // 请修改这一行
  
  }
  
  // 你可以修改这一行来测试你的代码
  var myRandom = randomRange(5, 15);