function convertToRoman(num) {
    //罗马数字共有7个，即I（1）、V（5）、X（10）、L（50）、C（100）、D（500）和M（1000）
    
    //  const romans = {
    //      1:'I',
    //      5:'V',
    //      10:'X',
    //      50:'L',
    //      100:'C',
    //      500:'D',
    //      1000:'M'
    //  }
    
     const romans = ['I','V','X','L','C','D','M'];
    
    let i = 0;
    
    let roman = '';
    
    while(num > 0){
    
        let m = num % 10;
    
        if(m <= 3){
    
            roman = romans[i].repeat(m) + roman;
    
        }else if(m <=8){
    
            if(m == 4){
                roman = romans[i]+romans[i+1] + roman;
            }else{
                roman = romans[i+1]+romans[i].repeat(m-5) + roman;
            }
    
        }else{
    
            roman = romans[i]+romans[i+2] + roman;       
    
        } 
    
        num = Math.floor(num / 10);
        i = i + 2;
    
    }
    
    
     return roman;
    }
    
    convertToRoman(36);