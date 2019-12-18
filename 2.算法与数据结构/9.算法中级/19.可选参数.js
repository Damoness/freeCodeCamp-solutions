function addTogether(...args) {

    if(args.length == 1){
  
      if(Number.isInteger(args[0])){
  
        return function(b){
  
          if(Number.isInteger(b)){
            return args[0] + b;
          }else{
            return undefined;
          }
          
        }
  
      }else{
  
        return undefined;
  
      }
  
    }else{
  
      if(args.some(x=>!Number.isInteger(x))){
        return undefined;
      }
  
     return args.reduce((p,c)=>{
  
        return p+c;
      
      }, 0)
  
    }
  }
  
  addTogether(2,3);