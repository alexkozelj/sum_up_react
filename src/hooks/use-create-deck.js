import React from 'react'
import { StoreContext } from '../store/store'

const useCreateDeck = () => {
   
   const store = React.useContext(StoreContext)
   if (store.fullDeck.length) return
   store.isShuffled = false;

   let deck = [];
   let id = 0;

   for (let i = 0; i < store.suits.length; i++) {
      for (let x = 0; x < store.ranks.length; x++) {
         let value
         if (
            store.ranks[x] === "a" ||
            store.ranks[x] === "j" ||
            store.ranks[x] === "q" ||
            store.ranks[x] === "k"
         ) {

            value = 1;

         } else if (store.ranks[x] === "2" && store.suits[i] === "clubs") {
            
            value = 1;

         } else if (store.ranks[x] === "10") {
            if (store.suits[i] === "diamonds") {
               
               value = 2;
            
            } else {
               
               value = 1;
            
            }
         } else {
            
            value = 0;
         
         }
         
         id += 1;
         let card = [{
            id: id,
            rank: store.ranks[x],
            suit: store.suits[i],
            value: value
         }];

         deck.push(card);
      }
   }
   return deck
   // const shuffledDeck = useShuffleDeck(deck)
   // store.fullDeck.push(shuffledDeck);
   // return shuffledDeck;
}

export default useCreateDeck
