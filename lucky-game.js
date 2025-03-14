function disableAllBoxes() {
  let boxes = document.querySelectorAll(".div");
  boxes.forEach((box) => {
    box.onclick = null;
  });
}

function luckyGameOne() {
  let one = document.getElementById("one");
  one.innerText = "Donkey😄";
  one.style.backgroundColor = "#FF2DF1";
  document.getElementById("message").innerText =
    "You got the luckiest animal! Or... maybe not?😁";
  disableAllBoxes();
}
function luckyGameTwo() {
  let two = document.getElementById("two");
  two.innerText = "Diamond 💎";
  two.style.backgroundColor = "#4CAF50";
  document.getElementById("message").innerText =
    "Whoa! You're super lucky today!😋";
  disableAllBoxes();
}
function luckyGameThree() {
  let three = document.getElementById("three");
  three.innerText = "Magic Lamp 🪔";
  three.style.backgroundColor = "#A52A2A";
  document.getElementById("message").innerText =
    "Rub it! Maybe a genie grants your wish!🧞";
  disableAllBoxes();
}
function luckyGameFour() {
  let four = document.getElementById("four");
  four.innerText = "Snake 🐍";
  four.style.backgroundColor = "#FFA500";
  document.getElementById("message").innerText =
    " Hissss... but hey, some say snakes bring fortune!😜";
  disableAllBoxes();
}
function luckyGameFive() {
  let five = document.getElementById("five");
  five.innerText = "Cat 🐱";
  five.style.backgroundColor = "#FF5733";
  document.getElementById("message").innerText =
    "A black cat? Or a lucky charm? You decide!😹";
  disableAllBoxes();
}
function luckyGameSix() {
  let six = document.getElementById("six");
  six.innerText = "Gold Coin 💰";
  six.style.backgroundColor = "#FFD700";
  document.getElementById("message").innerText = "Jackpot! You hit the gold!✨";
  disableAllBoxes();
}
function luckyGameSeven() {
  let seven = document.getElementById("seven");
  seven.innerText = "Parrot 🦜";
  seven.style.backgroundColor = "#808080";
  document.getElementById("message").innerText =
    "Squawk! I repeat: You’re the chosen one!😂 ";
  disableAllBoxes();
}
function luckyGameEight() {
  let eight = document.getElementById("eight");
  eight.innerText = "Treasure Chest🔑";
  eight.style.backgroundColor = "#8A2BE2";
  document.getElementById("message").innerText =
    "You found the secret treasure!🏆";
  disableAllBoxes();
}
function luckyGameNine() {
  let nine = document.getElementById("nine");
  nine.innerText = "Monkey 🐒";
  nine.style.backgroundColor = "rgb(2, 48, 4)";
  document.getElementById("message").innerText =
    "Oops! This monkey stole your luck!🙊";
  disableAllBoxes();
}
