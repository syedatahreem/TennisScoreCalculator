
const playSet = require('./playSet');


/*Passing the 1st and 2nd player 
with their array points list*/
const playMatch = (firstPlayer, secondPlayer, listOfPoints) =>{


    //variable declarations
    let firstPlayerGame = 0, secondPlayerGame = 0,
        firstPlayerSet = 0, secondPlayerSet = 0,
        startingGamePos = 0;

        while (true) {
            
            
            /*Calling playSet by passing the position 
            and array of list of points  */
            const setResults = playSet(startingGamePos, listOfPoints)

            startingGamePos = setResults.startingGamePos;


            /*Checking for the results of the game
            and increment the respective player's set */
            setResults.result === 0 ? firstPlayerSet++ : secondPlayerSet++


            /* Adding the games won by the playsers*/ 
            firstPlayerGame =  firstPlayerGame + setResults.firstPlayerGame

            secondPlayerGame =  secondPlayerGame + setResults.secondPlayerGame


            /*checking for conditionif any player wins 
            two sets or more
            they win the match */
            if(firstPlayerSet >= 2) 
                {
                    break;
                }

            else if(secondPlayerSet >= 2)

                {
                    break;
                }
                   
        }


    /*return player's name, number of games won 
    and sets won*/ 
    return  {

        firstPlayer,
        firstPlayerGame,
        firstPlayerSet,
        secondPlayer,
        secondPlayerGame,
        secondPlayerSet
    }    
  
}


//exporting playMatch
module.exports = playMatch;