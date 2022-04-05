import React from 'react';
import { useLocalStore } from 'mobx-react'


export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {

   const store = useLocalStore(() => ({
      
      addToArray: (array, item) => {
         array.push(item)
      },
      
      removeItemFromArray: (array, item) => {
         array.filter(arrItem => arrItem !== item)
      },
      
      test: ['test mobx'],

      suits: ["diamonds", "hearts", "clubs", "spades"],

      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

      fullDeck: [],

      isShuffled: false,

      isDealt: false,

      compCollectedCards: [],

      playerCollectedCards: [],

      compInHandCards: [],

      playerInHandCards: [],

      cardsOnTable: [],

      cardsToDeal: [],

      cardsInCalculation: [],

      // Player who takes last combination in game, takes rest of cards
      whoTookTheLast: 0


   }))

   return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
   )
}