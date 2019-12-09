const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
    "use strict"; // 不要改变这行
  
    // 在这行以下修改代码
    return function half({max,min}) {
      // 请在函数参数中使用解构赋值
      return (max + min) / 2.0;
    };
    // 在这行以上修改代码
  
  })();
  console.log(stats); // 应该为 object
  console.log(half(stats)); // 应该为 28.015