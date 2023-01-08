const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
let playerWin = 0;
let compWin = 0;
let drawCounter = 0;
const MAXROUNDS = 5;

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);

    if(rand === 0) return CHOICES[0];
    else if (rand === 1) return CHOICES[1];
    else return CHOICES[2];
}

function getPlayerChoice(){
    let isNotValid = true;
    let choice;
    while(isNotValid){

        choice = prompt("Pick a Weapon(ROCK, PAPER, or SCISSORS): ").toString().toUpperCase();
        if( (choice === CHOICES[0]) || (choice === CHOICES[1]) || (choice === CHOICES[2]) ){
            isNotValid = false;
            return choice;
        }else {
            console.error("Invalid Input");
        }
    }
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
                    console.log("You WIN! ROCK beats SCISSORS.");
                }
                else if(player === CHOICES[1]) {
                    playerWin++;
                    console.log("You WIN! PAPER beats ROCK.");
                } 
                else {
                    playerWin++;
                    console.log("You WIN! SCISSORS beats PAPER.");
                } 
            }
    else if(player === comp) {
        if(player === CHOICES[0]) {
            drawCounter++;
            console.log("DRAW! ROCK does not beat ROCK.");
        }
        else if(player === CHOICES[1]) {
            drawCounter++;
            console.log("DRAW! PAPER does not beat PAPER.");
        }
        else if(player === CHOICES[2]) {
            drawCounter++;
            console.log("DRAW! SCISSORS does not beat SCISSORS.");
        }
    }
    else{

        if(comp === CHOICES[0]) {
            compWin++;
            console.log("You LOSE! ROCK beats SCISSORS.");
        }
        else if(comp === CHOICES[1]) {
            compWin++;
            console.log("You LOSE! PAPER beats ROCK.");
        } 
        else {
            compWin++;
            console.log("You LOSE! SCISSORS beats PAPER.");
        }

    }
}

function game(){
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



game();

if(confirm("Play Again?")) game();
