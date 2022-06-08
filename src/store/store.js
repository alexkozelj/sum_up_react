import React from 'react';
import { useLocalStore } from 'mobx-react'


export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {

   const store = useLocalStore(() => ({

      addToArray: (array, item) => {
         array.push(item)
      },

      startWindow: true,

      suits: ["diamonds", "hearts", "clubs", "spades"],

      ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

      fullDeck: [],

      isShuffled: false,

      isDealt: false,

      gameType: 'games', // points
      gamesToPlay: '1',


      gameNumber: 1,
      dealNumber: 1,

      gameResultComputer: 0,
      gameResultPlayer: 0,

      overallResultComputer: 0,
      overallResultPlayer: 0,

      tablaPointComputer: [],
      tablaPointPlayer: [],
      

      compCollectedCards: [],
      playerCollectedCards: [],

      compInHandCards: [],
      playerInHandCards: [],

      cardsOnTable: [],

      cardsToDeal: [],

      cardsInCalculation: [],

      // Player who takes last combination in game, takes rest of cards
      whoTookLast: '',


   }))

   return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
   )
}
