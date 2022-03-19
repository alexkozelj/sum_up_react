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
   // const store = React.useContext(StoreContext)
   // console.log("🚀 ~ file: GameWindow.js ~ line 12 ~ GameWindow ~ store", store)
   // console.log('this is store.test',store.test)
   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'gameWindowWrapper'}>

            <div className={'opponentField'}>
               <div className={'opponentFieldContainer'}>
                  <div className={'opponentCardsWrapper'}>
                     <div className={'opponentCardsPositioner'}>
                        <div className={'opponentCard-1'}>
                           <Card className={'backCard-1'} />
                        </div>
                        <div className={'opponentCard-2'}>
                           <Card className={'backCard-2'} />
                        </div>
                        <div className={'opponentCard-3'}>
                           <Card className={'backCard-3'} />
                        </div>
                        <div className={'opponentCard-4'}>
                           <Card className={'backCard-4'} />
                        </div>
                        <div className={'opponentCard-5'}>
                           <Card className={'backCard-5'} />
                        </div>
                        <div className={'opponentCard-6'}>
                           <Card className={'backCard-6'} />
                        </div>
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

            <div className={'playerField'}>
               <div className={'playerFieldCardsWrapper'}>
                  <Card suits={'hearts'} ranks={'2'} />
                  <Card suits={'spades'} ranks={'4'} />
                  <Card suits={'diamonds'} ranks={'5'} />
                  <Card suits={'hearts'} ranks={'10'} />
                  <Card suits={'clubs'} ranks={'8'} />
                  <Card suits={'spades'} ranks={'J'} />
               </div>
               <div className={"playerFieldBuffer"}></div>
            </div>

         </div>



      </Styled.GameWindow>
   );
}

export default GameWindow;
