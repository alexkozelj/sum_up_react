import React, { useState } from 'react';
// import _ from 'lodash'
import * as Styled from "./Scoreboard.styled.js";
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'
import { add } from 'lodash';


const Scoreboard = (props) => {

   const store = React.useContext(StoreContext)
   const [compScoreVal, setCompScoreValue] = useState(store.gameResultComputer)
   const [playerScoreVal, setPlayerScoreValue] = useState(store.gameResultPlayer)
   const [showCompScoreSpan, setShowCompScoreSpan] = useState(false)
   const [showPlayerScoreSpan, setShowPlayerScoreSpan] = useState(false)

   if (compScoreVal !== store.gameResultComputer) {
      setShowCompScoreSpan(true)
      setTimeout(() => { setShowCompScoreSpan(false) }, 2000)
      setCompScoreValue(store.gameResultComputer)
   }

   if (playerScoreVal !== store.gameResultPlayer) {
      setShowPlayerScoreSpan(true)
      setTimeout(() => { setShowPlayerScoreSpan(false) }, 2000)
      setPlayerScoreValue(store.gameResultPlayer)
   }

   return (

      <Styled.Scoreboard>

         {/* SCOREBOARD */}

         <div className={'combiWrapper'}>{props.combi}</div>
         <div className={"gameInfoContainer"}>
            <header className={"gameInfoHeader"}>Инфо</header>
            <div className={"gameInfo"}>Игра: {useObserver(() => store.gameNumber)}|{useObserver(() => store.gamesToPlay)}</div>
            <div className={"dealInfo"}>Дељење: {useObserver(() => store.dealNumber)}/4</div>
         </div>
         <div className={"resultContainer"}>
            <header className={"resultHeader"}>Резултат</header>

            <div className={"gameResultWrapper"}>
               <div className={"opponentScoreContainer borderRight"}>
                  <div className={"opponentName titleColor borderBottom-2"}>Били</div>
                  <div className={"opponentScore scoreColor padding-5"}>
                     {useObserver(() => store.gameResultComputer)}
                     {showCompScoreSpan && <span className={"plus-one"}>+{props.upByComp}</span>}
                  </div>

               </div>

               <div className={"playerScoreContainer"}>
                  <div className={"playerName titleColor borderBottom-2"}> Ти</div>
                  <div className={"playerScore scoreColor padding-5"}>
                     {useObserver(() => store.gameResultPlayer)}
                     {showPlayerScoreSpan && <span className={"plus-one"}>+{props.upByPlayer}</span>}
                  </div>
               </div>

            </div>

            <div className="tablaWrapper">
               <div className={"tablaTitle title"}>Tабле</div>
               <div className={"tablaFiledWrapper"}>
                  <div className={"tablaField borderRight borderBottom scoreColor"}>
                     <div className={"tabla"}>
                     {/* <span key={`tablaComp-${1}`}>|</span>
                     <span key={`tablaComp-${1}`}>|</span>
                     <span key={`tablaComp-${1}`}>|</span>
                     <span key={`tablaComp-${1}`}>|</span>
                     <span key={`tablaComp-${1}`} className={`tablaCross4`}>|</span> */}
                        {
                           useObserver(() =>
                              store.tablaPointComputer.map((tabla, index) =>
                                 (index !== 4 && index !== 9 && index !== 14) ?
                                    <span key={`tablaComp-${index}`}>{tabla}</span> :
                                    <span key={`tablaComp-${index}`} className={`tablaCross${index}`}>__</span>
                              )
                           )
                        }

                     </div>
                  </div>
                  <div className={"tablaField borderBottom scoreColor"}>
                     <div className={"tabla"}>
                        {
                           useObserver(() =>

                              store.tablaPointPlayer.map((tabla, index) =>
                                 (index !== 4 && index !== 9 && index !== 14) ?
                                    <span key={`tablaComp-${index}`}>{tabla}</span> :
                                    <span key={`tablaComp-${index}`} className={`tablaCross${index}`}>___</span>
                              )
                           )
                        }

                     </div>
                  </div>
               </div>

            </div>

            <div className={"takenCardsWrapper"}>

               <div className={"cardsSumTitle title"}>Узете карте</div>
               <div className={"cardsSumWrapper"}>
                  <div className={"cardsSumField borderRight borderBottom padding-5"}>
                     {useObserver(() => store.compCollectedCards.length)}
                  </div>
                  <div className={"cardsSumField borderBottom padding-5"}>
                     {useObserver(() => store.playerCollectedCards.length)}
                  </div>
               </div>
            </div>

            <div className={"overallResultWrapper titleColor"}>
               {store.gameType === 'games' ?
                  <div className={"overallResult "}>Укупно победа</div>
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