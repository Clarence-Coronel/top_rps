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
const playerDisplay = document.querySelector('.p1');
const compDisplay = document.querySelector('.p2');

rock.addEventListener('click', () => {
    
    updateDisplay('ROCK');
    change(rock, paper, scissors);
    playerPick='rock';
    reset();
});

paper.addEventListener('click', () => {
    updateDisplay('PAPER');
    change(paper, rock, scissors);
    playerPick='paper';
    reset();
});

scissors.addEventListener('click', () => {
    updateDisplay('SCISSORS');
    change(scissors, rock, paper);
    playerPick='scissors';
    reset();
    
});

start.addEventListener('click', () => {

    const strtMsg = "Start";
    const endMsg = "CHOOSE SOMETHING!";
    if(playerPick === "") {//if start btn is clicked when no choice is picked changes start btn appearance 
        if(start.textContent === strtMsg){
            start.classList.remove("btn");
            start.classList.add("error");
            start.textContent = endMsg;
        }

        setTimeout(()=> { //after 2 sec goes back to start btn default appearance
            if(start.textContent === endMsg){
                start.classList.remove("error");
                start.classList.add("btn");
                start.textContent = "Start";
            }
        }, 2000);
    }else{
        let comp = getComputerChoice();
        playRound(playerPick, comp);
    }
    
    undoChange(rock, paper, scissors);
    processWinner();
    
    
    if(playerWin > 0) playerDisplay.innerHTML = playerWin;
    if(compWin > 0) compDisplay.innerHTML = compWin;

    console.log('Player Win = ' + playerWin);
    console.log('Player Lost = ' + compWin);


});

function reset(){
    if(playerWin == 5 || compWin ==5){
        playerWin = 0;
        compWin = 0;

        playerDisplay.innerHTML = '';
        compDisplay.innerHTML = '';
    }
}

//changes screen text to default and displays current chosen pick
function updateDisplay(str){
    display.innerHTML = str;
    display.classList.remove('lose');
    display.classList.remove('win');
    display.style.color = 'white';
}

function processWinner(){
    if(playerWin == 5){

        display.textContent = 'YOU WON THE GAME! CONGRATULATION!';
        display.classList.add('win');
    }

    if(compWin == 5){
        display.textContent = 'YOU LOST THE GAME! BETTER LUCK NEXT TIME!';
        display.classList.add('lose');
    }
}

//undo the 'change' function
function undoChange(rock, paper, scissors){
    rock.classList.add('btn');
    paper.classList.add('btn');
    scissors.classList.add('btn');

    rock.classList.remove('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');

    playerPick = '';
}

//changes button appearance if selected
function change(selected, nonSelect, nonSelect2){

    selected.classList.add('selected');
    nonSelect.classList.add('btn');
    nonSelect2.classList.add('btn');
    
    selected.classList.remove('btn');

    nonSelect.classList.remove('selected');
    nonSelect2.classList.remove('selected');

}

//randomly generate number from 0 to 2 then generate equivalent from CHOICES array
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);

    if(rand === 0) return CHOICES[0];
    else if (rand === 1) return CHOICES[1];
    else return CHOICES[2];
}

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




