import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import useCreateDeck from './hooks/use-create-deck'
import useShuffleDeck from './hooks/use-shuffle-deck'
import useDealCards from './hooks/use-deal-cards'
import { StoreContext } from './store/store'
import * as Styled from "./App.styled.js";

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";


const App = () => {
   
   // const store = React.useContext(StoreContext)
   const newlyCreatedDeck = useCreateDeck()
   useShuffleDeck(newlyCreatedDeck)
   useDealCards()

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
