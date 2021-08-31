// folderPath--> file/folderPath traverse
// unhe print karwa do 
// ---->

// -------->assinghment recursion


let fs = require('fs');
let path = require("path");


// "___"
 
function treeFn(srcPath){
    let baseName = path.basename(srcPath)
    console.log(basename);
    console.log("---");
    let content = fs.readdirSync(srcPath);
    let allEntities = "";

    for(let i = 0;i<content.length;i++){
        allEntities+='\n\t'+"---",content[i];
        // console.log(content[i]);
    }
    console.log(allEntites);
}

module.exports={
    treeFn:treeFn
}