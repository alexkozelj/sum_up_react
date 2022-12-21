
import React from "react";
import * as Styled from './StartGameButton.styled.js';


const StartGameButton = (props) => {

   const buttonHandler = () => {
      // console.log('this is from button')
      props.action()
   }

   return (
      <Styled.StartGameButton>
         <div className="wrapper">
            <button onClick={buttonHandler}>
               <span></span>
               <span></span>
               {props.label}
               <span></span>
               <span></span>
            </button>
         </div>
      </Styled.StartGameButton>
   );
}

export default StartGameButton;
