const fs = require('fs');

 const readInput = (fileName) =>{

   return new Promise( function(resolve, reject){
   fs.readFile(fileName, (err, data) =>{
    
    let matchArray=[], personArray =[], inputArray =[], 
        possibleValues=[], listOfPoints, finalArrayElements =[];
    
    if(err) 
    { reject("error")}
       
      let arrayLength = data.toString().split("Match").length;
       
      for ( let j = 1; j < arrayLength; j++)
      {
           
       inputArray =  data.toString().split("Match");
       matchArray = inputArray[j].split("\n")[0]
       personArray = inputArray[j].split("\n")[1]
       listOfPoints = inputArray[j].split("\n")
      for (let i = 2; i< listOfPoints.length-1; i++)
      {  
         let pointerList = parseInt(listOfPoints[i]);
        if(pointerList ==0 || pointerList ==1)
        {
        possibleValues.push(pointerList);
        }
        
      }
     finalArrayElements.push ({

        matchNumber : parseInt(matchArray.split(":") [1]),
        player1 : (personArray.split("vs")[0]).trim(),
        player2 : (personArray.split("vs")[1]).trim(),
        listOfPoints: [...possibleValues]

     })
    
     possibleValues =[]
      
    }
     
    resolve(finalArrayElements)
});
        });
}


module.exports = {
    readInput
};