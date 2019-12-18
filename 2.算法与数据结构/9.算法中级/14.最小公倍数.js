function smallestCommons(arr) {

    function commonMultiple(arr){
  
        let max = Math.max(...arr);
        let min = Math.min(...arr);
  
        let r = max;
  
        while(arr.some(x=>r % x !== 0)) {
          
           r += max ;
        }
        
  
        return r;
    }
  
    const min  = Math.min(arr[0],arr[1]);
    const max  = Math.max(arr[0],arr[1]);
  
    let array = [];
  
    for(let i = min ; i <= max ; i++){
        array.push(i);
    }
  
  
    return commonMultiple(array);
  }
  
  
  smallestCommons([1,5]);