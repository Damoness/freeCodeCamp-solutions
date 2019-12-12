function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
  
    let sortedArray = arr.sort((a,b)=>a-b);
  
    let index = 0;
    for(let i = 0 ; i < sortedArray.length ; i++){
      if(sortedArray[i] < num){
        index ++;
      }else{
        break;
      }
    }
  
    return index;
  }
  
  getIndexToIns([40, 60], 50);