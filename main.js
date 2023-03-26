const cardData = require("./card");

function randomizer(cardData, cardLimit) {
    let randomArr = [];
    let deck = [];
    
    for (let i = 0; i < cardLimit; i++) {

        const cardDataLength = Object.keys(cardData).length;
        let random = Math.floor(Math.random() * (cardDataLength + 1));

        while (randomArr.includes(random) || random === 0){
            random = Math.floor(Math.random() * (cardDataLength + 1)); 
        }

        randomArr.push(random);
        const card = cardData[random];
        deck.push(card.name);
    }
    return deck;
}


function packRandomizer(cardData) {
    const numberOfPacks = 15;
    const draw = 5;


}



console.log(randomizer(cardData, 15))