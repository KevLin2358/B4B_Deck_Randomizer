const cardData = require("../database/card");

function randomizer(cardLimit = 1, cardPacks = 1) {
    let randomArr = [];
    let deck = [];
    const card_data_length = Object.keys(cardData).length;
    const cards = cardLimit * cardPacks;

    for(let i = 0; i < cards; i++){
        let random = Math.floor(Math.random() * (card_data_length + 1));

        while(randomArr.includes(random) || random === 0){
            random = Math.floor(Math.random() * (card_data_length + 1)); 
        }

        randomArr.push(random);
        const card = cardData[random];
        deck.push(card.name);
    }

    return deck;
}

function createPacks(cards) {
    let packs = []

    for (let i = 0; i < 15; i++) {
        packs[i] = []
    }

    for (let i = 0; i < cards.length; i++) {
        packs[i % 15].push(cards[i])
    }

    return packs
}

function playerPrompt(packs) {
    let userPrompt = prompt("Choose a number between 1 - 5 to add your card: ")
}

let cards = randomizer(5, 15)
console.log(createPacks(cards))
// console.log(playerPrompt(cards))