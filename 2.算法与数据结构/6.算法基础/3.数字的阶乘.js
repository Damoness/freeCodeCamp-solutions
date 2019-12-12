function factorialize(num) {

    let count = 1;
    for(let i = num ; i > 0 ; i--){
      count *= i;
    }
    
    return count;
  }
  
  factorialize(5);