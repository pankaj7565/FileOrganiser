const cheerio = require('cheerio');
const request = require('request');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';

request(url,cb);

function cb(err,res,html){
    if(err){
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}

function extractHtml(html){
  let selectorTool = cheerio.load(html);
  let commentaryArr = selectorTool('.match-comment-wrapper .match-comment-long-text');

//   printing the last ball comentry

  //  let lbc = selectorTool(commentaryArr[0]).text();
//   console.log(lbc);

//   printing all the ball comentry
let ballArr = selectorTool('.match-comment-over');
let lbc ='';
let ball = '';
for(let i=0;i<=commentaryArr.length;i++){
    lbc =selectorTool(commentaryArr[i]).text();
    // console.log(i,lbc);
    for(let j=0;j<=ballArr.length;j++){
        ball = selectorTool(ballArr[i]).text();
        // ball = selectorTool(ballArr[i]).html();
    }
    console.log(ball,lbc);

    // attirbuye
    // tag[keyvalue pair pate kr dp]

}

}