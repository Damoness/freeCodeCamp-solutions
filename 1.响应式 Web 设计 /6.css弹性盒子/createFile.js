var fs = require("fs");
var data = fs.readFileSync('notes.md');

const array = data.toString().split('\n');
//console.log(array);

array.forEach((str,index)=>{

    let fileName = `${index+1}.${str}.html`;
    fs.writeFileSync(fileName,'');

})