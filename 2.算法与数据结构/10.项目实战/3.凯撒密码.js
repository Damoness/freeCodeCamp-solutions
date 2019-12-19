function rot13(str) { // LBH QVQ VG!
  

    function translate(c) {
  
      return String.fromCharCode((Math.abs((c.charCodeAt(0)- 65 ) + 13 )) % 26 + 65);
      
    } 
  
    return str.split('').map(c=> /[A-Z]/.test(c) ? translate(c) : c).join('') ;
  
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");