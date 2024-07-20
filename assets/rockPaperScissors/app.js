let h1=document.querySelector('h1');

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const user_score = document.querySelector('#user-score');
const comp_score = document.querySelector('#comp-score');
let userScore = 0;
let compScore = 0;



const drawGame = () =>{
    userScore++;
    compScore++;
    user_score.innerText = userScore;
    comp_score.innerText = compScore;
    msg.innerText = 'Game draw, Play Again..';
    msg.style.backgroundColor = 'blue';
    console.log(`Game draw.. , User Score ${userScore} & Computer Score ${compScore}`);
}
const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        console.log(`you Win! , User Score ${userScore} & Computer Score ${compScore}`);
        msg.innerText =`You Win!, Your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText =`You loose.., Computer choice ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = 'red';
        console.log(`you loose.. , User Score ${userScore} & Computer Score ${compScore}`);
    }
}
const genCompChoice = () =>{
    // rock, paper , scissors
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==='rock'){
            // computer choice -> paper / scissors
            userWin = compChoice ==='paper'?false : true;
            
            //console.log(`you loose.. , User Score ${userScore} & Computer Score ${compScore}`);
        }else if(userChoice ==='paper'){
            // computer choice -> rock / scissors
            userWin = compChoice ==='rock'?true:false;
            
           // console.log(`you win.. , User Score ${userScore} & Computer Score ${compScore}`);
        }else{
            // computer choice -> rock / paper
            userWin = compChoice === 'rock'?false:true;
           // console.log(`you loose.. , User Score ${userScore} & Computer Score ${compScore}`);
        } 
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});