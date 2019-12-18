function myReplace(str, before, after) {

    function isCapital(c){
      return /[A-Z]/.test(c)
    }
  
    if(isCapital(before[0])) {
      after = after[0].toUpperCase() + after.substring(1);
    }else{
      after = after[0].toLowerCase() + after.substring(1);
    }
  
  
    return str.replace(before,after) ;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");