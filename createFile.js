var fs = require("fs");

let filePath =  process.argv[2];

let dirPath =  filePath.replace('notes.md','');

var data = fs.readFileSync(filePath || 'notes.md');


const array = data.toString().split('\n');

//console.log(array);

//fs.writeFileSync(filePath,)

let rewriteData = ''

array.forEach((str,index)=>{

    let fileName = `${dirPath}${index+1}.${str}.js`;

    //fs.writeFileSync(filePath,)

    fs.writeFileSync(fileName,'');

    rewriteData += `## ${index+1}.${str}\n`

})

fs.writeFileSync(filePath,rewriteData);