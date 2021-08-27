let fs = require('fs');
let path = require('path');
let inputArr = process.argv.slice(2);
console.log("inputArray is ",inputArr);

let inputDir = inputArr[0];
// fs.lstatSync
let allEntities = fs.readdirSync(inputDir);//phad ke laye ga directory ka path
console.log("all entites are",allEntities);


let content = "";
for(let i=0;i<allEntities.length;i++){
   let entityName = allEntities[i];
console.log(entityName);

 let eName = path.join(inputDir,entityName);

   let statusObj =fs.lstatSync(eName);// status batye ga 

   let isFile = stats.isFile();

   if(isFile){
       let extname =path.extname(eName);
       if(extname=='.txt'){
   content +=fs.readFileSync(eName);
       }
   }

}
// console.log(content);

// let summaryFile = path.join(process.cwd(),'summary.txt');

let summaryFile = 'C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\summary.txt'
fs.writeFileSync(summaryFile,content);


// git branch -M main
// git remote add origin https://github.com/pankaj7565/FileOrganiser.git
// git push -u origin main