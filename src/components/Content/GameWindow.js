
import * as Styled from "./GameWindow.styled.js";
import Card from './../UI/PlayingCard/Card'

const GameWindow = () => {
   return (
      <Styled.GameWindow>

         {/* playground */}
         <div className={'playgroundWrapper'}>

            <div className={'opponentField'}>

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
               <Card symbol={'hearts'} value={'4'} />
               <Card symbol={'hearts'} value={'5'} />
               <Card symbol={'hearts'} value={'10'} />
               <Card symbol={'hearts'} value={'8'} />
               <Card symbol={'hearts'} value={'J'} />
            </div>

         </div>



      </Styled.GameWindow>
   );
}

export default GameWindow;
