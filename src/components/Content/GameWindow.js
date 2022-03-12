
import * as Styled from "./GameWindow.styled.js";
import Card from './../UI/PlayingCard/Card'
import Playground from './GameWindowSub/Playground'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {
   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'gameWindowWrapper'}>

            <div className={'opponentField'}>
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
            
            <Playground/>

            <div className={'playerField'}>
               <Card symbol={'hearts'} value={'2'} />
               <Card symbol={'spades'} value={'4'} />
               <Card symbol={'hearts'} value={'5'} />
               <Card symbol={'hearts'} value={'10'} />
               <Card symbol={'hearts'} value={'8'} />
               <Card symbol={'spades'} value={'J'} />
            </div>

         </div>



      </Styled.GameWindow>
   );
}

export default GameWindow;
