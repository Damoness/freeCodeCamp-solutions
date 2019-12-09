const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // 返回 7
  console.log(increment(5)); // 返回 6