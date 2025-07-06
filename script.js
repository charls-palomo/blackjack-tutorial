let startBtn = document.getElementById("startBtn");
let messageEl = document.getElementById("messageEl");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.getElementById("cardsEl");
let newCardBtn = document.getElementById("newCardBtn");
let newCardTxt = document.getElementById("newCardTxt");


let firstNum = Math.floor(Math.random() * 11) + 1;
let secondNum = Math.floor(Math.random() * 11) + 1;
let sum = firstNum + secondNum;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame()
{

    renderGame();
}

function renderGame()
{
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + firstNum + " | " + secondNum;

    if (sum <= 20)
    {
        message = "Do you want to draw a new card?";
    }

    else if (sum == 21)
    {
        message = "Blackjack!"
        hasBlackJack = true;
    }

    else
    {
        message = "You're out of the game."
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard()
{
    console.log("Drawing a new card from the deck...")
    let card = Math.floor(Math.random() * 11) + 1;
    sum += card;
    newCardTxt.textContent = "NEW CARD: " + card;

    renderGame();
}

