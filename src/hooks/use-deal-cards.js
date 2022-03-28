import React from 'react'
import { StoreContext } from '../store/store'

const useDealCards = () => {
   const store = React.useContext(StoreContext)

   if (store.isDealt) return

   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
   store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
   store.fullDeck.splice(0, 4).map(arr => store.addToArray(store.cardsOnTable, arr))

   // console.log("🚀 ~ file: use-deal-cards.js ~ line 10 ~ useDealCards ~ store", store)

   store.isDealt = true;
   
}

export default useDealCards
