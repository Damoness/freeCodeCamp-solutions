// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/g; // 修改这一行

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);