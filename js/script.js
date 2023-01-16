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

rock.addEventListener('click', () => {

    //add btn after click sa ibang buttons

    change(rock, paper, scissors);
    playerPick='rock';
});

paper.addEventListener('click', () => {
    change(paper, rock, scissors);
    playerPick='paper';
});

scissors.addEventListener('click', () => {
    change(scissors, rock, paper);
    playerPick='scissors';
});

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
    
    undoChange(rock, paper, scissors);

});

function undoChange(rock, paper, scissors){
    rock.classList.add('btn');
    paper.classList.add('btn');
    scissors.classList.add('btn');

    rock.classList.remove('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');

    start.style.color = 'white';

    setTimeout(()=> {
        start.style.color = 'aqua';
    },1000)

    playerPick = '';
}

function change(selected, nonSelect, nonSelect2){

    selected.classList.add('selected');
    nonSelect.classList.add('btn');
    nonSelect2.classList.add('btn');
    
    selected.classList.remove('btn');

    nonSelect.classList.remove('selected');
    nonSelect2.classList.remove('selected');

}




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
                    display.textContent = "You WIN! ROCK beats SCISSORS.";
                    display.style.color = '#39fc03';
                }
                else if(player === CHOICES[1]) {
                    playerWin++;
                    display.textContent = "You WIN! PAPER beats ROCK.";
                    display.style.color = '#39fc03';
                } 
                else {
                    playerWin++;
                    display.textContent = "You WIN! SCISSORS beats PAPER.";
                    display.style.color = '#39fc03';
                } 
            }
    else if(player === comp) {
        if(player === CHOICES[0]) {
            drawCounter++;
            display.textContent = "DRAW! ROCK does not beat ROCK.";
            display.style.color = 'white';
        }
        else if(player === CHOICES[1]) {
            drawCounter++;
            display.textContent = "DRAW! PAPER does not beat PAPER.";
            display.style.color = 'white';
        }
        else if(player === CHOICES[2]) {
            drawCounter++;
            display.textContent = "DRAW! SCISSORS does not beat SCISSORS.";
            display.style.color = 'white';
        }
    }
    else{

        if(comp === CHOICES[0]) {
            compWin++;
            display.textContent = "You LOSE! ROCK beats SCISSORS.";
            display.style.color = 'red';
        }
        else if(comp === CHOICES[1]) {
            compWin++;
            display.textContent = "You LOSE! PAPER beats ROCK.";
            display.style.color = 'red';
        } 
        else {
            compWin++;
            display.textContent = "You LOSE! SCISSORS beats PAPER.";
            display.style.color = 'red';
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



