import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useObserver } from 'mobx-react'
import { StoreContext } from './store/store'
import * as Styled from "./App.styled.js";
import nextGameSetup from "./gameActions/nextGameSetup";

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";


const App = () => {

   const store = React.useContext(StoreContext)
   // let newlyCreatedDeck

   if (store.fullDeck.length === 0 && store.gameResultComputer === 0 && store.gameResultPlayer === 0) nextGameSetup(store)


   // const [startWindow, setStartWindow] = useState(true)
   const startWindowHandler = () => {
      store.startWindow = false
   }

   return (
      <Styled.App className="App">
         <Navbar></Navbar>
         {
            useObserver(() =>

               store.startWindow ?
                  <StartWindow windowHandler={startWindowHandler} /> : <GameWindow />

            )

         }
      </Styled.App>
   );
};

export default App;
