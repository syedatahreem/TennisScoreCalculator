 ## Tennis Calculator

----------------------------------------------
#### Table of contents:
1. Introduction
2. Tech Stack
3. Assumptions
4. Getting Started - Installation and running instructions
5. GitHub Repository
6. Sample Output
 

---------------------------------------------------------------------------------------------------

#### 1.Introduction:
 
The tennis calculator takes an input text file which contains the raw data containing points of all the matches played by the players.
This application computes scores of the games, sets, matches and finally declares the winner.
The application offers functionalities such as,
1. The score of a particular match 
2. games played vs lost by a particular player
3. Summary of the tournament results
4. Option to exit the program

 
-----------------------------------------------------------------------------------------------------

#### 2.Stack:
* Node JS
* JavaScript

--------------------------------------------------------------------------------------------------------

#### 3.Assumptions:

* A tennis match is split up into points, games and sets.
* Winning a game requires a person to win 4 points, but they must be ahead by at least 2 points (deuce, advantage, game)
* The first player to win 6 games wins a set. I.e:
    * Players do NOT need to be ahead by 2 to win a set (6-5 finishes a set) 
    * There is nothing special about that final game in a set. All games are the same.
* Best of 3 sets (first to 2 sets wins).

-------------------------------------------------------------------------------------------------------

#### 4. Getting Started-Installation and running instructions: Running on local computer
* Step 1: Download Node js
* Step 2: Download Visual Studio Code
* Step 3: Import the zipped code file into the visual studio code
* Step 4: Open the terminal and navigate to the estimateone_test by typing cd estimateone_test
* Step 5: Now type node src/app.js ./././src/data/full_tournament.txt or any input text file of your choice 
* Step 6: A menu will be displayed for the following four options 
   1.  Query match result
   2.  Query games for player
   3.  Tournament result
   4.  Quit
* Select any of the above to get the desired output
  

------------------------------------------------------------------------------------------------------

#### 5.GitHub URL
GitHub-Url : https://github.com/syedatahreem/TennisScoreCalculator.git

------------------------------------------------------------------------------------------------------

#### 6.Sample Output
 
PS D:\estimateone_test> node src/app.js ./././src/data/full_tournament.txt

** Welcome to the tennis tournament **

Please enter one of the options :

    1) Query match result
    2) Query games for player
    3) Tournament result
    4) Quit


 * Option 1
All matches played:
1. Match 1
2. Match 2

Select one of the options...
1
Match 1 Score : Person A vs Person B
Person A defeated Person B : 2 sets to 0  (12 games to 0)

Please enter one of the options :

    1) Query match result
    2) Query games for player
    3) Tournament result
    4) Quit


 * Option 2
1. Person A

2. Person B

3. Person C

Select one of the options...
1

Person A : Games Won = 23 & Games Lost = 17

Please enter one of the options :

    1) Query match result
    2) Query games for player
    3) Tournament result
    4) Quit



* Option 3

Tournament results:

Match 1 Score : Person A vs Person B
Person A defeated Person B : 2 sets to 0  (12 games to 0)

Match 2 Score : Person A vs Person C
Person C defeated Person A : 2 sets to 1  (17 games to 11)

 