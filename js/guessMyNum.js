"use strict";
let num = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;
const logtoconsole = () => {
  console.log(num);
  console.log(highscore);
};
const msgDisplay = (displaymsg) => {
  document.querySelector(".message").textContent = displaymsg;
};

const onWin = () => {
  document.querySelector(".text").textContent = num;
  document.querySelector(".message").textContent = "You won ... 🥇";
  document.querySelector("body").style.backgroundColor = "#4E9F3D";
  SetHighscore();
  logtoconsole();
};
const onLoose = () => {
  document.querySelector(".text").textContent = num;
  document.querySelector(".message").textContent = "You loose...  😔";
  document.querySelector("body").style.backgroundColor = "#F32424";
  SetHighscore();
  logtoconsole();
};
const onAgain = () => {
  score = 10;
  document.querySelector(".scorelevel").textContent = score;
  document.querySelector(".message").textContent = "  Start The Game  ....";
  document.querySelector("body").style.backgroundColor = "#000";
  document.querySelector(".inputnum").value = "";
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".text").textContent = "?";
};
const SetHighscore = () => {
  if (score >= highscore) {
    highscore = score;
    document.querySelector(".highscorelevel").textContent = score;
  } else {
    document.querySelector(".highscorelevel").textContent = highscore;
  }
};
const ScoreDecereaser = () => {
  if (score == 0) {
    onLoose();
    return;
  }
  score--;
  document.querySelector(".scorelevel").textContent = score;
};

const onclikFun = function () {
  const guess = document.querySelector(".inputnum").value;
  if (!guess) {
    document.querySelector(".message").textContent = "Enter The Number";
  } else if (num == guess) {
    onWin();
  } else {
    msgDisplay(guess > num ? "Too High ...📈" : "Too Low ...📉");
    ScoreDecereaser();
  }
};

document.querySelector(".checkbutton").addEventListener("click", onclikFun);
document.addEventListener("click", function (e) {
  if ((e.key = "Enter")) {
    onclikFun;
  }
});
document.querySelector(".againbtn").addEventListener("click", onAgain);
