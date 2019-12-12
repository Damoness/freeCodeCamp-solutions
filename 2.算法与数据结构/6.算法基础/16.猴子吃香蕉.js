function chunkArrayInGroups(arr, size) {
    // Break it up.
  
    let result = [];
  
    for(let i = 0 ; i< arr.length ; i++){
  
      let index = Math.floor(i/size);
  
      if(i%size == 0){
        result[index] = [];
      } 
        
      result[index].push(arr[i]);
  
    }
  
    return result;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);