function diffArray(arr1, arr2) {
    // 这是一个党异伐同的过程
    return arr1.filter(x=>!arr2.includes(x)).concat(arr2.filter(x=>!arr1.includes(x)));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);