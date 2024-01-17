import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useObserver } from 'mobx-react'
import { StoreContext } from './store/store'
import * as Styled from "./App.styled.js";
import nextGameSetup from "./gameActions/nextGameSetup";

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";

import svg from './images/low-poly-grid-haikei.svg'


const App = () => {

   useEffect(() => {

      let currentLocalStorage = JSON.parse(localStorage.getItem('allTimeScore')) || [];
      // console.log("🚀 ~ file: App.js:19 ~ useEffect ~ currentLocalStorage", currentLocalStorage)

      let initStorage = { 'Bili': 0, 'Player': 0 }

      if (!currentLocalStorage?.length) currentLocalStorage.push(initStorage);

      localStorage.setItem('allTimeScore', JSON.stringify(currentLocalStorage));

   }, [])


   const store = React.useContext(StoreContext)
   // let newlyCreatedDeck

   if (store.fullDeck.length === 0 && store.gameResultComputer === 0 && store.gameResultPlayer === 0) nextGameSetup(store)


   // const [startWindow, setStartWindow] = useState(true)
   const startWindowHandler = () => {
      store.startWindow = false
   }

   return (
      <Styled.App className="App" >
         <div>
            {/* <img style={{ top: '0', height: '100vh', width: '100vw'}} src={svg}></img> */}
            <Navbar></Navbar>
            {
               useObserver(() =>

                  store.startWindow ?
                     <StartWindow windowHandler={startWindowHandler} /> : <GameWindow />

               )

            }
         </div>
      </Styled.App>
   );
};

export default App;
