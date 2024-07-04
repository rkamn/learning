
const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFSULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN ='PLAYER_WINS'
const RESULT_COMPUTER_WIN= 'COMPUTER_WINS'

let gameIsRunning = false;

const getPlayerChoise = function(){    // anonymous function
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}?`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        const a = alert(`Invalid choice! We chose ${DEFSULT_USER_CHOICE} for you`);
        //console.log(a);
        return DEFSULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function(){    // anonymous function
    const randomValue = Math.random();
    if(randomValue <0.34){
        return ROCK;
    }else if(randomValue <0.67){
        return PAPER ;
    }else{
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice) =>{   //array function 

return cChoice=== pChoice ? RESULT_DRAW : 
( cChoice === ROCK && pChoice === PAPER || 
cChoice === PAPER && pChoice === SCISSORS ||
cChoice === SCISSORS && pChoice === ROCK ) ? RESULT_PLAYER_WIN : RESULT_COMPUTER_WIN;

    // if(cChoice=== pChoice){
    //     return RESULT_DRAW;
    // }else if(cChoice === ROCK && pChoice === PAPER || 
    //          cChoice === PAPER && pChoice === SCISSORS ||
    //         cChoice === SCISSORS && pChoice === ROCK){
    //     return RESULT_PLAYER_WIN;
    // }else{
    //     return RESULT_COMPUTER_WIN;
    // }

}



startGameBtn.addEventListener('click',function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is Starting... ");
    const playerChoice = getPlayerChoise();
    const comuterChoice = getComputerChoice();
    const winner = getWinner(comuterChoice, playerChoice);
    console.log('Player choice : '+playerChoice);
    console.log('Computer choice : '+comuterChoice);
    console.log('Winner : '+winner);
    let message = `you picked ${playerChoice}, Computer picked ${comuterChoice}`;
    if(winner === RESULT_DRAW){
        message = message +' had a drow';
    }else if(winner === RESULT_PLAYER_WIN){
        message = message + " player won";
    }else{
        message = message + ' computer won';
    }

});





