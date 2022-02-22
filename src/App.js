import React, { useState } from "react";
import * as Styled from "./App.styled.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar/Navbar";
import GameWindow from "./components/Content/GameWindow.js";
import StartWindow from "./components/Content/StartWindow.js";

const App = () => {
   const [startWindow, setStartWindow] = useState(true)
   const startWindowHandler = () => {
      console.log('from app js')
      setStartWindow(prevState => !prevState)
   }

   return (
      <Styled.App className="App">
         <Navbar></Navbar>
         {startWindow ? <StartWindow windowHandler={startWindowHandler}/> : <GameWindow/>}
      </Styled.App>
   );
};

export default App;
