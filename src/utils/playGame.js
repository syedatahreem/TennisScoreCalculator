const playGame = ( startingGamePos, listOfPoints ) => {

  let firstPlayerPoints = 0,
    secondPlayerPoints = 0;

      for(let i=startingGamePos; i< listOfPoints.length; i++)
        {
          if (listOfPoints[i] == 0) {

            firstPlayerPoints++;
      
            if ( firstPlayerPoints > 3 && (firstPlayerPoints - secondPlayerPoints >= 2))
             {

              return {
                result: 0,
                startingGamePos: i+1
              }
            }} 
      
          else 
          
          {
            secondPlayerPoints++;
      
            if ( secondPlayerPoints > 3 && (secondPlayerPoints - firstPlayerPoints >= 2))
            
            {
              return {
                result: 1,
                startingGamePos: i+1
              }
            
            }
      
          }

        }

}

module.exports = playGame;