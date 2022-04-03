import React, { useState } from 'react'
// import useCreateDeck from '../../hooks/use-create-deck'
import { StoreContext } from './../../store/store'
import { useObserver } from 'mobx-react'
import * as Styled from "./GameWindow.styled.js";

// import { timeout } from './../../helpers/Timeout'
import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {

   const store = React.useContext(StoreContext)
   const [playersMove, isPlayersMove] = useState(true)
   console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)

   let cardsValuesInCalculation = []

   const delay = (t) => {
      return new Promise((resolve) => { setTimeout(() => resolve(), t) })
   }
   

   const calculus = (playerCard, cardsInCalc) => {
      let acc = 0;
      cardsInCalc.map((item, index) => {
         console.log("🚀 ~ file: GameWindow.js ~ line 52 ~ checkCalculus ~ playerCard", playerCard)
         console.log("🚀 ~ file: GameWindow.js ~ line 54 ~ cardsInCalc.map ~ item", item)
         console.log('start acc', acc)
         if (acc <= playerCard) {
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
      if (playerCard === 1 || cardsInCalc.includes(1)) {
         console.log('ACE is THERE', playerCard, cardsInCalc.includes(1))

         calculus(playerCard, cardsInCalc)
         if (cardsValuesInCalculation.length === 0) return

         console.log('not returned')
         if (playerCard === 1) {
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

   const compMove = async () => {
      isPlayersMove(false)
      console.log("🚀 ~ file: GameWindow.js ~ line 88 ~ compMove ~ store.compInHandCards", store.compInHandCards.map(card => card.calculusValue))
      
      const combinations = []
      
      const cardsValuesForCalculating = Object.values(store.cardsOnTable).map(card => card.calculusValue)
      cardsValuesInCalculation = [...cardsValuesForCalculating]
      
      store.compInHandCards.map(card => {
         let combi = []

         //  same card
         store.cardsOnTable.map((tableCard, i) => card.calculusValue === tableCard.calculusValue && combi.push(card, tableCard))
         // pair
         store.cardsOnTable.map((tableCard, i) => {
            if (card.calculusValue - tableCard.calculusValue > 0) {
               const pairedCard = store.cardsOnTable.find((pairCard,i) => pairCard.calculusValue === card.calculusValue - tableCard.calculusValue)
               if (!pairedCard) return
               console.log("🚀 ~ file: GameWindow.js ~ line 102 ~ store.cardsOnTable.map ~ pairedCard", pairedCard)
               console.log("🚀 ~ file: GameWindow.js ~ line 104 ~ store.cardsOnTable.map ~ combinations[i]", combinations[i])
               // if (combinations[i] && combinations[i].map(cardCombinations => cardCombinations.id === pairedCard.id || cardCombinations.id === card.id)) return
               // combi.some(card => card.id === pairedCard.id || card.id === tableCard.id)
               // console.log("🚀 ~ file: GameWindow.js ~ line 104 ~ store.cardsOnTable.map ~ isItThere", isItThere)
               if(combi && combi.includes(tableCard) || combi.includes(pairedCard)) return
               if(combi && !combi.includes(card)) combi.push(card)
               pairedCard && combi.push(tableCard, pairedCard)
            }
         })

         console.log("🚀 ~ file: GameWindow.js ~ line 95 ~ compMove ~ combi", combi)
         combinations.push(combi)
      })
      
      store.compInHandCards.map(card => {
         let combi = []

         // a + b + c
         store.cardsOnTable.map((tableCard, i) => {
            console.log("🚀 ~ file: GameWindow.js ~ line 124 ~ store.cardsOnTable.map ~ tableCard[i+1]", store.cardsOnTable[i+1])
            if (!store.cardsOnTable[i+1]) return
            console.log('is it passing ???????')
            let thirdValue = store.cardsOnTable[i+1].calculusValue
            let thirdCard = store.cardsOnTable[i+1].calculusValue
            if (card.calculusValue - tableCard.calculusValue - thirdValue > 0) {
               let pairedCard = store.cardsOnTable.find((pairCard,i) => pairCard.calculusValue === card.calculusValue - tableCard.calculusValue - thirdValue)
               if (!store.cardsOnTable[i+2]) { return } else { thirdCard = store.cardsOnTable[i+2]; thirdValue = store.cardsOnTable[i+2].calculusValue  } 
               if (!pairedCard && thirdValue) {
                  pairedCard = store.cardsOnTable.find((pairCard,i) => pairCard.calculusValue === card.calculusValue - tableCard.calculusValue - thirdValue)
                  console.log("🚀 ~ IT IS HEREEE!!! THREE #@%#@%#@%d", pairedCard)
               }
               if (!pairedCard) return
               console.log("🚀 ~ THREE #@%#@%#@%d", pairedCard)
               // console.log("🚀 ~ file: GameWindow.js ~ line 104 ~ store.cardsOnTable.map ~ combinations[i]", combinations[i])
               
               if(combi && combi.includes(tableCard) || combi.includes(store.cardsOnTable[i+1]) || combi.includes(store.cardsOnTable[i+2]) || combi.includes(pairedCard)) return
               if(combi && !combi.includes(card)) combi.push(card)
               pairedCard && combi.push(tableCard, pairedCard, thirdCard)
            }
         })

         
         //  same card
         store.cardsOnTable.map((tableCard, i) => {
            if (card.calculusValue === tableCard.calculusValue) combi.push(tableCard)
            if(combi && !combi.includes(card)) combi.push(card)
         })

         console.log("🚀 ~ file: GameWindow.js ~ line 95 ~ compMove ~ combi", combi)
         combinations.push(combi)
      })
      

      console.log("🚀 ~ file: GameWindow.js ~ line 89 ~ compMove ~ combinations", combinations)
      // console.log("🚀 ~ file: GameWindow.js ~ line 96 ~ compMove ~ cardsValuesInCalculation", cardsValuesInCalculation)
      await delay(3000)
      console.log('after first await')
      await delay(2000)
      console.log('after second await')
      
      isPlayersMove(true)
   }

   const playerCardClickHandler = (id, playerCard) => {
      
      if (!playersMove) return

      if(store.cardsInCalculation.length === 0) {
         console.log('THROW PLAYER CARD')

         store.cardsOnTable.push(store.playerInHandCards.find(playerCard => playerCard.id === id))
         store.playerInHandCards.map((playerCard, index) => playerCard.id === id && store.playerInHandCards.splice(index, 1))
         isPlayersMove(false)
         compMove()
         return
      }
      
      const cardsValuesForCalculating = Object.values(store.cardsInCalculation).map(card => card.calculusValue)
      cardsValuesInCalculation = [...cardsValuesForCalculating]
      checkCalculus(playerCard, cardsValuesForCalculating)

      console.log("🚀 ~ file: GameWindow.js ~ line 19 ~ GameWindow ~ cardsValuesInCalculation", cardsValuesInCalculation)
      // if player marked cards on table -> do the calculus check
      if (cardsValuesInCalculation.length === 0) {
         console.log("🚀 ~ file: GameWindow.js ~ line 85 ~ playerCardClickHandler ~ store.cardsOnTable", store.cardsOnTable)
      
         store.cardsOnTable.map((tableCard, tableIndex) => {

            console.log("🚀 ~ file: GameWindow.js ~ line 101 ~ store.cardsInCalculation.map ~ store.cardsInCalculation", store.cardsInCalculation)
            store.cardsInCalculation.map((calcCard, calcIndex) => {

               if (tableCard.id === calcCard.id) {
                  console.log('card is found')

                  store.playerCollectedCards.push(tableCard)
                  store.cardsOnTable = store.cardsOnTable.filter(tableCard => tableCard !== calcCard)
                  console.log("🚀 ~ file: GameWindow.js ~ line 93333 ~ store.cardsInCalculation.map ~ store.cardsOnTable", store.cardsOnTable)
                  
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

         console.log('clear cardsInCalc array')
         store.cardsInCalculation.splice(0, store.cardsInCalculation.length)
      
      } else {
         console.log('player calc is WRONG!')
         return
      }

   
      compMove()
      
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

            <Playground playersMove={playersMove}/>

            {/* PLAYER AREA */}
            <div className={'playerField'}>
               <div className={'playerFieldCardsWrapper'}>
                  {
                     useObserver(() => {
                        return store.playerInHandCards.map((card) => {
                           return <Card
                              key={card.id}
                              onClick={() => playerCardClickHandler(card.id, card.calculusValue)}
                              suits={card.suit}
                              ranks={card.rank} />
                        })

                     })
                  }

               </div>
               <div className={"playerFieldBuffer"}></div>
            </div>
         </div>

      </Styled.GameWindow>
   );
}

export default GameWindow;
