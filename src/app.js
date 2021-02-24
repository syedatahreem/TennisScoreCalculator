const  playMatch = require ('./utils/playMatch');
const  {readInput} =  require ('./utils/readInput');

const tournamentResults = [];
let fs = require('fs')
   , fileName = process.argv[2];

if (process.argv.length < 3) {
 //  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
   process.exit(1);
 }

  
const tournamentInput = readInput(fileName);

tournamentInput.then((inputList) => {

   inputList.forEach(match => {

      tournamentResults.push(playMatch(match.player1, match.player2, match.listOfPoints))
      
       
   });
   console.log(tournamentResults)
}).catch((err) => console.log(err))

 

 


 