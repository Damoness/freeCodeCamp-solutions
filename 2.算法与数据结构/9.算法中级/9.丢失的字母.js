function fearNotLetter(str) {

    let charCode = str.charCodeAt(0); 
  
    for(let i=0 ; i< str.length ;i++,charCode++){
  
      if(str.charCodeAt(i) != charCode){
        return String.fromCharCode(charCode);
      }
  
    }
  
  
    return undefined;
  }
  
  fearNotLetter("abce");