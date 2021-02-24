const playGame = ( startingGamePos, listOfPoints ) => {

  //variable declarations
  let firstPlayerPoints = 0,
    secondPlayerPoints = 0;


       /* Runs the loop from the position passed to
       the list of points length until a game has been won
       by either of the player*/ 
      for(let i=startingGamePos; i< listOfPoints.length; i++)
        {
          
          if (listOfPoints[i] == 0) {


            /*counter incrementer for the
             points won by first player
            */
            firstPlayerPoints++;
      

            /*Checking for the condition if the player
            has won 40 points and the difference between
            the points of 1st and 2nd player is 2 or greater*/
            if ( firstPlayerPoints > 3 && (firstPlayerPoints - secondPlayerPoints >= 2))
             {


              /*when first player wins a game, position 
              and the player denotion(0) is returned*/
              return {
                result: 0,
                startingGamePos: i+1
              }
            }} 
      
          else 
          
          {


            /*Increments this pointer when
            second player wins a point*/ 
            secondPlayerPoints++;
      
            
            /*Checking for the condition if the player
            has won 40 points and the difference between
            the points of 1st and 2nd player is 2 or greater*/
            if ( secondPlayerPoints > 3 && (secondPlayerPoints - firstPlayerPoints >= 2))
            
            {

              /*when second player wins a game, position 
              and the player denotion(1) is returned*/
              return {
                result: 1,
                startingGamePos: i+1
              }
            
            }
      
          }

        }

}

//exporting the playGame function
module.exports = playGame;