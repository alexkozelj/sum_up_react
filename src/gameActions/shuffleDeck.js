
export const shuffleDeck = (deck) => {
   
   // for 1000 turns
   // switch the values of two random cards
   for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
   }

   // console.log("🚀 ~ file: use-shuffle-deck.js ~ line 20 ~ shuffleDeck ~ deck", deck)
   return deck
   // deck.map(arr => store.addToArray(store.fullDeck, arr[0]))
   
}

export default shuffleDeck
