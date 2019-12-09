const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // 在这行以下修改代码
  const [a,b , ...arr] = list; // change this
  // 在这行以上修改代码
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // 应该为 [3,4,5,6,7,8,9,10]
console.log(source); // 应该为 [1,2,3,4,5,6,7,8,9,10];