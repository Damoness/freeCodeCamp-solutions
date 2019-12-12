function repeatStringNumTimes(str, num) {
    // repeat after me
  
    let result = ""
  
    if(num < 0) {
      result = ""
    }else {
      while(num > 0){
        num --;
        result += str; 
      }
    }
  
    return result;
  }
  
  repeatStringNumTimes("abc", 3);