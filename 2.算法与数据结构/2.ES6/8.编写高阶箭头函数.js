const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // 在这行以下修改代码
  const squaredIntegers = arr.filter(item=>Number.isInteger(item)).map(item=>item*item);
  // 在这行以上修改代码
  return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);