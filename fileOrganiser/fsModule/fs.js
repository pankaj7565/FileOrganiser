let fs = require("fs");
// const path = require("path/posix");
let path = require('path');


let content = fs.readFileSync("f1.txt");
console.log(content+"");

// write file sync
fs.writeFileSync("abc.txt","pankaj how are you");

// to add more to the abc.txt file
fs.appendFileSync("abc.txt", " hello parth how are you");

fs.unlinkSync("abc.txt");

// directory to make a folder
// fs.mkdirSync('pathModule');
// delete the folder 
// fs.rmdirSync('pathModule')

let doesExit = fs.existsSync('fs1.js');

console.log("fs1.js file",doesExit);

// status obj of the file/folder

let statusObj = fs.lstatSync('f1.txt')
console.log(statusObj);


 console.log( statusObj.isFile());

console.log(statusObj.isDirectory());


//not working it will read and print the filr in the directory
//  let fileArr =  fs.readdirSync("");
//  console.log(fileArr);



// let path = "C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\dir"
// //  and it return array format
//  let fileArr =  fs.readdirSync(path);
//  console.log(fileArr);


//  copy file sync copy form src to dest

// let srcpath ='C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\fsModule\\f1.txt'
// let destPath='C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\fsModule\\f2.txt'
// fs.copyFileSync(srcpath,destPath);


// now to copy form the fs.module to dir folder
let srcpath ='C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\fsModule\\f1.txt'
let destPath='C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\fsModule\\f2.txt'

let toBeCopiedFileName =path.basename(srcpath);
let dest =path.join('C:\\Users\\user\\OneDrive\\Desktop\\fileorganiser\\fileOrganiser\\dir',toBeCopiedFileName);
console.log(dest);
fs.copyFileSync(srcpath,destPath);











