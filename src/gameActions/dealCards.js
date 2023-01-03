


const dealCards = (store) => {
   // console.log("🚀 ~ file: dealCards.js:5 ~ dealCards ~ store.fullDeck", store.fullDeck)

   // let playerCard1 = "Q"
   // let playerCard2 = "A"
   // let tableCard1 = "7"
   // let tableCard2 = "6"
   // let tableCard3 = "Q"
   // let tableCard4 = "A"

   // let ace = store.fullDeck.findIndex(item => item.rank === playerCard1)
   // store.fullDeck.splice(ace, 1).map(arr => store.addToArray(store.playerInHandCards, arr))

   // let aceInHand = store.fullDeck.findIndex(item => item.rank === playerCard2)
   // store.fullDeck.splice(aceInHand, 1).map(arr => store.addToArray(store.playerInHandCards, arr))

   // let seven = store.fullDeck.findIndex(item => item.rank === tableCard1)
   // store.fullDeck.splice(seven, 1).map(arr => store.addToArray(store.cardsOnTable, arr))

   // let four = store.fullDeck.findIndex(item => item.rank === tableCard2)
   // store.fullDeck.splice(four, 1).map(arr => store.addToArray(store.cardsOnTable, arr))

   // let ace2 = store.fullDeck.findIndex(item => item.rank === tableCard3)
   // store.fullDeck.splice(ace2, 1).map(arr => store.addToArray(store.cardsOnTable, arr))

   // let ace3 = store.fullDeck.findIndex(item => item.rank === tableCard4)
   // store.fullDeck.splice(ace3, 1).map(arr => store.addToArray(store.cardsOnTable, arr))

   

   // store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   // store.fullDeck.splice(0, 5).map(arr => store.addToArray(store.playerInHandCards, arr))
   // store.fullDeck.splice(0, 3).map(arr => store.addToArray(store.cardsOnTable, arr))
   // store.fullDeck = []

   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
   store.fullDeck.splice(0, 4).map(arr => store.addToArray(store.cardsOnTable, arr))
   // store.fullDeck = []
   
}

export default dealCards
