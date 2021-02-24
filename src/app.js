const  playMatch = require ('./utils/playMatch');
const  {readInput} =  require ('./utils/readInput');
const menu = require('./utils/menu');

const tournamentResults = [];

// File name as input to be taken from the user
let fileName = process.argv[2]; 

/* calling readInput by passing 
   the file Name returns an array
   containing match details*/
const tournamentInput = readInput(fileName); 

tournamentInput.then((inputList) => {  

   inputList.forEach(match => {

      /*calling the playMatch method by 
        passing player1, player 2 
       with points of these two 
       players for a particular match*/
      tournamentResults.push(playMatch(match.player1, match.player2, match.listOfPoints))  
      
   });
   menu(tournamentResults);
   
   // catch any errors when occured
}).catch((err) => console.log(err)) 

 

 


 