function uniteUnique(...arrays) {

    let result = [];
  
    for(let i = 0 ; i < arrays.length ; i++){
      for(let j =0 ; j < arrays[i].length ;j++){
        if(result.indexOf(arrays[i][j]) === -1){
          result.push(arrays[i][j]);
        }
      }
    }
  
    return result;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);