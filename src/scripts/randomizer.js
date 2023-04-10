const cardData = require("./card.js");

function randomizer(cardLimit = 1) {
    let randomArr = [];
    let deck = [];
    const card_data_length = Object.keys(cardData).length;

    for(let i = 0; i < cardLimit; i++){
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

function randomizerPack(packLimit = 15) {

}

console.log(randomizer(15))