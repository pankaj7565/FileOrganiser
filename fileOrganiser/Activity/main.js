let helpobj = require('./commands/help');
let treeobj = require('./commands/tree');
let organiseobj = require('./commands/organise');
// const path = require('path/posix');

let inputArr = process.argv.slice(2);

let command = inputArr[0];
let paath = inputArr[1];

switch(command){
 case "help": 
        helpobj.helpfn();
        break;
     case "tree":
        treeobj.treeFn(path);
        break;
         case "organise":
    organiseobj.organiseFn(path);
    break;

         default: 
         console.log("Invalid command");
         break;

}