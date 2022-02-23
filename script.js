const elementsArea = document.querySelector('.elemnt-area');
const elements = document.querySelectorAll('.element');
const rounds = document.querySelector('.round');
const message = document.querySelector('.message');
const computerImage = document.querySelector('.computer-image');
const playerHearts = document.querySelector('#pHearts')
const computerHearts = document.getElementById('cHearts');
const statusMessage = document.querySelector('.status-message');
const statusIcon = document.querySelector('.status-icon');
const playAgain = document.querySelector('.play-again');
var round = 0; 

var msg = { //win/lose/tie messages to display;
    fireWin: "Scorch their lands, burn down the forests!",
    fireLose: "Your pathetic flame sparks and flickers away...",
    fireTie: "Its a tie! The world burns, but you live to see another day",
    waterWin: "Drown out their cries, flood their basements, extinguish their flames!" ,
    waterLose: "Grass absorbs your water, you lose..." ,
    waterTie: "Its a tie! The seas rise, and you both rise with them!",
    grassWin: "Quench your thirst, grow stronger! Congratulations!",
    grassLose: "Your roots singe and burns away...Try again.",
    grassTie: "The sun shines bright! You grow stronger...together!",
};

function computerMove(){ // randomly roll fire, water or grass.
    var roll = randomIntInterval(1,3)
    return roll === 1 ? "fire" : roll == 2 ? "water" : 'grass';
}

function randomIntInterval(min, max){ // returns random integer in a range
    return Math.floor(Math.random()*(max-min+1) + min)
}

//the following 3 functions receive the computer move and a win/lose/tie  message, display both, then increment the hearts/lives and rounds
function win(computer, msg){ 
    computerHearts.removeChild(computerHearts.lastChild);
    message.innerText = msg;
    message.style.color = 'green';
    computerImage.src = `images/${computer}.png`;
    rounds.innerText = `Round: ${++round}`;  
}

function lose(computer, msg){
    playerHearts.removeChild(playerHearts.lastChild);
    message.innerText = msg;
    message.style.color = 'red'; 
    computerImage.src = `images/${computer}.png`;
    rounds.innerText = `Round: ${++round}`; 
}

function tie(choice, msg){
    message.innerText = msg;
    message.style.color = 'black'; 
    computerImage.src = `images/${choice}.png`;
    rounds.innerText = `Round: ${++round}`; 
}

function playRound(p,c){ //given inputs player and comp, call win, lose or tie function
    if(p == 'fire'){ 
        if(c== 'grass') win('grass', msg.fireWin)
        else if(c== 'water') lose('water', msg.fireLose) 
        else tie('fire', msg.fireTie)
    }
    if(p == 'water') { 
        if(c== 'fire') win('fire', msg.waterWin)
        else if(c== 'grass') lose('grass', msg.waterLose) 
        else tie('water', msg.waterTie)
    }
    if(p == 'grass'){
        if(c== 'water') win( 'water', msg.grassWin);  
        else if(c== 'fire') lose('fire', msg.grassLose);
        else tie('grass', msg.grassTie);
    } 
}

function end(){ //end game status display
    if(computerHearts.childElementCount == 0){ //end game message if you win
        document.querySelector('.element-area').remove();
        setTimeout(()=> {
            endDisplay('WINNER!', 'green', 'win', 'Play Again?');
         }, 1500);
    }

    if(playerHearts.childElementCount == 0){ //end game message if you lose
        document.querySelector('.element-area').remove();
        setTimeout(()=> {
            endDisplay('LOSER! ', 'red', 'lose', 'Try Again?');
        }, 1500); 
    }
}

function endDisplay(text, color, img, buttonText){ //changes end status based on winner
    document.querySelector('.endgame').style.height = 'auto';
    document.querySelector('.endgame').style.visibility = 'visible';
    statusMessage.innerText = text;
    statusMessage.style.color = color;
    document.querySelector('.status-message').classList.add('statusTyped');//winner or loser status
    statusIcon.src = `images/${img}.png`; //ghost or trophy img
    document.querySelector('.status-icon').classList.add('appearIcon'); //animation for fadein
    playAgain.innerText = buttonText; //set button text to 'Play Again' or 'Try Again'
    document.querySelector('.play-again').classList.add('appearPlayAgain'); //animation fade in
    document.querySelector('.thankyou').classList.add('thanksTyped'); //animation for thank you message

}

function play() { //listen for button clicks and play round each click
    elements.forEach(elem => {
        elem.addEventListener('click', () => {
            elements.forEach(x => x.classList.remove('highlight')); //remove highlight
            let c = computerMove(); // rolls computers move
            let p;  // players move or choice depending on which button they click
            if(elem.classList.contains('fire')) p = 'fire';
            if(elem.classList.contains('water')) p = 'water';
            if(elem.classList.contains('grass')) p = 'grass'; 

            elem.className += ' highlight'; //player choice highlighted

            playRound(p,c); //play a round and adjust score, display all appropriate info
            end(); // check for end of game and display play again message

        });
    });

    playAgain.onclick = () => window.location.reload();

}



play();



