
const startGameBtn = document.getElementById('start-game-btn');


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFSULT_USER_CHOICE = 'ROCK';

let gameIsRunning = false;

const getPlayerChoise = function(){
    const selection = prompt(`${ROCK}, ${PAPER} OR ${SCISSORS}?`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        const a = alert(`Invalid choice! We chose ${DEFSULT_USER_CHOICE} for you`);
        //console.log(a);
        return DEFSULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue <0.34){
        return ROCK;
    }else if(randomValue <0.67){
        return PAPER ;
    }else{
        return SCISSORS;
    }
};



startGameBtn.addEventListener('click',function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is Starting... ");
    const playerSelection = getPlayerChoise();
    const comuterChoice = getComputerChoice();
    console.log('P '+playerSelection);
    console.log('C '+comuterChoice);

});





