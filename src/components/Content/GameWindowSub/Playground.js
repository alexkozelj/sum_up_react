import React from 'react';
import * as Styled from "./Playground.styled.js";
import { StoreContext } from './../../../store/store'
import Card from "./../../UI/PlayingCard/Card";

const Playground = (props) => {

   const store = React.useContext(StoreContext)

   const cardClickHandler = (id) => {
      
      if (!props.playersMove) return

      const card = store.cardsOnTable.find(x => x.id === id);
      console.log("🚀 ~ file: Playground.js ~ line 13 ~ cardClickHandler ~ store.cardsOnTable", store.cardsOnTable)
      console.log("🚀 ~ file: Playground.js ~ line 29 ~ cardClickHandler ~ store.cardsInCalculation", store.cardsInCalculation)
      // console.log("🚀 ~ file: Playground.js ~ line 30 ~ cardClickHandler ~ card", card)
      
      if (document.getElementById(id).classList.contains('playgroundCard')) {

         if (document.getElementById(id).classList.contains('markedCard')) {
      
            const cardIndex = store.cardsInCalculation.findIndex(x => x.id === id);
            store.cardsInCalculation.splice(cardIndex, 1)
            document.getElementById(id).classList.remove('markedCard')
            console.log('it spliced')

         } else {

            document.getElementById(id).classList.add('markedCard')
            store.cardsInCalculation.push(card)
            
            console.log('it pushed')
            
         }
      }
      console.log("🚀 ~ file: Playground.js ~ line 9 ~ Playground ~ store", store.cardsInCalculation)

   }

   return (
      <Styled.Playground>
         <div className={"playgroundCardsWrapper"}>
            <div className={"cardsWrapper"}>

               {store.cardsOnTable.map((card, index) => {
                  return <Card
                     className={"playgroundCard"}
                     id={card.id}
                     onClick={() => cardClickHandler(card.id)}
                     key={card.id}
                     suits={card.suit}
                     ranks={card.rank} />
               })}

            </div>
         </div>

         <div className={"scoreboardContainer"}>
            {/* <div className={"scoreHeader"}></div> */}
            <div className={"gameInfoContainer"}>
               <header className={"gameInfoHeader"}>Инфо</header>
               <div className={"gameInfo"}>Igra: 1</div>
               <div className={"dealInfo"}>Deljenje: 2</div>
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
         </div>
      </Styled.Playground>
   );
};

export default Playground;
