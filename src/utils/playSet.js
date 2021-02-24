const playGame = require('./playGame');

const playSet = ( pos, listOfPoints) =>{

    let firstPlayerGame = 0, secondPlayerGame = 0,
        startingGamePos = pos;

        while (true) {

            const gameResults = playGame(startingGamePos, listOfPoints)

            startingGamePos = gameResults.startingGamePos;

            gameResults.result === 0 ? firstPlayerGame++ : secondPlayerGame++

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

module.exports = playSet;