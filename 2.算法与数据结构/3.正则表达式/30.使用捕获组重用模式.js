let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // 修改这一行
let result = reRegex.test(repeatNum);