import React from 'react'
import { StoreContext } from '../store/store'

const useShuffleDeck = (deck) => {
   const store = React.useContext(StoreContext)
   if (store.isShuffled) return
   // for 1000 turns
   // switch the values of two random cards
   for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor((Math.random() * deck.length));
      let location2 = Math.floor((Math.random() * deck.length));
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
   }
   store.fullDeck.push(deck);
   store.isShuffled = true
}

export default useShuffleDeck
