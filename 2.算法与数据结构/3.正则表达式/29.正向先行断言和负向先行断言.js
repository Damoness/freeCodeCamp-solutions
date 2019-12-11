let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // 修改这一行
let result = pwRegex.test(sampleWord);