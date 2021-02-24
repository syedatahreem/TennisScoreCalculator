const fs = require('fs');

 const readInput = (fileName) =>{

   return new Promise( function(resolve, reject){
    

     // Checking if the file path is right
      if (!fs.existsSync(fileName))     
      throw new Error("No file exists:" +
       "Please check the file path")
        

  /*Reading the file contents 
  using file system, fs */ 
   fs.readFile(fileName, (err, data) =>{   
    

    // array and variable declarations
    let matchArray=[], personArray =[], 
        inputArray =[],pointerValues=[], 
        listOfPoints, finalArrayElements =[];
    

    if(err)
    reject("error")
       
      let arrayLength = data.toString().split("Match").length;
       

      for ( let j = 1; j < arrayLength; j++)
      {


      /* Splitting the data on Match, 
      and storing it in inputArray*/
       inputArray =  data.toString().split("Match"); 

       // stores the match number
       matchArray = inputArray[j].split("\n")[0] 

       // stores the players name 
       personArray = inputArray[j].split("\n")[1]

       // store the points of a match
       listOfPoints = inputArray[j].split("\n")   


      for (let i = 2; i< listOfPoints.length-1; i++)
      {  

        // parsing the data into integer
        let pointerList = parseInt(listOfPoints[i]);  


        // ommiting blank lines in the file
        if(pointerList ==0 || pointerList ==1)    
        {


        // storing the points values in an array
        pointerValues.push(pointerList);   

        }
        
      }
      
      /*Adding all the match in a javascript object format */
     finalArrayElements.push  
     (
       {

        matchNumber : parseInt(matchArray.split(":") [1]),
        player1 : (personArray.split("vs")[0]).trim(),
        player2 : (personArray.split("vs")[1]).trim(),

        // use of spread operator so that the original array is not mutated
        listOfPoints: [...pointerValues]   


      }
     )


    /* empty this array before the next iteration
     so that this loop's values aren't carried 
     to the next iteration, to avoid appending old values */
     pointerValues =[] 

      
    }


    // promise is resolved and the array elements are returned
    resolve(finalArrayElements) 

}
);
       
        }
        );

}


//readInput is exported
module.exports = {
    readInput
};