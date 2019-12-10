let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // 修改这一行
let result = numString.match(noNumRegex).length;