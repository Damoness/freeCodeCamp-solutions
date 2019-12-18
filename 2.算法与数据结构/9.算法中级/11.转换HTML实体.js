function convertHTML(str) {
    // &colon;&rpar;
  
    const entities = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      '\'':"&apos;"
    };
  
    return str.split('').map(x=>entities.hasOwnProperty(x)?entities[x]:x).join('');
  
  }
  
  convertHTML("Dolce & Gabbana");