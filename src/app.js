// create card options
const cardArray = [
  {
    name: "fries",
    img: "src/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/img/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "src/img/hotdog.png",
  },
  {
    name: "fries",
    img: "src/img/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/img/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/img/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/img/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/img/milkshake.png",
  },
  {
    name: "hotdog",
    img: "src/img/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random()); // sorts array in random
console.log(cardArray.length);

const grid = document.querySelector(".grid");
const resultDisplay = document.getElementById("result");
const winMessage = document.getElementById("win-message");
let cardsChosen = [];
let cardsChosenIDs = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardID].name);
  cardsChosenIDs.push(cardID);
  this.setAttribute("src", cardArray[cardID].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneID = cardsChosenIDs[0];
  const optionTwoID = cardsChosenIDs[1];

  if (optionOneID === optionTwoID) {
    alert("You have clicked the same image!");
    cards[optionOneID].setAttribute("src", "src/img/blank.png");
    cards[optionTwoID].setAttribute("src", "src/img/blank.png");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You have found a match!");
    cards[optionOneID].setAttribute("src", "src/img/white.png");
    cards[optionTwoID].setAttribute("src", "src/img/white.png");
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneID].setAttribute("src", "src/img/blank.png");
    cards[optionTwoID].setAttribute("src", "src/img/blank.png");
    alert("Sorry, try again!");
  }
  cardsChosen = [];
  cardsChosenIDs = [];
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length * 2 === cardArray.length) {
    winMessage.textContent = " Congratulations, you have won!";
  }

  console.log(cardsWon);
  console.log(cardsChosen);
}

createBoard();
