import React from 'react';
import * as Styled from "./Playground.styled.js";
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'
import Card from "./../../UI/PlayingCard/Card";
import Scoreboard from './Scoreboard.js';
import ModalPlayground from './../../UI/Modal/ModalPlayground';

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
            // console.log('it spliced')

         } else {

            document.getElementById(id).classList.add('markedCard')
            store.cardsInCalculation.push(card)

            // console.log('it pushed')

         }
      }
      // console.log("🚀 ~ file: Playground.js ~ line 9 ~ Playground ~ store", store.cardsInCalculation)

   }

   return (
      <Styled.Playground>

         {/* TABLE */}

         <div className={"playgroundCardsWrapper"}>

            {props.showWhoTookLast &&
               <ModalPlayground>
                  <h2> Ко је последњи узео карте?</h2>
                  <h1>{props.showWhoTookLast}</h1>
                  <div>
                     {props.showWhoTookLast === "Ти" && <h2>Браво! Ти узимаш остале карте на столу!</h2>}
                     {props.showWhoTookLast === "Били" && <h2>Били узима остале карте на столу!</h2>}
                  </div>
               </ModalPlayground>
            }
            {props.showWhoHasMoreCards &&
               <ModalPlayground>
                  <h2> Ко је узео највише карата?</h2>
                  <h1>{props.showWhoHasMoreCards}</h1>
                  <div>
                     {props.showWhoHasMoreCards === "Ти" && <div><h2>Браво! Добијаш додатна 3 поена!</h2></div>}
                     {props.showWhoHasMoreCards === "Били" && <h2>Били добија додатна 3 поена!</h2>}
                  </div>
               </ModalPlayground>
            }
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

         <Scoreboard combi={props.combi} upByComp={props.upByComp} upByPlayer={props.upByPlayer}/>

      </Styled.Playground>

   );
};

export default Playground;
