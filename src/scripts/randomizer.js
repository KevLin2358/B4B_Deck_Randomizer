const cardData = require("./card.js");

function randomizer(cardLimit = 1){
    let random_arr = [];
    let deck = [];
    
    for(let i = 0; i < cardLimit; i++){
        const card_data_length = Object.keys(cardData).length;
        let random = Math.floor(Math.random() * (card_data_length + 1));

        while(random_arr.includes(random) || random === 0){
            random = Math.floor(Math.random() * (card_data_length + 1)); 
        }

        random_arr.push(random);
        const card = cardData[random];
        deck.push(card.name);
    }
    return deck;
}

// console.log(randomizer(15))