import React from 'react'
// import useCreateDeck from '../../hooks/use-create-deck'
import { StoreContext } from './../../store/store'
import * as Styled from "./GameWindow.styled.js";

import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {
   // const newDeck = useCreateDeck()
   // console.log("🚀 ~ file: GameWindow.js ~ line 13 ~ GameWindow ~ newDeck", newDeck)
   const store = React.useContext(StoreContext)
   console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)
   // console.log('this is store.test',store.test)
   // let cardsThatPases = []
   let cardsValuesInCalculation = []
   
   const checkSameCards = (playerCard, cardsInCalc) => {
      cardsInCalc.map((item, i) => {
         console.log("🚀 ~ file: GameWindow.js ~ line 22 ~ cardsInCalc.map ~ item", item)
         console.log("🚀 ~ file: GameWindow.js ~ line 21 ~ checkSameCards ~ playerCard", playerCard)
         console.log("🚀 ~ file: GameWindow.js ~ line 21 ~ checkSameCards ~ cardsValuesInCalculation", cardsValuesInCalculation[i])
         
         if (item === playerCard) { cardsValuesInCalculation.find((item, index) => cardsValuesInCalculation.splice(index, 1))}})
   }
   
   const checkPairCards = (playerCard, cardsInCalc) => {
      if (playerCard === 1) { playerCard = 11}
      // const cardsSum = cardsInCalc.length;
      cardsInCalc.map((item, i) => {
         // console.log("🚀 ~ file: GameWindow.js ~ line 27 ~ cardsInCalc.map ~ item", item)
         // console.log("🚀 ~ file: GameWindow.js ~ line 26 ~ checkPairCards ~ playerCard - item === cardsInCalc[i+1]", playerCard - item === cardsInCalc[i+1])
         if (playerCard - item === cardsInCalc[i+1]) {cardsValuesInCalculation.splice(i, 2)}
         // console.log("🚀 ~ file: GameWindow.js ~ line 31 ~ cardsInCalc.map ~ playerCard - item - 10 ", playerCard - item - 10 )
         // console.log("🚀 ~ file: GameWindow.js ~ line 31 ~ cardsInCalc.map ~ cardsInCalc[i+1]", cardsInCalc[i+1])
         if (item === 1) { playerCard - item - 10 === cardsInCalc[i+1] && cardsValuesInCalculation.splice(i, 2)}
      })
   }
   
   function checkingSums(playerCard, cardsInCalc){
      checkSameCards(playerCard, cardsInCalc)
      checkPairCards(playerCard, cardsInCalc)
   }

   const playerCardClickHandler = (id, playerCard) => {
      console.log("🚀 ~ file: GameWindow.js ~ line 41 ~ playerCardClickHandler ~ store.cardsInCalculation", store.cardsInCalculation)
      const cardsValuesForCalculating = Object.values(store.cardsInCalculation).map(card => card.calculusValue)
      cardsValuesInCalculation = [...cardsValuesForCalculating]
      
      checkingSums(playerCard, cardsValuesForCalculating)
      
      console.log("🚀 ~ file: GameWindow.js ~ line 19 ~ GameWindow ~ cardsValuesInCalculation", cardsValuesInCalculation)
      
   }

   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'gameWindowWrapper'}>
            {/* OPPONENT AREA */}
            <div className={'opponentField'}>
               <div className={'opponentFieldContainer'}>
                  <div className={'opponentCardsWrapper'}>
                     <div className={'opponentCardsPositioner'}>

                        {store.compInHandCards.map((card, index) => {
                           return <div key={card.id} className={`opponentCard-${index + 1}`}>
                              <Card className={`backCard-${index + 1}`} />
                           </div>
                        })}

                     </div>
                  </div>
                  <div className={'opponentAvatarWrapper'}>
                     <Avatar small={true}></Avatar>
                  </div>
                  <div className={'opponentTalkCloudWrapper'}>
                     <TalkCloud small={true}></TalkCloud>
                  </div>
               </div>
               <div className={'opponentFieldBuffer'}></div>
            </div>

            <Playground />

            {/* PLAYER AREA */}
            <div className={'playerField'}>
               <div className={'playerFieldCardsWrapper'}>

                  {store.playerInHandCards.map((card) => {
                     return <Card 
                     key={card.id} 
                     onClick={() => playerCardClickHandler(card.id, card.calculusValue)} 
                     suits={card.suit} 
                     ranks={card.rank} />
                  })}
                  
               </div>
               <div className={"playerFieldBuffer"}></div>
            </div>
         </div>

      </Styled.GameWindow>
   );
}

export default GameWindow;
