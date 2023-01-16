const card_data = require("./card");

function randomizer(card_data){
    const deck_limit = 3;
    let random_arr = [];
    let deck = [];
    
    for(let i = 0; i < deck_limit; i++){
        // console.log(i)
        const card_data_length = Object.keys(card_data).length;
        let random = Math.floor(Math.random() * (card_data_length + 1));
        // console.log(`random: ${random}`)
        // console.log(`beg random_arr: ${random_arr}`)

        while(random_arr.includes(random) || random === 0){
            random = Math.floor(Math.random() * (card_data_length + 1)); 
        }

        random_arr.push(random);
        const card = card_data[random];
        deck.push(card.name);
        // console.log(`end random_arr: ${random_arr}`)
    }
    return deck;
}




console.log(randomizer(card_data))