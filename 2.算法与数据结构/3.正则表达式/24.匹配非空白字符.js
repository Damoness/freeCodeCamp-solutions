let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // 修改这一行
let result = sample.match(countNonWhiteSpace);