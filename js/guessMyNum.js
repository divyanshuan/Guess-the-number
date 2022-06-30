"use strict";
let num = Math.trunc(Math.random() * 20 + 1);
let score = 10;
let highscore = 0;

const onWin = () => {
  document.querySelector(".text").textContent = num;
  document.querySelector(".message").textContent = "You won...";
  document.querySelector(".line").style.border = "2px solid #4E9F3D";
  document.querySelector(".text").style.backgroundColor = "#4E9F3D";
  document.querySelector(" .line").style.backgroundColor = "#4E9F3D";
  document.querySelector(".guessbox").style.backgroundColor = "#4E9F3D";
  SetHighscore();
  console.log(num);
  console.log(highscore);
};
const onLoose = () => {
  document.querySelector(".text").textContent = num;
  document.querySelector(".message").textContent = "You loose...";
  document.querySelector(".line").style.border = "2px solid #F32424";
  document.querySelector(".text").style.backgroundColor = "#F32424";
  document.querySelector(".line").style.backgroundColor = "#F32424";
  document.querySelector(".guessbox").style.backgroundColor = "#F32424";
  SetHighscore();
  console.log(num);
  console.log(highscore);
  return;
};
const onAgain = () => {
  score = 10;
  document.querySelector(".scorelevel").textContent = score;
  document.querySelector(".message").textContent = "Start The Game....";
  document.querySelector(".line").style.border = "2px solid #fff";
  document.querySelector(".text").style.backgroundColor = "#fff";
  document.querySelector(".line").style.backgroundColor = "#fff";
  document.querySelector(".guessbox").style.backgroundColor = "#fff";
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
    return;
  } else if (guess > num) {
    document.querySelector(".message").textContent = "Too High 📈";
    ScoreDecereaser();
  } else if (guess < num) {
    document.querySelector(".message").textContent = "Too Low 📉";
    ScoreDecereaser();
  }
};

document.querySelector(".checkbutton").addEventListener("click", onclikFun);
document.querySelector(".againbtn").addEventListener("click", onAgain);
