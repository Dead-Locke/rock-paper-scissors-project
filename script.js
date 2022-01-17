function computerMove(){ // randomly roll rock, paper or scissors.
    var roll = randomIntInterval(1,3)
    return roll === 1 ? "Rock" : roll == 2 ? "Paper" : 'Scissors';
}

function randomIntInterval(min, max){ // returns random integer in a range
    return Math.floor(Math.random()*(max-min+1) + min)
}

function playRound(p, c) { //given two inputs, decides the winner 
    let win = false; 

    if(p.toLowerCase() == 'rock') if(c== 'Scissors') win = true; // win conditions
    if(p.toLowerCase() == 'paper')  if(c== 'Rock') win = true;
    if(p.toLowerCase() == 'scissors') if(c== 'Paper') win = true;

    return p.toLowerCase() == c.toLowerCase() ? "Its a Tie!": // print out tie, win or lose depending on 'win' variable.
        win ? `You Win! ${p} beats ${c}` : `You Lose! ${c} beats ${p}`;

}

function game(goal){ // plays the game, first to goal, asks the player for input and plays against a computer, printing results of each round.
    var playerScore = 0; var computerScore = 0;
    var i = 1
    while(playerScore < goal && computerScore < goal){ // loop until player or computer get 5 points.
        let p = prompt("Please enter Rock, Paper, or Scissors"); //store moves as variables to print out
        let c = computerMove(); 
        let result = playRound(p, c)[4] //store 5th letter W, L or a to determine winner or tie.

        if(result == 'W') playerScore++; // distribute scores
        if(result == 'L') computerScore++;
        i++; // increment round

        console.log(`Round ${i}: Player: ${p} --- Computer: ${c}   Score: ${playerScore}-${computerScore}`); //print last moves and total score 
    }

    return playerScore > computerScore ? `${playerScore}-${computerScore} You Win!` : 
            playerScore < computerScore ? `${playerScore}-${computerScore} You Lose!` : `${playerScore}-${computerScore} It's a tie!`
}

var p = 'sCISSorS';
var c = computerMove();
console.log('Play one round')
console.log(playRound(p, c));

console.log('\nPlay a 5 round game')
console.log(game(5))