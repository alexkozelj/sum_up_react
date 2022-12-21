
import React, { useState } from "react";
import * as Styled from "./StartWindow.styled.js";
import { StoreContext } from './../../store/store'
import { useObserver } from 'mobx-react'
import nextGameSetup from './../../gameActions/nextGameSetup'
import newGameSetup from './../../gameActions/newGameSetup'

import StartGameButton from '../UI/Buttons/StartGameButton'
import GameSetupButton from '../UI/Buttons/GameSetupButton'
import Avatar from '../UI/Avatar/Avatar'

const StartWindow = (props) => {

   const store = React.useContext(StoreContext)
   const startGameHandler = () => { 
      newGameSetup(store)
      store.startWindow = false 
   }

   const gamesToPlay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

   const gameTypeHandler = (type) => {
      if ( type === 'games' ) { store.gameType = 'games'}
      if ( type === 'points' ) { store.gameType = 'points'}
      
   }

   const numberOfGamesHandler = (numberOfGames) => {
      if ( numberOfGames ) { store.gamesToPlay = numberOfGames }
      console.log('start window, games to play', store.gamesToPlay)
   }

   return (
      <Styled.StartWindow>
         <h1>Твој Противник:</h1>
         <Avatar></Avatar>
         <h3> Pobednik je onaj sa najvise:</h3>

         {
            useObserver(() =>
               <Styled.GameTypeWrapper>
                  <GameSetupButton type={'games'} onClick={() => gameTypeHandler('games')} selected={store.gameType === 'games'}>Победа</GameSetupButton>
                  <GameSetupButton type={'points'} onClick={() => gameTypeHandler('points')} selected={store.gameType === 'points'}>Поена</GameSetupButton>
               </Styled.GameTypeWrapper>
            )
         }

         <h3>Играмо до:</h3>

         <Styled.NumberOfGamesWrapper>
            {
               useObserver(() =>
                  gamesToPlay.map((number) =>
                     <GameSetupButton
                        key={number}
                        id={number}
                        selected={number === store.gamesToPlay}
                        type={'numberOfGames'}
                        onClick={() => numberOfGamesHandler(number)}
                     >
                        {number}
                     </GameSetupButton>
                  )

               )
            }
         </Styled.NumberOfGamesWrapper>



         <StartGameButton action={startGameHandler} label={'Почни игру!'}></StartGameButton>

      </Styled.StartWindow>
   );
}

export default StartWindow;
