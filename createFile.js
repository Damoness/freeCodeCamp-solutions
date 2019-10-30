var fs = require("fs");

fs.constants.COPYFILE_FICLONE_FORCE

let filePath =  process.argv[2];

let dirPath =  filePath.replace('notes.md','');

var data = fs.readFileSync(filePath || 'notes.md');


const array = data.toString().split('\n');

//console.log(array);

//fs.writeFileSync(filePath,)

let rewriteData = ''

array.forEach((str,index)=>{

    let fileName = `${dirPath}${index+1}.${str}.html`;

    //fs.writeFileSync(filePath,)

    fs.writeFileSync(fileName,'');

    rewriteData += `## ${index+1}.${str}\n`

})

fs.writeFileSync(filePath,rewriteData);