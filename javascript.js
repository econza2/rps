
function playerSelection() {
    let userEntry = prompt("Rock, Paper or Scissors");
    console.log('pressed');
    return userEntry;
}



function getComputerChoice() {

    let computerEntry;
    let randomizer = Math.floor(Math.random()*3)+1;    

    if (randomizer === 1){
        computerEntry = 'rock';
        console.log("rock");
    }   
    else if (randomizer === 2){
        computerEntry = 'scissors';
        console.log('scissors');
    }
    else {
        computerEntry = 'paper';
        console.log('paper');
    }

    return computerEntry;
}

function game (user, comp) {
    if (user.toLowerCase() === 'rock' && comp === 'rock'){
        console.log("You Draw");
        return "draw";
    }
    else if  (user.toLowerCase() === 'rock' && comp === 'paper'){
        console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'rock' && comp === 'scissors'){
        console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'rock'){
        console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'paper'){
        console.log("You Draw");
        return "draw";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'scissors'){
        console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'rock'){
        console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'paper'){
        console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'scissors'){
        console.log("You Draw");
        return "draw";
    }
    else {
        //console.log("You Entered An Invalid Choice");
        return 'nothing';
    }
}

const player = document.querySelector('#player');

const playerRock = document.createElement('div');
playerRock.setAttribute("id","rockdiv");
playerRock.textContent = 'You have Selected Rock';


const playerPaper = document.createElement('div');
playerPaper.setAttribute("id","paperdiv")
playerPaper.textContent = 'You have Selected Paper';

const playerScissors = document.createElement('div');
playerScissors.setAttribute("id","scissorsdiv");
playerScissors.textContent = 'You have Selected Scissors';


const computer = document.querySelector('#computer');

const computerContent = document.createElement('div');

const scoreboard = document.querySelector('#scoreboard');

const result = document.createElement('div');





const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', 
        function(){
        let computerRandom = getComputerChoice();    
        let gameResult = game('rock', computerRandom);
        player.append(playerRock);
        playerPaper.remove('paperdiv');
        playerScissors.remove('scissorsdiv');
        computer.append(computerContent);
        computerContent.textContent = "The Computer Selects "+computerRandom;
        scoreboard.append(result);
        result.textContent = "You "+gameResult;
    }  
    );

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', 
        function(){
        let computerRandom = getComputerChoice();
        let gameResult = game('paper', computerRandom);
        player.append(playerPaper);
        playerRock.remove('rockdiv');
        playerScissors.remove('scissorsdiv'); 
        computer.append(computerContent);
        computerContent.textContent = "The Computer Selects "+computerRandom;
        scoreboard.append(result);
        result.textContent = "You "+gameResult;
    }
    );

const scissorsbtn = document.querySelector('#scissors');
scissorsbtn.addEventListener('click', 
        function(){
        let computerRandom = getComputerChoice();
        let gameResult = game('scissors', computerRandom);
        player.append(playerScissors);
        playerRock.remove('rockdiv');
        playerPaper.remove('paperdiv');
        computer.append(computerContent);
        computerContent.textContent = "The Computer Selects "+computerRandom;
        scoreboard.append(result);
        result.textContent = "You "+gameResult;
    }
    );
 





















/*//play(userChoose(), computerChoose());
let draw=0;
let lose=0;
let win=0;
let invalid=0;

for (let i=0; i<5; i++){
    let det = game(playerSelection(), getComputerChoice());
    if (det === 'lose'){
        lose++;
        //console.log(lose);
    }
    else if (det === 'win'){
        win++;
        //console.log(win);
    }
    else if (det === 'draw'){
        draw++;
        //console.log(draw);
    }
    else{
        invalid++;
        //console.log(invalid);
    }
}

if (win > lose){
    console.log("You Win");
}
else if (lose>win){
    console.log("You Lose");
}
else if (win == 0 && draw == 0 && lose == 0){ 
    console.log("Invalid");
}
else {
    console.log("You Draw");
}

console.log("win: "+win +" draw: "+ draw+ " lose: "+lose+ " invalid: "+invalid);*/
