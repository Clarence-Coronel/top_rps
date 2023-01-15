const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
let playerPick ="";
let playerWin = 0;
let compWin = 0;
let drawCounter = 0;
const MAXROUNDS = 5;

const start = document.querySelector('.start');
const rock = document.querySelector("button[data-pick='rock']");
const paper = document.querySelector("button[data-pick='paper']");
const scissors = document.querySelector("button[data-pick='scissors']");
const display = document.querySelector(".msg");

rock.addEventListener('click', () => playerPick='rock');
paper.addEventListener('click', () => playerPick='paper');
scissors.addEventListener('click', () => playerPick='scissors');


start.addEventListener('click', () => {
    const strtMsg = "Start";
    const endMsg = "CHOOSE SOMETHING!";
    if(playerPick === "") {
        if(start.textContent === strtMsg){
            console.log("pressed start")
            start.classList.remove("btn");
            start.classList.add("error");
            start.textContent = endMsg;
        }

        setTimeout(()=> {
            if(start.textContent === endMsg){
                start.classList.remove("error");
                start.classList.add("btn");
                start.textContent = "Start";
            }
        }, 2000);
    }else{
        // playRound(playerPick, getComputerChoice);
        let comp = getComputerChoice();
        playRound(playerPick, comp);
    }
    
});






function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);

    if(rand === 0) return CHOICES[0];
    else if (rand === 1) return CHOICES[1];
    else return CHOICES[2];
}

// function getPlayerChoice(){
//     let isNotValid = true;
//     let choice;
//     while(isNotValid){

//         choice = prompt("Pick a Weapon(ROCK, PAPER, or SCISSORS): ").toUpperCase();
//         if( (choice === CHOICES[0]) || (choice === CHOICES[1]) || (choice === CHOICES[2]) ){
//             isNotValid = false;
//             return choice;
//         }else {
//             console.error("Invalid Input");
//         }
//     }
// }

function playRound(player, comp){
    player = player.toUpperCase();
    console.log(player + " vs " + comp);

    if(                                                   //Player------vs------Comp
        (player === CHOICES[0] && comp === CHOICES[2]) || //Rock        vs      Scissors
        (player === CHOICES[1] && comp === CHOICES[0]) || //Paper       vs      Rock
        (player === CHOICES[2] && comp === CHOICES[1])    //Scissors    vs      Paper
        )   {
                if(player === CHOICES[0]) {
                    playerWin++;
                    msg.textContent = "You WIN! ROCK beats SCISSORS.";
                }
                else if(player === CHOICES[1]) {
                    playerWin++;
                    msg.textContent = "You WIN! PAPER beats ROCK.";
                } 
                else {
                    playerWin++;
                    msg.textContent = "You WIN! SCISSORS beats PAPER.";
                } 
            }
    else if(player === comp) {
        if(player === CHOICES[0]) {
            drawCounter++;
            msg.textContent = "DRAW! ROCK does not beat ROCK.";
        }
        else if(player === CHOICES[1]) {
            drawCounter++;
            msg.textContent = "DRAW! PAPER does not beat PAPER.";
        }
        else if(player === CHOICES[2]) {
            drawCounter++;
            msg.textContent = "DRAW! SCISSORS does not beat SCISSORS.";
        }
    }
    else{

        if(comp === CHOICES[0]) {
            compWin++;
            msg.textContent = "You LOSE! ROCK beats SCISSORS.";
        }
        else if(comp === CHOICES[1]) {
            compWin++;
            msg.textContent = "You LOSE! PAPER beats ROCK.";
        } 
        else {
            compWin++;
            msg.textContent = "You LOSE! SCISSORS beats PAPER.";
        }

    }
}

function game(){

    //add eventlistener to a button to then call playRound()
    for(i = 0; i < MAXROUNDS; i++){
        playRound(getPlayerChoice(), getComputerChoice());
        console.log("PLAYER: " + playerWin);
        console.log("COMPUTER: " + compWin);
        console.log("DRAW: " + drawCounter);
        console.log("\n");
    }

    if(playerWin > compWin) console.log("Congratulations! You won the game.\n\n");
    else console.log("Better luck next time! You lost the game.\n\n");

    playerWin = 0;
    compWin = 0;
    drawCounter = 0;
}



