import React from 'react';
import * as Styled from "./Playground.styled.js";
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'
import Card from "./../../UI/PlayingCard/Card";
import Scoreboard from './Scoreboard.js';

const Playground = (props) => {

   const store = React.useContext(StoreContext)

   const cardClickHandler = (id) => {

      if (!props.playersMove) return

      const card = store.cardsOnTable.find(x => x.id === id);
      
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
      // console.log("🚀 ~ file: Playground.js ~ line 9 ~ Playground ~ store", store.cardsInCalculation)

   }

   return (
      <Styled.Playground>

            {/* TABLE */}

         <div className={"playgroundCardsWrapper"}>
            <div className={"cardsWrapper"}>

               {
                  useObserver(() =>

                     store.cardsOnTable.map((card, index) =>

                        <Card
                           key={card.id}
                           className={"playgroundCard"}
                           id={card.id}
                           onClick={() => cardClickHandler(card.id)}
                           suits={card.suit}
                           ranks={card.rank} />

                     )
                  )
               }

            </div>
         </div>

         <Scoreboard combi={props.combi}/>

      </Styled.Playground>
      
   );
};

export default Playground;
