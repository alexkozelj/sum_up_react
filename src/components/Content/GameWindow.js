import React, { useState } from 'react'
import _ from 'lodash'
// import useCreateDeck from '../../hooks/use-create-deck'
import { StoreContext } from './../../store/store'
import { useObserver } from 'mobx-react'
import newHandDeal from './../../gameActions/newHandDeal'
import nextGameSetup from '../../gameActions/nextGameSetup'
import * as Styled from "./GameWindow.styled.js";

// import { timeout } from './../../helpers/Timeout'
import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'
import Modal from './../UI/Modal/Modal'
import StartGameButton from './../UI/Buttons/StartGameButton'

import Bili_u_cudu from './../../images/Bili/bili_cudi_se.jpg'
import Bili_smeh from './../../images/Bili/bili-smeh.jpg'
import Bili_dekocentrisan from './../../images/Bili/dekocentrisan.jpg'

const GameWindow = () => {

   const store = React.useContext(StoreContext)
   const [playersMove, isPlayersMove] = useState(true)
   const [showWinner, setShowWinner] = useState('')
   const [showWhoTookLast, setShowWhoTookLast] = useState('')
   const [showWhoHasMoreCards, setShowWhoHasMoreCards] = useState('')
   const [combi, setCombi] = useState(<p></p>)
   const [upByComp, setUpByComp] = useState(0)
   const [upByPlayer, setUpByPlayer] = useState(0)
   // console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)

   let cardsValuesInCalculation = []

   const combinations = []

   const delay = (t) => {
      return new Promise((resolve) => { setTimeout(() => resolve(), t) })
   }



   // PLAYER
   const calculus = (playerCard, cardsInCalc) => {
      let combiArray = [6, 3, 6, 10, 3, 7, 4]
      let combiArrayCopy = [...combiArray]
      let combinationsIndex = []
      let combinations = []
      let playerCard = 13
      let filteredArr

      let aceCounter = 0;
      for (val of combiArray) (val === 1) && aceCounter++

      console.log('ace counter: ', aceCounter)
      console.log('combinations 1', combinations)
      console.log('combiArray 1', combiArray)

      const sameCard = (arr) => { arr.map((val, ind) => val === playerCard && combinationsIndex.push(ind) && combinations.push(val)) }

      const pair = (arr) => {
         for (let i = 0; i < arr.length; i++) {
            for (let y = 0; y < arr.length; y++) {
               if (i !== y && (arr[i] + arr[y] === playerCard)
                  && !combinationsIndex.includes(i) && !combinationsIndex.includes(y)) {
                  combinationsIndex.push(i, y)
                  combinations.push(arr[i], arr[y])
               }
            }
         }
      }

      const threeCards = (arr) => {
         for (let i = 0; i < arr.length; i++) {
            for (let y = 0; y < arr.length; y++) {
               for (let x = 0; x < arr.length; x++) {
                  if ((i !== y && i !== x && y !== x) && (arr[i] + arr[y] + arr[x] === playerCard)
                     && (!combinationsIndex.includes(i) && !combinationsIndex.includes(y)
                        && !combinationsIndex.includes(x))) {
                     combinationsIndex.push(i, y, x)
                     combinations.push(arr[i], arr[y], arr[x])
                  }
               }
            }
         }
      }

      const changeAceValue = () => {
         for (let i = 0; i < combiArray.length; i++) {
            if (!combinationsIndex.includes(i) && combiArray[i] === 1) {
               combiArray[i] = 11
               break
            }
         }
      }

      if (combiArray.length >= 3) threeCards(combiArray)
      if (combiArray.length >= 2) pair(combiArray)


      if (aceCounter > 0 && combinations.length !== combiArray.length) {
         console.log('while loop starts')
         while (aceCounter > 0) {
            changeAceValue()
            pair(combiArray)
            if (combinations.length === combiArray.length) break
            aceCounter--
         }

      }


      console.log('combinations 2', combinations, combinations.length)
      console.log('combinationsIndex 2', combinationsIndex, combinationsIndex.length)
      console.log('combiArray 2', combiArray, combiArray.length)

   }

   const checkCalculus = (playerCard, cardsInCalc) => {
      // console.log("🚀 ~ file: GameWindow.js:73 ~ checkCalculus ~ cardsInCalc", cardsInCalc)
      // console.log("🚀 ~ file: GameWindow.js:73 ~ checkCalculus ~ playerCard", playerCard)
      // IF ACE
      if (playerCard === 1 || cardsInCalc.includes(1)) {
         // console.log('ACE is THERE', playerCard, cardsInCalc.includes(1))

         calculus(playerCard, cardsInCalc)
         if (cardsValuesInCalculation.length === 0) return

         // console.log('not returned')
         if (playerCard === 1) {
            calculus(11, cardsInCalc)
            if (cardsValuesInCalculation.length === 0) return
         }

         if (cardsInCalc.includes(1)) {
            cardsInCalc.map((item, index) => {
               if (cardsValuesInCalculation.length === 0) return
               if (item === 1) {
                  // console.log('ACE IS IN CALC')
                  cardsInCalc[index] = 11
                  playerCard === 1 ? calculus(11, cardsInCalc) : calculus(playerCard, cardsInCalc)
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
      // console.log('CARD VALUE 156 ---')

      compInHandCards.map((card, i) => {
         let combi = []
         cardValue = card.calculusValue
         // console.log("🚀 ~ file: GameWindow.js ~ line 93 ~ compInHandCards.map ~ cardValue", cardValue)
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
               // console.log('CARD VALUE IS NOW 11')
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
            if (card.calculusValue === 11) {
               // console.log("🚀 ~ CARD VALE IS 11 184")
               // console.log("🚀 ~ file: GameWindow.js ~ line 184 ~ store.cardsOnTable.map ~ card.calculusValue", card.calculusValue)
               let isAceInCombi = false
               let isAceOnTable = false

               combi.length && combi.map(combiCard => { if (combiCard.calculusValue === 1) { isAceInCombi = true } })
               store.cardsOnTable.map(tableCard => { if (tableCard.calculusValue === 1) { isAceOnTable = true } })

               if (!isAceInCombi && isAceOnTable) {

                  console.log("🚀 ~ 194 TAKEING ACE ====>>>>>")
                  store.cardsOnTable.map(el => el.calculusValue === 1 && store.cardsOnTable.find(ace => ace.id === el.id && combi.push(ace)))

               }

               // console.log('this is COMBI from ACE 199 combi=', combi)

            }

            combinations.push(combi)
         })
      })
   }

   const showTakenCards = (combi) => {
      setCombi('')
      // console.log("🚀 ~ file: GameWindow.js ~ line 184 ~ showTakenCards ~ combi", combi)
      let card = document.getElementById(`backCardDiv-${combi[0].id}`)
      let cardContainer = document.getElementById(`cardContainer-${combi[0].id}`)
      card.classList.remove('showBack')
      cardContainer.classList.add('showCard')
      combi.map((card, i) => document.getElementById(card.id).classList.add('markedCard'))
      combi.map((card, i) => {
         // console.log("🚀 ~ file: GameWindow.js ~ line 202 ~ combi.map ~ card", card)
         // console.log("🚀 ~ file: GameWindow.js ~ line 202 ~ combi.map ~ card", card.calculusValue)
         let val = i === 0 && `${card.calculusValue} = `
         if (i === 0 && card.calculusValue === 1) { val = `11(1) = ` }
         if (combi.length - 1 !== i && i !== 0) { val = `${card.calculusValue} + ` }
         if (combi.length - 1 === i) { val = `${card.calculusValue} ` }
         if (typeof (val) === 'Object') return
         setCombi(prevState => prevState += `${val}`)
      })
   }

   const removeTakenCards = (combi) => {
      store.compCollectedCards = store.compCollectedCards.concat(combi)
      // console.log("🚀 ~ file: GameWindow.js ~ line 195 ~ removeTakenCards ~ store.compCollectedCards", store.compCollectedCards)
      store.compInHandCards = _.filter(store.compInHandCards, (e => e.id !== combi[0].id))
      store.cardsOnTable = _.difference(store.cardsOnTable, combi, combi.id)

      if (store.cardsOnTable.length === 0) {
         if (store.gameType === 'points') store.overallResultComputer += _.sumBy(combi, 'value') + 1
         store.gameResultComputer += _.sumBy(combi, 'value') + 1
         setUpByComp(_.sumBy(combi, 'value') + 1)
         store.tablaPointComputer = store.tablaPointComputer.concat('|')
      } else {
         store.gameResultComputer += _.sumBy(combi, 'value')
         setUpByComp(_.sumBy(combi, 'value'))
         if (store.gameType === 'points') store.overallResultComputer += _.sumBy(combi, 'value')
      }

      if (store.dealNumber === 4) store.whoTookLast = 'computer'
      // if (store.cardsOnTable.length === 0) { store.tablaPointComputer = store.tablaPointComputer.concat('|')}
   }

   const throwComputerCard = () => {
      let noValueCards = _.filter(store.compInHandCards, (card => card.value === 0))
      // console.log("🚀 ~ file: GameWindow.js ~ line 213 ~ throwComputerCard ~ noValueCards", noValueCards)
      let computerCardThrow
      if (noValueCards.length !== 0) {
         computerCardThrow = _.minBy(noValueCards, 'calculusValue')
      } else {
         computerCardThrow = _.minBy(store.compInHandCards, 'calculusValue')
      }

      // console.log("🚀 ~ file: GameWindow.js ~ line 215 ~ throwComputerCard ~ computerCardThrow", computerCardThrow)
      store.compInHandCards = _.filter(store.compInHandCards, (e => e.id !== computerCardThrow.id))
      store.cardsOnTable.push(computerCardThrow)
   }

   const compMove = async () => {

      isPlayersMove(false)
      // console.log("🚀 ~ file: GameWindow.js ~ line 88 ~ compMove ~ store.compInHandCards", store.compInHandCards.map(card => card.calculusValue))

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

         // console.log("🚀 line 242 ~ compMove ~ combinations[bestCombiIndex]", combinations[bestCombiIndex].map(card => card.calculusValue))

         await delay(800)
         showTakenCards(combinations[bestCombiIndex])
         await delay(1400)
         removeTakenCards(combinations[bestCombiIndex])
         // console.log("🚀 ~ file: GameWindow.js ~ line 167 ~ compMove ~ bestCombiIndex", bestCombiIndex, 'value', combiValueSum, 'length', combiLengthSum)
      } else {
         await delay(500)
         throwComputerCard()
      }

      // console.log("🚀 ~ file: GameWindow.js ~ line 89 ~ compMove ~ combinations", combinations)
      await delay(500)
      // console.log('after first await')

      // END OF GAME
      if (store.compInHandCards.length === 0 && store.playerInHandCards.length === 0) {
         // console.log('it is inside and needs to DEAL')
         if (store.fullDeck.length === 0) {

            // ************************************
            // console.log('END OF GAME !!!!!!')
            // ************************************
            store.disableNavbarButton = true

            // WHO TOOK LAST
            if (store.whoTookLast === 'player') {
               // console.log("🚀 ~ file: GameWindow.js ~ line 287 ~ compMove ~ store.whoTookLast", store.whoTookLast)
               await delay(1000)
               setShowWhoTookLast('Ти')
               await delay(4000)
               setShowWhoTookLast('')
               store.gameResultPlayer += _.sumBy(store.cardsOnTable, 'value')
               setUpByPlayer(_.sumBy(store.cardsOnTable, 'value'))
               if (store.gameType === 'points') store.overallResultPlayer += _.sumBy(store.cardsOnTable, 'value')
               store.playerCollectedCards = store.playerCollectedCards.concat(store.cardsOnTable)
               store.cardsOnTable = []
            } else {
               // console.log("🚀 ~ file: GameWindow.js ~ line 293 ~ compMove ~ store.whoTookLast", store.whoTookLast)
               await delay(1000)
               setShowWhoTookLast('Били')
               await delay(4000)
               setShowWhoTookLast('')
               store.gameResultComputer += _.sumBy(store.cardsOnTable, 'value')
               setUpByComp(_.sumBy(store.cardsOnTable, 'value'))
               if (store.gameType === 'points') store.overallResultComputer += _.sumBy(store.cardsOnTable, 'value')
               store.compCollectedCards = store.compCollectedCards.concat(store.cardsOnTable)
               store.cardsOnTable = []
            }

            // WHO HAS MORE CARDS TAKEN
            await delay(1000)
            if (store.playerCollectedCards.length > store.compCollectedCards.length) {
               // console.log("🚀 ~ file: GameWindow.js ~ line 302 ~ compMove ~ store.compCollectedCards.length", store.compCollectedCards.length)
               // console.log("🚀 ~ file: GameWindow.js ~ line 302 ~ compMove ~ store.playerCollectedCards.length", store.playerCollectedCards.length)
               setShowWhoHasMoreCards('Ти')
               await delay(3000)
               setShowWhoHasMoreCards('')
               store.gameResultPlayer += 3
               setUpByPlayer(3)
               if (store.gameType === 'points') store.overallResultPlayer += 3
            }
            if (store.playerCollectedCards.length < store.compCollectedCards.length) {
               // console.log("🚀 ~ file: GameWindow.js ~ line 309 ~ compMove ~ store.compCollectedCards.length", store.compCollectedCards.length)
               // console.log("🚀 ~ file: GameWindow.js ~ line 309 ~ compMove ~ store.playerCollectedCards.length", store.playerCollectedCards.length)
               setShowWhoHasMoreCards('Били')
               await delay(3000)
               setShowWhoHasMoreCards('')
               store.gameResultComputer += 3
               setUpByComp(3)
               if (store.gameType === 'points') store.overallResultComputer += 3
            }
            if (store.playerCollectedCards.length === store.compCollectedCards.length) {
               // console.log("🚀 ~ file: GameWindow.js ~ line 309 ~ compMove ~ store.compCollectedCards.length", store.compCollectedCards.length)
               // console.log("🚀 ~ file: GameWindow.js ~ line 309 ~ compMove ~ store.playerCollectedCards.length", store.playerCollectedCards.length)
               setShowWhoHasMoreCards('Нико. Обоје имате исти број узетих карата')
               await delay(3000)
               setShowWhoHasMoreCards('')


            }

            store.disableNavbarButton = false
            await delay(500)

            if (store.gameType === 'games') {
               // store.gameResultPlayer = 1
               // store.gameResultComputer = 1
               if (store.gameResultComputer > store.gameResultPlayer) { store.overallResultComputer += 1 }
               if (store.gameResultPlayer > store.gameResultComputer) { store.overallResultPlayer += 1 }
               if (store.gameResultPlayer === store.gameResultComputer) {
                  // console.log('IT IS A TIE - GAMES!!!')
                  await delay(1500)
                  store.dealNumber = 1
                  store.gameResultComputer = 0
                  store.gameResultPlayer = 0
                  store.tablaPointComputer = []
                  store.tablaPointPlayer = []
                  store.compCollectedCards = []
                  store.playerCollectedCards = []
                  // console.log('new game setup !!!!!!')
                  setShowWinner('game tie')
                  // await delay(5000)
                  nextGameSetup(store)

                  isPlayersMove(true)
                  return
               }
            }

            //  THIS IS GAME WITH POINTS
            if ((store.gameType === 'points') && +store.gameNumber + 1 > +store.gamesToPlay) {
               // console.log('DECLARE A WINNER')

               if (store.overallResultPlayer > store.overallResultComputer) {
                  // console.log('DECLARE PLAYER AS A WINNER')
                  setShowWinner('player')
                  // newGameSetup(store)
                  return
               }
               if (store.overallResultComputer > store.overallResultPlayer) {
                  // console.log('DECLARE COMPUTER AS A WINNER')
                  setShowWinner('computer')
                  // newGameSetup(store)
                  return
               }

               if (store.overallResultComputer === store.overallResultPlayer) {
                  // console.log('IT IS A TIE !')
                  setShowWinner('tie')
                  return
                  // newGameSetup(store)
               }
            }
            else if (store.gameType === 'points') {
               store.gameNumber = +store.gameNumber + 1 + ''
            }
            //  THIS IS GAME WITH GAMES
            else {
               if (store.overallResultPlayer === +store.gamesToPlay) {
                  // console.log('DECLARE PLAYER AS A WINNER')
                  setShowWinner('player')
                  // newGameSetup(store)
                  return
               }
               if (store.overallResultComputer === +store.gamesToPlay) {
                  // console.log('DECLARE COMPUTER AS A WINNER')
                  setShowWinner('computer')
                  // newGameSetup(store)
                  return
               }
               if (store.overallResultComputer < +store.gamesToPlay && store.overallResultPlayer < +store.gamesToPlay) {
                  store.gameNumber = +store.gameNumber + 1 + ''
               }
            }

            // console.log('END OF GAME cleanup !!!!!!')
            store.dealNumber = 1
            store.gameResultComputer = 0
            store.gameResultPlayer = 0
            store.tablaPointComputer = []
            store.tablaPointPlayer = []
            store.compCollectedCards = []
            store.playerCollectedCards = []


            // console.log('new game setup !!!!!!')

            nextGameSetup(store)
         } else {
            // console.log('newHandDeal')
            store.dealNumber += 1
            newHandDeal(store)

         }
      }

      isPlayersMove(true)
   }

   const playerCardClickHandler = (card, id, playerCard) => {

      if (!playersMove) return

      // THROW CARD - NO CALC
      if (store.cardsInCalculation.length === 0) {
         // console.log('THROW PLAYER CARD')

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
            setUpByPlayer(_.sumBy(store.cardsInCalculation, 'value') + card.value + 1)
            if (store.gameType === 'points') store.overallResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value + 1
            store.tablaPointPlayer = store.tablaPointPlayer.concat('|')
         } else {
            store.gameResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value
            setUpByPlayer(_.sumBy(store.cardsInCalculation, 'value') + card.value)
            if (store.gameType === 'points') store.overallResultPlayer += _.sumBy(store.cardsInCalculation, 'value') + card.value
         }
         if (store.dealNumber === 4) store.whoTookLast = 'player'


         store.cardsInCalculation = []
         // console.log('clear cardsInCalc array')

      } else {
         // WRONG CALCULATED CARDS
         // console.log('player calc is WRONG!')
         return
      }


      compMove()

   }


   return (
      <Styled.GameWindow>
         {/* <Modal>
                  <h2> Ко је последњи узео карте?</h2>
                  <h1>test</h1>
                  <div>
                     { <h2>Браво! Ти узимаш остале карте на столу!</h2>}
                     { <h2>Били узима остале карте на столу!</h2>}
                  </div>
               </Modal> */}

         {showWinner === 'computer' &&
            <Modal>
               <h1> _ПОРАЗ_</h1>
               <img
                  alt="opponent avatar"
                  src={Bili_smeh}
               />
               <div>
                  <h2>Такав је пос'o, ни ја не волим да ГУБИМ!</h2>

               </div>
               <StartGameButton action={() => { store.startWindow = true }} label={'Реванш!'} />
            </Modal>
         }
         {showWinner === 'tie' &&
            <Modal>
               <h1> -НЕРЕШЕНО-</h1>
               <img
                  alt="opponent avatar"
                  src={Bili_dekocentrisan}
               />
               <div>
                  <h2> Нисам гледао Лаки, ајд опет! </h2>
               </div>
               <StartGameButton action={() => { store.startWindow = true }} label={'Реванш!'} />
            </Modal>
         }
         {showWinner === 'game tie' &&
            <Modal>
               <h1> -НЕРЕШЕНО-</h1>
               <img
                  alt="opponent avatar"
                  src={Bili_dekocentrisan}
               />
               <div>
                  <h2> Нисам гледао Лаки, ајд опет! </h2>
               </div>
               <StartGameButton action={() => setShowWinner('reset')} label={'Идемо поново!'} />
            </Modal>
         }
         {showWinner === 'player' &&
            <Modal>
               <h1>ПОБЕДА !!!</h1>

               <img
                  alt="opponent avatar"
                  src={Bili_u_cudu}
               />
               <div>
                  <h2> Ајде !!!</h2>
               </div>
               <StartGameButton action={() => { store.startWindow = true }} label={'Реванш!'} />
            </Modal>
         }
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
                                       className={`biliCard backCard-${index + 1}`}
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
                  <div className={'opponentTalkCloudWrapper'}>
                     <div className={'opponentAvatarWrapper'}>
                        <Avatar small={true}></Avatar>
                     </div>
                     <TalkCloud small={true}></TalkCloud>
                  </div>
               </div>
               <div className={'opponentFieldBuffer'}></div>
            </div>

            {/* {combi} */}
            <Playground
               playersMove={playersMove}
               combi={combi}
               showWhoTookLast={showWhoTookLast}
               showWhoHasMoreCards={showWhoHasMoreCards}
               upByComp={upByComp}
               upByPlayer={upByPlayer}
            />

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
