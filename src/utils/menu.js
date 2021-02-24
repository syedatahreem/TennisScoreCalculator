const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const menu = (tournamentResults) => {

    try {

        console.log('\n** Welcome to the tennis tournament **');

        menuOptions([...tournamentResults]) 

    } catch(error) {
        console.log('Wrong selection made...');

    }

}


function menuOptions (tournamentResults) {

    try {

    readline.question(`\nPlease enter one of the options : 
    
    1) Query match result
    2) Query games for player
    3) Tournament result
    4) Quit\n `, choice => {
        
        if (choice == 4 ) {
            
            readline.close();

        } else if ( choice == 1 || choice == 2 || choice == 3) {
            validOptSelctd(choice, [...tournamentResults]);

        } else {

            console.log('You entered a wrong choice ');
            readline.close();
        }

      });

    } catch (err)  {
        console.log('Wrong selection made...');

    }
}


function validOptSelctd (option, tournamentResults) {

    try {
        switch (option) {
            case '1': matchResults([...tournamentResults])
                    break;
            case '2': gamesForPlayer([...tournamentResults])
                    break;
            case '3': summaryResults ([...tournamentResults])
                    break;
        }

    } catch (err)  {
        console.log('Wrong selection made...');

    }

} 

// For selected option 1
function matchResults (tournamentResults) {

    try {
        console.log('All matches played:');
        tournamentResults.forEach((match, index)=> console.log(`${index+1}. Match ${index+1}`))
        readline.question('\nSelect one of the options...\n', choice => {
           let match =  tournamentResults[choice - 1]
        
            console.log(`Match ${choice} Score : ${match.firstPlayer} vs ${match.secondPlayer}`);
    
            (match.firstPlayerSet > match.secondPlayerSet) 
                        ?
            console.log(`${match.firstPlayer} defeated ${match.secondPlayer} : ${match.firstPlayerSet} sets to ${match.secondPlayerSet}  (${match.firstPlayerGame} games to ${match.secondPlayerGame})`)
                        :
            console.log(`${match.secondPlayer} defeated ${match.firstPlayer} : ${match.secondPlayerSet} sets to ${match.firstPlayerSet}  (${match.secondPlayerGame} games to ${match.firstPlayerGame})`)
    
            menuOptions (tournamentResults)
        }); 

    } catch (err)  {
        console.log('Wrong selection made...');

    }
}

// For selected option 2
function gamesForPlayer (tournamentResults) {

    try {
        const allPlayers = []
        let numberOfGamesWon = 0, numberOfGamesLost = 0
    tournamentResults.forEach(match => {
        allPlayers.includes(match.firstPlayer) ? null : allPlayers.push(match.firstPlayer)
        allPlayers.includes(match.secondPlayer) ? null : allPlayers.push(match.secondPlayer)
    })

    allPlayers.forEach((player, i) => console.log(`${i+1}. ${player}\n`))

    readline.question('Select one of the options...\n', choice => {
         
        tournamentResults.forEach(match => {
            if (match.firstPlayer === allPlayers[choice - 1]) {
                        numberOfGamesWon += match.firstPlayerGame 
                        numberOfGamesLost += match.secondPlayerGame
                    
            } else if (match.secondPlayer === allPlayers[choice - 1]) {
                numberOfGamesWon += match.secondPlayerGame
                numberOfGamesLost += match.firstPlayerGame
            }
        })

        console.log(`${allPlayers[choice - 1]} : Games Won = ${numberOfGamesWon} & Games Lost = ${numberOfGamesLost}`);
        menuOptions (tournamentResults)
    })

    } catch (err)  {
        console.log('Wrong selection made...');

    }

}

// For selected option 3
function summaryResults (tournamentResults) {

    try {
        console.log('\nTournament results: ');
        tournamentResults.forEach((match, matchNum) => {
    
            console.log(`\nMatch ${matchNum+1} Score : ${match.firstPlayer} vs ${match.secondPlayer}`);
    
            (match.firstPlayerSet > match.secondPlayerSet) 
                    ?
            console.log(`${match.firstPlayer} defeated ${match.secondPlayer} : ${match.firstPlayerSet} sets to ${match.secondPlayerSet}  (${match.firstPlayerGame} games to ${match.secondPlayerGame})`)
                    :   
            console.log(`${match.secondPlayer} defeated ${match.firstPlayer} : ${match.secondPlayerSet} sets to ${match.firstPlayerSet}  (${match.secondPlayerGame} games to ${match.firstPlayerGame})`)
    
        });
        menuOptions (tournamentResults)

    } catch (err)  {
        console.log('Wrong selection made...');

    }
}

module.exports = menu;