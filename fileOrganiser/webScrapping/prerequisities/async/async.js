let fs = require("fs");

fs.readFile("f1.txt",cb);//call back  and real file async
console.log("before");



function cb(err,content){
    if(err){
        console.log(err);
    }else{
        console.log(content+"");
    }
}
console.log("after");
