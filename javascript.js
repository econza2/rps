
function userChoose() {
    let userEntry = prompt("Rock, Paper or Scissors");
    return userEntry;
}



function computerChoose() {

    let computerEntry;
    let randomizer = Math.floor(Math.random()*3)+1;    

    if (randomizer === 1){
        computerEntry = 'rock';
    }   
    else if (randomizer === 2){
        computerEntry = 'scissors';
    }
    else {
        computerEntry = 'paper';
    }

    return computerEntry;
}

function play (user, comp) {
    if (user.toLowerCase() === 'rock' && comp === 'rock'){
        //console.log("You Draw");
        return "draw";
    }
    else if  (user.toLowerCase() === 'rock' && comp === 'paper'){
        //console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'rock' && comp === 'scissors'){
        //console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'rock'){
        //console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'paper'){
        //console.log("You Draw");
        return "draw";
    }
    else if (user.toLowerCase() === 'paper' && comp === 'scissors'){
        //console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'rock'){
        //console.log("You Lose");
        return "lose";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'paper'){
        //console.log("You Win");
        return "win";
    }
    else if (user.toLowerCase() === 'scissors' && comp === 'scissors'){
        //console.log("You Draw");
        return "draw";
    }
    else {
        //console.log("You Entered An Invalid Choice");
        return 'nothing';
    }
}

//play(userChoose(), computerChoose());
let draw=0;
let lose=0;
let win=0;
let invalid=0;

for (let i=0; i<5; i++){
    let det = play(userChoose(), computerChoose());
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

console.log("win: "+win +" draw: "+ draw+ " lose: "+lose+ " invalid: "+invalid);
