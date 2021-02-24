const playGame = require('./playGame');

const playSet = ( pos, listOfPoints) =>{


    //variable declarations
    let firstPlayerGame = 0, secondPlayerGame = 0,
        startingGamePos = pos;

        while (true) {


            /*Calling the playGame by passing
            position and list of points */
            const gameResults = playGame(startingGamePos, listOfPoints)


            /*returns the next position to where
            in the array the next iteration should
            go ahead, that is calling playGame
            */
            startingGamePos = gameResults.startingGamePos;


            /*Incrementing the counter of the respective player
            on winning the game
            */
            gameResults.result === 0 ? firstPlayerGame++ : secondPlayerGame++


            /*Checking for the condition
            if a player has won more than 5 games
            and return the details which will be
            used in playMatch */
            if(firstPlayerGame > 5) 

                {
                    return  {
                        result: 0,
                        firstPlayerGame,
                        secondPlayerGame,
                        startingGamePos
                
                    } 
                   
                }

                else if(secondPlayerGame > 5)

                {
                    return  {
                        result: 1,
                        firstPlayerGame,
                        secondPlayerGame,
                        startingGamePos
                
                    } 
                }
        }   
  
}


// exporting playSet
module.exports = playSet;