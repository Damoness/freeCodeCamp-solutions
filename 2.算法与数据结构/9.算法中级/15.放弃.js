function dropElements(arr, func) {
    // 删掉那些该舍弃的元素
  
    let flag = false;
    let result = [];
  
    arr.map(x=> {
      if(func(x)){
        flag = true;
      }
  
      if(flag){
        result.push(x);
      }
  
    })
  
  
    return result;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });