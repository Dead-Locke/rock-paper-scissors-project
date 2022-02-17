const weapons = document.querySelectorAll('.weapon');
const rounds = document.querySelector('.round');







function computerMove(){ // randomly roll fire, water or grass.
    var roll = randomIntInterval(1,3)
    return roll === 1 ? "fire" : roll == 2 ? "water" : 'grass';
}

function randomIntInterval(min, max){ // returns random integer in a range
    return Math.floor(Math.random()*(max-min+1) + min)
}

function play() { //given two inputs, decides the winner 
    let win = false; 

    weapons.forEach(weapon => {
        weapon.addEventListener('click', () => {
            
            const weaponIcons = document.querySelectorAll('.w-icon')
            let c = computerMove();
            let p; 
            

            if(weapon.classList.contains('fire')){
                 p = 'fire';
                 weaponIcons[0].filter = none;
                 weaponIcons[1].filter = grayscale;
                 weaponIcons[2].filter = grayscale;
            };
            if(weapon.classList.contains('water')){
                p = 'water';
                weaponIcons[1].filter = none;
            };
            if(weapon.classList.contains('grass')){
            p = 'grass';
            weaponIcons[2].filter = none;
            };
            
            playRound(c, p)



        })


    })
}
function playRound(p,c){ 
    // win conditions
    if(p.toLowerCase() == 'fire') if(c== 'grass') win = true; 
    if(p.toLowerCase() == 'water')  if(c== 'fire') win = true;
    if(p.toLowerCase() == 'grass') if(c== 'water') win = true;

    return p.toLowerCase() == c.toLowerCase() ? "Its a Tie!": // print out tie, win or lose depending on 'win' variable.
        win ? `You Win! ${p} beats ${c}` : `You Lose! ${c} beats ${p}`;

}

function game(goal){ // plays the game, first to goal, asks the player for input and plays against a computer, printing results of each round.
    var playerScore = 0; var computerScore = 0;
    var i = 1
    while(playerScore < goal && computerScore < goal){ // loop until player or computer get 5 points.
        let p = prompt("Please enter fire, water, or grass"); //store moves as variables to print out
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

play();

const weapons = document.querySelectorAll('weapon')



