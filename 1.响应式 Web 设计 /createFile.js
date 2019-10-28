var fs = require("fs");

let filePath =  process.argv[2];

let dirPath =  filePath.replace('notes.md','');

var data = fs.readFileSync(filePath || 'notes.md');


const array = data.toString().split('\n');

//console.log(array);

array.forEach((str,index)=>{

    let fileName = `${dirPath}${index+1}.${str}.html`;
    fs.writeFileSync(fileName,'');

})