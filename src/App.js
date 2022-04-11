import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { StoreContext } from './store/store'
import * as Styled from "./App.styled.js";
import newGameSetup from "./gameActions/newGameSetup";

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";


const App = () => {

   const store = React.useContext(StoreContext)
   // let newlyCreatedDeck
   
   if (store.fullDeck.length === 0 && store.gameResultComputer === 0 && store.gameResultPlayer === 0) newGameSetup(store)
   

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
