// function getComputerChoice(){

//     let choice=["Rock","Papper","Scissor"];
//         const userChoice= choice[Math.floor(Math.random()*3)];
//         return userChoice;
// }
function getComputerChoice()
{
    let choice=["Rock","Papper","Scissors"];
        const userChoice= choice[Math.floor(Math.random()*3)];
        return userChoice;
        
}

function playRound(playerSelection,computerSelection)
{
    let userChoice=playerSelection.toUpperCase();
    let computerchoice=computerSelection.toUpperCase();
   

    let rock="ROCK";
    let paper="PAPPER";
    let scissors="SCISSORS";

    if(userChoice==computerchoice){
       

        return "There was a tie, try again";

    }
    else if((userChoice==rock) && (computerchoice==paper)){
        return "You loose,Paper covers Rock";

    }
    else if((userChoice==rock) && (computerchoice==scissors)){
        return "You WIN,Rock breaks Scissor";

    }
    else if((userChoice==paper) && (computerchoice==rock)){
        return "You win,Paper covers  Rock";

    }
    else if((userChoice==scissors) && (computerchoice==rock)){
        return "You loose,Rocks breaks  Scissors";

    }
    else if((userChoice==paper) && (computerchoice==scissors)){
        return "You loose,Scissors cuts paper";

    }
    else if((userChoice==scissors) && (computerchoice==paper)){
        return "You win,Scissors cuts paper";

    }



}
function game(){
    for(i=0; i<5;i++){
const userinput=prompt("Select Rock,Papper or Scissors");
console.log(playRound(userinput,getComputerChoice()));
    }
}
game();

// let userChoice="scissors";

// console.log(playRound(userChoice,getComputerChoice()))

// console.log(getComputerChoice())

// console.log(Math.floor(Math.random()*5))


