import React from 'react';
import * as Styled from "./Scoreboard.styled.js";
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'


const Scoreboard = (props) => {

   const store = React.useContext(StoreContext)

   let {gameNumber, dealNumber, overallResultComputer, overallResultPlayer} = store
   console.log("🚀 ~ file: Scoreboard.js ~ line 12 ~ Scoreboard ~ gameNumber", gameNumber)
   gameNumber = 3

   return (

      <Styled.Scoreboard>

               {/* SCOREBOARD */}

         
            <div className={"gameInfoContainer"}>
               <header className={"gameInfoHeader"}>Инфо</header>
               <div className={"gameInfo"}>Igra: {useObserver(() => gameNumber)}</div>
               <div className={"dealInfo"}>Deljenje: {useObserver(() => dealNumber)}/4</div>
            </div>
            <div className={"resultContainer"}>
               <header className={"resultHeader"}>Резултат</header>

               <div className={"resultWrapper"}>
                  <div className={"opponentScoreContainer"}>
                     <div className={"opponentName"}>Били</div>
                     <div className={"opponentScore"}>13</div>
                     <div className={"tablaWrapper"}>
                        <div className={"tabla"}>
                           ||||
                           ||||
                           ||||
                           ||||
                           {/* <div className={"tablaCross"}>___</div> */}
                        </div>
                     </div>
                     <div className={"cardsSumWrapper"}>
                        <div className={"sumTitle"}>karte</div>
                        <div className={"cardsSum"}>16</div>
                     </div>
                  </div>

                  <div className={"playerScoreContainer"}>
                     <div className={"playerName"}> Лаки</div>
                     <div className={"playerScore"}>14</div>
                     <div className={"tablaWrapper"}>
                        <div className={"tabla"}>
                           ||||
                           <div className={"tablaCross"}>___</div>
                        </div>
                     </div>
                     <div className={"cardsSumWrapper"}>
                        <div className={"sumTitle"}>karte</div>
                        <div className={"cardsSum"}>21</div>
                     </div>
                  </div>

               </div>

               <div className={"overallResultWrapper"}>
                  <div className={"overallResult"}>Укупан резултат</div>
               </div>
               <div className={"totalResultWrapper"}>
                  <div className={"totalResultOpponent"}>33</div>
                  <div className={"totalResultPlayer"}>44</div>
               </div>
            </div>
         

      </Styled.Scoreboard>

   );
};

export default Scoreboard;
