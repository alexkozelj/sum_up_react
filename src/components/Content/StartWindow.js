
import * as Styled from "./StartWindow.styled.js";
import StartGameButton from '../UI/Buttons/StartGameButton'
import Avatar from '../UI/Avatar/Avatar'

const StartWindow = (props) => {
   const startGameHandler = () => {
      console.log('test')
      props.windowHandler()
   }

   return (
      <Styled.StartWindow>
         <h1>Твој Противник:</h1>
         <Avatar></Avatar>
         <div> Били Питон каже: <br/><br/> <i>Пробај Лаки!</i></div>
         <StartGameButton startGame={startGameHandler}></StartGameButton>
      </Styled.StartWindow>
   );
}

export default StartWindow;
