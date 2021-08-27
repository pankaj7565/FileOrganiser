let path = require("path");
let fs  = require("fs");

let inputArr = process.argv.slice(2);
// console.log(inputArr);


let filename = inputArr[0];

let content = inputArr[1];

// console.log('fileName',filename);
// console.log('content',content);

// current directory
let currentpath = process.cwd();
// console.log(currentpath);


let joinedPath = path.join(currentpath,'abc','def.txt');
// console.log(joinedPath);

// base name 
// let file = path.basename('C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\pathModule\\path.js')
let file = path.basename('./path.js')
console.log(file);




// extension name 
// let extName = path.extname('C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\pathModule\\path.js')
// console.log(extName);

