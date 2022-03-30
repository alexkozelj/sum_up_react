import React from 'react'
// import useCreateDeck from '../../hooks/use-create-deck'
import { StoreContext } from './../../store/store'
import * as Styled from "./GameWindow.styled.js";

import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {

   const store = React.useContext(StoreContext)
   console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)
   
   let cardsValuesInCalculation = []
   
   const calculus = (playerCard, cardsInCalc) => {
      let acc = 0;
      cardsInCalc.map((item, index) => {
         // console.log("🚀 ~ file: GameWindow.js ~ line 52 ~ checkCalculus ~ playerCard", playerCard)
         // console.log("🚀 ~ file: GameWindow.js ~ line 54 ~ cardsInCalc.map ~ item", item)
         // console.log('start acc', acc)
         if ( acc <= playerCard) {
            if (acc === playerCard) {
               // console.log('it is equal - index is', index)
               cardsValuesInCalculation.splice(0, index + 1)
               acc = 0
            } else {
               acc += item
               if (acc === playerCard) {
                  // console.log('it is equal - index is', index)
                  cardsValuesInCalculation.splice(0, index + 1)
                  acc = 0
               }
            }
            console.log('summed acc', acc)
         } else {
            acc = item
            console.log('acc = item')
         }
      })
   }
   
   const checkCalculus = (playerCard, cardsInCalc) => {
      // IF ACE
      if (playerCard === 1 || cardsInCalc.includes(1)){
         console.log('ACE is THERE', playerCard, cardsInCalc.includes(1))
         
         calculus(playerCard, cardsInCalc)
         if (cardsValuesInCalculation.length === 0) return

         console.log('not returned')
         if ( playerCard === 1) { 
            calculus(11, cardsInCalc)
            if (cardsValuesInCalculation.length === 0) return
         }

         if (cardsInCalc.includes(1)) {
            cardsInCalc.map((item, index) => {
               if (cardsValuesInCalculation.length === 0) return
               if (item === 1) {
                  console.log('ACE IS IN CALC')
                  cardsInCalc[index] = 11
                  calculus(playerCard, cardsInCalc)
               }
            })
         }
      // IF NOT ACE
      } else {
         calculus(playerCard, cardsInCalc)
      }
      
   }

   const playerCardClickHandler = (id, playerCard) => {

      const cardsValuesForCalculating = Object.values(store.cardsInCalculation).map(card => card.calculusValue)
      cardsValuesInCalculation = [...cardsValuesForCalculating]
      checkCalculus(playerCard, cardsValuesForCalculating)
      
      console.log("🚀 ~ file: GameWindow.js ~ line 19 ~ GameWindow ~ cardsValuesInCalculation", cardsValuesInCalculation)
      if (cardsValuesInCalculation.length === 0) {
         console.log("🚀 ~ file: GameWindow.js ~ line 85 ~ playerCardClickHandler ~ store.cardsOnTable", store.cardsOnTable)
         store.cardsOnTable.map((tableCard, tableIndex) => {
            
            console.log("🚀 ~ file: GameWindow.js ~ line 101 ~ store.cardsInCalculation.map ~ store.cardsInCalculation", store.cardsInCalculation)
            store.cardsInCalculation.map((calcCard, calcIndex) => {
               
               if(tableCard.id === calcCard.id) {
                  console.log('card is found')
                  store.playerCollectedCards.push(tableCard)
                  store.cardsOnTable = store.cardsOnTable.filter(tableCard => tableCard !== calcCard)
                  console.log("🚀 ~ file: GameWindow.js ~ line 93 ~ store.cardsInCalculation.map ~ store.cardsOnTable", store.cardsOnTable)
                  const playerCard = store.playerInHandCards.find(item => item.id === id)
                  store.playerCollectedCards.push(playerCard)
                  store.playerInHandCards = store.playerInHandCards.filter(card => card !== playerCard)
                  console.log("🚀 ~ file: GameWindow.js ~ line 98 ~ store.cardsInCalculation.map ~ store.playerInHandCards", store.playerInHandCards)
                  // store.playerInHandCards.splice(store.playerInHandCards.findIndex(cardObj => cardObj === playerCard), 1)
                  console.log("🚀 ~ file: GameWindow.js ~ line 96 ~ store.cardsInCalculation.map ~ store.playerInHandCards", store.playerInHandCards)
                  console.log('it is pushed and removed')
               }
               // const newArray = store.cardsOnTable.filter(tableCard.id !== calcCard.id)
               // store.cardsOnTable = newArray
               // console.log("🚀 ~ file: GameWindow.js ~ line 103 ~ store.cardsInCalculation.map ~ store.cardsOnTable", store.cardsOnTable)
            })
         })
      }
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
