import React, { useState } from 'react'
import _ from 'lodash'
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
   // console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)

   let cardsValuesInCalculation = []

   const combinations = []

   const delay = (t) => {
      return new Promise((resolve) => { setTimeout(() => resolve(), t) })
   }

   // PLAYER
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


   // COMPUTER
   const checkComputerCalculus = (compInHandCards) => {

      let cardValue
      let isWithAce = 0
      console.log('CARD VALUE 156 ---')

      compInHandCards.map((card, i) => {
         let combi = []
         cardValue = card.calculusValue
         console.log("🚀 ~ file: GameWindow.js ~ line 93 ~ compInHandCards.map ~ cardValue", cardValue)
         let aceInHand = card.calculusValue === 1

         store.cardsOnTable.map((tableCardA, a) => {
            // console.log("🚀 ~ file: GameWindow.js ~ line 98 ~ store.cardsOnTable.map ~ tableCardA", tableCardA.calculusValue, cardValue)
            if (tableCardA.calculusValue === cardValue) {
               if (combi && combi.includes(card)) { combi.push(tableCardA) } else { combi.push(card, tableCardA) }
            }
            // if (aceInHand && tableCardA.calculusValue === 1 && tableCardA.calculusValue + store.cardsOnTable[a + 1]?.calculusValue > 11) {
            //    if (combi && combi.includes(card)) { combi.push(tableCardA) } else { combi.push(card, tableCardA) }
            // }
            if (card.calculusValue === 1) {
               console.log('CARD VALUE IS NOW 11')
               cardValue = 11
            }
            if (tableCardA.calculusValue > cardValue) return
            // CARD 2
            store.cardsOnTable.map((tableCardB, b) => {
               if (b === a) return
               // if (aceInHand && tableCardA.calculusValue === 1 && tableCardA.calculusValue + tableCardB.calculusValue + store.cardsOnTable[b + 1]?.calculusValue > 11) {
               //    if (combi && combi.includes(card)) { combi.push(tableCardA) } else { combi.push(card, tableCardA) }
               // }
               if (tableCardB.calculusValue >= cardValue) return
               if (tableCardA.calculusValue + tableCardB.calculusValue > cardValue) return
               if (tableCardA.calculusValue + tableCardB.calculusValue === cardValue) {
                  if (combi && (combi.includes(tableCardA) || combi.includes(tableCardB))) return
                  if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB) } else { combi.push(card, tableCardA, tableCardB) }
               }
               let isAceThere = false;
               if (tableCardA.calculusValue === 1 || tableCardB.calculusValue === 1) { isAceThere = true }
               if (tableCardA.calculusValue + tableCardB.calculusValue < cardValue && isAceThere) {
                  if (tableCardA.calculusValue + tableCardB.calculusValue + 10 === cardValue) {
                     // console.log('IT CHECKS FOR ACE !@#@!#@!!@!#$!$@!#@!$@$#$#@$#@@@###')
                     if (combi && (combi.includes(tableCardA) || combi.includes(tableCardB))) return
                     if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB) } else { combi.push(card, tableCardA, tableCardB) }
                  }
               }

               // CARD 3
               store.cardsOnTable.map((tableCardC, c) => {
                  if (c === a || c === b) return
                  if (tableCardA === tableCardB || tableCardA === tableCardC || tableCardB === tableCardC) return
                  if (tableCardC.calculusValue >= cardValue) return
                  if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue > cardValue) return
                  if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue === cardValue) {
                     if (combi && ((combi.includes(tableCardA) || combi.includes(tableCardB) || combi.includes(tableCardC)))) return
                     if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB, tableCardC) } else { combi.push(card, tableCardA, tableCardB, tableCardC) }
                  }

                  // CARD 4
                  store.cardsOnTable.map((tableCardD, d) => {
                     if (d === a || d === b || d === c) return
                     if (tableCardD === tableCardA || tableCardD === tableCardB || tableCardD === tableCardC) return
                     if (tableCardC.calculusValue >= cardValue) return
                     if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue + tableCardD.calculusValue > cardValue) return
                     if (tableCardA.calculusValue + tableCardB.calculusValue + tableCardC.calculusValue + tableCardD.calculusValue === cardValue) {
                        if (combi && (combi.includes(tableCardA) || combi.includes(tableCardB) || combi.includes(tableCardC) || combi.includes(tableCardD))) return
                        if (combi && combi.includes(card)) { combi.push(tableCardA, tableCardB, tableCardC, tableCardD) } else { combi.push(card, tableCardA, tableCardB, tableCardC, tableCardD) }
                     }
                  })
               })
            })




            // console.log("🚀 ~ file: GameWindow.js ~ line 156 ~ arr.map ~ combi", combi)
            if (!combi || !combi.length) return

            // ADD ACE AS A SAME CARD  
            if (card.calculusValue === 1) {
               let cardsOnTableAceId = []
               let combiAcesId = []
               store.cardsOnTable.map(el => el.calculusValue === 1 && cardsOnTableAceId.push(el.id))
               combi.map(el => el.calculusValue === 1 && combiAcesId.push(el.id))
               let acesMissing = cardsOnTableAceId.filter(x => !combiAcesId.includes(x));
               if (acesMissing.length > 0) {
                  acesMissing.map(el => store.cardsOnTable.find(item => item.id === el && combi.push(item)))
               }
            }

            combinations.push(combi)
         })
      })
   }

   const showTakenCards = (combi) => {
      // console.log("🚀 ~ file: GameWindow.js ~ line 184 ~ showTakenCards ~ combi", combi)
      let card = document.getElementById(`backCardDiv-${combi[0].id}`)
      let cardContainer = document.getElementById(`cardContainer-${combi[0].id}`)
      card.classList.remove('showBack')
      cardContainer.classList.add('showCard')
      combi.map((card, i) => document.getElementById(card.id).classList.add('markedCard'))
   }

   const removeTakenCards = (combi) => {
      store.compCollectedCards = store.compCollectedCards.concat(combi)
      console.log("🚀 ~ file: GameWindow.js ~ line 195 ~ removeTakenCards ~ store.compCollectedCards", store.compCollectedCards)
      store.compInHandCards = _.filter(store.compInHandCards, (e => e.id !== combi[0].id))
      store.cardsOnTable = _.difference(store.cardsOnTable, combi, combi.id)

      if (store.cardsOnTable.length === 0) {
         store.gameResultComputer += _.sumBy(combi, 'value') + 1
         store.overallResultComputer += _.sumBy(combi, 'value') + 1
         store.tablaPointComputer = store.tablaPointComputer.concat('|')
      } else {
         store.gameResultComputer += _.sumBy(combi, 'value')
         store.overallResultComputer += _.sumBy(combi, 'value')
      }

      // if (store.cardsOnTable.length === 0) { store.tablaPointComputer = store.tablaPointComputer.concat('|')}
   }

   const throwComputerCard = () => {
      let noValueCards = _.filter(store.compInHandCards, (card => card.value === 0))
      console.log("🚀 ~ file: GameWindow.js ~ line 213 ~ throwComputerCard ~ noValueCards", noValueCards)
      let computerCardThrow
      if (noValueCards.length !== 0) {
         computerCardThrow = _.minBy(noValueCards, 'calculusValue')
      } else {
         computerCardThrow = _.minBy(store.compInHandCards, 'calculusValue')
      }

      console.log("🚀 ~ file: GameWindow.js ~ line 215 ~ throwComputerCard ~ computerCardThrow", computerCardThrow)
      store.compInHandCards = _.filter(store.compInHandCards, (e => e.id !== computerCardThrow.id))
      store.cardsOnTable.push(computerCardThrow)
   }

   const compMove = async () => {

      isPlayersMove(false)
      console.log("🚀 ~ file: GameWindow.js ~ line 88 ~ compMove ~ store.compInHandCards", store.compInHandCards.map(card => card.calculusValue))

      // CHECK COMP COMBINATIONS
      checkComputerCalculus(store.compInHandCards)

      // FIND BEST COMBI AND PUSH
      if (combinations.length > 0) {
         let combiValueSum = 0;
         let combiLengthSum = 0;
         let bestCombiIndex;

         combinations.map((combi, combiIndex) => {

            let combiValue = combi.reduce((prev, current) => {
               // console.log('prev', prev, 'current', current.value)
               return prev + current.value
            }, 0)
            // console.log("🚀 ~ file: GameWindow.js ~ line 179 ~ combiValue ~ combiValue", combi, combiValue)
            let combiLength = combi.length

            if (combiValue > combiValueSum) {
               combiValueSum = combiValue
               combiLengthSum = combiLength
               bestCombiIndex = combiIndex
            }
            if (combiValue <= combiValueSum && combiLength > combiLengthSum) {
               combiValueSum = combiValue
               combiLengthSum = combiLength
               bestCombiIndex = combiIndex
            }
            // console.log("🚀 ~ file: GameWindow.js ~ line 172 ~ combiValue ~ combiValue", combiValue)
         })

         console.log("🚀 line 242 ~ compMove ~ combinations[bestCombiIndex]", combinations[bestCombiIndex].map(card => card.calculusValue))

         await delay(1000)
         showTakenCards(combinations[bestCombiIndex])
         await delay(1000)
         removeTakenCards(combinations[bestCombiIndex])
         console.log("🚀 ~ file: GameWindow.js ~ line 167 ~ compMove ~ bestCombiIndex", bestCombiIndex, 'value', combiValueSum, 'length', combiLengthSum)
      } else {
         await delay(1500)
         throwComputerCard()
      }

      console.log("🚀 ~ file: GameWindow.js ~ line 89 ~ compMove ~ combinations", combinations)
      await delay(1000)
      console.log('after first await')

      if (store.compInHandCards.length === 0 && store.playerInHandCards.length) {
         store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.compInHandCards, arr))
         store.fullDeck.splice(0, 6).map(arr => store.addToArray(store.playerInHandCards, arr))
         if (store.dealNumber === 4) {
            store.dealNumber = 0
            
         }
         store.dealNumber += 1

      }

      isPlayersMove(true)
   }

   const playerCardClickHandler = (card, id, playerCard) => {

      if (!playersMove) return

      // THROW CARD - NO CALC
      if (store.cardsInCalculation.length === 0) {
         console.log('THROW PLAYER CARD')

         store.cardsOnTable.push(store.playerInHandCards.find(playerCard => playerCard.id === id))
         _.remove(store.playerInHandCards, (obj => obj.id === id))

         isPlayersMove(false)
         compMove()
         return
      }

      const cardsValuesForCalculating = Object.values(store.cardsInCalculation).map(card => card.calculusValue)
      cardsValuesInCalculation = [...cardsValuesForCalculating]
      checkCalculus(playerCard, cardsValuesForCalculating)
      // console.log("🚀 ~ file: GameWindow.js ~ line 19 ~ GameWindow ~ cardsValuesInCalculation", cardsValuesInCalculation)
      // CHECK MARKED CARDS
      if (cardsValuesInCalculation.length === 0) {

         store.playerCollectedCards = store.playerCollectedCards.concat(store.cardsInCalculation, card)
         store.playerInHandCards = store.playerInHandCards.filter(el => el.id !== id)
         store.cardsOnTable = _.difference(store.cardsOnTable, store.cardsInCalculation, store.cardsInCalculation.id)

         if (store.cardsOnTable.length === 0) {
            store.gameResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value + 1
            store.overallResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value + 1
            store.tablaPointPlayer = store.tablaPointComputer.concat('|')
         } else {
            store.gameResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value
            store.overallResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value
         }


         store.cardsInCalculation = []
         console.log('clear cardsInCalc array')

      } else {
         // WRONG CALCULATED CARDS
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

                        {
                           useObserver(() =>

                              store.compInHandCards.map((card, index) =>

                                 <div key={`cardContainer-${card.id}`} id={`cardContainer-${card.id}`} className={`opponentCard-${index + 1}`}>
                                    <Card
                                       id={card.id}
                                       className={`backCard-${index + 1}`}
                                       classNameSection={'backCardDiv showBack'}
                                       backCard={true}
                                       suits={card.suit}
                                       ranks={card.rank}
                                    />
                                 </div>

                              )
                           )
                        }

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
                     useObserver(() =>

                        store.playerInHandCards.map((card) =>

                           <Card
                              key={card.id}
                              id={card.id}
                              onClick={() => playerCardClickHandler(card, card.id, card.calculusValue)}
                              suits={card.suit}
                              ranks={card.rank} />
                        )
                     )
                  }

               </div>
               <div className={"playerFieldBuffer"}></div>
            </div>
         </div>

      </Styled.GameWindow>
   );
}

export default GameWindow;
