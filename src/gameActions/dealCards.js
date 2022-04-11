
const dealCards = (store) => {

   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
   store.fullDeck.splice(0, 4).map(arr => store.addToArray(store.cardsOnTable, arr))
   
}

export default dealCards
