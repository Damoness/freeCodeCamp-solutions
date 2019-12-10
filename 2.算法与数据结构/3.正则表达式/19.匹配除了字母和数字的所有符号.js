let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // 修改这一行
let result = quoteSample.match(nonAlphabetRegex).length;