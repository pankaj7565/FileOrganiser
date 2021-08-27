const { mainModule } = require("process");

function helpFunction(){
    console.log(`List of all commands 
    1.node main.js tree <pathName>
    2. node main.js organise <pathName>
    3. node main.js help`)
   
}

module.exports = {
    helpfn :helpFunction,
    
}