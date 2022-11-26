// function getComputerChoice(){

//     let choice=["Rock","Papper","Scissor"];
//         const userChoice= choice[Math.floor(Math.random()*3)];
//         return userChoice;
// }
const container=document.querySelector('#container');
const answer=document.createElement('p');


container.appendChild(answer);
const allBtn=document.querySelectorAll('button');
allBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
// alert(button.id);
// answer.textContent=button.id;
const c=button.id.toUpperCase();
// if (c=="ROCK"){
//     answer.textContent="ROck beats siccors";

// }
});

});
function getComputerChoice()
{
    let choice=["Rock","Papper","Scissors"];
        const userChoice= choice[Math.floor(Math.random()*3)];
        return userChoice;
        
}

function playRound(userChoice,computerSelection)
{
    const container=document.querySelector('#container');
    const answer=document.querySelector(".useranswer");
    // const answer=document.createElement('p');
    // container.appendChild(answer);
    // let userChoice=playerSelection.toUpperCase();
    let computerchoice=computerSelection.toUpperCase();
   
    let cschoice=document.querySelector(".computerchoice");
    let uschoice=document.querySelector(".userchoice");
    cschoice.textContent="computer:"+computerchoice;
    uschoice.textContent="Your choice:"+userChoice;

    let rock="ROCK";
    let paper="PAPPER";
    let scissors="SCISSORS";
    const userScore=0;
    let computerScore=0;

    if(userChoice==computerchoice){
       
// const answer=document.getElementById("#answer");
// answer.textContent="There was a tie";

        // return "There was a tie, try again";
         return answer.textContent="There was tie,try again";

    }
    else if((userChoice==rock) && (computerchoice==paper)){
        computerScore+=1;
        console.log(computerScore)
        return answer.textContent="You win,Paper covers Rock";

    }
    else if((userChoice==rock) && (computerchoice==scissors)){
        return answer.textContent="You win,Rock breaks Scissor";

    }
    else if((userChoice==paper) && (computerchoice==rock)){
        return answer.textContent="You win,Paper covers  Rock";

    }
    else if((userChoice==scissors) && (computerchoice==rock)){

        computerScore=+1;
        console.log(computerScore)
        return answer.textContent="You loose,Rocks breaks  Scissors";
       

    }
    else if((userChoice==paper) && (computerchoice==scissors)){
        computerScore=computerScore+1;
        console.log(computerScore)
        return answer.textContent="You loose,Scissors cuts paper";

    }
    else if((userChoice==scissors) && (computerchoice==paper)){
        return answer.textContent="You win,Scissors cuts paper";

    }



}
function game(){
   
    const allBtn=document.querySelectorAll('button');
    let dcount=document.querySelector(".count");
    let  count=0;
   
   
    allBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
    const user=button.id.toUpperCase();
    count+=1
   
    playRound(user,getComputerChoice());
    dcount.textContent="Round: "+count;
 
});
    

});

//     for(i=0; i<5;i++){
// const userinput=prompt("Select Rock,Papper or Scissors");
// console.log(playRound(userinput,getComputerChoice()));
    // }
}
game();

// let userChoice="scissors";

// console.log(playRound(userChoice,getComputerChoice()))

// console.log(getComputerChoice())

// console.log(Math.floor(Math.random()*5))


