
import * as Styled from "./GameWindow.styled.js";
import Card from './../UI/PlayingCard/Card'
import Avatar from './../UI/Avatar/AvatarGame'
import TalkCloud from './../UI/TalkCloud/TalkCloud'

const GameWindow = () => {
   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'playgroundWrapper'}>

            <div className={'opponentField'}>
               <div className={'opponentCardsWrapper'}>
                  <div className={'opponentCard-1'}>
                     <Card className={''} />
                  </div>
                  <div className={'opponentCard-2'}>
                     <Card className={''} />
                  </div>
                  <div className={'opponentCard-3'}>
                     <Card className={''} />
                  </div>
                  <div className={'opponentCard-4'}>
                     <Card className={''} />
                  </div>
                  <div className={'opponentCard-5'}>
                     <Card className={''} />
                  </div>
                  <div className={'opponentCard-6'}>
                     <Card className={''} />
                  </div>
               </div>

               <Avatar small={true}></Avatar>
               <TalkCloud small={true}></TalkCloud>



            </div>

            <div className={'playground'}>


               <div className={'tableCardsWrapper'}>
                  <div></div>
               </div>

               <div className={'scoreWrapper'}>
                  <div></div>
               </div>

            </div>

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
