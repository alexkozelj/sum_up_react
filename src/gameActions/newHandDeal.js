
const dealCards = (store) => {
   
   console.log("🚀 ~ file: newHandDeal.js $#%$$^@4234234324352532", store)
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
   
}

export default dealCards
