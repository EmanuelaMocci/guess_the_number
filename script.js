// document.querySelector(".score").textContent = "💯 Score: 50";

let randomNumber = Math.floor(Math.random() * 20) + 1;

// document.querySelector(".random_number").textContent = randomNumber;
// console.log(randomNumber);

let score = 20;
let highscore = 0;

document.querySelector(".input_button").addEventListener("click", function () {
  const numberSelected = Number(document.querySelector(".input_value").value);

  if (numberSelected == randomNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".random_number").textContent = randomNumber;
    document.querySelector(".result").textContent = "🏆 You won!";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (numberSelected < randomNumber) {
    document.querySelector(".result").textContent = "📉 The number is too low";
    document.querySelector(".input_value").value = "";

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "💥 You lost!";

      document.querySelector(".score").textContent = 0;
    }
  } else if (numberSelected > randomNumber) {
    document.querySelector(".result").textContent = "📈 The number is too high";

    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "💥 You lost!";

      document.querySelector(".score").textContent = 0;
    }
    document.querySelector(".input_value").value = "";
  }
});

document.querySelector(".repeat_Game").addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".random_number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";

  score = 20;
  document.querySelector(".result").textContent = "Start guessing..";

  document.querySelector(".score").textContent = score;
  document.querySelector(".input_value").value = "";
});
