const cheerio = require('cheerio');
// const { resourceUsage } = require('process');
const request = require('request');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';


request(url, cb);

function cb(err, res, html) {
    if (err) {
        console.log(err);
    }
    else {
        extractHtml(html);
    }
}

function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let bowlerTableArr = selectorTool('.card.content-block.match-scorecard-table .Collapsible__contentOuter .table.bowler');

    // console.log(bowlerTableArr.length);
    let hwtPlayer = "";
    let now = 0;

    for (let i = 0; i < bowlerTableArr.length; i++) {
        // when we are indexing wrap it into selector tool
        let bowlerTable = selectorTool(bowlerTableArr[i]).html();
        // find function
        let allBowlers = selectorTool(bowlerTable).find('tbody>tr');

        // console.log(allBowlers.length);
        // console.log(bowlerTable);
        for (let j = 0; j < allBowlers.length; j++) {
            let colOfEachPlayerArr = selectorTool(allBowlers[j]).find('td');
            // console.log(colOfEachPlayerArr.length);
            let playerName = selectorTool(colOfEachPlayerArr[0]).text();
            let currOfWickets = selectorTool(colOfEachPlayerArr[4]).text();
            if (colOfEachPlayerArr.length == 1) continue;

            // console.log(playerName);
            // console.log(currOfWickets); 
            if (currOfWickets > now) {
                now = currOfWickets;
                hwtPlayer = playerName;
            }

        }
    }
    console.log('higest wicket taker palyer : ' + hwtPlayer);
    console.log('Number of wicket taker palyer : ' + now);
}