function sumFibs(num) {

    let fibs = [] ,sum = 0;
  
    for(let i = 0 ; i < num ; i++){
  
      if(i == 0 || i == 1){
        fibs[i] = 1;
      }else{
        fibs[i] = fibs[i-1] + fibs[i-2];
      }
  
      if(fibs[i] % 2 !==0 && fibs[i] <= num){
        sum += fibs[i];
      }
  
    }
    
    console.log(fibs);
  
    return sum;
  }
  
  sumFibs(4);