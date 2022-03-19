import React from 'react'
import { StoreContext } from '../store/store'

const useDealCards = () => {
   const store = React.useContext(StoreContext)
   if (store.isDealt) return

   store.compInHandCards.push(store.fullDeck[0].splice(0, 6))
   store.playerInHandCards.push(store.fullDeck[0].splice(0, 6))
   store.cardsOnTable.push(store.fullDeck[0].splice(0, 4))
   
}

export default useDealCards
