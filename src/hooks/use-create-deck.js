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
         let calculusValue
         
         if (store.ranks[x] === "A") { calculusValue = 1 }
         if (store.ranks[x] === "K") { calculusValue = 14 }
         if (store.ranks[x] === "Q") { calculusValue = 13 }
         if (store.ranks[x] === "J") { calculusValue = 12 }
         if (store.ranks[x] === "10") { calculusValue = 10 }
         if (store.ranks[x] === "9") { calculusValue = 9 }
         if (store.ranks[x] === "8") { calculusValue = 8 }
         if (store.ranks[x] === "7") { calculusValue = 7 }
         if (store.ranks[x] === "6") { calculusValue = 6 }
         if (store.ranks[x] === "5") { calculusValue = 5 }
         if (store.ranks[x] === "4") { calculusValue = 4 }
         if (store.ranks[x] === "3") { calculusValue = 3 }
         if (store.ranks[x] === "2") { calculusValue = 2 }
         // console.log('CREATE DECK - CALCULUS VALUE', calculusValue)
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
            value: value,
            calculusValue: calculusValue,
         }];
         // console.log('FROM CREATE DECK - CARD:', card)
         deck.push(card);
      }
   }
   return deck
   // const shuffledDeck = useShuffleDeck(deck)
   // store.fullDeck.push(shuffledDeck);
   // return shuffledDeck;
}

export default useCreateDeck
