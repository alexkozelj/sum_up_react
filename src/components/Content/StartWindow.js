
import React, { useState } from "react";
import * as Styled from "./StartWindow.styled.js";
import { StoreContext } from './../../store/store'
import { useObserver } from 'mobx-react'

import StartGameButton from '../UI/Buttons/StartGameButton'
import GameSetupButton from '../UI/Buttons/GameSetupButton'
import Avatar from '../UI/Avatar/Avatar'

const StartWindow = (props) => {

   const store = React.useContext(StoreContext)
   const startGameHandler = () => props.windowHandler()
   const [gameType, setGameType] = useState(store.gameType)

   const gamesPoints = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
   const gamesGame = ['1', '3', '7', '9', '11']

   const gameTypeHandler = (type) => {
   console.log("🚀 ~ file: StartWindow.js ~ line 21 ~ gameTypeHandler ~ type", type)
   console.log("🚀 ~ file: StartWindow.js ~ line 21 ~ gameTypeHandler ~ typeof(+type) === 'number'", typeof(+type) === 'number')
      if ((type === 'games' || type === 'points') && type !== store.gameType) {
         store.gamesToPlay = '1'
         return store.gameType = type
      }
      if ((type !== 'games' || type !== 'points') && type !== store.gamesToPlay) { return store.gamesToPlay = type}

   }

   return (
      <Styled.StartWindow>
         <h1>Твој Противник:</h1>
         <Avatar></Avatar>
         <div> Pobednik je onaj sa najvise: <br></br>

            {
               useObserver(() =>
                  <>
                     <GameSetupButton type={'games'} onClick={() => gameTypeHandler('games')} selected={store.gameType === 'games'}>Dobijenih duela</GameSetupButton>
                     <GameSetupButton type={'points'}  onClick={() => gameTypeHandler('points')} selected={store.gameType === 'points'}>Ukupnih poena</GameSetupButton>
                  </> 
               )
            }

            <br></br>
            <br></br>
            Broj igara:
            <br></br>
            {
               useObserver(() =>
                  (store.gameType === 'games') && gamesGame.map((number) => 
                     <GameSetupButton 
                        key={number}
                        id={number} 
                        selected={number === store.gamesToPlay} 
                        type={'numberOfGames'}
                        onClick={() => gameTypeHandler(number)}
                        >
                           {number}
                        </GameSetupButton>
                  )
                  
               )
            }
            {
               useObserver(() =>
                  (store.gameType === 'points') && gamesPoints.map((number) => 
                     <GameSetupButton 
                     key={number}
                     id={number} 
                     selected={number === store.gamesToPlay} 
                     type={'numberOfGames'}
                     onClick={() => gameTypeHandler(number)}
                     >
                        {number}
                     </GameSetupButton>
                  )
                  
               )
            }
            {/* <GameSetupButton id={'1'} type={'numberOfGames'}>1</GameSetupButton>
            <GameSetupButton id={'2'} type={'numberOfGames'}>2</GameSetupButton>
            <GameSetupButton id={'3'} type={'numberOfGames'}>3</GameSetupButton>
            <GameSetupButton id={'4'} type={'numberOfGames'}>4</GameSetupButton>
            <GameSetupButton id={'5'} type={'numberOfGames'}>5</GameSetupButton>
            <GameSetupButton id={'6'} type={'numberOfGames'}>6</GameSetupButton>
            <GameSetupButton id={'7'} type={'numberOfGames'}>7</GameSetupButton>
            <GameSetupButton id={'8'} type={'numberOfGames'}>8</GameSetupButton> */}
         </div>
         <br></br>
         <div> Били Питон каже: <br /><br /> <i>Пробај Лаки!</i></div>
         <StartGameButton startGame={startGameHandler}></StartGameButton>
      </Styled.StartWindow>
   );
}

export default StartWindow;
