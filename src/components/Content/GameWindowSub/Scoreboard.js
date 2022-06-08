import React from 'react';
import _ from 'lodash'
import * as Styled from "./Scoreboard.styled.js";
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'


const Scoreboard = (props) => {

   const store = React.useContext(StoreContext)

   // let { 
   //    gameNumber,
   //    dealNumber,
   //    gameResultComputer,
   //    gameResultPlayer,
   //    tablaPointComputer,
   //    tablaPointPlayer, 
   //    overallResultComputer,
   //    overallResultPlayer,
   // } = store
   // console.log("🚀 ~ file: Scoreboard.js ~ line 12 ~ Scoreboard ~ gameNumber", gameNumber)
   // gameNumber = 3
   // let gameResultComputer = store.compCollectedCards.reduce((prev, current) => {
   //    return prev + current.value
   // }, 0)
   // let gameResultComputer = _.sumBy(store.compCollectedCards, 'value')
   // let gameResultPlayer = _.sumBy(store.playerCollectedCards, 'value')
   // let takenCardsComputer = store.compCollectedCards.length
   // let takenCardsPlayer = store.playerCollectedCards.length
   // console.log("🚀 ~ file: Scoreboard.js ~ line 22 ~ Scoreboard ~ store.playerCollectedCards", store.playerCollectedCards)
   // console.log("🚀 ~ file: Scoreboard.js ~ line 22 ~ Scoreboard ~ takenCardsPlayer", takenCardsPlayer)
   // console.log("🚀 ~ file: Scoreboard.js ~ line 21 ~ Scoreboard ~ store.compCollectedCards", store.compCollectedCards?.map(card => card.calculusValue))
   // console.log("🚀 ~ file: Scoreboard.js ~ line 22 ~ Scoreboard ~ store.playerCollectedCards", store.playerCollectedCards?.map(card => card.calculusValue))
   // console.log("🚀 ~ file: Scoreboard.js ~ line 19 ~ Scoreboard ~ store.compCollectedCards", store.compCollectedCards)
   // console.log("🚀 ~ file: Scoreboard.js ~ line 17 ~ gameResultComputer ~ gameResultComputer", gameResultComputer)


   return (

      <Styled.Scoreboard>

         {/* SCOREBOARD */}

         <div className={'combiWrapper'}>{props.combi}</div>
         <div className={"gameInfoContainer"}>
            <header className={"gameInfoHeader"}>Инфо</header>
            <div className={"gameInfo"}>Igra: {useObserver(() => store.gameNumber)}</div>
            <div className={"dealInfo"}>Deljenje: {useObserver(() => store.dealNumber)}/4</div>
         </div>
         <div className={"resultContainer"}>
            <header className={"resultHeader"}>Резултат</header>

            <div className={"resultWrapper"}>
               <div className={"opponentScoreContainer"}>
                  <div className={"opponentName"}>Били</div>
                  <div className={"opponentScore"}>{useObserver(() => store.gameResultComputer)}</div>
                  <div className={"tablaWrapper"}>
                     <div className={"tabla"}>
                        {
                           useObserver(() =>

                              store.tablaPointComputer.map((tabla, index) =>
                              ( index !== 4 && index !== 9 && index !== 14) ?
                                    <span key={`tablaComp-${index}`}>{tabla}</span> :
                                       <span key={`tablaComp-${index}`} className={`tablaCross${index}`}>___</span>
                              )
                           )
                        }

                     </div>
                  </div>
                  <div className={"cardsSumWrapper"}>
                     <div className={"sumTitle"}>karte:</div>
                     <div className={"cardsSum"}>{useObserver(() => store.compCollectedCards.length)}</div>
                  </div>
               </div>

               <div className={"playerScoreContainer"}>
                  <div className={"playerName"}> Лаки</div>
                  <div className={"playerScore"}>{useObserver(() => store.gameResultPlayer)}</div>
                  <div className={"tablaWrapper"}>
                     <div className={"tabla"}>
                     {
                           useObserver(() =>

                              store.tablaPointPlayer.map((tabla, index) =>
                              ( index !== 4 && index !== 9 && index !== 14) ?
                                    <span key={`tablaComp-${index}`}>{tabla}</span> :
                                       <span key={`tablaComp-${index}`} className={`tablaCross${index}`}>___</span>
                              )
                           )
                        }
                        
                     </div>
                  </div>
                  <div className={"cardsSumWrapper"}>
                     <div className={"sumTitle"}>karte:</div>
                     <div className={"cardsSum"}>{useObserver(() => store.playerCollectedCards.length)}</div>
                  </div>
               </div>

            </div>

            <div className={"overallResultWrapper"}>
            {store.gameType === 'games' ? 
               <div className={"overallResult"}>Укупно победа</div> 
               :
               <div className={"overallResult"}>Укупно поена</div> 
            
            }
            </div>
            <div className={"totalResultWrapper"}>
               <div className={"totalResultOpponent"}>{useObserver(() => store.overallResultComputer)}</div>
               <div className={"totalResultPlayer"}>{useObserver(() => store.overallResultPlayer)}</div>
            </div>
         </div>


      </Styled.Scoreboard>

   );
};

export default Scoreboard;


// <span key={`tablaComp-`}>|</span>
{/* <span key={`tablaComp-`}>|</span>
<span key={`tablaComp-`}>|</span>
<span key={`tablaComp-`}>|</span>
<span key={`tablaComp-`} className={`tablaCross4`}>___</span> */}