function translatePigLatin(str) {

    function isConsonant(a){
      return /[^aeiou]/.test(a);
    }
  
    if(!isConsonant(str[0])){
      return str + 'way';
    }else{
      for(let i = 0 ; i < str.length ; i++){
        if(!isConsonant(str[i])){
          return str.substring(i)  + str.substring(0,i) + 'ay';
        }
      }
    }
  
  
    return str + 'ay';
  }
  
  translatePigLatin("consonant");