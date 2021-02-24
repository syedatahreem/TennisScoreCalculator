
const playSet = require('./playSet');

const playMatch = (firstPlayer, secondPlayer, listOfPoints) =>{

    let firstPlayerGame = 0, secondPlayerGame = 0,
        firstPlayerSet = 0, secondPlayerSet = 0,
        startingGamePos = 0;

        while (true) {

            const setResults = playSet(startingGamePos, listOfPoints)

            startingGamePos = setResults.startingGamePos;

            setResults.result === 0 ? firstPlayerSet++ : secondPlayerSet++

            firstPlayerGame =  firstPlayerGame + setResults.firstPlayerGame

            secondPlayerGame =  secondPlayerGame + setResults.secondPlayerGame


            if(firstPlayerSet >= 2) 
                {
                    break;
                }

            else if(secondPlayerSet >= 2)

                {
                    break;
                }
                   
        }

    return  {

        firstPlayer,
        firstPlayerGame,
        firstPlayerSet,
        secondPlayer,
        secondPlayerGame,
        secondPlayerSet
    }    
  
}

module.exports = playMatch;