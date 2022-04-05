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

   const combinations = []

   const checkComputerCalculus = (arr, aceValue = false) => {
      console.log("🚀 ~ file: GameWindow.js ~ line 87 ~ checkComputerCalculus ~ aceValue", aceValue)
      let cardValue

      arr.map((card, i) => {
         let combi = []
         cardValue = aceValue ? 11 : card.calculusValue
         console.log("🚀 ~ file: GameWindow.js ~ line 93 ~ arr.map ~ cardValue", cardValue)
         // same card + a + b + c + d ...
         store.cardsOnTable.map((tableCardA, a) => {
            if (aceValue && cardValue !== 11) return
            if (tableCardA.calculusValue > cardValue) return
            if (tableCardA.calculusValue === cardValue) {
               if (combi && combi.includes(card)) { combi.push(tableCardA) } else { combi.push(card, tableCardA) }
            }

            store.cardsOnTable.map((tableCardB, b) => {
               if (b === a) return
               if (tableCardA === tableCardB) return
               if (tableCardB.calculusValue >= cardValue) return
               if (tableCardA.calculusValue + tableCardB.calculusValue > cardValue) return
               if (tableCardA.calculusValue + tableCardB.calculusValue === cardValue) {
                  if (combi && combi.includes(tableCardA) || combi.includes(tableCardB)) return
                  if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB) } else { combi.push(card, tableCardA, tableCardB) }
               }
               let isAceThere = false;
               if (tableCardA.calculusValue === 1 || tableCardB.calculusValue === 1) { isAceThere = true }
               if (tableCardA.calculusValue + tableCardB.calculusValue < cardValue && isAceThere) {
                  if (tableCardA.calculusValue + tableCardB.calculusValue + 10 === cardValue) {
                     console.log('IT CHECKS FOR ACE !@#@!#@!!@!#$!$@!#@!$@$#$#@$#@@@###')
                     if (combi && combi.includes(tableCardA) || combi.includes(tableCardB)) return
                     if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB) } else { combi.push(card, tableCardA, tableCardB) }
                  }
               }

               store.cardsOnTable.map((tableCardC, c) => {
                  if (c === a || c === b) return
                  if (tableCardA === tableCardB || tableCardA === tableCardC || tableCardB === tableCardC) return
                  if (tableCardC.calculusValue >= cardValue) return
                  if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue > cardValue) return
                  if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue === cardValue) {
                     if (combi && combi.includes(tableCardA) || combi.includes(tableCardB) || combi.includes(tableCardC)) return
                     if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB, tableCardC) } else { combi.push(card, tableCardA, tableCardB, tableCardC) }
                  }

                  store.cardsOnTable.map((tableCardD, d) => {
                     if (d === a || d === b || d === c) return
                     if (tableCardD === tableCardA || tableCardD === tableCardB || tableCardD === tableCardC) return
                     if (tableCardC.calculusValue >= cardValue) return
                     if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue + tableCardD.calculusValue > cardValue) return
                     if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue + tableCardD.calculusValue === cardValue) {
                        if (combi && combi.includes(tableCardA) || combi.includes(tableCardB) || combi.includes(tableCardC) || combi.includes(tableCardD)) return
                        if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB, tableCardC, tableCardD) } else { combi.push(card, tableCardA, tableCardB, tableCardC, tableCardD) }
                     }
                  })
               })
            })

            // console.log("🚀 ~ file: GameWindow.js ~ line 156 ~ arr.map ~ combi", combi)
            if (!combi || !combi.length) return
            combinations.push(combi)
         })
      })
   }

   const compMove = async () => {
      isPlayersMove(false)
      console.log("🚀 ~ file: GameWindow.js ~ line 88 ~ compMove ~ store.compInHandCards", store.compInHandCards.map(card => card.calculusValue))

      checkComputerCalculus(store.compInHandCards)
      const isAceThere = store.compInHandCards.some(card => card.calculusValue === 1)
      isAceThere && checkComputerCalculus(store.compInHandCards, true)


      console.log("🚀 ~ file: GameWindow.js ~ line 89 ~ compMove ~ combinations", combinations)
      await delay(3000)
      console.log('after first await')
      await delay(2000)
      console.log('after second await')

      isPlayersMove(true)
   }

   const playerCardClickHandler = (id, playerCard) => {

      if (!playersMove) return

      if (store.cardsInCalculation.length === 0) {
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

            <Playground playersMove={playersMove} />

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




      // store.compInHandCards.map(card => {
      //    let combi = []

      //    //  same card
      //    store.cardsOnTable.map((tableCard, i) => card.calculusValue === tableCard.calculusValue && combi.push(card, tableCard))
      //    // pair
      //    store.cardsOnTable.map((tableCard, i) => {
      //       if (card.calculusValue - tableCard.calculusValue > 0) {
      //          const pairedCard = store.cardsOnTable.find((pairCard,i) => pairCard.calculusValue === card.calculusValue - tableCard.calculusValue)
      //          if (!pairedCard) return
      //          // console.log("🚀 ~ file: GameWindow.js ~ line 102 ~ store.cardsOnTable.map ~ pairedCard", pairedCard)
      //          // console.log("🚀 ~ file: GameWindow.js ~ line 104 ~ store.cardsOnTable.map ~ combinations[i]", combinations[i])
      //          // if (combinations[i] && combinations[i].map(cardCombinations => cardCombinations.id === pairedCard.id || cardCombinations.id === card.id)) return
      //          // combi.some(card => card.id === pairedCard.id || card.id === tableCard.id)
      //          // console.log("🚀 ~ file: GameWindow.js ~ line 104 ~ store.cardsOnTable.map ~ isItThere", isItThere)
      //          if(combi && combi.includes(tableCard) || combi.includes(pairedCard)) return
      //          if(combi && !combi.includes(card)) combi.push(card)
      //          pairedCard && combi.push(tableCard, pairedCard)
      //       }
      //    })

      //    // console.log("🚀 ~ file: GameWindow.js ~ line 95 ~ compMove ~ combi", combi)
      //    combinations.push(combi)
      // })
      // const areEqual = (array1, array2) => {
      //    console.log('areEqual called!!!!!')
      //    console.log("🚀 ~ file: GameWindow.js ~ line 118 ~ areEqual ~ array1",typeof( array1.sort().join(',')))
      //    console.log("🚀 ~ file: GameWindow.js ~ line 118 ~ areEqual ~ array2", array2.sort().join(','))
      //    if (array1?.length === array2?.length) {
      //       console.log('length eqal!!@!!!')
      //       if(array1.sort().join(',') !== array2.sort().join(',')) {return true}
      //       else { return false }
      //       // return array1.every((element) => {
      //       //    console.log("🚀 ~ file: GameWindow.js ~ line 120 ~ returnarray1.every ~ element", element)
      //       //    if (array2.includes(element)) {
      //       //       // console.log('THEY ARE EQUALL !!! $^*$#**$#%*$#%**$%%*$#$*#*%*#*#$')
      //       //       return true;
      //       //    }

      //       //    return false;
      //       // });
      //    }

      //    return false;
      // }

      // function areEqual(array1, array2) {
      //    if (array1.length === array2.length) {
      //       return array1.every(element => {
      //          if (array2.includes(element)) {
      //             return true;
      //          }

      //          return false;
      //       });
      //    }

      //    return false;
      // }
