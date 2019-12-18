function steamrollArray(arr) {
    // 扁平化，扁平化……
  
    const flattedArray = [];
  
    const flatten = function(arr){
      arr.map(x=>{
          if(Array.isArray(x)){
          return flatten(x)
          }else{
            return flattedArray.push(x);
          }
      });
    }
  
    flatten(arr);
  
    return flattedArray;
  
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);