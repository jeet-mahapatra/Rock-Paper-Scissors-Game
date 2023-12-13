let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoise = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //To generate random no.
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw.");
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "violet";
  msg.style.color = "yellow";
};

const showWinner = (userWin, userChoise, compChoise) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log(`you win! your ${userChoise} beats ${compChoise}`);
    msg.innerText = `you win! \n\n  your ${userChoise} beats ${compChoise}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log(`you lost. ${compChoise} beats your ${userChoise}`);
    msg.innerText = `you lost.\n\n  ${compChoise} beats your ${userChoise}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoise) => {
  console.log("userChoise = ", userChoise);
  //Generate Computer Choise
  const compChoise = genCompChoise();
  console.log("comp Choise = ", compChoise);

  if (userChoise === compChoise) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = compChoise === "paper" ? false : true;
    } else if (userChoise === "paper") {
      userWin = compChoise === "scissors" ? false : true;
    } else {
      userWin = compChoise === "rock" ? false : true;
    }
    showWinner(userWin, userChoise, compChoise);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoise = choice.getAttribute("id");
    playGame(userChoise);
  });
});
