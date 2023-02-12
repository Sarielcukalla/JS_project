let cards = []
let sum = 0
let hasblackjack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let playerEL = document.getElementById("player-el")
let player = {
    name: "per",
    chips: "145"

}
playerEL.innerText = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10

    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    hasblackjack=false
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard

    renderGame()
}


function renderGame() {
    cardsEL.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " ";

    }

    sumEL.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you to draw another card?"
    }
    else if (sum === 21) {
        message = "you've got Blackjack! "
        hasblackjack = true
    }
    else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEL.textContent = message
}
function newCard() {
    if (isAlive === true && hasblackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        
    }

   
}

