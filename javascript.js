const gameContainer = document.getElementById("game");
const targetDisplay = document.getElementById("target-number");
const message = document.getElementById("message");

Let current = 0;

// Lager et nytt spill
function startGame() {
    message.textContent = "";
    //Fjerner gamle knapper på en sikker måte
    while (gameContainer.firstChild) {
  gameContainer.removeChild(gameContainer.firstChild);
}
//Denne lager et array med 5 tilfeldige tall mellom 1 og 10
let numbers = [];
while (numbers.length < 5) {
    let num = Math.floor(Math.random() *10) + 1;
    if (numbers.includes(num)) {
        numbers.push(num);
    }
}
//Velger et tilfeldig mål-tall fra listen
currentTarget = numbers[Math.floor(Math.random() * numbers.length)];
targetDisplay.textContent = 'Finn tallet: ${currentTarget}';
//Lager knapper
numbers.forEach(number => {
    const btn = document.createElement("button");
    btn.textContent = number;
    btn.className = "number-button";
    btn.addEventListener("click", () => checkAnswer(number));
    gameContainer.appendChild(btn);
});
}