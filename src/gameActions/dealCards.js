


const dealCards = (store) => {
   // console.log("🚀 ~ file: dealCards.js:5 ~ dealCards ~ store.fullDeck", store.fullDeck)
   // let computer = store.compInHandCards
   // let player = store.playerInHandCards
   // let table = store.cardsOnTable

   // const getCard = (who, rank, suit, id) => {
   //    for (let i = 0; i < store.fullDeck.length; i++) {
   //       if (store.fullDeck[i].rank === rank && store.fullDeck[i].suit === suit) {
   //          store.fullDeck[i].id = id
   //          store.addToArray(who, store.fullDeck[i])
   //          break
   //       }
   //    }
   // }

   // // // COMPUTER
   // getCard(computer, "A", "hearts", 53)
   // // getCard(computer, "3", "diamonds", 54)

   // // // PLAYER
   // getCard(player, "K", "diamonds", 55)
   // getCard(player, "2", "diamonds", 56)

   // // // TABLE
   // getCard(table, "5", "hearts", 67)
   // getCard(table, "8", "spades", 69)
   // getCard(table, "9", "hearts", 68)
   // getCard(table, "Q", "clubs", 70)
   // getCard(table, "A", "clubs", 71)

   
   
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
   store.fullDeck.splice(0, 4).map(arr => store.addToArray(store.cardsOnTable, arr))
   // store.fullDeck = []

}

export default dealCards
