function palindrome(str) {
    // Good luck!
  
    let front = 0;
    let back = str.length - 1;
  
    while(back > front){
  
      if(str[front].match(/[\W_]/)){
        front++;
        continue;
      }
  
      if(str[back].match(/[\W_]/)){
        back--;
        continue;
      }
  
      if(str[front].toLowerCase() != str[back].toLowerCase()){
        return false;
      }else{
  
        front++;
        back--;
      }
  
    }
  
    return true;
  
  }
  
  
  
  palindrome("eye");