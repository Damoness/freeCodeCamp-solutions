let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // 修改这一行
let result = numString.match(numRegex).length;