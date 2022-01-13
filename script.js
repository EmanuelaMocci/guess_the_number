// document.querySelector(".score").textContent = "💯 Score: 50";

let randomNumber = Math.floor(Math.random() * 20) + 1;

// document.querySelector(".random_number").textContent = randomNumber;
// console.log(randomNumber);

let score = 20;
let highscore = 0;

document.querySelector(".input_button").addEventListener("click", function () {
  const numberSelected = Number(document.querySelector(".input_value").value);

  // In caso di vincita
  if (numberSelected == randomNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".random_number").textContent = randomNumber;
    document.querySelector(".result").textContent = "🏆 You won!";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }

    // Se il numero inserito è più piccolo del numero random
  } else if (numberSelected < randomNumber) {
    document.querySelector(".result").textContent = "📉 The number is too low";
    document.querySelector(".input_value").value = "";

    // Se sbaglia tutti i tentativi ed esaurisce il punteggio
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "💥 You lost!";

      document.querySelector(".score").textContent = 0;
    }

    // Se il numero inserito è più grande del numero random
  } else if (numberSelected > randomNumber) {
    document.querySelector(".result").textContent = "📈 The number is too high";

    // Se sbaglia tutti i tentativi ed esaurisce il punteggio
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".result").textContent = "💥 You lost!";

      document.querySelector(".score").textContent = 0;
    }
    document.querySelector(".input_value").value = "";
  }

  // Se inserisce un numero non compreso tra 1 e 20
  if (numberSelected < 1 || numberSelected > 20) {
    score++;
    document.querySelector(".result").textContent =
      "👾 Choose a number between 1 and 20";
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
