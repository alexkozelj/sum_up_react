import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import useCreateDeck from './hooks/use-create-deck'
import createDeck from './hooks/use-create-deck'
import shuffleDeck from './hooks/use-shuffle-deck'
import dealCards from './hooks/use-deal-cards'
import { StoreContext } from './store/store'
import * as Styled from "./App.styled.js";

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";


const App = () => {
   
   const store = React.useContext(StoreContext)
   let newlyCreatedDeck
   if ( store.fullDeck.length === 0 ) {
      store.isShuffled = false;
      store.isDealt = false;
      newlyCreatedDeck = createDeck(store)
      console.log("🚀 ~ file: App.js ~ line 19 ~ App ~ newlyCreatedDeck", newlyCreatedDeck)
      const shuffledDeck =  shuffleDeck(store, newlyCreatedDeck)
      console.log("🚀 ~ file: App.js ~ line 25 ~ App ~ shuffledDeck", shuffledDeck)
      shuffledDeck.map(arr => store.addToArray(store.fullDeck, arr[0]))
      // store.fullDeck = shuffledDeck
      store.isShuffled = true
      store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
      store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
      store.fullDeck.splice(0, 4).map(arr => store.addToArray(store.cardsOnTable, arr))

      // dealCards(store, shuffledDeck)
      store.isDealt = true;
   }

   const [startWindow, setStartWindow] = useState(true)
   const startWindowHandler = () => setStartWindow(prevState => !prevState)

   return (
      <Styled.App className="App">
         <Navbar></Navbar>
         {startWindow ? <StartWindow windowHandler={startWindowHandler} /> : <GameWindow />}
      </Styled.App>
   );
};

export default App;
