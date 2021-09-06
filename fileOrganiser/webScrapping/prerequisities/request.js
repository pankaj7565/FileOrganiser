const request = require('request');
const cheerio = require('cheerio');
// Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

request('https://www.worldometers.info/coronavirus/',cb);

function cb(error, response, html) {
    if(error){
    console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    }else{
    // code extracting
   extractHtml(html);
   
    // console.log('body:', html); // Print the HTML for the Google homepage.
}
};
// code extracror
// cheerio install

// cheerio gives us a selector tool html extractor

function extractHtml(html){

let selectorTool = cheerio.load(html);

let statsArr = selectorTool('.maincounter-number');
// console.log(statsArr.length);
// console.log(statsArr);
for(let i=0;i<statsArr.length;i++){
    // basic rule wrap it in selector tool if multiple thing are there and want to wrap it then 
 let data = selectorTool(statsArr[i]).text();
 console.log(data);
  }
}

// chalk.js

// npm chalk-->if we want ro print colorfull console



