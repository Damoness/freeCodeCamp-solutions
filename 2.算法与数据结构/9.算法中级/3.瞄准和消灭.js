function destroyer(arr,...rest) {
    // 删掉那些值
  
    return arr.filter(x=>!rest.includes(x));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);