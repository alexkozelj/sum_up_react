import React from 'react'
import useCreateDeck from '../../hooks/use-create-deck'
import { StoreContext } from './../../store/store'
import * as Styled from "./GameWindow.styled.js";

import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {
   // const newDeck = useCreateDeck()
   // console.log("🚀 ~ file: GameWindow.js ~ line 13 ~ GameWindow ~ newDeck", newDeck)
   const store = React.useContext(StoreContext)
   console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)
   // console.log('this is store.test',store.test)
   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'gameWindowWrapper'}>
            {/* OPPONENT AREA */}
            <div className={'opponentField'}>
               <div className={'opponentFieldContainer'}>
                  <div className={'opponentCardsWrapper'}>
                     <div className={'opponentCardsPositioner'}>

                        {store.compInHandCards[0].map((card, index) => {
                           return <div key={card[0].id} className={`opponentCard-${index + 1}`}>
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

            <Playground />

            {/* PLAYER AREA */}
            <div className={'playerField'}>
               <div className={'playerFieldCardsWrapper'}>

                  {store.playerInHandCards[0].map((card, index) => {
                     return <Card key={card[0].id} suits={card[0].suit} ranks={card[0].rank} />
                  })}
                  
               </div>
               <div className={"playerFieldBuffer"}></div>
            </div>
         </div>

      </Styled.GameWindow>
   );
}

export default GameWindow;
