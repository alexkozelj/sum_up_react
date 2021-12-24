   import * as Styled from './StartGameButton.styled.js';

   const StartGameButton = (props) => {
      
      const startGameHandler = () => {
         console.log('this is from button')
         props.startGame()
      }

      return (
         <Styled.StartGameButton>
            <div className="wrapper">
               <button onClick={startGameHandler}>
                  <span></span>
                  <span></span>
                  Почни игру!
                  <span></span>
                  <span></span>
               </button>
            </div>
         </Styled.StartGameButton>
      );
   }

   export default StartGameButton;
