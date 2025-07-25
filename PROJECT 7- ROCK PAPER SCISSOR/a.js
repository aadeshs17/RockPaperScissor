let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#computerscore");

const showWinner=(userWin,userchoice,compChoice)=>{
if(userWin)
{
  userScore++;
  userScorePara.innerText=userScore
  console.log(("You won!"))
  msg.innerText=`You won! Your ${userchoice} beats ${compChoice}`;
  msg.style.backgroundColor="green"
}
else{
  compScore++;
  compScorePara.innerText=compScore
  console.log("You lost!")
  msg.innerText=`You lost! ${compChoice} beats Your ${userchoice}`;
  msg.style.backgroundColor="red"

}
}

const genCompChoice=()=>{
  let options=["rock","paper","scissor"]
  const randIdx=Math.floor(Math.random()*3)
return options[randIdx]
}

const drawGame=()=>{
  console.log("Game was Draw")
  msg.innerText="Game was Draw. Play again!";
  msg.style.backgroundColor="#081b31"

}

const playgame=(userchoice)=>{
  console.log("userchoice=",userchoice)
//generate computer choice
 const compChoice=genCompChoice()
 console.log("compchoice=", compChoice)
 if(userchoice==compChoice){
  drawGame();
 }
 else{
  let userWin=true;
  if(userchoice=="rock")
  {
    userWin=(compChoice=="paper")? false:true
  }
  else if(userchoice=="paper")
  {
    userWin=(compChoice=="scissor")? false:true
  }
  else{
    userWin=(compChoice=="rock")? false:true
  }
  showWinner(userWin,userchoice,compChoice)
 }

}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    userchoice=choice.getAttribute("id")
    playgame(userchoice)
  })
})